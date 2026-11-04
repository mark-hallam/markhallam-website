---
title: "The path of least resistance for agents"
date: "2026-05-22"
revised: "2026-11-05"
dek: "If your AI worker keeps asking for clarification, the problem isn't the model. The problem is the surface you handed it. The craft is shaping the workspace so the agent can just go."
readMinutes: 4
category: "Practice"
number: 12
---

I sat watching an agent I had asked to make a small fix. Several minutes in, it had not changed any code. It was asking whether a variable name should match the file next to it or the project wide convention. I said: match the project. It asked whether the convention covered how acronyms were capitalised, or whether acronyms followed the older style used in three particular files. I said: I do not know, pick the more common one. It asked which it should consider more common, the older files or the newer ones. (This is from memory; I did not keep the transcript.)

My reading, then and now, is that this was not a model problem. It was an environment problem. I had handed the agent a piece of work with the context missing, then watched it spend its working life trying to extract that context from me one tiny decision at a time.

The fix was not a better model. It was a better surface: the instructions the agent reads before it starts. On Argo, the platform a swarm of agents is building for me as I write this, that surface became a project instructions file every agent reads first (in place since the first day of code), a canonical brief format, a lint that warns when a brief lacks a field a worker needs, and a freshness check that refuses a stale one. I did not time the before and after. What I can say, and it is my impression rather than a measurement, is that the clarifying questions stopped being the thing I spent my day on.

## The variable is the surface, not the model

The lesson, which I now believe is the central craft of working with capable agents: the model is not the variable you control most. The surface is.

The model is roughly the same model everyone else is using. The surface, the briefs, the ledger, the freshness checks, the file size limits, the one canonical home for each type, is yours to design. That surface is where most of the work lives.

I think of it as the path of least resistance. The agent takes whichever path is most frictionless to advance the work. If the most frictionless path is "ask the human a question", it will do that, possibly forever. If the most frictionless path is "read the instructions file and proceed", it will proceed.

You can engineer this. It is mostly unglamorous. These are the pieces of surface that did the work on Argo:

**A project instructions file** that every agent reads before it starts, in place since the first day of code: the rules, the limits, and where things live.

**A canonical brief format.** Every brief carries a freshness header naming the exact commit it was written against, the intent, the list of files it may touch, and the test that proves it is done. A lint (a script that checks a file against the house rules) runs when the brief is saved into the project and warns about a missing field; a freshness check runs when a worker claims the brief and refuses a stale one. The agent never sees a brief without the surface it needs to act.

**A ledger that is the single source of truth** for what is claimed, who claimed it, and what state it is in. The agent does not ask the conductor whether anything is in flight. It reads the ledger.

**Two rules from the drift playbook**, "wire or defer" and "grep before write", which I describe in [Drift is the silent killer of agent swarms](/writing/drift-is-the-silent-killer). Both run before the brief is written, not after the code lands, so dead code and duplicate copies accumulate more slowly and a scheduled sweep catches what slips through.

Each of these is a small piece of surface design. None is a model change. As far as I could see they moved the agents' time from negotiating with me to shipping. I cannot give you the percentage, and I would distrust anyone who could.

## The wrong lever

I keep coming back to this because my read is that most teams trying to get agents working are reaching for the wrong lever. They tune the model. They switch providers. They adjust the system prompt. Those changes are real, but they are second order.

The first order change, the one most teams are not making, is the surface change. Build the workspace so that the path of least resistance is forward progress.

There is a side effect that took me by surprise. Once the surface is well designed, the same agent does, to my eye, much better work. The same Claude. The same Codex. No model change. Surface change. The agent becomes more capable not because anyone changed its weights (the numbers inside the model) but because the environment now favours the moves it was already inclined to make.

This is the closest I have come to an operating principle in this space. The agent is not the variable. The surface is.

## Sources

- How the swarm ran on briefs and a ledger: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The brief format, the brief linting script (14 May 2026), the freshness check (8 May 2026) and the wire or defer and grep before write rules are in the private Argo repository, read on 4 November 2026. The rules are also in [Drift is the silent killer of agent swarms](/writing/drift-is-the-silent-killer).
- First published 22 May 2026. Revised 5 November 2026: the opening story is now labelled as recollection and the minute counts are gone; the four pieces of surface are described as they were built.
