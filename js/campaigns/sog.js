import { Event } from "../events.js";
import { Character } from "../characters.js";

let tag = "sog"

export const SOGCHARACTERS = [
    new Character(tag,"Kubo",true,"img/sog/kubo.webp"),
    new Character(tag,"Moriko",true,"img/sog/moriko.webp"),
    new Character(tag,"Otoko",true,"img/sog/otoko.webp"),
    new Character(tag,"Rani",true,"img/sog/rani.webp"),
    new Character(tag,"Yoonji",true,"img/sog/yoonji-2.webp")
]

export const SEASONOFGHOSTS = [
    new Event(tag,"The long-ruined town of Willowshore reappeared in Shenmen",4724,2,12),
    new Event(tag,"The party investigated the ruins of Heh Shan-Bao's manor and defeated the akashti nindoru lurking within",4724,2,14),
    new Event(tag,"Willowshore reestablished contact with Karahai and agreed to fix the bridge in exchange for restoring historic trade routes",4724,2,17),
    new Event(tag,"A representative of Princess Ren Mei Li approached the party to organise a meeting",4724,2,20),
    new Event(tag,"Ren Mei Li arrived in Willowshore and told the party that if they could prove themselves, she would appoint them her stewards and allow Willowshore autonomy",4724,2,27),
    new Event(tag,"The party returned from an errand for Ren Mei Li and learned that Kazumo Oono, Kubo's father, had been murdered; They discovered signs of a supernatural attack during their investigation of the murder scene",4724,3,9),
    new Event(tag,"The body of the local Pharasmin cleric, Elizeth Candora, was discovered above Kazuma's grave; she appeared to have suffered from same type of attack as Kazuma",4724,3,19),
    new Event(tag,"Ren Mei Li officially offers the party positions as her stewards once they have completed her final task; Kubo and Yoonji accept",4724,3,20),
    new Event(tag,"To complete Ren Mei Li's final task, the party travelled to the Gossamer Path to speak with the Path Maidens; the maiden revealed a door within the governor's manor",4724,3,21),
    new Event(tag,"While on overnight watch, Kubo witnessed a figure return to the Governor's Manor while on watch; they discovered the body of You So-Jin in her workshop in the morning",4724,3,24),
    new Event(tag,"Ren Mei Li granted the <i>Fang and Key</i> to Yoonji and Kubo, marking them as the rightful rulers of Willowshore",4724,3,27),
    new Event(tag,"The party passed through an alternate version of the governor's manor and through the door they saw in the Path Maiden's answer; In Kugaptee's Dream, they freed the souls of those killed by the corrupted Heh Shan-Bao; They continued into Kugaptee's Grave and freed the Governor's soul, stopping Kugaptee from returning",4724,3,28)
]