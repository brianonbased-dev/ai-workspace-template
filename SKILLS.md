# Skills

Skills are the first routing layer for agents in this workspace.

## Rule

Before raw commands or broad exploration, agents check this file and `ecosystem/skills/`.
For pressure-based routing, load `ecosystem/skills/lobby.yml` first.

## Core Skills

| Skill | Use When | First Evidence |
|---|---|---|
| Absorb / Graph RAG | Understand a repo, dependency graph, or project history | Graph query result or code citation |
| Codebase | Find symbols, impact, type errors, or refactor paths | Symbol path, impact list, or test output |
| HoloScript | Parse, compile, simulate, render, or convert semantic assets | Compiler or validation output |
| HoloDoor | Gate tool use, MCP config, and secret grants before execution | Policy decision or telemetry receipt |
| HoloHeal | Monitor health, route failures, collect receipts | Health receipt or failing check |
| HoloClaw | Repair build, type, route, or integration failures | Patch plus verification |
| HoloMesh | Share knowledge, ask peers, publish reusable learning | W/P/G entry or message receipt |
| Fleet | Spawn or coordinate agents for a user goal | Assignment or autospawn receipt |
| Secret Broker | Request credential authority by handle | Grant receipt with no plaintext exposure |

## Fallback

If no skill owns the task, create or update a skill entry instead of teaching every agent the same workflow again.
