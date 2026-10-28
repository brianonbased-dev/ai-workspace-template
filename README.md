# AI Workspace

Your private knowledge store, agent configuration, and AI ecosystem — all in one repo.

## What This Is

This repo IS your account. Your agents read and write here. Git is the audit trail. GitHub is the dashboard.

```
NORTH_STAR.md     → Your workspace vision and decision oracle
AGENTS.md         → Agent behavior contract for IDEs and services
THINKING.md       → How local agents reason, choose skills, act, and learn
SKILLS.md         → First screen for agents: what skills exist and when to use them
CAPABILITIES.md   → Generated inventory of APIs, MCP tools, and local abilities
SECRETS.md        → Secret-broker policy: handles and receipts, never raw keys
SERVICES.md       → Hosted and local services bound to this workspace
MEMORY.md         → Durable memory index for agents
QUICKSTART.md     → HoloScript API quickstart: compile, render, deploy
knowledge/        → W/P/G entries your agents discover
agents/           → Agent roster, policies, and IDE-specific profiles
thinking/         → Loops, question banks, playbooks, retrospectives
ecosystem/        → MCP servers, skills, hooks, HoloDoor policy, module versions
holoheal/         → Self-healing checks and receipts
fleet/            → Autospawn and task coordination policy
lab/              → Hardware capability snapshot and experiments
profile.yml       → Your identity and tier
config.yml        → Workspace settings
```

## Setup

1. **Use this template** → click "Use this template" on GitHub to create your private copy
2. **Set repo secrets** (Settings → Secrets and variables → Actions):

   | Secret | Value |
   |--------|-------|
   | `HOLOSCRIPT_API_KEY` | Your orchestrator API key |
   | `ORCHESTRATOR_URL` | `https://your-orchestrator.example.com` |
   | `WORKSPACE_ID` | `ws-{your-github-username}` |

3. **Edit `profile.yml`** with your username and preferences
4. **Push to main** — the sync action runs automatically

## Adding Knowledge

Create a `.md` file in the appropriate directory:

```markdown
---
id: "W.MY-DOMAIN.001"
type: "wisdom"
domain: "my-domain"
confidence: 0.90
source: "where-i-learned-this"
tags: ["tag1", "tag2"]
---

What I learned. This gets synced to the knowledge store
and embedded for semantic search.
```

| Type | Directory | ID Prefix | What It Captures |
|------|-----------|-----------|------------------|
| Wisdom | `knowledge/wisdom/` | `W.` | What your agents learned |
| Pattern | `knowledge/patterns/` | `P.` | Recurring structures discovered |
| Gotcha | `knowledge/gotchas/` | `G.` | Traps and edge cases encountered |

## How Sync Works

```
Push .md files to knowledge/ on main
  → GitHub Action reads all entries
  → Parses YAML frontmatter
  → POSTs to orchestrator /knowledge/sync
  → Entries embedded in pgvector for semantic search
  → Other agents in your workspace can query them via MCP
```

PRs that touch `knowledge/` get automatic validation — frontmatter schema, duplicate IDs, type-directory consistency.

## Agent Integration

Point your agent at this repo. It reads `SKILLS.md` first, then `THINKING.md`, `NORTH_STAR.md`, `agents/roster.yml`, `agents/policies.yml`, `ecosystem/modules.yml`, `ecosystem/mcp-servers.yml`, and `knowledge/`.

The loop:
1. Agent starts work -> checks `SKILLS.md` and selects the owning skill/tool
2. Agent queries Absorb/knowledge before acting (RE-INTAKE)
3. Agent acts locally under `SECRETS.md` policy
4. Agent verifies the result on the user's machine or service tier
5. Agent extracts W/P/G, commits entries, and syncs to orchestrator
6. Next session starts with compounded knowledge

## MCP Servers

| Server | URL | Tools |
|--------|-----|-------|
| HoloScript | `https://mcp.holoscript.net` | 122 — parse, compile, render |
| Absorb | `https://absorb.holoscript.net` | 20 — scan, extract, search |
| Orchestrator | `https://your-orchestrator.example.com` | Knowledge federation |
