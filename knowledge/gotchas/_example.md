---
id: "G.EXAMPLE.001"
type: "gotcha"
domain: "general"
confidence: 0.80
source: "production-incident"
tags: ["example", "template"]
---

KnowledgeExtractor depends on a fully populated CodebaseGraph.
If the absorb scan was partial or interrupted, extraction produces
incomplete entries with misleadingly high confidence. Always verify
graph completeness (file count, symbol count) before extracting.

Delete this file and replace with your own gotchas.
