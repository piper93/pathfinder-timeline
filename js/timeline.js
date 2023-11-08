const MONTHS = [
  "ABA",
  "CAL",
  "PHA",
  "GOZ",
  "DES",
  "SAR",
  "ERA",
  "ARO",
  "ROV",
  "LAM",
  "NET",
  "KUT"
];

import { CHARACTERS } from "./characters.js";
import { AGEOFASHES } from "./campaigns/aoa.js"
import { EXTINCTIONCURSE } from "./campaigns/ec.js"
import { NIGHTOFTHEGRAYDEATH } from "./campaigns/notgd.js"
import { ABOMINATIONVAULTS } from "./campaigns/av.js"
import { OUTLAWSOFALKENSTAR } from "./campaigns/ooa.js"
import { BLOODLORDS } from "./campaigns/bl.js"
import { GATEWALKERS } from "./campaigns/gw.js"

const EVENTS = AGEOFASHES.concat(EXTINCTIONCURSE, NIGHTOFTHEGRAYDEATH, ABOMINATIONVAULTS, 
  OUTLAWSOFALKENSTAR, BLOODLORDS, GATEWALKERS)

var sortedEvents = {};
var orderedEvents = new Object();
let tagFilter = "all";

for (var event of EVENTS) {
 if (!sortedEvents.hasOwnProperty(event.year)) {
   sortedEvents[event.year] = {}
 }
 if (!sortedEvents[event.year].hasOwnProperty(event.month)) {
   sortedEvents[event.year][event.month] = {}
 }
 if (!sortedEvents[event.year][event.month].hasOwnProperty(event.day)) {
   sortedEvents[event.year][event.month][event.day] = new Array();
 }
 sortedEvents[event.year][event.month][event.day].push(event)
}

let years = Object.keys(sortedEvents).map(Number);
years.sort(function(a, b){return a - b});
for (var year of years) {
console.log(year)
 let months = Object.keys(sortedEvents[year]).map(Number);
 months.sort(function(a, b){return a - b});
 for (var month of months) {
   let days = Object.keys(sortedEvents[year][month]).map(Number);
   days.sort(function(a, b){return a - b});
   for (var day of days) {
     var orderedKey = `${day}.${month}.${year}`;
     if (!orderedEvents.hasOwnProperty(orderedKey)){
       orderedEvents[orderedKey] = new Array()
     }
     orderedEvents[orderedKey].push(sortedEvents[year][month][day])
   }
 }
}

function updatePage(filter){
 var oldLink = document.getElementsByClassName("active");
 oldLink[0].classList.remove("active");
 var newLink = document.getElementsByClassName(`${filter}-link`);
 newLink[0].classList.add("active");
 getCharacters(filter);
 getTimeline(filter);
}

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

function getTimeline(filter = "all") {
 var displayedEvents = orderedEvents;
 if (filter != "all")
 {
   tagFilter = filter;
   displayedEvents = filterEvents()
 }
 var section = document.getElementById("timeline");
 var timeline = ``;
 var keys = Object.keys(displayedEvents)
 for (var key of keys)
 {
   let events = displayedEvents[key][0];
   //get date from first events
   var firstEvent = events[0];
   var string = `
   <article>
     <div class="inner">
       <span class="date">
         <span class="day">${firstEvent.day}</span>
         <span class="month">${MONTHS[firstEvent.month-1]}</span>
         <span class="year">${firstEvent.year}</span>
       </span>`
     for (event of events) {
       string += `<h2 class="${event.tag}">${event.name}</h2>`
     }
     string += `</div>
       </article>`
   timeline += string
 }
 section.innerHTML = timeline;
}

function filterEvents() {
 var filteredEvents = new Object()
 var keys = Object.keys(orderedEvents)
 for (var key of keys)
 {
   let events = orderedEvents[key][0];
   let result = events.filter(checkTag);
   if (result.length > 0) {
     if (!filteredEvents.hasOwnProperty(key)) {
       filteredEvents[key] = new Array()
     }
     filteredEvents[key].push(result);
   }
 }
 return filteredEvents;
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

function checkTag(event) {
 return event.tag === tagFilter;
}

getTimeline();

window.updatePage = updatePage;