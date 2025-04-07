export class Event {
    constructor(tag, name, year, month, day) {
      this.tag = tag,
      this.name = name,
      this.year = year,
      this.month = month,
      this.day = day
    }
   }

import { AGEOFASHES } from "./campaigns/aoa.js"
import { EXTINCTIONCURSE } from "./campaigns/ec.js"
import { NIGHTOFTHEGRAYDEATH } from "./campaigns/notgd.js"
import { ABOMINATIONVAULTS } from "./campaigns/av.js"
import { OUTLAWSOFALKENSTAR } from "./campaigns/ooa.js"
import { BLOODLORDS } from "./campaigns/bl.js"
import { SEASONOFGHOSTS } from "./campaigns/sog.js";

export const EVENTS = AGEOFASHES.concat(EXTINCTIONCURSE, NIGHTOFTHEGRAYDEATH, ABOMINATIONVAULTS, 
  OUTLAWSOFALKENSTAR, BLOODLORDS, SEASONOFGHOSTS)