import { Event } from "../events.js";
import { Character } from "../characters.js";

let tag = "sog"

export const SOGCHARACTERS = [
    new Character(tag,"Kubo",true,"img/sog/kubo.webp"),
    new Character(tag,"Moriko",true,"img/sog/moriko.webp"),
    new Character(tag,"Otoko",true,"img/sog/otoko.webp"),
    new Character(tag,"Rani",true,"img/sog/rani/webp"),
    new Character(tag,"Yoonji",true,"img/sog/yoonji-2.webp")
]

export const SEASONOFGHOSTS = [
    new Event(tag,"The long-ruined town of Willowshore reappeared in Shenmen",4724,2,12),
    new Event(tag,"The party investigated the ruins of Heh Shan-Bao's manor and defeated the akashti nindoru lurking within",4724,2,14),
    new Event(tag,"Willowshore reestablished contact with Karahai and agreed to fix the bridge in exchange for restoring historic trade routes",4724,2,17),
    new Event(tag,"A representative of Princess Ren Mei Li approached the party to organise a meeting",4724,2,20),
    new Event(tag,"Ren Mei Li arrived in Willowshore and told the party that if they could prove themselves, she would appoint them her stewards and allow Willowshore autonomy",4724,2,27),
    new Event(tag,"The party returned from an errand for Ren Mei Li and learned that Kazumo Oono, Kubo's father, had been murdered",4724,3,9)
]