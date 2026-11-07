---
title: "Drift is the silent killer of agent swarms"
date: "2026-05-22"
revised: "2026-11-05"
dek: "I found out in an audit, and nothing had gone red. Here are the four rules that stopped my swarm of coding agents from quietly duplicating its own work."
readMinutes: 3
category: "Practice"
number: 11
---

On 13 May 2026 I audited the briefs (written task instructions) my conductor agent had produced for Argo. About a quarter of them had created a second version of something that already existed in the codebase. Clean code. It passed its checks. It was wrong.

It was the first time I knowingly lost real work to drift (agents building from a stale copy of the code).

The worst case was a second connection pool for outside services, built in one package while the real one lived in another. The copy did not keep customers' credentials apart. Nothing failed. Nothing was red. It could have handed one customer's keys to another. Argo had no paying customers, so as far as I know no real keys were ever at stake. I cannot prove that, and the code could not have proved it either.

Between one and four Claude and Codex workers ran in parallel, each on its own brief, each written against a recent copy of the main branch (the shared copy of the code). You can detect it. The agents themselves cannot, reliably. A snapshot goes stale at exactly the speed the swarm ships. With one agent it barely matters. With several, as far as I could tell, it was the most common reason their work invalidated itself. The one number I have is that quarter.

It was not the workers' fault. The brief writer was not checking what had already shipped.

On 14 May I had four rules written into a playbook the conductor reads before any brief.

**Briefs declare freshness.** Every brief names the exact commit (one saved change in the code's history) it was written against. A script refuses a stale one.

**Grep before write.** Before a brief declares a new type or function, the author searches the codebase for the same name or a near match. If one exists, extend it, replace it, or give a one line reason for the duplicate. No quiet copies.

**Wire or defer.** Every new public piece of code names what will use it. If that consumer is not in the same brief, the follow up brief goes in the same batch. "Land the scaffold now, wire it later" is the failure mode.

**Ledger drift sweep every tick.** Each time the conductor runs, a script compares the ledger (the one table of all work) with the files and the history. Zero drift rows is the steady state.

Each rule costs a little throughput on the easy days. They are there for the day three agents converge on the same area and each believes it has the canonical view.

I think the architecture of a swarm is mostly drift prevention. The model matters. The tools matter. But where state lives, how it is updated and how staleness is detected are the architecture. If more agents are bringing you diminishing returns, drift is probably what you are hitting. The model is not the bottleneck. The shape of the swarm is.

My bet is that drift is still the silent killer in five years.

The audit that found the quarter, the duplicate pool, and what else slipped past are in the [Argo case study](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents). The four rules are above. If you run more than one agent, write yours down before you add another.

## Sources

- The audit, the duplicate connection pool, and how the swarm ran: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The four rules are from Argo's drift prevention playbook (written 14 May 2026) and its scripts, which are in the Argo repository, public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo). The dates here were checked against that repository's history on 4 November 2026.
- First published 22 May 2026. Revised 5 November 2026 to match the record: the original called the project "the project that became Skycot" (in May 2026 Argo was going to take the SKYCOT name; SKYCOT is now a different product), placed the incident about eighteen months earlier, and described an incident I could not find in the record. This version keeps the rules and replaces the story with the documented one.
