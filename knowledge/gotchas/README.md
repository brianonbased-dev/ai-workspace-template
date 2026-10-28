# Gotcha Entries

Each `.md` file here is a single gotcha entry. Gotchas capture traps, edge cases, and failure modes your agents have encountered — high fan-in fragile files, API quirks, deployment pitfalls.

## Format

```yaml
---
id: "G.YOUR-DOMAIN.001"
type: "gotcha"
domain: "your-domain"
confidence: 0.85
source: "incident or observation"
tags: ["tag1", "tag2"]
---

Content body describing the gotcha and how to avoid it.
```

## Rules

- One entry per file
- `id` prefix: `G.` for gotchas
- `type` must be `gotcha`
- Files starting with `_` are examples — ignored by sync
