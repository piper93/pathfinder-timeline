import { NPCS } from "./npc-data.js";
import { sessionUrl } from "./session-notes.js";

export function npcsFor(campaign) {
  return NPCS.filter(npc => npc.campaign === campaign);
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function icon(name) {
  const node = element("span", "fa fa-" + name);
  node.setAttribute("aria-hidden", "true");
  return node;
}

function badge(value, placement) {
  const node = element("span", "npc-badge " + placement, value);
  node.dataset.status = value.toLowerCase();
  return node;
}

export function showImportantNpcs(campaign, npcs, sessions) {
  const panel = document.getElementById("npc-panel");
  document.querySelector(".timeline-panel").hidden = true;
  panel.hidden = false;
  document.title = "Important NPCs | " + campaign.name;

  const heading = element("h2", "npc-heading");
  heading.append(icon("users"), "Important NPCs");
  panel.append(heading);

  const grid = element("div", "npc-grid");
  for (const npc of npcs) {
    const card = element("article", "npc-card");
    const header = element("header", "npc-card-header");
    if (npc.portrait) {
      const portrait = element("img", "npc-portrait");
      portrait.src = npc.portrait;
      portrait.alt = "";
      header.append(portrait);
    } else {
      header.append(icon(npc.icon ?? "user"));
    }
    const identity = element("div", "npc-identity");
    identity.append(element("h3", "", npc.name));
    if (npc.descriptor) identity.append(element("p", "npc-descriptor", npc.descriptor));
    if (npc.affiliation) identity.append(element("p", "", npc.affiliation));
    header.append(identity);
    if (npc.lifeStatus?.toLowerCase() === "deceased") header.append(badge(npc.lifeStatus, "npc-life-status"));
    card.append(header);

    if (npc.html) {
      const description = element("div", "npc-description");
      description.innerHTML = npc.html;
      card.append(description);
    }

    const related = sessions.filter(session => session.relatedNpcIds?.includes(npc.id));
    if (related.length) {
      const footer = element("footer", "npc-related");
      footer.append(icon("calendar"), "Related Sessions:");
      for (const session of related) {
        const number = String(session.order).padStart(2, "0");
        const link = element("a", "", number);
        link.href = sessionUrl(campaign.id, session);
        link.setAttribute("aria-label", "Session " + number + ": " + session.title);
        footer.append(link);
      }
      card.append(footer);
    }
    if (npc.relationship) card.append(badge(npc.relationship, "npc-relationship"));
    grid.append(card);
  }
  panel.append(grid);
}
