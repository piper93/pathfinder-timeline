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

class Character {
 constructor(tag, name, alive, image) {
   this.tag = tag,
   this.name = name,
   this.alive = alive
   this.image = image
 }
}

const CHARACTERS = [
 new Character("bl","Bask",true,"img/bl/ginness.webp"),
 new Character("bl","Ginness",true,"img/bl/ginness.webp"),
 new Character("bl","Kiya",true,"img/bl/kiya.webp"),
 new Character("bl","Shade", true, "img/bl/shade.webp"),
 new Character("bl","Siegmeyer", false, "img/bl/siegmeyer.webp"),
 new Character("bl","Xanthos",true,"img/bl/xanthos.webp"),
 new Character("ooa","Astra",true,"img/ooa/astra.png"),
 new Character("ooa","Gbemisola",true,"img/ooa/gbemisola.png"),
 new Character("ooa","Gruzwil",false,"img/ooa/gruzwil.png"),
 new Character("ooa","Tyke",true,"img/ooa/tyke.png"),
 new Character("ooa","Yin",false,"img/ooa/yin.png"),
 new Character("ooa","Yohziah",false,"img/ooa/yohziah.png"),
 new Character("av","Eri",true,"img/av/eri.png"),
 new Character("av","Finn",false,"img/av/finn.png"),
 new Character("av","Glodrum",true,"img/av/glodrum.png"),
 new Character("av","Jeigen",true,"img/av/jeigen.png"),
 new Character("av","Kahiki",true,"img/av/kahiki.png"),
 new Character("av","Khesk",false,"img/av/khesk.png"),
 new Character("av","Mar-T'an",true,"img/av/mar tan.png"),
 new Character("av","Marvin",false,"img/av/marvin.png"),
 new Character("av","Max",true,"img/av/max.png"),
 new Character("av","Petra",false,"img/av/petra.png"),
 new Character("av","Spoons",true,"img/av/spoons.png"),
 new Character("av","Verity",true,"img/av/verity.png"),
 new Character("notgd","Flynn",false,"img/notgd/flynn.webp"),
 new Character("notgd","Myrra",false,"img/notgd/myrra.webp"),
 new Character("notgd","Nevvin",false,"img/notgd/nevvin.webp"),
 new Character("notgd","Octavio",false,"img/notgd/octavio.webp"),
 new Character("notgd","Perri",false,"img/notgd/perri.webp"),
 new Character("notgd","Sylvie",false,"img/notgd/sylvie.webp"),
 new Character("ec","Hernandedor",true,"img/ec/hernandedor.webp"),
 new Character("ec","Kalira",true,"img/ec/kalira.webp"),
 new Character("ec","Munya",true,"img/ec/munya.webp"),
 new Character("ec","Pudding",true,"img/ec/pudding.webp"),
 new Character("ec","Tupp",true,"img/ec/tupp.webp"),
 new Character("aoa","Ardbert",true,"img/aoa/ardbert.webp"),
 new Character("aoa","Benjemyn",true,"img/aoa/ben.webp"),
 new Character("aoa","Dr Bang",true,"img/aoa/drbang.webp"),
 new Character("aoa","Grannok",true,"img/aoa/grannok.webp"),
 new Character("aoa","Morta",true,"img/aoa/morta.webp")
]

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
 new Event("notgd","Chairwoman Drannoch recruited people to attempt to take down the Grey Gardeners",4721,10,26),
 new Event("notgd","Investigation into the Masquerade began; Flynn ordered an elaborate outfit for the masque",4721,10,30),
 new Event("notgd","Hired as High Magistrate Otvald Gharmino's bodyguards at the masque; Perrie got upset with the 'fake clowns' at the market; Perrie and Flynn got out of phase",4721,10,31),
 new Event("notgd","Mr Small (Bertrand Eglantine Petit) removed Perrie and Flynn's curses; The Masquerade Began; Flynn was killed by a vorpal blade trap; Octavio Valentine joined the fight",4721,11,1),
 new Event("notgd","Sylvie's Birthday; The first Gray Death was released; All attendees became victims of the Night of the Gray Death; Galt was left in ruins; the Conqueror Worm prepared to move to another land",4721,11,2),
 new Event("ooa","Hired by Foebe Dunsmith for a bank heist",4722,4,27),
 new Event("ooa","Stole the lockbox from the Gold Tank Reserve; Met Lord Glass and the Nailgobblers",4722,4,28),
 new Event("ooa","Given a new mission to retrieve Varshon Gattlebee and bring him to the saloon",4722,4,30),
 new Event("ooa","Escorted Gattlebee and his pet chameleon, Slick, to the Yeast of All Brewery",4722,5,4),
 new Event("ooa","Ambushed by Dewey Daystar and his pet drake, Roxy; Gruzwil was killed",4722,5,5),
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
 new Event("av","Traded with some chuul for their eggs; Formed an alliance with Dulac and the Cult of Urthagul; Belcorra attacked again, leaving Dulac and Padli the only surviving members of the Cult",4721,6,29),
 new Event("ooa","Introduced to Yin; Began investigating the Powderkeg Punks; Tried to determine if Vix the Bartender was being exploited",4722,5,6),
 new Event("ooa","Visited Ryka's Reagents; Learned the name Lyzerius",4722,5,7),
 new Event("ooa","Astra, Yin, and Yohziah entered the weekly rodeo; Yin won a membership to the Longhorn Lounge; Bribed Bert to gain access to the members list; Mugged a Punk for the password to the Old Widgetworks Warehouse; Met with Glaz Nixbrix and killed his pet snake, Bitey, in exchange for information",4722,5,8),
 new Event("av","Belcorra feebleminded Spoons, leaving her <i>stupefied 4</i>; Descended to Yldaris to meet and ally with the drow; Learned of the Fulcrum Lenses and the power of the Empty Death",4721,7,1),
 new Event("ooa","Found Shoma Lyzerius in Hellside; returned him to the Barrel & Bullet Saloon; Learned that the formula for Pyronite might have been discovered by another.",4722,5,9),
 new Event("av","Met the remaining calignis and promised to help them escape the Vaults; Defeated Urthagul and claimed the Crimson Fulcrum Lens", 4721,7,3),
 new Event("av","Assaulted the urdefhan stronghold; defeated Khurfel and claimed the Emerald Fulcrum Lens", 4721,7,4),
 new Event("av","Ventured out onto the Deep Lake; recovered the Ochre Fulcrum Lens after an intense fight with the deepwater dhuthorexes",4721,7,5),
 new Event("av","Defeated the black dragon, Ravirex, who had killed Glodrum's wife; Glodrum recovered his clan dagger; led the calignis out of the vault",4721,7,6),
 new Event("av","Fled from Caliddo Haruvex at Belcorra's Vault",4721,7,7),
 new Event("av","Defeated Caliddo Haruvex; Recovered the Fulcrum Lattice",4721,7,8),
 new Event("av","Entered the ancient Black Doors; Descended to the lowest level of the Vaults; Unknowingly began Nhimbaloth's trials",4721,7,9),
 new Event("av","Completed the trials; Defeated Lady's Whisper; Eri died; Sent Belcorra to the Empty Death; Escaped the Abomination Vaults",4721,7,11),
 new Event("av","Eri was resurrected by a ritual in Absalom",4721,7,14),
 new Event("av","Attended Shad Nunder and Honey Tittensor's Heartbond Ceremony",4721,7,24),
 new Event("ooa","Began investigating Olomann Kosowana; Spent the night in the Asynchronous Archives doing research",4722,5,20),
 new Event("bl","Met with Berline Haldoli at her manor in Graydirge; Investigated the situation at Old Ergagh's Farm",4722,7,27),
 new Event("bl","Finished restoring the farm; Granted the key's to Qhallaqh's Manor by Berline",4722,7,29),
 new Event("ooa","Chartered a flight into the Spellscar Desert; Gathered a collection of interesting passengers to help fund the trip",4722,5,22),
 new Event("ooa","Began the journey east on the <i>Second Kiss</i>; Ex-shieldmarshal Solessa died during a Peryton attack; Discovered their door had been rigged with a blackpowder bomb; Learned that Usuvu was also seeking Kosowana; Learned Mugland was funding the Gilded Gunners",4722,5,23),
 new Event("bl","Arrived at Qhallaqh Manor; Met Arghun the Annihilator; Began the clear-out of the basement",4722,7,30),
 new Event("ooa","A Chimeric Manticore attacked the Second Kiss; Gbemisola summoned an elephant, which dealt the final blow to the Manticore and fell off the side; The Second Kiss landed in the Spellscar Desert; The party began the walk to the Cradle of Quartz",4722,5,25),
 new Event("bl", "Met with Ortagar Stitch-Skull at the Empty Threshold",4722,8,7),
 new Event("bl","Investigated the Bone Shards Hideout; Talus was lost amid collapsing bones; Learned of Kepgeda the Hag-Nailed and her interest in the bank; Investigated the abandoned Greydirge Bank",4722,8,8),
 new Event("ooa","Continued their trek into the Spellscar Desert; Met with a Nyktera colony",4722,5,26),
 new Event("ooa","Arrived at the Cradle of Quartz near midnight; Encountered the Claws of Time; Saved Kosowana",4722,5,27),
 new Event("bl","Assaulted the Crooked Coffin Brewery seeking Kepgeda; Defeated Kepgeda and learned of the Graveclaw Coven",4722,8,10),
 new Event("bl","Dined with Taf-Gekhta Seven-Stomachs; Revealed the true ownership of the Graydirge to the Tax Collectors Guild",4722,8,13),
 new Event("ooa","Returned to Alkenstar; Learned of the Gilded Gunners plan to steal from the Steaming Kingdom",4722,6,2),
 new Event("ooa","Explosion at the Steaming Kingdom; Found the Gilded Halls and made a deal with Sabora Sharkosa",4722,6,3),
 new Event("ooa","Sabora Sharkosa killed Mugland; Learned of Loveless's plan to sell the formula to two wizards",4722,6,4),
 new Event("bl","Berline told them of Iron Taviah's connection to the Graveclaw and asked them to travel to the Axan Wood and kill the hag",4722,8,22),
 new Event("bl","Began searching the Axan Wood; Met the huldra, Drusilla, and correctly answered her riddles",4722,8,25),
 new Event("ooa","Infiltrated the Vault of Secrets searching for leads on Loveless; Did not escape quietly",4722,6,5),
 new Event("bl","Met Ginness' neglected half-brother, Nebumi, in Iron Taviah's attic; Defeated Iron Taviah; Iron Taviah's Cottage absorbed her body and attempted to digest the party; Siegmeyer was killed",4722,8,26),
 new Event("ooa","Attended Christia Tombend's Art Gala; Learned that Christia is seeking support for a bill that would introduce mandatory conscription in Alkenstar",4722,6,6),
 new Event("ooa","Rescued Rhangyl Foruza from execution; Learned that a Nexian wizard, Ibrium, organised the purchase of large quantities of pyronite supplies",4722,6,7),
 new Event("bl","Arrived in Sallowshore; Met with Tobias Highridge and agreed to retrieve his late wife's Heartstone; Highridge demanded his junior associate, Xanthos, accompany them",4722,9,3),
 new Event("bl","Opened the Builder's League Vault; Returned the Potion of Annulment to Stana Keystone",4722,9,5),
 new Event("bl","Descended to the sunken Temple of Urgathoa; The meat guardians demanded they destroy Sahni's shrine to Dagon; Defeated Sahni Bride-of-the-Sea; Xanthos was cursed with hooves, Ginness with lost time; Destroyed the Shrine to Dagon; Returned Nepenthe's body to Tobias; Xanthos was instructed to go with the others",4722,9,6),
 new Event("ooa","Met Dash at the Dead Spot outside of Alkenstar; the Headless Rustlers decapitated Yin; learned that Parsus had delivered the materials to the Gunworks",4722,6,8),
 new Event("bl","Chartered a ship north towards Yled",4722,9,7),
 new Event("bl","Arrived in Yled; Curses removed",4722,9,19),
 new Event("ooa","Arrived to the Gunworks; Met Tyke Steyrlock; Helped remove gremlins from the Tower of Metallurgy",4722,6,9),
 new Event("ooa","Met with Loy Ayton; The Slugs of the Waste assaulted the Gunworks; The Maw of Rovagug was destroyed by Pyronite; Yohziah was killed by Vewslog, the Cyclops",4722,6,10),
 new Event("bl","Organised transport to Pagked; Met Bask Vishky",4722,9,20),
 new Event("bl","Arrived in Pagked; Started the search for Decrosia; Bask made a deal with The Shroud; Nebumi began the return trip to Yled alone",4722,9,23),
 new Event("gw","The night of the Missing Moment; hundred of onlookers walk through <i>aiudara</i>",4723,1,6)
]

var sortedEvents = {};
var orderedEvents = new Object();
let tagFilter = "all";

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
 for (character of filteredCharacters)
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
 for (key of keys)
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
 for (key of keys)
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
   for (character of CHARACTERS){
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