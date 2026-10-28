# Wisdom Entries

Each `.md` file here is a single wisdom entry. Wisdom captures what your agents have learned — language distributions, architectural insights, codebase-scale observations, hub file identification.

## Format

```yaml
---
id: "W.YOUR-DOMAIN.001"
type: "wisdom"
domain: "your-domain"
confidence: 0.95           # 0.0 to 1.0
source: "where-this-was-learned"
tags: ["tag1", "tag2"]
---

Content body. This is what gets synced to the knowledge store
and embedded for semantic search.
```

## Rules

- One entry per file
- `id` must be unique across your workspace
- `confidence` range: 0.0 to 1.0
- `type` must be `wisdom` (must match this directory)
- Files starting with `_` are examples — ignored by sync
- `README.md` is ignored by sync
