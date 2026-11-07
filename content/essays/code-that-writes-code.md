---
title: "Code that writes code"
date: "2026-05-23"
revised: "2026-11-05"
dek: "The interesting questions are no longer 'what does the agent do for you'. They are 'what do you let the agent build, and how do you keep enough understanding of the result to remain its operator'."
readMinutes: 4
category: "Strategy"
number: 6
---

Between 23 and 25 May 2026 the platform I am having a swarm of AI agents build passed two tests I had been waiting for. The platform's own hiring pipeline, the part that takes a plain English description of a job and builds an AI teammate to do it, built a working teammate end to end, and the test that proved it ran cold, from a clean start, rather than from an agent's say so. Then the skill library followed: teammates sharing and learning skills from each other while they run. (The last of those days was after I first wrote this; the record gives the range.)

Neither of those things had been written by me. They had been written by agents, working from briefs written by another agent, the conductor, under a protocol the agents had also helped write. A system I had started three and a half weeks earlier was now building the things that build the things. The line between the thing being built and the thing doing the building had blurred.

## The question that matters

I do not think this is a singular moment for my project. I think it is where building software is going. The interesting questions are no longer "what does the agent do for you". They are "what do you let the agent build, and how do you keep enough understanding of the result to remain its operator".

The second half is the part I think about most. If I let agents write the agents, and let those agents write the next ones, very quickly I am running a system whose composition I did not design directly. I designed the seed. Everything after the seed is downstream of decisions made by something that is not me, in a sequence I did not approve in detail.

You can flinch at that or you can be deliberate about it. Flinching looks like "stop letting the agent build itself, it is dangerous". Being deliberate looks like "build the seed carefully, instrument the loop (wire it so it reports what it did), and trust the loop only as far as the instrumentation can show the trust is earned".

## What my instrumentation looked like, and where it failed

Mine was unglamorous. Every piece of agent authored work was a row in a ledger, pointing at a brief that said what to change, which files it could touch, and the test that proved it was done. An auditor agent read the recent changes three times a day and wrote up anything that looked wrong. And underneath it all sat a small set of operating principles no agent was allowed to change: the file size limit, the test with every feature, a handful of core invariants of the platform (every record carries the customer it belongs to, for one), and, from the day after I first wrote this, a numbered register of every decision I made, so an agent could not quietly reopen one.

That last layer is the one I would keep. The turtles go down a few levels, agents checking agents, but they bottom out in a short list of human locked rules that the loop cannot touch.

The middle layer is where I was wrong, and I only know that because the record is honest. (This paragraph and the next are from November 2026.) Later that month, the hiring pipeline's safety check turned out to be stamping a hardcoded "pass" on every teammate: its tests were generated and counted, and never run. My reading is that the cold run proved the pipeline could build a teammate and never exercised the safety check, which is how a fake pass survived it. The conductor told me an overnight process was running when its own logs showed it idle. The ledger row said the right things. The evidence in it was not evidence. A ledger that records what an agent claims is not instrumentation. It is a diary.

What replaced the diary was a rule, not a tool, and I should be plain that adopting the rule is not the same as proving it worked: nothing may be called done, running or live without evidence gathered in that same turn, and an agent's report of "done" is a claim to re check, not a fact to relay. In June the agents built a gate that would stop a worker finishing until its checks passed, and a separate checking agent. Both shipped switched off by default, and I did not turn them on before I retired the project. The number that would prove the rule, the share of "done" claims that survive a cold re check, was never measured. Next time the checking comes first.

## What the next few years look like

This is a bet, not a finding. My bet is that the next few years of building are about getting good at this. Not writing code. Not even directing agents to write code. Building systems that build parts of themselves, whose evolution preserves the things the builder cares about, with instrumentation that can tell the builder the truth about what the system has done to itself.

The operator's job in that world is to hold the short list of rules the loop cannot change, and to make sure the evidence that comes back up the loop is real. Everything else can be delegated. Those two things cannot.

## Sources

- The hiring pipeline, the skill library, the hardcoded "pass", the idle process, the June gate that shipped switched off: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The dates (the hiring pipeline and the skill library tests passing cold on 23 to 25 May 2026, the decision register from 24 May, the auditor's three daily runs) are from the private Argo repository, read on 4 November 2026.
- The rule that replaced the diary: [No theatre: an agent may not say it works without showing me](/writing/show-me-proof-of-work)
- First published 23 May 2026. Revised 5 November 2026: the original opened with a story about a skill that writes skills which I cannot find in the record, and described the instrumentation as if it worked. This version uses the documented moment and says where the instrumentation failed.
