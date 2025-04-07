export class Character {
    constructor(tag, name, alive, image) {
      this.tag = tag,
      this.name = name,
      this.alive = alive
      this.image = image
    }
   }

import { AOACHARACTERS } from "./campaigns/aoa.js"
import { ECCHARACTERS } from "./campaigns/ec.js"
import { NOTGDCHARACTERS } from "./campaigns/notgd.js"
import { AVCHARACTERS } from "./campaigns/av.js"
import { OOACHARACTERS } from "./campaigns/ooa.js"
import { BLCHARACTERS } from "./campaigns/bl.js"
import { SOGCHARACTERS } from "./campaigns/sog.js";

export const CHARACTERS = AOACHARACTERS.concat(ECCHARACTERS, NOTGDCHARACTERS, AVCHARACTERS, 
  OOACHARACTERS, BLCHARACTERS, SOGCHARACTERS)