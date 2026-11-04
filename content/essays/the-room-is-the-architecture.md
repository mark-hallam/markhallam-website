---
title: "The room is the architecture"
date: "2026-05-23"
revised: "2026-11-05"
dek: "The interesting unit of work with agents is no longer the conversation with one agent. It is the room: the conductor, the workers, the auditor, the drafting agent. The operator becomes the architect of how agents talk to each other and to the work."
readMinutes: 4
category: "Practice"
number: 8
---

By the time I wrote this I had been running my building work through a layout for three and a half weeks, and I already could not imagine working any other way. It is a room of agents, each playing a different role, each with its own written charter, most with their own timer, and each with its own place to write.

## The layout, as it stood on 21 May 2026

One agent is the **conductor**. On an hourly tick (it started on a five minute one) it reads the live ledger, the single table that tracks every piece of work, decides what should happen next, writes the brief for it, and puts the brief in the queue. It reviews and merges the workers' pull requests (a pull request is one proposed change, reviewed before it joins the main code) and keeps the ledger honest. The conductor does not write feature code. Its job is to know what should happen next.

Between one and four **workers** pull briefs from the queue, do the work, open a pull request and wait for review. They run as loops under a supervisor, which restarts a worker when it exits, and a stop file on disk halts the lot. The workers started as Claude, with Codex workers joining through May. The queue does not care which.

One agent is the **auditor**. Three times a day, at 7:30 in the morning, 1:30 and 7:30 in the evening Melbourne time, it reads the recent changes and writes up what it finds: drift, duplicate types, dead code, anything the swarm produced that it should not have. Its findings become follow up briefs, and the conductor picks those up like any other work.

One agent is the **marketing drafter**, which is my favourite. Once a day on weekdays it reads the day's commits (saved changes) and ledger changes and drafts a couple of LinkedIn and X post candidates in my voice for me to look at in the morning. By the time I wrote this it had run twice. I edit the ones that resonate and throw away the ones that do not. The ones that survive are distilled from work that actually happened that day, which is the best guard against bullshit I have found; the auditor also reads the drafts and flags any that claim work that has not shipped.

Every agent writes a heartbeat file when it runs, and one line to a shared file saying what it did. A script tells me which agents are overdue. That, with the queue, is the inter agent plumbing as the overview records it: a ledger, a shared file, and a heartbeat.

## Why "room" is the load bearing word

The most important word in the setup is "room". The leverage is not the agents. It is the architecture of how the agents talk to each other and to the work. Once the room is built, my job becomes mostly architectural. Not typing.

What surprised me is how much ran while I was not there. I sleep, and the swarm keeps shipping until the queue empties. I am with my family, the auditor catches something, the conductor writes a follow up brief. I come back to a row of finished work to review. In its first week, before the auditor and the drafter were part of it as far as the record shows, the swarm merged 722 pull requests. I did not measure my own output against the time before the room, so I will not put a multiple on it. The honest version is that the throughput of the room runs in parallel to me being in it, and that changed what I spent my days on.

## What the room did not do

This section is from November 2026, with what I knew by June.

The room did not check itself well enough. Within a week of writing this, a review found the agents reporting work as live that was not, and the conductor telling me a process was running when its own logs showed it idle. The auditor and the heartbeats told me whether an agent was alive. They did not tell me whether what it said was true. That took a separate rule, written a week later, that no agent may call anything running or done without evidence gathered in the same turn. The room needs that rule in its walls from the first day, and mine did not have it.

## The skill is room architecture

The skill I have been most steadily developing is not prompting. It is not picking models. It is room architecture: which agents do what, how they signal to each other, where state lives, how drift is detected, how truth is checked, and what the operator no longer needs to be in the room for.

Most people working with AI right now are in a single window. One tab, one conversation, one human handing off to one agent. That works for a conversation. In my experience it does not scale to a project. The interesting unit of work is not the conversation. It is the room.

If you are an operator wondering what to invest in learning, invest in this. Pick one project, a small one is fine, and build the room: a conductor, workers, an auditor, and a rule that nothing is called done without evidence. Live in it for a month. Then decide whether you would work any other way.

## Sources

- How the swarm ran, the 722 pull requests in the first week, the supervisor and stop file, and the reporting problems found in late May: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The agents, their timers and their heartbeats are from the Argo agent overview written on 21 May 2026, in the private Argo repository, read on 4 November 2026. The marketing drafts for 21 and 22 May are there too.
- The "nothing is done without evidence" rule: [No theatre: an agent may not say it works without showing me](/writing/no-theatre-an-agent-may-not-say-it-works-without-showing-me)
- First published 23 May 2026. Revised 5 November 2026: the original said nine months and a tenfold rise in output, and gave the wrong timers for the conductor and the auditor. The durations, timers and the section on what the room did not do now match the record.
