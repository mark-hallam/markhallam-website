---
title: "If the agent keeps asking, fix its instructions"
date: "2026-05-22"
revised: "2026-11-05"
dek: "My agent spent its time asking me questions I could not answer. A better model was not the fix. Better instructions were."
readMinutes: 3
category: "Practice"
number: 12
---

I sat watching an agent I had asked to make a small fix. Several minutes in, it had not changed any code.

It was asking whether a variable name should match the file next to it or the project wide convention. I said: match the project. It asked whether the convention covered how acronyms were capitalised, or whether acronyms followed the older style used in three particular files. I said: I do not know, pick the more common one. It asked which it should consider more common, the older files or the newer ones. (This is from memory. I did not keep the transcript.)

My read is that the model was not the problem. I had handed it work with the context missing, then watched it spend its working life pulling that context out of me, one tiny decision at a time. That one was on me.

## What I changed

The fix was not a better model. It was the surface (what the agent reads before it starts). On Argo, the platform a swarm of agents built for me in 2026, that became four things:

**A project instructions file** every agent reads first. The rules, the limits, where things live. It has been there since the first day of code.

**A standard brief** (the written job). Each one names the exact commit it was written against, the intent, the files it may touch and the test that proves it is done. A lint (a script that checks a file against house rules) warns when a field is missing. A freshness check refuses a stale brief.

**A ledger** that is the single source of truth for what is claimed, by whom, and in what state. The agent reads it. It does not ask the conductor.

**Two rules from my drift playbook**, wire or defer and grep before write. Both run before the brief is written, not after the code lands.

I did not time the before and after. My impression, not a measurement, is that the clarifying questions stopped being what I spent my day on.

## Same Claude, same Codex

The agent takes whichever path is easiest. If that path is "ask the human", it will do that, possibly forever. If it is "read the instructions file and proceed", it proceeds.

I think most teams reach for the wrong lever. They tune the model, switch providers, adjust the system prompt. Those changes are real, but they are second order.

What surprised me is that once the surface was designed well, the same agent did, to my eye, much better work. The same Claude. The same Codex. No one changed its weights (the numbers inside the model). The environment just favoured the moves it was already inclined to make.

So stop tuning the model. The agent is not the variable. The surface is.

## Start here

The instructions file every agent read first is [AGENTS.md in the Argo code](https://github.com/mark-hallam/argo/blob/main/AGENTS.md), public now. The briefs and the ledger are in the [Argo case study](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents). Start with the instructions file. Every agent reads it first.

## Sources

- How the swarm ran on briefs and a ledger: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The brief format, the brief linting script (14 May 2026), the freshness check (8 May 2026) and the wire or defer and grep before write rules are in the Argo repository (public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo)), read on 4 November 2026. The rules are also in [Drift is the silent killer of agent swarms](/writing/drift-is-the-silent-killer).
- First published 22 May 2026. Revised 5 November 2026: the opening story is now labelled as recollection and the minute counts are gone; the four pieces of surface are described as they were built.
