# Absorb Graph RAG Question Bank

Use these questions before refactors, migrations, or new features. Add project-specific questions as the workspace learns.

## Universal

- What are the most central files, symbols, and services in this repo?
- Which modules have high fan-in or fan-out?
- What changed recently, and what depends on it?
- What tests cover this behavior?
- What known gotchas exist for this area?

## Product

- Which routes or screens represent active user workflows?
- Which features are complete, disabled, experimental, or archived?
- What data model supports each workflow?

## Security And Secrets

- Where are secrets referenced, and are they raw values or handles?
- Which code paths can access credentials, wallets, tokens, or user data?
- What audit receipts exist for sensitive operations?

## AI Agents

- Which agents exist, what do they own, and where are their policies?
- Which tasks should autospawn a specialist agent?
- Which workflows bypass skills or capabilities?

## Code And Infrastructure

- What build, test, deploy, and health commands are canonical?
- Which scripts are referenced by CI but missing locally?
- What services are mocked, stubbed, or fail-loud?

## DeFi And Finance

- Which contracts, wallets, signers, and chains are in scope?
- What transactions can move funds?
- What simulation or policy gates must pass before mainnet actions?

## XR, Robotics, And Hardware

- Which runtime targets are supported locally?
- What GPU, WebGPU, WASM, browser, or device constraints matter?
- What evidence proves this ran on real hardware?

## Research And Papers

- What claims does this project make?
- What evidence, ablations, benchmarks, or demos support those claims?
- Which claims need more data before publication?

## Enterprise And Operations

- What service-level commitments exist?
- Which integrations are tier-gated?
- What receipts prove uptime, access, and repair history?
