---
title: "Drift is the silent killer of agent swarms"
date: "2026-03-18"
dek: "More agents in parallel feels like more throughput. It can be — but only if you have built the drift-prevention architecture underneath. Without it, the swarm invalidates its own work."
readMinutes: 8
category: "Practice"
number: 11
---

The first time I lost a meaningful amount of agent-produced work to drift, it was about eighteen months ago, on the project that became Skycot. I had four agents running in parallel, each working on a different brief, each opened against a recent main. Three of them shipped successfully and merged. The fourth shipped successfully against a main that had moved underneath it sometime in the previous three hours. Its merge succeeded too — at the surface level. The diff was clean.

But the brief had been authored against a version of the codebase where a specific function existed. That function had been renamed in the meantime, by another brief. The merge did not detect this because the renamed function was not actually called by the new brief's tests — it was called by the new brief's *implementation*, which silently no-op'd because the rename created a new function and the old one became orphaned. Type-checking passed. Tests passed. Build passed. The code shipped to a staging environment and was discovered by a downstream agent eleven hours later when its expected callsite did not exist.

That afternoon I learned, in a way that no amount of reading about it could have taught me, that drift is the silent killer of agent swarms.

## Why drift is invisible from the inside

You can detect it. The agents themselves cannot, reliably. They are working from a snapshot, and a snapshot becomes stale at exactly the speed your swarm is shipping. If you are running one agent, drift is not really a problem. If you are running five in parallel, drift is the single most common reason their work invalidates itself.

The interesting thing is that the prevention is mostly procedural, not technical. The four rules I have ended up living by:

**Briefs declare freshness.** Every brief I author or accept now carries a freshness header: `Authored against origin/main <SHA> on <YYYY-MM-DD>`. A linter rejects any brief older than 24 hours from claim. Stale briefs are re-authored, not patched.

**Grep before write.** Before a brief declares a new public type or function, the author runs a grep for same-named or near-same-named symbols. If one exists, the brief either extends, supersedes, or carries a one-line justification for parallelism. No quiet duplicates.

**Wire or defer.** Every new public symbol names its consumer. If the consumer is not in the same brief or the immediate follow-up, the new symbol is deferred. "Land scaffold now, wire later" is a failure mode. The graveyard of agent-produced code is mostly scaffolds that never got wired.

**Ledger drift sweep every tick.** The conductor runs a script every iteration that looks for ledger rows whose state contradicts their on-disk evidence — briefs marked CLAIMED but with no worker assigned, briefs marked MERGED that did not in fact land. Zero drift rows is the steady state. Any drift is investigated before continuing.

Each of these rules costs the swarm a small amount of throughput on the easy days. On the hard days — when three agents are converging on the same area of code and each thinks they have the canonical view — those rules are the reason the swarm survives.

> Each rule is small. Each rule occasionally feels like overhead. The reason they are there is not the easy days. The reason they are there is the day when one of them holds and the swarm does not flood.

## The broader claim

I think the architectural design of an agent swarm is mostly drift-prevention architecture. The model choice matters. The tool choice matters. But the structural choice — where state lives, how it is updated, how staleness is detected, how parallel claims are resolved — that is the architecture.

If you are trying to scale an agent swarm and finding that more agents produces diminishing returns, drift is what you are hitting. The model is not the bottleneck. The shape of the swarm is the bottleneck.

This is, by the way, why human teams scale poorly past a certain size. The drift-prevention architecture of a fifty-person organisation is the org chart, the standup, the planning meeting, the steering committee. None of those translate cleanly to agents. The agent equivalents — freshness headers, grep-before-write, ledgers, wire-or-defer — are the architecture we are inventing in real time.

Pay attention to it. <span class="accent">The model gets faster every six months. Drift will still be the silent killer in five years.</span>
