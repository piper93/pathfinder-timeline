import { MONTHS } from "./golarion-calendar.js";
import { SESSIONS } from "./session-data.js";

const arMonths = [
  "Abadius", "Calistril", "Pharast", "Gozran", "Desnus", "Sarenith",
  "Erastus", "Arodus", "Rova", "Lamashan", "Neth", "Kuthona"
];
const realDateFormat = new Intl.DateTimeFormat("en-GB", { dateStyle: "long", timeZone: "UTC" });

function formatGameRange(start, end, compact) {
  if (!start) return "";
  const format = date => compact
    ? date.day + " " + MONTHS[date.month - 1] + " " + date.year
    : date.day + " " + arMonths[date.month - 1] + ", " + date.year + " AR";
  if (!end || format(start) === format(end)) return format(start);
  return start.year === end.year && start.month === end.month
    ? start.day + (compact ? "-" : "–") + format(end)
    : format(start) + " – " + format(end);
}

export function sessionsFor(campaign) {
  return SESSIONS.filter(session => session.campaign === campaign);
}

export function sessionUrl(campaign, session) {
  const query = new URLSearchParams({ campaign, view: "sessions" });
  if (session) query.set("session", session.id);
  return "index.html?" + query;
}

function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}

function link(text, href, className) {
  const node = element("a", text, className);
  node.href = href;
  return node;
}

function sessionNumber(session) {
  return "Session " + String(session.order).padStart(2, "0");
}

function dateIcon(name) {
  const icon = element("span", "", "fa fa-" + name);
  icon.setAttribute("aria-hidden", "true");
  return icon;
}

const shortRealDateFormat = new Intl.DateTimeFormat("en-GB", {
  day: "numeric", month: "short", year: "numeric", timeZone: "UTC"
});

function dates(session, compact = false) {
  const metadata = element("div", "", "session-dates");
  if (session.realDate) {
    const date = new Date(session.realDate);
    const played = element("time", compact
      ? shortRealDateFormat.format(date).toUpperCase()
      : "Played: " + realDateFormat.format(date));
    if (compact) played.setAttribute("aria-label", "Played: " + played.textContent);
    played.dateTime = session.realDate;
    played.prepend(dateIcon("globe"));
    metadata.append(played);
  }
  const game = formatGameRange(session.golarionStart, session.golarionEnd, compact);
  if (game) {
    const inGame = element("span", compact ? game : "In-Game: " + game);
    if (compact) inGame.setAttribute("aria-label", "In-Game: " + game);
    inGame.prepend(dateIcon("calendar"));
    metadata.append(inGame);
  }
  return metadata;
}

function sessionCard(campaign, entry) {
  const card = link("", sessionUrl(campaign.id, entry), "session-list-card");
  card.setAttribute("aria-label", sessionNumber(entry) + " — " + entry.title);
  const number = element("span", "Session", "session-list-number");
  number.append(element("strong", String(entry.order).padStart(2, "0")));
  card.append(number);
  const metadata = dates(entry, true);
  if (metadata.childElementCount) card.append(metadata);
  const recap = entry.body.find(part => part.kind === "recap");
  if (recap) {
    const source = document.createElement("template");
    source.innerHTML = recap.html;
    card.append(element("p", source.content.textContent.trim(), "session-list-recap"));
  }
  const arrow = element("span", "", "fa fa-angle-right session-list-arrow");
  arrow.setAttribute("aria-hidden", "true");
  card.append(arrow);
  return card;
}

export function showPreviousSession(campaign, session) {
  const panel = document.getElementById("previous-session");
  if (!panel) return;
  panel.append(element("h2", "Previous Session", "session-featured-label"), sessionCard(campaign, session));
  panel.hidden = false;
}

export function showSessionNotes(campaign, sessions, requestedSession) {
  const panel = document.getElementById("session-panel");
  const index = sessions.findIndex(session => session.id === requestedSession);
  const session = sessions[index];
  document.querySelector(".timeline-panel").hidden = true;
  panel.hidden = false;

  if (!session) {
    const heading = element("h2", "Session Notes", "session-heading session-list-heading");
    const book = element("span", "", "session-book-icon");
    book.setAttribute("aria-hidden", "true");
    heading.prepend(book);
    panel.append(heading);
    const list = element("ul", "", "session-list");
    for (const entry of sessions) {
      const row = element("li");
      row.append(sessionCard(campaign, entry));
      list.append(row);
    }
    panel.append(list);
    return;
  }

  document.title = session.title + " | " + campaign.name;
  const breadcrumb = element("nav", "", "session-breadcrumb");
  breadcrumb.setAttribute("aria-label", "Breadcrumb");
  const back = link("Session Notes", sessionUrl(campaign.id));
  const arrow = element("span", "", "fa fa-arrow-left");
  arrow.setAttribute("aria-hidden", "true");
  back.prepend(arrow);
  const separator = element("span", "", "fa fa-angle-right");
  separator.setAttribute("aria-hidden", "true");
  const current = element("span", sessionNumber(session));
  current.setAttribute("aria-current", "page");
  breadcrumb.append(back, separator, current);
  panel.append(breadcrumb);
  const header = element("header", "", "session-header");
  const heading = element("h2", sessionNumber(session) + " — " + session.title, "session-heading");
  const book = element("span", "", "session-book-icon");
  book.setAttribute("aria-hidden", "true");
  heading.prepend(book);
  header.append(heading);
  const navigation = element("nav", "", "session-navigation");
  navigation.setAttribute("aria-label", "Adjacent sessions");
  const previous = sessions[index - 1];
  const next = sessions[index + 1];
  if (previous) {
    const previousLink = link("‹ " + sessionNumber(previous), sessionUrl(campaign.id, previous));
    previousLink.setAttribute("aria-label", "Previous: " + sessionNumber(previous));
    navigation.append(previousLink);
  }
  if (next) {
    const nextLink = link(sessionNumber(next) + " >", sessionUrl(campaign.id, next));
    nextLink.setAttribute("aria-label", "Next: " + sessionNumber(next));
    navigation.append(nextLink);
  }
  if (navigation.childElementCount) header.append(navigation);
  panel.append(header, dates(session));
  const grid = element("div", "", "session-sections");
  for (const part of session.body) {
    const section = element("section", "", "session-field session-field-" + part.kind);
    const body = element("div", "", "session-prose");
    body.innerHTML = part.html;
    section.append(element("h3", part.heading), body);
    grid.append(section);
  }
  panel.append(grid);
}
