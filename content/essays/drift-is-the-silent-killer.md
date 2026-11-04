---
title: "Drift is the silent killer of agent swarms"
date: "2026-05-22"
revised: "2026-11-05"
dek: "More agents in parallel feels like more throughput. It can be, but only if you have built the drift prevention underneath. Without it, the swarm quietly invalidates its own work."
readMinutes: 4
category: "Practice"
number: 11
---

The first time I knowingly lost real work to drift was nine days before I wrote this, on Argo, the platform I had a swarm of Claude and Codex agents building. Between one and four workers ran in parallel, each on its own written brief, each brief written against a recent copy of the main branch. A conductor agent wrote the briefs. On 13 May 2026 an audit of the conductor's briefs found that about a quarter of them had created a second version of something that already existed in the codebase. Clean code that passed its checks, and wrong.

The worst one was a second connection pool for outside services, built in one package while the real one lived in another. The copy did not keep customers' credentials apart. Nothing failed. Nothing was red. It could have handed one customer's keys to another. The platform had no paying customers, so as far as I know no real keys were ever at stake; I cannot prove that, and the point is that the code could not have proved it either.

The day that audit landed I learned, in a way no amount of reading could have taught me, that drift is the silent killer of agent swarms.

## Why drift is invisible from the inside

You can detect it. The agents themselves cannot, reliably. Each one works from a snapshot of the code, and a snapshot goes stale at exactly the speed the swarm is shipping. With one agent, drift is barely a problem. With several in parallel, as far as I could tell it was the most common reason their work invalidated itself; the one number I have is that quarter of the briefs. It was not the workers' fault. The brief writer was not checking what had already shipped before writing the next brief.

The prevention turned out to be mostly procedural, not technical. On 14 May I had the rules written into a playbook the conductor reads before writing any brief. Four of them did most of the work.

**Briefs declare freshness.** Every brief carries a header naming the exact commit (one saved change in the code's history) of the main branch (the shared copy of the code) it was written against, and the date. A script checks that header before a worker may claim the brief, and refuses a stale one.

**Grep before write.** Before a brief declares a new piece of code that other code will use (a type or a function), the author searches the codebase for the same name or a near match (grep is the search command). If one exists, the brief either extends it, replaces it, or carries a one line reason for the duplicate. No quiet copies.

**Wire or defer.** Every new public piece of code names the thing that will use it. If that consumer is not in the same brief, a follow up brief that wires it in goes in the same batch. "Land the scaffold now, wire it later" is the failure mode. The graveyard of agent produced code is mostly scaffolds that never got wired.

**Ledger drift sweep every tick.** Every time the conductor runs, a script compares the ledger (the one table that tracks every piece of work) with what is actually in the files and the change history: a row marked claimed with no worker on it, a row marked merged that never landed. Zero drift rows is the steady state, and the script reports any row that is not.

Each rule costs a little throughput on the easy days. On the hard days, when three agents converge on the same area and each believes it has the canonical view, those rules are why the swarm survives.

> Each rule is small. Each rule occasionally feels like overhead. They are not there for the easy days. They are there for the day one of them holds the line.

## The broader claim

I think the architecture of an agent swarm is mostly drift prevention. The model matters. The tools matter. But the structural choices, where state lives, how it is updated, how staleness is detected, how competing claims are resolved, those are the architecture.

If you are scaling a swarm and finding that more agents bring diminishing returns, drift is probably what you are hitting. The model is not the bottleneck. The shape of the swarm is the bottleneck.

My guess, from the aviation side of my career, is that this is also why human teams get harder to run past a certain size: the drift prevention of a fifty person organisation is the org chart, the stand up, the planning meeting, the steering committee. None of those translate cleanly to agents. The agent equivalents, freshness headers, grep before write, ledgers, wire or defer, are being invented in real time, and I was inventing mine two weeks in.

Pay attention to it. The models will keep getting faster. My bet is that drift is still the silent killer in five years.

## Sources

- The audit, the duplicate connection pool, and how the swarm ran: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The four rules are from Argo's drift prevention playbook (written 14 May 2026) and its scripts, which are in the private Argo repository. The dates here were checked against that repository's history on 4 November 2026.
- First published 22 May 2026. Revised 5 November 2026 to match the record: the original called the project "the project that became Skycot" (in May 2026 Argo was going to take the SKYCOT name; SKYCOT is now a different product), placed the incident about eighteen months earlier, and described an incident I could not find in the record. This version keeps the rules and replaces the story with the documented one.
