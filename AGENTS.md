# Project instructions

This repository is a lightweight, player-facing archive for the group's Pathfinder campaigns in Golarion. Evolve the existing site incrementally. Keep content entry simple enough to maintain as part of running a campaign.

## Architecture

- Keep the existing Golarion timeline at the site root. Preserve every event, its inline formatting, chronological date grouping, same-day order, and both the All and per-campaign views. Preserve the site's visual style where practical and check layouts on narrow screens.
- Keep the site compatible with GitHub Pages and repository-relative URLs. Use static HTML, CSS and plain JavaScript. Avoid frameworks, databases, paid services and backends.
- Keep existing campaign modules as the source for timeline events and rosters. Reuse portrait assets, campaign styling and the timeline's ordering logic. Derive campaign views from those records.
- Use a shared campaign catalogue keyed by existing campaign tags. Generate campaign selection from it. Use the shared Campaigns and Combined timeline links on desktop and mobile. Show confirmed statuses as a green dot for Complete or a yellow dot for In progress. Provide a text equivalent for assistive technology and on hover. Hellbreakers is In progress and the other nine existing campaigns are Complete. Omit unconfirmed statuses until supplied.
- Use a shared static archive template with shareable URLs for campaign overviews, session notes, and NPC and player-character profiles. Hide empty sections and missing optional fields. A campaign can have an overview based entirely on its existing events or roster.
- Add Markdown generation with the first sessions or profiles. Discover content files automatically and generate the archive index, rendered content, chronological navigation and backlinks from the sources. Keep generated output reproducible. Verify the existing Pages publishing settings before changing the build or deployment workflow.

## Main views

- **Campaign selection.** Provide a responsive grid of campaigns. Shades of Blood is temporarily hidden from the grid. Each card links to its hub and uses the campaign's existing colour, name and confirmed completion status. Use the status dots and text equivalents described above.
- **Combined timeline.** Keep the cross-campaign Golarion chronology at the site root. Open campaign-specific timelines from the selection grid. Preserve date badges, campaign colours and the existing alternating layout on wide screens.
- **Campaign hub.** Use existing character artwork across the top. Make the campaign's timeline the main feature and use a sidebar for available campaign information and links to sessions, player characters and NPCs. On narrow screens, stack the supporting information so the timeline has room to read. Hide empty sections.

Use the first two mock-ups as layout references and the existing combined timeline as the visual baseline. Use simple styling and existing or user-supplied player-facing artwork. Free Font Awesome icons may be used for interface symbols. Do not use AI-generated artwork or treat mock-up copy, subtitles, or statuses as campaign data.

## Content conventions

- Use structured metadata for short fields and relationships, and Markdown with YAML front matter for longer descriptions, recaps and profiles. Keep metadata and prose together where practical. Escape raw HTML and handle links safely in new Markdown while preserving the existing event formatting.
- Use stable IDs for campaigns, sessions, profiles and linked events. Existing campaign tags and dates can seed legacy event anchors. Persist IDs when linked so that date corrections preserve URLs. Assign distinct IDs to events in the same campaign on the same day.
- Give each session a campaign, title and campaign session order. The real-world play date is optional and uses YYYY-MM-DD. Store the optional Golarion date or date range separately. Session order drives previous and next links. Golarion dates drive the shared timeline. Store event dates in Absalom Reckoning. Campaign hubs default to AR. To opt a campaign into Imperial Calendar display, set calendar: "IC" in its entry in js/campaign-catalogue.js. IC displays three-letter Imperial month abbreviations and adds 2500 to AR years. Season of Ghosts currently opts in. The combined timeline and campaign selection always use AR.
- Keep each session narrative in one Markdown file. Put the stable ID, campaign, title, order, optional dates and relationship IDs in YAML front matter. Put the recap, headings, images and prose links in the Markdown body. Generate the session list and narrative detail from that file. Hide optional metadata when absent. Hellbreakers statistics begin with the next session played after this decision. Earlier sessions can be published without statistics and need no backfill.
- Store optional session statistics in a separate associated JSON file. Match it to the Markdown through the stable session ID. Automatically render available dice-roll distributions, degrees of success, combat statistics, damage, healing and individual character breakdowns. Hide the panel for sessions with no statistical data, and omit missing metrics. A recorded zero is valid when supported by the export. Exclude party attendance tracking and outstanding objectives.
- Design a versioned statistics schema with stable campaign, session and character IDs. Retain counts, totals, distribution buckets and denominators where supported so later campaign and character aggregates can be calculated from source measures.
- Calculate statistics deterministically from Foundry VTT session exports. Exclude estimates and AI-generated metrics. Consider a reusable local script that produces the associated JSON for review and reduces manual entry. Define counting rules using representative exports, omit unsupported or ambiguous metrics, and keep raw logs outside the publishing source.
- Add approved pre-campaign context to the campaign catalogue as optional historicalEvents entries with name and year in AR. Supply month and day together when known. Year-only entries appear before dated entries in the same year. Render these chronologically only in completed campaign hubs, with a scroll icon labelled Historical context and distinct styling. Exclude them from the combined timeline and recorded campaign date ranges. Keep spoilers out of the published source until the campaign is complete, since hiding content in the browser does not protect static source files.
- Record relationships once using IDs and derive backlinks. A campaign association establishes membership. A specific appearance needs an explicit session or event link. Allow one character profile to belong to multiple campaigns and inherit existing roster names and portraits where appropriate.
- Treat descriptions, campaign dates and status, portraits, affiliations, ancestry, class, background and related links as optional. Label any range derived from timeline events as the recorded timeline range. Store confirmed real-world campaign dates separately as optional realStart and realEnd fields in YYYY-MM-DD format. Show ongoing ranges with an open end. Backfill older campaigns only when requested.
- Publish only material explicitly intended for players. Keep GM-only notes and unpublished material outside the publishing source and public repository history. Never invent campaign lore, statuses, dates, characters, session details or other campaign content. Hellbreakers is the only campaign receiving archive sections for now. Other campaign hubs remain timeline-only. Use the mock-ups as layout references and use player-facing material supplied by the user. Defer player-character profiles until after session notes and NPCs, and use summaries supplied by the players.

## Development constraints

- Minimise ongoing manual maintenance. Reuse existing data and generate lists, links and navigation wherever practical. Validate unique IDs, references and image paths as the archive grows.
- Keep generative AI out of the website and its published features.
- Obtain the user's approval before making major architectural changes.
- Obtain the user's approval before committing, pushing or deploying anything.
- Keep ROADMAP.md current as features are completed or the agreed implementation plan changes.
