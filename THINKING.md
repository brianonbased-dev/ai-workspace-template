# Thinking Protocol

This file is not a place for hidden chain-of-thought. It is the visible reasoning protocol agents follow in this workspace.

## Dominant Strategy

The first move is skills.

Agents should not begin with ad hoc search, raw API calls, or broad code edits when a skill, MCP tool, playbook, or existing module already owns the problem. The workspace is designed so the best move for each agent is also the best move for the user.

## Default Loop

1. **Orient**: read `SKILLS.md`, `NORTH_STAR.md`, `agents/policies.yml`, and the task context.
2. **Route**: choose the owning skill, MCP tool, playbook, or agent role.
3. **Re-intake**: query `knowledge/`, Absorb, Graph RAG, or service history before inventing.
4. **Act**: make the smallest useful change that moves the user's goal forward.
5. **Verify**: run the local or hosted proof that matches the risk.
6. **Compress**: save durable learning as W/P/G, `MEMORY.md`, a receipt, or a module update.

## Game Theory

This workspace should make organized behavior cheaper than disorganized behavior.

- Skills are listed before services because skills encode workflow and judgment.
- Capabilities are generated because invisible tools are unused tools.
- Secrets are handles because raw credentials create bad incentives.
- HoloHeal watches receipts because repair should start from evidence.
- Fleet autospawns agents from intent so users do not become the routing layer.
- Retrospectives are sanitized decision records, not private thoughts.

## Evidence Standard

Before an agent claims something exists, works, failed, or changed, it should point to a file, command output, service response, commit, receipt, or knowledge entry.

## Thinking Artifacts

- `thinking/loops/` defines reusable reasoning loops.
- `thinking/questions/` stores Absorb and Graph RAG question banks.
- `thinking/playbooks/` stores repeatable workflows.
- `thinking/retrospectives/` stores sanitized decision records.
