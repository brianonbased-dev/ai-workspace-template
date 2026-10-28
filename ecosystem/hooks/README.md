# Lifecycle Hooks

Add hook scripts here. Hooks run in response to agent lifecycle events:

- `PostToolUse` — after any tool call (validation, logging)
- `Stop` — when agent session ends (cleanup, compression)
- `PreToolUse` — before a tool call (gating, approval)

Hooks are `.mjs` files executed by the agent harness.
