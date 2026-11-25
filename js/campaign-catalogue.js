export const CAMPAIGNS = [
  { id: "aoa", icon: "fire", name: "Age of Ashes", status: "Complete" },
  { id: "ec", icon: "music", name: "Extinction Curse", status: "Complete" },
  { id: "av", icon: "shield", name: "Abomination Vaults", status: "Complete" },
  { id: "notgd", icon: "eye", name: "Night of the Gray Death", status: "Complete" },
  { id: "ooa", icon: "cogs", name: "Outlaws of Alkenstar", status: "Complete" },
  { id: "bl", icon: "tint", name: "Blood Lords", status: "Complete" },
  { id: "sog", icon: "leaf", name: "Season of Ghosts", status: "Complete" },
  { id: "sw", icon: "tree", name: "Spore War", status: "Complete" },
  { id: "sob", icon: "diamond", name: "Shades of Blood", status: "Complete", hiddenFromSelection: true },
  {
    id: "hb", icon: "chain-broken", name: "Hellbreakers", status: "In progress", realStart: "2026-08-08",
    sections: [
      { name: "Session Notes", icon: "book" },
      { name: "Player Characters", icon: "users" },
      { name: "Important NPCs", icon: "user" }
    ]
  }
];
