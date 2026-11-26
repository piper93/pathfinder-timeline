import { formatGolarionRange } from "./golarion-calendar.js";

const realDateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC"
});

function formatRealRange({ realStart, realEnd, status }) {
  if (!realStart) return "";
  const start = realDateFormat.format(new Date(realStart));
  if (status === "In progress") return start + " –";
  if (!realEnd || realStart === realEnd) return start;
  return start + " – " + realDateFormat.format(new Date(realEnd));
}

export async function setTimelineFavicon(symbol) {
  if (!symbol || !document.fonts) return;
  const font = "42px FontAwesome";
  try {
    const fonts = await document.fonts.load(font);
    if (!fonts.length) return;
  } catch {
    return;
  }

  const content = getComputedStyle(symbol, "::before").content;
  if (!/^".+"$/.test(content)) return;

  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 64;
  const context = canvas.getContext("2d");
  if (!context) return;
  context.fillStyle = "#181f26";
  context.fillRect(0, 0, 64, 64);
  context.fillStyle = "#f5f6fa";
  context.font = font;
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(content.slice(1, -1), 32, 33);

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/png";
  favicon.href = canvas.toDataURL("image/png");
  document.head.append(favicon);
}

export function showCampaignHub(campaign, events, sectionUrls, activeSection) {
  const header = document.getElementById("hub-header");
  const sidebar = document.getElementById("hub-sidebar");
  const details = document.getElementById("hub-details");
  const entries = [
    [(campaign.calendar === "IC" ? "Imperial Calendar" : "Golarion") + " · recorded timeline", formatGolarionRange(events, campaign.status === "In progress", campaign.calendar), "calendar"],
    ["Real-world dates", formatRealRange(campaign), "globe"],
    ["Status", campaign.status, "circle"]
  ];

  document.body.classList.add("campaign-hub");
  document.title = campaign.name + " | Golarion Timeline";
  document.querySelector('.archive-nav a[href="campaigns.html"]').classList.add("archive-section-active");
  document.getElementById("hub-name").textContent = campaign.name;
  const campaignSymbol = document.getElementById("hub-symbol");
  campaignSymbol.className = "fa fa-" + campaign.icon;
  void setTimelineFavicon(campaignSymbol);
  document.body.style.setProperty("--campaign-accent", "var(--" + campaign.id + ")");
  header.hidden = false;

  for (const [label, value, icon] of entries) {
    if (!value) continue;
    const term = document.createElement("dt");
    const description = document.createElement("dd");
    const symbol = document.createElement("span");
    symbol.className = "fa fa-" + icon;
    symbol.setAttribute("aria-hidden", "true");
    if (label === "Status") symbol.dataset.status = value;
    term.className = "hub-detail-icon";
    const accessibleLabel = document.createElement("span");
    accessibleLabel.className = "hub-detail-label";
    accessibleLabel.textContent = label;
    term.append(symbol, accessibleLabel);
    description.className = "hub-detail-value";
    description.textContent = value === "In progress" ? "In Progress" : value;
    details.append(term, description);
  }
  if (campaign.sections?.length) {
    const menu = document.getElementById("hub-sections");
    const list = menu.querySelector("ul");
    const timeline = list.querySelector("a");
    timeline.href = "index.html?campaign=" + encodeURIComponent(campaign.id);
    if (activeSection) timeline.removeAttribute("aria-current");

    for (const section of campaign.sections) {
      const item = document.createElement("li");
      const icon = document.createElement("span");
      icon.className = "fa fa-" + section.icon;
      icon.setAttribute("aria-hidden", "true");
      if (sectionUrls[section.id]) {
        const link = document.createElement("a");
        link.href = sectionUrls[section.id];
        link.append(icon, section.name);
        if (activeSection === section.id) link.setAttribute("aria-current", "location");
        item.append(link);
        list.append(item);
        continue;
      }
      const badge = document.createElement("span");
      badge.className = "hub-section-wip";
      badge.textContent = "WIP";
      item.append(icon, section.name, badge);
      list.append(item);
    }

    menu.hidden = false;
  }
  sidebar.hidden = details.childElementCount === 0 && !campaign.sections?.length;
}
