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
    new Event(tag,"The trio were invited to Greengold by Queen Telandia Edasseril and asked to represent the country during negotiations with the other Lake Encarthan nations",4725,1,9),
    new Event(tag, "The party met with representatives from Nirmathas and Ustalav",4725,1,10),
    new Event(tag, "The trio met with the Lastwall and Razmiran delegations",4725,1,11),
    new Event(tag, "On the final full day of negotiations, the trio met with the representatives from Druma and Molthune; after refusing to agree with Molthune's insistence that Nirmathas be excluded from the alliance, neogtiations came to an end",4725,1,12),
    new Event(tag,"During the signing of the treaty, the delegates were attacked by assassins wearing the robes of Razmiran priests; all of the assassins died, even those who were not fatally wounded; Examining the bodies found fungal filaments within the assassins' organs",4725,1,13),
    new Event(tag,"The party found evidence that the assassins had come from Xer and made arrangements to travel there",4725,1,14),
    new Event(tag, "The party, accompanied by the Razmiran priest, Alzarius, arrived in Xer and sought out information on the priest, Vintalax; Their investigations led them to a sewer entrance",4725,1,16),
    new Event(tag, "The party fought their way through the sewers to an old Razmiran hideaway that now hosted a cult to the unknown 'Rotting God'; After defeating the corrupted Vintalax, they learned that the attack was a distraction to lure them away from Greengold",4725,1,17),
    new Event(tag, "As the trio reached the docks of Greengold, a fungal explosion rocked through the city; They investigated the Temple of Calistria, which was at the center of the eruption, but couldn't make it into the sanctum chamber; Researching the fungus revealed that there were three nodes around the city that had to be destroyed",4725,1,18)
]