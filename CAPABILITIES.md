# Capabilities

This file is the human-readable index for generated capability scans.

Agents should refresh this inventory when services, MCP tools, local scripts, or IDE integrations change.

## Sources

| Source | What It Provides |
|---|---|
| `ecosystem/mcp-servers.yml` | Hosted MCP and service endpoints |
| `ecosystem/modules.yml` | Versioned workspace modules |
| `ecosystem/skills/` | Skill wrappers and routing hints |
| `lab/hardware.yml` | Local hardware and runtime abilities |
| `agents/roster.yml` | Available agent roles |
| `SERVICES.md` | Bound hosted/local services |

## Agent Rule

Before saying "we need to build X", check whether X already exists as a skill, MCP tool, service endpoint, local script, or archived module.

## Refresh Contract

Capability scans should write summarized results here and detailed machine output under `holoheal/receipts/` or a generated artifact path chosen by the service.
