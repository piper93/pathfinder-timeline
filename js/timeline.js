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

class Event {
  constructor(tag, name, year, month, day) {
    this.tag = tag,
    this.name = name,
    this.year = year,
    this.month = month,
    this.day = day
  }
}

const EVENTS = [
  new Event("aoa","Call to Heroes",4719,9,22),
  new Event("aoa","Met Benjemyn Trayle; discovered Alseta's Ring",4719,9,24),
  new Event("ec","The Circus of Wayward Wonders performs in Abberton; the Ringmaster is murdered",4720,2,5),
  new Event("aoa","Travelled through Huntergate; Met the Ekujae",4719,10,15),
  new Event("aoa","Attended the Akrivel Welcome Feast",4719,10,16),
  new Event("aoa","Met Gerhard Pendergrast",4719,10,26),
  new Event("aoa","Ancient Temple exploded; Gerhard Pendergrast died",4719,10,29),
  new Event("aoa","Cleared out the Cinderclaw Mine; Ben slept outside and got malaria",4719,11,11),
  new Event("aoa","Defeated Belmazog at the Fortress of Sorrow; Met the red dragon, Kyrion",4719,11,22),
  new Event("aoa","Destroyed the Vision of Dahak; Returned to Breachill",4719,12,1),
  new Event("aoa","Dr Bang was kidnapped by the Scarlet Triad",4719,12,8),
  new Event("aoa","Travelled through Dreamgate",4719,12,9),
  new Event("aoa","Stopped slavers at Cypress Point; Grannok was humbled",4719,12,10),
  new Event("aoa","Assaulted Summershade Granite Quarry; Ben was blinded by a lich",4719,12,14),
  new Event("aoa","Halleka restored Ben's sight; Laslunn was defeated",4719,12,17),
  new Event("aoa","Travelled through Jewelgate",4720,1,2),
  new Event("aoa","Met Kovlar's Council of Regents",4720,1,3),
  new Event("aoa","Grannok (and then the others) were arrested by Chiselrock's corrupt guards",4720,1,4),
  new Event("aoa","Freed Triad slaves from the Hidden Forge; Met with King Harral",4720,1,6),
  new Event("aoa","Defeated Ilssrah Embermead",4720,1,9),
  new Event("aoa","Defeated Veshumirix; Returned King Harral's crown",4720,1,10),
  new Event("aoa","Travelled through Duskgate",4720,1,16),
  new Event("aoa","Arrived in Katapesh; Began planning how to discredit Uri and the Scarlet Triad",4720,1,21),
  new Event("aoa","Grannok became the leader of the Katapesh Gladiator Guild",4720,2,12),
  new Event("aoa","Exavisu Kerndallion and other slaves were rescued from the Bhetshamtal Estate",4720,2,14),
  new Event("aoa","Lord Bossleworth was declared dead; Uri and the Scarlet Triad were discredited from the Council of Guilds",4720,2,26),
  new Event("aoa","Uri Zandivar was defeated",4720,2,27),
  new Event("aoa","Attempted to open Vengegate; The Manifestation of Dahak attacked Breachill",4720,4,4),
  new Event("aoa","Arrived in Hermea; Met Emaliza and Inizra",4720,4,5),
  new Event("aoa","Dr Bang was ordered by Emaliza to obtain the Shards of Gold Dragonkind",4720,4,6),
  new Event("aoa","Fought Emaliza alongside Mengkare; Convinced the gold dragon to try the altered version of the anima invocation",4720,4,8),
  new Event("aoa","Performed the altered Anima Invocation and entered Dahak's demiplane; Defeated the Manifestation of Dahak",4720,5,5),
  new Event("ec","The Ringmaster's murderer, Nemmia, was defeated",4720,2,6),
  new Event("ec","Major Jae Abber asked for assistance; Viktor Volkano was nearly killed",4720,2,7),
  new Event("ec","Momberolf died; the Mayor was rescued from the Hermitage",4720,2,8),
  new Event("ec","Met Hernandedor and Derryn; Harlock was rescued from the inner temple",4720,2,12),
  new Event("ec","Assaulted the Erran Tower; Derryn was killed",4720,2,15),
  new Event("ec","Met Munya, Tupp, and Kalira",4720,2,16),
  new Event("ec","Defeated Cavnakash; Received the Reflection of Life",4720,2,18),
  new Event("ec","Arrived in Escadar; Cheers was killed",4720,2,24),
  new Event("ec","Andera Paldreen granted access to Moonstone Hall",4720,2,28),
  new Event("ec","Met Ulthadar within Moonstone Hall",4720,3,1),
  new Event("ec","Viewed the Memories in the Moonstone Pool",4720,3,3),
  new Event("ec","Raided the Celestial Menagerie; Mistress Dusklight was killed",4720,3,9),
  new Event("ec","Arrived in Kerrick; Attended Opper Vandy's Dinner Party",4720,4,10),
  new Event("ec","Obtained the Reflection of Water",4720,4,14),
  new Event("ec","Watched Tanner Fleer die from the mysterious disease",4720,4,17),
  new Event("ec","Munya identified the cause of death of a satyr they found by the road - a missing pituitary gland",4720,4,20),
  new Event("ec","Rescued the Turpin Rowe Distillery Workers",4720,4,21),
  new Event("ec","Defeated Thessekka",4720,4,22),
  new Event("ec","Obtained the Reflection of Light",4720,4,23),
  new Event("ec","Defeated Skarja and stopped Vandy's torment",4720,4,25),
  new Event("ec","Arrived in Willowside; Met Estessa Vandy and the Banyan Boys",4720,5,16),
  new Event("ec","Investigated Fortune's Hall",4720,5,19),
  new Event("ec","The Siege of Willowside Began",4720,5,20),
  new Event("ec","Rescued the Banyan Boys from Lyrt Cozurn in the sea caves",4720,5,23),
  new Event("ec","Made a deal with Helg Eats-the-Eaters",4720,5,27),
  new Event("ec","Delivered the Bokrug statue to Helg; Met the Circle of Empty Stones",4720,5,28),
  new Event("ec","Defeated Zashathal Head-Taker",4720,5,29),
  new Event("ec","Teleported to the Crystal Caverns",4720,7,4),
  new Event("ec","Arrived at the Vault of the Black Desert; Fled from Iffdahsil",4720,7,10),
  new Event("ec","Met Kharostan at Spear Hill Camp; Tupp killed the prisoner, Khufar, instead of leaving him to the urdefhan",4720,7,14),
  new Event("ec","Discovered Xul-Khundur; Investigated Dyzallin's notes",4720,8,7),
  new Event("ec","Arrived in Shraen",4720,8,27),
  new Event("ec","Defeated Dyzallin; Obtained the Reflection of Storms",4720,9,3),
  new Event("ec","Obtained the Reflection of Stone",4720,4,18),
  new Event("ec","Destroyed the Convergence Lattice; Freed the Eagle Garrison",4720,10,3),
  new Event("ec","Munya claimed Piereta",4720,10,6),
  new Event("ec","Arrived in the Vale of Aroden",4720,10,7),
  new Event("ec","Hernandedor claimed the Arrogant Shirt from Aroden's Collection; Sarvel Ever-Hunger was defeated; The aeon orbs were restored",4720,10,9),
  new Event("fotrp","The Ruby Phoenix Tournament Qualifier Began; Teams Arrived on Bonmu",4721,7,18),
  new Event("fotrp","The Blood Moon Blades Qualified for the Tournament",4721,7,21),
  new Event("fotrp","Patron Week Began",4721,8,25),
  new Event("fotrp","The Blood Moon Blades defeated the underworld dragon, Iagaara, when it manifested above Goka",4721,8,28),
  new Event("fotrp","The Blood Moon Blades chose Lady Xhai Zhia as their patron",4721,8,31),
  new Event("fotrp","The Blood Moon Blades Won the Ruby Phoenix Tournament; They claimed a high-standard mithril waffle iron as their prize from Hao Jin's Vault",4721,9,10),
  new Event("notgd","Chairwoman Drannoch recruited people to attempt to take down the Grey Gardeners",4721,10,26),
  new Event("notgd","Investigation into the Masquerade began; Flynn ordered an elaborate outfit for the masque",4721,10,30),
  new Event("notgd","Hired as High Magistrate Otvald Gharmino's bodyguards at the masque; Perrie got upset with the 'fake clowns' at the market; Perrie and Flynn got out of phase",4721,10,31),
  new Event("notgd","Mr Small (Bertrand Eglantine Petit) removed Perrie and Flynn's curses; The Masquerade Began; Flynn was killed by a vorpal blade trape; Octavio Valentine joined the fight",4721,11,1),
  new Event("notgd","The first Gray Death was released; All attendees became victims of the Night of the Gray Death; Galt was left in ruins; the Conqueror Worm prepared to move to another land",4721,11,2),
  new Event("ooa","Hired by Foebe Dunsmith for a bank heist",4722,6,27),
  new Event("ooa","Stole the lockbox from the Gold Tank Reserve; Met Lord Glass and the Nailgobblers",4722,6,28),
  new Event("ooa","Given a new mission to retrieve Varshon Gattlebee and bring him to the saloon",4722,6,30),
  new Event("ooa","Escorted Gattlebee and his pet chameleon, Slick, to the Yeast of All Brewery",4722,7,4),
  new Event("ooa","Ambushed by Dewey Daystar and his pet drake, Roxy; Gruzwil was killed",4722,7,5),
  new Event("av","Learned of potential danger in the Fogfens",4721,5,3),
  new Event("av","Travelled to Gauntlight for the first time; Petra was killed",4721,5,4),
  new Event("av","Met Boss Skrawng; Asked to kill the Mushroom-Eyed King on the floor below",4721,5,5),
  new Event("av","Gauntlight's beam caused the dead to rise from their graves",4721,5,10),
  new Event("av","Gorul and Ziskilly were rescued from the morlocks; Shad had been taken further down",4721,5,16),
  new Event("av","Met Zozzlarin; He gave Glodrum his centuries-old memory",4721,5,18),
  new Event("av","Met Augrael; Made a deal with Korlok; Glodrum nearly lost a finger",4721,5,27),
  new Event("av","Aller Rosk took Kahiki, Khesk, and Glodrum into captivity",4721,5,28),
  new Event("av","Spoons recruited Jeigan, Max, and Verity to assist with her rescue mission; Khesk lost an arm; Glodrum lost his index finger",4721,5,29),
  new Event("av","Shad was rescued; Korlok was freed from his contract; Max left for Absalom",4721,6,1),
  new Event("av","Glodrum begins writing 'Twelve Hours Like a Week'",4721,6,2),
  new Event("av","Gauntlight lights again; More dead rise",4721,6,10),
  new Event("av","Met the ghost of Otari; Defeated but didn't kill Volluk; Freed Lasda",4721,6,12),
  new Event("av","Met Hesketh and Fingal; Obtained the Artifacts of the Roseguard",4721,6,13),
  new Event("av","Opened the Barrier to the lower levels of the vaults; Carman Rajani was imprisoned",4721,6,14),
  new Event("av","Finn and Khesk fell into a pit and were killed by hydra",4721,6,15),
  new Event("av","Dorianna's nightmares began; Met Marvin and Eri; Met Chafkhem",4721,6,16),
  new Event("av","Performed at the Warped Brew Tavern; Ran an impromptu heist to rescue the 'food'; Learned of Yldaris from Falxi Orshendiel",4721,6,19),
  new Event("av","Karlthe and Worliwynn are taken; Volluk and Vaulgrist are defeated",4721,6,21),
  new Event("av","Marvin was killed by Jafaki; Jafaki was defeated; Chafkhem left the vault",4721,6,22),
  new Event("av","Spoons and Glodrum identified 'The Motley Man' as a Denizen of Leng; Met Mar-T'an",4721,6,23),
  new Event("av","Defeated the hydras; Recovered the Cooperative Blade",4721,6,24),
  new Event("av","Glodrum made a deal with Urevian and sold both his and Carman Rajani's soul in exchange for Urevian and his devils to leave the vaults; Mar-T'an beat up Carman and put him in a potato sack; Ysondkhelir was killed and Dorianna was freed; Mar-T'an sold his soul to Szek for 250 years in exchange for a bit of luck",4721,6,25),
  new Event("av","Belcorra attacked the party for the first time",4721,6,28),
  new Event("av","Traded with some chuul for their eggs; Formed an alliance with Dulac and the Cult of Urthagul",4721,6,29)
]

var sortedEvents = {};
var orderedEvents = new Object()

for (event of EVENTS) {
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
for (year of years) {
  let months = Object.keys(sortedEvents[year]).map(Number);
  months.sort(function(a, b){return a - b});
  for (month of months) {
    let days = Object.keys(sortedEvents[year][month]).map(Number);
    days.sort(function(a, b){return a - b});
    for (day of days) {
      var orderedKey = `${day}.${month}.${year}`;
      if (!orderedEvents.hasOwnProperty(orderedKey)){
        orderedEvents[orderedKey] = new Array()
      }
      orderedEvents[orderedKey].push(sortedEvents[year][month][day])
    }
  }
}
console.log(orderedEvents)

function getTimeline() {
  var section = document.getElementById("timeline");
  var timeline = ``;
  var keys = Object.keys(orderedEvents)
  for (key of keys)
  {
    let events = orderedEvents[key][0];
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

getTimeline();