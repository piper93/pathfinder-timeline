export const MONTHS = [
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

function dateKey({ year, month, day }) {
  return year * 10000 + month * 100 + day;
}

const IMPERIAL_MONTHS = [
  "Prima", "Snappe", "Anu", "Rusanne", "Farlong", "Sola",
  "Fletch", "Hazen", "Nuvar", "Shaldo", "Joya", "Kai"
];

export function displayGolarionDate({ year, month, day }, calendar) {
  if (calendar === "IC") {
    return { day, month: IMPERIAL_MONTHS[month - 1].slice(0, 3).toUpperCase(), year: year + 2500 };
  }
  return { day, month: MONTHS[month - 1], year };
}

function formatDate(event, calendar) {
  const { day, month, year } = displayGolarionDate(event, calendar);
  return day + " " + month + " " + year;
}


export function formatGolarionRange(events, ongoing, calendar) {
  const sorted = [...events].sort((first, second) => dateKey(first) - dateKey(second));
  if (!sorted.length) return "";

  const start = formatDate(sorted[0], calendar);
  const end = formatDate(sorted.at(-1), calendar);
  if (ongoing) return start + " –";
  return start === end ? start : start + " – " + end;
}
