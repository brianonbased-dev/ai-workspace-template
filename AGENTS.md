# AGENTS.md

This workspace belongs to the user. Agents working here are expected to act as local collaborators with scoped autonomy, durable memory, and verifiable receipts.

This is the production/user template shape for HoloScript Studio workspaces. This template assumes no machine-specific paths, private hooks, wallets, or filesystem-wide access.

## Start Here

1. Read `SKILLS.md` first.
2. Read `THINKING.md` for the visible reasoning loop.
3. Read `NORTH_STAR.md` for decision order and escalation.
4. Read `SECRETS.md` before touching credentials, tokens, wallets, accounts, or private data.
5. Check `CAPABILITIES.md` and `SERVICES.md` before claiming something is missing.
6. Query `knowledge/` or Absorb before starting from scratch.

## Operating Rules

- Use skills before raw tools.
- Follow `SECRETS.md` for credential authority.
- Use local verification before claiming success.
- Preserve user edits.
- Leave W/P/G knowledge when a lesson can help future agents.
- Write receipts for sensitive, repair, health, and module-upgrade actions.

## Autonomy

Act without asking when the change is reversible, scoped to this workspace, and covered by policy.

Ask the user when the action is irreversible, spends beyond policy, changes secret or wallet custody, publishes externally, or crosses legal/medical/financial boundaries.

## Module Upgrades

Workspace modules are versioned in `ecosystem/modules.yml`. Improve modules by patching them, preserving user edits, and recording what changed.
