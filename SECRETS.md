# Secrets

Secrets are never product features. They are authority. This workspace handles authority through brokered handles and receipts.

## Rules

- Do not commit `.env` files or raw API keys.
- Do not print secrets in logs, prompts, issue text, commits, or knowledge entries.
- Use `secret://` references in config files.
- Prefer short-lived grants over long-lived credentials.
- Every secret access should produce a HoloDoor `policy.checked` receipt before the broker emits `secret.granted`.
- Agents receive handles, not plaintext, unless the user explicitly authorizes a break-glass flow.

## Secret Reference Shape

```yaml
ref: "secret://workspace/{workspace_id}/service/name"
scope: "service:read"
plaintextReturned: false
receipt_required: true
```

## Required Receipts

Secret access receipts should record:

- requesting agent
- requested handle
- scope
- service
- timestamp
- grant duration
- `plaintextReturned`
- HoloDoor policy decision id and outcome
- verification result

Receipts belong under `holoheal/receipts/` or the hosted broker receipt store.
