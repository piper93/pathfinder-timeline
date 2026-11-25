# Roadmap

## Completed

- The existing site provides a chronological Golarion timeline, an All view, per-campaign filtering and campaign portrait rosters.
- The repository review verified 277 events across 10 campaign modules and 56 character records with valid local portrait paths.
- The archive architecture and content conventions are documented in AGENTS.md. Hellbreakers is the first campaign for piloting the new features and is confirmed In progress. The other nine campaigns are confirmed Complete. The selection grid displays these statuses as labelled green and yellow dots.

- A shared catalogue drives the campaign selection grid. The Campaigns and Combined timeline links provide the main navigation. The grid shows nine campaigns and their confirmed status. Shades of Blood is temporarily hidden, and each card opens its campaign hub.

- Campaign cards open shared hubs with existing portraits, a campaign timeline and a sidebar for status and date ranges.

- The Hellbreakers sidebar links to its timeline and marks Session Notes, Player Characters and Important NPCs as WIP.

- Completed campaign hubs support separately styled historical context entries. Add entries as approved player-facing material is supplied.

## Remaining work

### 1. Campaign selection, combined timeline and campaign hubs

- [ ] Keep the existing combined timeline at the site root, starting on All, and provide navigation between it, the selection grid and the campaign hubs.
- [ ] Review the shared hub layout with Hellbreakers on desktop and mobile. Add confirmed real-world campaign dates as supplied.
- [ ] Use the mock-ups for layout and keep the styling simple. Reuse existing artwork and add only user-supplied player-facing artwork where available.
- [ ] Verify that the 277 existing events retain their text, formatting, date grouping and same-day order. Check filtering, keyboard access, narrow layouts and repository-relative links.

### 2. Hellbreakers session notes and timeline links

- [ ] Add Markdown with YAML front matter and a small generator for the static archive index and rendered content. Validate IDs, links and image references.
- [ ] Use one Markdown file per session and pilot the format with the first supplied player-facing Hellbreakers recap. Store optional dates and relationships in that same file.
- [ ] Add a Session Notes list and detail view inside the Hellbreakers hub. Use the mock-ups for layout, omitting the Discoveries & Notable Items panel. Generate previous and next links by session order, and show related timeline events when available. Keep all other campaign hubs timeline-only.
- [ ] Add stable event anchors and optional links between timeline entries, campaign pages and session notes. Verify direct links to events in filtered views.
- [ ] Confirm the Pages publishing source and agree on local generation or GitHub Actions before changing deployment settings. Obtain approval before committing, pushing or deploying.

### 3. Hellbreakers important NPCs

- [ ] Add a grid of NPC profiles with optional portraits, descriptions and affiliations from supplied player-facing content. Derive related sessions and timeline events from explicit references. Add search and affiliation filtering when the profile list warrants them.

### 4. Optional Foundry session statistics

Start collecting statistics with the next Hellbreakers session. Earlier recaps can be published without statistics.

- [ ] Review a representative Foundry VTT export and define deterministic counting rules for dice-roll distributions, degrees of success, combat statistics, damage, healing and individual character breakdowns.
- [ ] Define and validate a versioned JSON schema associated with each session Markdown file. Keep stable IDs and aggregatable measures for future campaign and character totals.
- [ ] Automatically render available statistics on session pages. Hide the panel without data and omit individual missing metrics. Exclude party attendance and outstanding objectives.
- [ ] Evaluate a reusable local script that turns supported exports into the associated JSON for review. Keep raw exports out of the published site.

### 5. Hellbreakers player characters

- [ ] Add character profiles last, using player-written summaries and existing portraits where appropriate. Support optional character metadata and multi-campaign membership.
