import { Event } from "../events.js";
import { Character } from "../characters.js";

let tag = "sw"

export const SWCHARACTERS = [
    new Character(tag,"Cassriel",true,"img/sw/cassriel.webp"),
    new Character(tag,"Varrion",true,"img/sw/varrion.webp"),
    new Character(tag,"Whisper in the Forest at Night",true,"img/sw/wifan.webp")
]

export const SPOREWAR = [
    new Event(tag,"The heroes defeated Captain Talymir and Ulugurnix at Lantana Beach, buying time for the Kyonin forces to ready the catapults and sink the Whispering Tyrant's ships",4724,6,8),
    new Event(tag,"The trio were invited to Greengold by Queen Telandia Edasseril and asked to represent the country during negotiations with the other Lake Encarthan nations",4725,1,8)
]