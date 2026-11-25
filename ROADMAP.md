# Roadmap

## Completed

- The existing site provides a chronological Golarion timeline, an All view, per-campaign filtering and campaign portrait rosters.
- The repository review verified 277 events across 10 campaign modules and 56 character records with valid local portrait paths.
- The archive architecture and content conventions are documented in AGENTS.md. Hellbreakers is the first campaign for piloting the new features and is confirmed In progress. The other nine campaigns are confirmed Complete. The selection grid displays these statuses as labelled green and yellow dots.

- A shared catalogue drives the campaign selection grid. The Campaigns and Combined timeline links provide the main navigation. The grid shows nine campaigns and their confirmed status. Shades of Blood is temporarily hidden, and each card opens its campaign hub.

- Campaign cards open shared hubs with existing portraits, a campaign timeline and a sidebar for status and date ranges.

## Remaining work

### 1. Campaign selection, combined timeline and campaign hubs

- [ ] Keep the existing combined timeline at the site root, starting on All, and provide navigation between it, the selection grid and the campaign hubs.
- [ ] Review the shared hub layout with Hellbreakers on desktop and mobile. Add confirmed real-world campaign dates as supplied.
- [ ] Use the mock-ups for layout and keep the styling simple. Reuse existing artwork and add only user-supplied player-facing artwork where available.
- [ ] Verify that the 277 existing events retain their text, formatting, date grouping and same-day order. Check filtering, keyboard access, narrow layouts and repository-relative links.

### 2. Hellbreakers session notes and timeline links

- [ ] Add Markdown with YAML front matter and a small generator for the static archive index and rendered content. Validate IDs, links and image references.
- [ ] Pilot with player-facing Hellbreakers notes supplied by the user. Show optional real-world and Golarion dates and generate chronological lists and previous and next links.
- [ ] Add stable event anchors and optional links between timeline entries, campaign pages and session notes. Verify direct links to events in filtered views.
- [ ] Confirm the Pages publishing source and agree on local generation or GitHub Actions before changing deployment settings. Obtain approval before committing, pushing or deploying.

### 3. Hellbreakers NPC and player-character profiles

- [ ] Add individual NPC and player-character profiles with optional metadata, portraits and Markdown descriptions. Use supplied player-facing content and reuse existing roster data.
- [ ] Support membership in multiple campaigns and derive related sessions and timeline events from explicit references. Show profiles on associated campaign overviews and link to them from relevant timeline entries.
- [ ] Verify populated and sparse campaign views. Extend the archive to other campaigns as the user supplies material.
