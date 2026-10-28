# Services

This workspace can bind local agents to hosted and local services. Keep service authority scoped to the user workspace.

## Hosted Services

| Service | Purpose | Config |
|---|---|---|
| HoloScript MCP | Parse, compile, validate, render, and convert semantic assets | `ecosystem/mcp-servers.yml` |
| Absorb | Repo scanning, graph intelligence, semantic search, Graph RAG | `ecosystem/mcp-servers.yml` |
| Orchestrator | Knowledge sync, workspace registry, federation | `config.yml` |
| HoloMesh | Agent network, W/P/G sharing, peer coordination | `ecosystem/mcp-servers.yml` |

## Local Services

Local agents may also use IDEs, browsers, package managers, local models, GPUs, WASM runtimes, and checked-out repos. Record machine-specific facts in `lab/hardware.yml`, not in root policy files.

## Binding Rule

Service keys live outside git. This repo stores service references, scopes, policies, and receipts.
