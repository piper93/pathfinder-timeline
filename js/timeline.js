import { playerCharactersFor, showPlayerCharacters } from "./player-characters.js";
import { npcsFor, showImportantNpcs } from "./important-npcs.js";
import { sessionsFor, sessionUrl, showPreviousSession, showSessionNotes } from "./session-notes.js";
import { setTimelineFavicon, showCampaignHub } from "./campaign-hub.js";
import { MONTHS, displayGolarionDate } from "./golarion-calendar.js";

import { EVENTS, CHARACTERS } from "./campaigns.js";
import { CAMPAIGNS } from "./campaign-catalogue.js";


function getCharacters(filter = "all") {
 var section = document.getElementById("characters");
 if (filter == "all") {
   section.innerHTML = ``;
   return;
 }
 var characters = `
 <article>
   <div class="character">
     <table style="width:100%">
       <tr>`;
 var filteredCharacters = filterCharacters(filter);
 section.hidden = filteredCharacters.length === 0;
 var count = 0;
 for (var character of filteredCharacters)
 {
   count = count + 1;
   if (count == 7)
   {
    characters += `</tr>
    </table>
    </div>
    </article>
    <article>
      <div class="character">
        <table style="width:100%">
          <tr>`
   }
   var status = "alive";
   if (!character.alive)
     {
       status = "dead"
     }
   var string = `
   <td><img class="${status}" src="${character.image}" alt="${character.name}" title="${character.name}"></td>`
   characters += string
 }
 characters += `</tr>
   </table>
   </div>
   </article>`
 section.innerHTML = characters;
}

function getTimeline(events, calendar) {
 const orderedEvents = [...events].sort((first, second) =>
   Number(first.year != null) - Number(second.year != null) || (first.year ?? 0) - (second.year ?? 0) || (first.month ?? 0) - (second.month ?? 0) || (first.day ?? 0) - (second.day ?? 0)
 );
 const dateGroups = new Map();
 for (const event of orderedEvents) {
   const key = [event.year, event.month, event.day].join(".");
   if (!dateGroups.has(key)) dateGroups.set(key, []);
   dateGroups.get(key).push(event);
 }

 const section = document.getElementById("timeline");
 let timeline = "";
 for (const events of dateGroups.values()) {
   var firstEvent = events[0];
   const date = displayGolarionDate(firstEvent, calendar);
   const badge = firstEvent.year == null || firstEvent.month == null
     ? `<span class="date year-only"><span class="year">${firstEvent.year == null ? "?" : date.year}</span></span>`
     : `<span class="date ${MONTHS[firstEvent.month - 1].toLowerCase()}${date.day == null ? " month-only" : ""}">
         ${date.day == null ? "" : `<span class="day">${date.day}</span>`}
         <span class="month">${date.month}</span>
         <span class="year">${date.year}</span>
       </span>`;
   var string = `
   <article>
     <div class="inner" id="${firstEvent.tag}">
       ${badge}`
     for (const event of events) {
       const contextClass = event.historical ? " historical-event" : "";
       const label = event.historical ? '<img class="historical-event-icon" src="img/scroll.svg" alt="Historical context" title="Historical context">' : "";
       string += `<div class="event-block ${event.tag}${contextClass}"><h2>${event.name}${label}</h2></div>`;
     }
     string += `</div>
       </article>`
   timeline += string
 }
 section.innerHTML = timeline;
}

function filterCharacters(tag) {
 var filteredCharacters = new Array()
   for (var character of CHARACTERS){
     if (character.tag == tag)
     {
       filteredCharacters.push(character);
     }
 }
 return filteredCharacters;
}

const query = new URLSearchParams(window.location.search);
const requestedCampaign = query.get("campaign");
const campaign = CAMPAIGNS.find(entry => entry.id === requestedCampaign);
const filter = campaign?.id ?? "all";

const campaignEvents = campaign ? EVENTS.filter(event => event.tag === filter) : EVENTS;
const historicalEvents = (campaign?.historicalEvents ?? [])
  .filter(event => campaign.status === "Complete" || event.publicDuringPlay === true)
  .map(event => ({
    ...event,
    month: event.year == null ? undefined : event.month,
    day: event.year == null || event.month == null ? undefined : event.day,
    tag: filter,
    historical: true
  }));


const sessions = campaign?.sections?.some(section => section.id === "sessions")
  ? sessionsFor(campaign.id)
  : [];
const npcs = campaign?.sections?.some(section => section.id === "npcs")
  ? npcsFor(campaign.id)
  : [];
const playerCharacters = campaign?.sections?.some(section => section.id === "characters")
  ? playerCharactersFor(campaign.id)
  : [];
const sectionUrls = {
  characters: playerCharacters.length ? "index.html?" + new URLSearchParams({ campaign: campaign.id, view: "characters" }) : "",
  sessions: sessions.length ? sessionUrl(campaign.id) : "",
  npcs: npcs.length ? "index.html?" + new URLSearchParams({ campaign: campaign.id, view: "npcs" }) : ""
};
const requestedSection = query.get("view");
const activeSection = Object.hasOwn(sectionUrls, requestedSection) && sectionUrls[requestedSection]
  ? requestedSection
  : null;

if (campaign) {
  showCampaignHub(campaign, campaignEvents, sectionUrls, activeSection);
} else {
  document.querySelector('.archive-nav a[href="index.html"]').setAttribute("aria-current", "page");
  void setTimelineFavicon(document.querySelector("#hub-sections .fa-hourglass-half"));
}

getCharacters(filter);
const historyToggle = document.getElementById("show-history");

function renderTimeline() {
  const events = historicalEvents.length && historyToggle.checked
    ? [...historicalEvents, ...campaignEvents]
    : campaignEvents;
  document.getElementById("timeline").hidden = events.length === 0;
  getTimeline(events, campaign?.calendar);
}

if (historicalEvents.length) {
  document.getElementById("timeline-controls").hidden = false;
  historyToggle.addEventListener("change", renderTimeline);
}

const requestedSession = query.get("session");
const showingSessionDetail = activeSection === "sessions" && sessions.some(session => session.id === requestedSession);
if (campaign?.status === "In progress" && !showingSessionDetail && sessions.length) {
  showPreviousSession(campaign, sessions.at(-1));
}

if (activeSection === "characters") {
  showPlayerCharacters(campaign, playerCharacters);
} else if (activeSection === "npcs") {
  showImportantNpcs(campaign, npcs, sessions);
} else if (activeSection === "sessions") {
  showSessionNotes(campaign, sessions, requestedSession);
} else {
  renderTimeline();
}
