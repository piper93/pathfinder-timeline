import { CHARACTERS } from "./campaigns.js";
import { PLAYER_CHARACTERS } from "./player-character-data.js";

export function playerCharactersFor(campaign) {
  return PLAYER_CHARACTERS.filter(character => character.campaign === campaign)
    .sort((first, second) => first.name.localeCompare(second.name, "en"));
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

export function showPlayerCharacters(campaign, characters) {
  const panel = document.getElementById("player-character-panel");
  document.querySelector(".timeline-panel").hidden = true;
  panel.hidden = false;
  document.title = "Player Characters | " + campaign.name;

  const heading = element("h2", "npc-heading");
  const icon = element("span", "fa fa-users");
  icon.setAttribute("aria-hidden", "true");
  heading.append(icon, "Player Characters");
  panel.append(heading);

  const grid = element("div", "player-character-grid");
  for (const character of characters) {
    const card = element("article", "player-character-card");
    const portrait = character.portrait ?? CHARACTERS.find(entry =>
      entry.tag === campaign.id && entry.name === character.rosterName
    )?.image;
    if (portrait) {
      const image = element("img", "player-character-portrait");
      image.src = portrait;
      image.alt = "";
      const frame = element("div", "player-character-frame");
      frame.append(image);
      card.append(frame);
    }

    const content = element("div", "player-character-content");
    content.append(element("h3", "", character.name));
    const traits = [character.ancestry, character.class].filter(Boolean);
    if (traits.length) content.append(element("p", "player-character-traits", traits.join(" | ")));
    if (character.html) {
      const biography = element("div", "player-character-bio");
      biography.innerHTML = character.html;
      content.append(biography);
    }
    card.append(content);
    grid.append(card);
  }

  panel.append(grid);
}
