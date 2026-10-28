# Playbook: Modularize Existing Work

Use this when the workspace contains archived or imported material that should become a reusable module.

1. Classify the source as doctrine, skill, capability, policy, service, agent, check, or experiment.
2. Identify the user-safe subset.
3. Remove machine-specific paths, secrets, and private service assumptions.
4. Assign a module name and version in `ecosystem/modules.yml`.
5. Add the module file or folder.
6. Add verification or receipt expectations.
7. Update `README.md`, `SKILLS.md`, or `CAPABILITIES.md` if discovery changes.
8. Compress the migration lesson into W/P/G.

## Dedupe Pass

If the module replaces repeated wording:

1. Put the canonical doctrine in one module.
2. Replace repeated paragraphs elsewhere with a one-sentence pointer.
3. Keep file-specific operating instructions.
4. Record the module version change in `ecosystem/modules.yml`.
5. Leave a receipt or retrospective explaining what was deduplicated.

## Version Rule

Prefer patch upgrades. Preserve user edits. Never replace a user's local policy file without a receipt and a diff.
