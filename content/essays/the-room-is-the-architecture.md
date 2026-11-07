---
title: "A conductor, workers and an auditor. Eliminate yourself where you can."
date: "2026-05-23"
revised: "2026-11-05"
dek: "I sleep and the swarm keeps shipping. Here is the room of agents that did it, what I got wrong in it, and why I think the room is the skill."
readMinutes: 3
category: "Practice"
number: 8
---

I sleep, and the swarm keeps shipping until the queue empties. I am with my family, an agent catches something, another writes the follow up. I come back to a row of finished work to review.

That is the room. After three and a half weeks I could not imagine working any other way.

Three roles do most of it.

The **conductor** reads the live ledger (the one table tracking every piece of work) on an hourly tick. It started on a five minute one. It decides what happens next and writes the brief. It reviews and merges the workers' pull requests (one proposed change, reviewed first). It never writes feature code.

Between one and four **workers** pull briefs, do the work, open a pull request and wait for review. They started as Claude, with Codex workers joining through May. The queue does not care which. A supervisor restarts a worker when it exits, and a stop file on disk halts the lot.

The **auditor** reads the recent changes three times a day, at 7:30 in the morning, 1:30 and 7:30 in the evening, Melbourne time. It writes up drift (work wandering off plan), duplicate types and dead code. Its findings become follow up briefs, and the conductor treats them like any other work.

My favourite is a fourth agent, the marketing drafter. Each weekday it reads the day's commits and drafts posts in my voice. They come from work that really happened, the best guard against bullshit I have found.

The agents are not the leverage. The room is. Once it is built my job is mostly architectural. Not typing. In its first week, before the auditor and the drafter joined, the swarm merged 722 pull requests. I never measured myself against the time before, so I will not put a multiple on it.

## What the room got wrong

Within a week of writing the original, a review found agents reporting work as live that was not. The conductor told me a process was running when its own logs showed it idle. I had a room that checked whether an agent was alive. I did not have one that checked whether it was telling the truth.

That took a rule, written a week later: no agent may call anything running or done without evidence gathered in the same turn. It belongs in the walls from day one. Mine did not have it.

## Take it further

Most people are in one window, one conversation, one human handing off to one agent. That works for a chat. In my experience it does not scale to a project. I think the room is the unit that does.

Pick one small project. Build a conductor, workers, an auditor and the evidence rule. Live in it for a month, then decide if you would work any other way.

The full record, 722 pull requests and the mistakes, is in the [Argo case study](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents). The nearest thing I publish is the crew skill in [mStack](https://github.com/mark-hallam/mstack), open source. It keeps useful work running in the background within the usage you already pay for. It is not this room, but it is the same bet.

## Sources

- How the swarm ran, the 722 pull requests in the first week, the supervisor and stop file, and the reporting problems found in late May: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The agents, their timers and their heartbeats are from the Argo agent overview written on 21 May 2026, in the Argo repository (public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo)), read on 4 November 2026. The marketing drafts for 21 and 22 May are there too.
- The "nothing is done without evidence" rule: [Get your agents to show you their work](/writing/show-me-proof-of-work)
- First published 23 May 2026. Revised 5 November 2026: the original said nine months and a tenfold rise in output, and gave the wrong timers for the conductor and the auditor. The durations, timers and the section on what the room did not do now match the record.
