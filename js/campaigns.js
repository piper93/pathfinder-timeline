import { AOACHARACTERS } from "./campaigns/aoa.js"
import { ECCHARACTERS } from "./campaigns/ec.js"
import { NOTGDCHARACTERS } from "./campaigns/notgd.js"
import { AVCHARACTERS } from "./campaigns/av.js"
import { OOACHARACTERS } from "./campaigns/ooa.js"
import { BLCHARACTERS } from "./campaigns/bl.js"
import { SOGCHARACTERS } from "./campaigns/sog.js";
import { SWCHARACTERS } from "/campaigns.sw.js";

export const CHARACTERS = AOACHARACTERS.concat(ECCHARACTERS, NOTGDCHARACTERS, AVCHARACTERS, 
  OOACHARACTERS, BLCHARACTERS, SOGCHARACTERS, SWCHARACTERS)

import { AGEOFASHES } from "./campaigns/aoa.js"
import { EXTINCTIONCURSE } from "./campaigns/ec.js"
import { NIGHTOFTHEGRAYDEATH } from "./campaigns/notgd.js"
import { ABOMINATIONVAULTS } from "./campaigns/av.js"
import { OUTLAWSOFALKENSTAR } from "./campaigns/ooa.js"
import { BLOODLORDS } from "./campaigns/bl.js"
import { SEASONOFGHOSTS } from "./campaigns/sog.js";
import { SPOREWAR } from "/campaigns/sw.js";

export const EVENTS = AGEOFASHES.concat(EXTINCTIONCURSE, NIGHTOFTHEGRAYDEATH, ABOMINATIONVAULTS, 
  OUTLAWSOFALKENSTAR, BLOODLORDS, SEASONOFGHOSTS, SPOREWAR)