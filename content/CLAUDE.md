# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this vault.

## Overview

This is an **Obsidian vault** for the lore and worldbuilding of an **Exalted 2nd Edition** campaign called **"Exalted: A era da Ascensão"** (The Age of Ascension). The vault is **lore-only** — no game rules, character sheets, charm databases, or mechanical references. Written primarily in **Brazilian Portuguese**.

## Vault Structure

```
Inbox/                ← Unsorted notes awaiting triage
World/
  Locations/          ← Villages, settlements, geography, maps
  People/             ← NPCs, factions, gods, spirits, cultures
  History/            ← Mythology, past events, lore narratives, letters, prophecies
  Items/              ← Artifacts, manses, weapons (lore/narrative only)
Campaigns/
  Era da Ascensão/
    Characters/       ← PCs (Amaterasu, Barbar, Ivar, Mufasa, Ravi, Sayri, Suruk, Ubiraci, Urza Aolan)
    Sessions/         ← Session notes (Sessions 7–41)
  8 Akumas/           ← Second campaign arc (Sessions 1–17)
Templates/            ← Note templates
Attachments/          ← All images (Portraits/, Maps/, Sessions/, Other/)
```

## Current Mission: Atomic Note Extraction

The vault was imported from Notion and contains many long, mixed-content notes. The goal is to transform them into a clean, interlinked knowledge base:

1. **Triage** — Read notes in `Inbox/` and identify distinct lore concepts
2. **Extract** — Split each concept into its own atomic note (one idea per file)
3. **Classify** — Move the note to the correct folder (`World/People/`, `World/Locations/`, etc.)
4. **Tag** — Add YAML frontmatter tags to every note for filtering and graph navigation
5. **Link** — Add `[[wiki-links]]` to connect related notes

### Frontmatter Format

Every note should have YAML frontmatter:

```yaml
---
tags:
  - type/person | type/location | type/event | type/artifact | type/faction | type/creature | type/letter | type/prophecy | type/session
  - campaign/ascensao | campaign/8akumas
  - era/first-age | era/second-age | era/primordial-war  # when applicable
aliases:
  - Alternative Name
---
```

### What to Keep vs. Discard

- **Keep**: Narrative, worldbuilding, character backstories, session summaries, letters, prophecies, NPC descriptions, location descriptions, political plots, mythology
- **Discard**: Charm stats, dice mechanics, character sheets with stats, XP tracking, combat rules, homebrew rule systems (Mandate), GM evaluation rubrics, any purely mechanical content

### Atomic Note Guidelines

- One concept per file — a person, a place, an event, a letter, etc.
- File name = concept name (e.g., `Bodhisattva Vinayaka.md`, `Wangler's Knob.md`)
- If a session note contains lore, extract the lore into separate notes and link back from the session
- Preserve the original narrative voice — don't rewrite prose, just reorganize it

## Key Conventions

- Use Obsidian `[[wiki-links]]` for all cross-references
- Charm and power names stay in English when referenced in narrative context
- New unsorted content goes in `Inbox/` first
- When in doubt about classification, leave the note in `Inbox/` with a `#needs-review` tag

## Language

Write in **Brazilian Portuguese**. Charm names and canonical Exalted terms stay in English.
