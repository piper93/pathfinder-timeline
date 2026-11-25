import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { CAMPAIGNS } from "../js/campaign-catalogue.js";
import { CHARACTERS } from "../js/campaigns.js";

const separator = /^-{10,}[ \t]*\r?$/m;
const messageHeader = /^\[\d{1,2}\/\d{1,2}\/\d{4}, \d{1,2}:\d{2}:\d{2}(?: [AP]M)?\] (.+)$/i;
const dieTerm = /\b[1-9]\d*d[1-9]\d*\b/i;
const singleD20 = /^1d20(?:\s*[+-]\s*\d+)*$/i;
const evaluatedD20 = /^(\d{1,2})(?:\s*[+-]\s*\d+)*$/;

function count(record, key, amount = 1) {
  record[key] = (record[key] ?? 0) + amount;
}

function recordRoll(stats, face) {
  count(stats, "rollMessages");
  if (face === undefined) return;
  stats.d20Faces ??= {};
  count(stats.d20Faces, face);
}

function parseRoll(lines) {
  if (lines.length !== 2 || !/^-?\d+$/.test(lines[0])) return undefined;
  const fields = lines[1].split("=").map(field => field.trim());
  if (fields.length !== 3) return undefined;
  const [formula, evaluated, total] = fields;
  if (!dieTerm.test(formula) || !/^-?\d+$/.test(total) || Number(lines[0]) !== Number(total)) return undefined;
  const natural = singleD20.test(formula) ? evaluated.match(evaluatedD20) : null;
  const face = natural ? Number(natural[1]) : 0;
  return { face: face >= 1 && face <= 20 ? face : undefined };
}

export function extractFoundryStats(source, { campaign, sessionId }) {
  const roster = CHARACTERS.filter(character => character.tag === campaign).map(character => ({
    name: character.name,
    id: campaign + "-" + character.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")
  }));
  const totals = {};
  const characters = {};
  let messages = 0;

  function statsFor(name) {
    const normalizedName = name.toLowerCase();
    const exact = roster.find(character => character.name.toLowerCase() === normalizedName);
    const prefixes = roster.filter(character => normalizedName.startsWith(character.name.toLowerCase() + " "));
    const character = exact ?? (prefixes.length === 1 ? prefixes[0] : undefined);
    if (!character) return undefined;
    return characters[character.id] ??= { name: character.name, metrics: {} };
  }

  for (const block of source.replace(/^\uFEFF/, "").split(separator)) {
    const [header, ...lines] = block.trim().split(/\r?\n/).map(line => line.trim());
    const match = header.match(messageHeader);
    if (!match) continue;
    messages++;

    const roll = parseRoll(lines);
    if (roll) {
      recordRoll(totals, roll.face);
      const actor = statsFor(match[1]);
      if (actor) recordRoll(actor.metrics, roll.face);
      continue;
    }

    // Foundry names the HP recipient in the application message.
    if (lines.length !== 1) continue;
    const applied = lines[0].match(/^(.+?) (takes|is healed for) (\d+) damage\.$/);
    if (!applied) continue;
    const [, name, operation, amount] = applied;
    const metric = operation === "takes" ? "damageTaken" : "hpHealed";
    count(totals, metric, Number(amount));
    const recipient = statsFor(name);
    if (recipient) count(recipient.metrics, metric, Number(amount));
  }

  if (!messages) throw new Error("No Foundry chat messages found in the expected text export format.");
  return { schemaVersion: 1, campaign, sessionId, totals, characters };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const [sourcePath, campaign, sessionId] = process.argv.slice(2);
    if (!sourcePath || !CAMPAIGNS.some(entry => entry.id === campaign) || !/^[a-z0-9-]+$/.test(sessionId ?? "") || process.argv.length !== 5) {
      throw new Error("Usage: node scripts/extract-foundry-stats.mjs <chat-export.txt> <campaign-id> <session-id>");
    }
    const source = await readFile(sourcePath, "utf8");
    process.stdout.write(JSON.stringify(extractFoundryStats(source, { campaign, sessionId }), null, 2) + "\n");
  } catch (error) {
    process.stderr.write(error.message + "\n");
    process.exitCode = 1;
  }
}
