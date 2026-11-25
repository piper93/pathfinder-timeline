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

export function showCampaignHub(campaign, events) {
  const header = document.getElementById("hub-header");
  const sidebar = document.getElementById("hub-sidebar");
  const details = document.getElementById("hub-details");
  const entries = [
    ["Golarion · recorded timeline", formatGolarionRange(events, campaign.status === "In progress"), "calendar"],
    ["Real-world dates", formatRealRange(campaign), "globe"],
    ["Status", campaign.status, "circle"]
  ];

  document.body.classList.add("campaign-hub");
  document.title = campaign.name + " | Golarion Timeline";
  document.querySelector('.archive-nav a[href="campaigns.html"]').classList.add("archive-section-active");
  document.getElementById("hub-name").textContent = campaign.name;
  document.getElementById("hub-symbol").className = "fa fa-" + campaign.icon;
  header.style.setProperty("--campaign-accent", "var(--" + campaign.id + ")");
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
  sidebar.hidden = details.childElementCount === 0;
}
