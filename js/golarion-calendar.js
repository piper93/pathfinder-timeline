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

function formatDate({ year, month, day }) {
  return day + " " + MONTHS[month - 1] + " " + year;
}

export function formatGolarionRange(events, ongoing) {
  const sorted = [...events].sort((first, second) => dateKey(first) - dateKey(second));
  if (!sorted.length) return "";

  const start = formatDate(sorted[0]);
  const end = formatDate(sorted.at(-1));
  if (ongoing) return start + " –";
  return start === end ? start : start + " – " + end;
}
