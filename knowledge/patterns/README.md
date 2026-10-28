# Pattern Entries

Each `.md` file here is a single pattern entry. Patterns capture recurring structures your agents discover — naming conventions, architectural styles, pipeline shapes, test strategies.

## Format

```yaml
---
id: "P.YOUR-DOMAIN.001"
type: "pattern"
domain: "your-domain"
confidence: 0.90
source: "where-this-was-observed"
tags: ["tag1", "tag2"]
---

Content body describing the pattern.
```

## Rules

- One entry per file
- `id` prefix: `P.` for patterns
- `type` must be `pattern`
- Files starting with `_` are examples — ignored by sync
