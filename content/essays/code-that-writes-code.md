---
title: "Let agents write the agents. Keep the rules and the checking."
date: "2026-05-23"
revised: "2026-11-05"
dek: "My agents built the pipeline that builds agents. Its safety check said pass every time, and had never run. Here is what I trusted, what failed, and the one rule that replaced my diary."
readMinutes: 3
category: "Strategy"
number: 6
---

The safety check on my hiring pipeline said "pass" for every AI teammate it looked at. The word was hardcoded. The tests behind it were generated and counted, and never run.

That is the part I got wrong, and the record says so plainly.

## How it got there

Between 23 and 25 May 2026 the platform my swarm of AI agents was building passed two tests I had been waiting for. The hiring pipeline, the part that takes a plain English description of a job and builds a teammate to do it, built a working one end to end. The test ran cold, from a clean start, not on an agent's say so.

I wrote none of it. Agents wrote it, from briefs written by another agent (the conductor), under a protocol the agents helped write. I had started the system three and a half weeks earlier. I designed the seed. Everything after that was downstream of decisions I did not approve in detail.

So the question is not what the agent does for you. It is what you let it build, and how you keep enough understanding to stay its operator.

## Where my instrumentation failed

Mine was unglamorous. Every piece of agent work was a row in a ledger, with a brief, the files it could touch and the test that proved it done. An auditor agent read recent changes three times a day. Underneath sat a short list of rules no agent could change, including a numbered register of my decisions.

I would keep that last layer. The middle one failed.

My reading is that the cold run proved the pipeline could build a teammate, and never exercised the safety check. That is how a fake pass survived. The conductor also told me an overnight process was running when its own logs showed it idle. The ledger row said all the right things. The evidence in it was not evidence.

A ledger that records what an agent claims is not instrumentation. It is a diary.

## What replaced the diary

A rule, not a tool. Nothing may be called done, running or live without evidence gathered in that same turn. An agent saying "done" is a claim to re check, not a fact to relay.

Adopting a rule is not proving it works. In June the agents built a gate that stops a worker finishing until its checks pass, and a separate checking agent. Both were built in June, late in the run. Now they go in first and switched on. I never measured how many "done" claims survive a cold re check. Next time the checking comes first.

This is a bet, not a finding. My bet is that the operator's job is to hold the short list of rules the loop cannot change, and to make sure the evidence coming back up is real. Everything else can be delegated. Those two things cannot.

## Where it lives now

The rule that replaced the diary is in [Get your agents to show you their work](/writing/show-me-proof-of-work). The nearest thing I publish is [mStack](https://github.com/mark-hallam/mstack), open source. Its outcome-first and multi-evaluator skills will not call a task done without evidence attached.

## Sources

- The hiring pipeline, the skill library, the hardcoded "pass", the idle process, the June gate: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The dates (the hiring pipeline and the skill library tests passing cold on 23 to 25 May 2026, the decision register from 24 May, the auditor's three daily runs) are from the Argo repository (public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo)), read on 4 November 2026.
- The rule that replaced the diary: [Get your agents to show you their work](/writing/show-me-proof-of-work)
- First published 23 May 2026. Revised 5 November 2026: the original opened with a story about a skill that writes skills which I cannot find in the record, and described the instrumentation as if it worked. This version uses the documented moment and says where the instrumentation failed.
