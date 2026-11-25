import { CAMPAIGNS } from "./campaign-catalogue.js";

import { EVENTS } from "./campaigns.js";
import { MONTHS } from "./golarion-calendar.js";

function dateKey({ year, month, day }) {
  return year * 10000 + month * 100 + day;
}

function formatDate({ year, month, day }) {
  return day + " " + MONTHS[month - 1] + " " + year;
}

const grid = document.getElementById("campaign-grid");

for (const campaign of CAMPAIGNS.filter(entry => !entry.hiddenFromSelection)) {
  const item = document.createElement("li");
  const link = document.createElement("a");
  link.className = "campaign-card";
  link.style.setProperty("--campaign-accent", "var(--" + campaign.id + ")");
  link.href = "index.html?campaign=" + encodeURIComponent(campaign.id);

  const symbol = document.createElement("span");
  symbol.className = "campaign-symbol fa fa-" + campaign.icon;
  symbol.setAttribute("aria-hidden", "true");

  const name = document.createElement("span");
  name.className = "campaign-name";
  name.textContent = campaign.name;
  link.append(symbol, name);

  const footer = document.createElement("span");
  footer.className = "campaign-card-footer";

  const events = EVENTS.filter(event => event.tag === campaign.id);
  events.sort((first, second) => dateKey(first) - dateKey(second));
  if (events.length) {
    const range = document.createElement("span");
    range.className = "campaign-dates";
    range.title = "Recorded timeline range";
    const start = formatDate(events[0]);
    const end = formatDate(events.at(-1));
    range.textContent = campaign.status === "In progress"
      ? start + " –"
      : start === end ? start : start + " – " + end;
    footer.append(range);
  }

  if (campaign.status) {
    const status = document.createElement("span");
    status.className = "campaign-status";
    status.dataset.status = campaign.status;
    status.title = campaign.status;
    status.setAttribute("role", "img");
    status.setAttribute("aria-label", campaign.status);
    footer.append(status);
  }

  if (footer.childElementCount) {
    link.append(footer);
  }

  item.append(link);
  grid.append(item);
}
