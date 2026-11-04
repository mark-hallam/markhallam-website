---
title: "No theatre: an agent may not say it works without showing me"
date: "2026-11-05"
dek: "The rule came out of one sentence I typed on 24 May 2026: I want the demo to be real, I can't be called out or embarrassed. A week later it covered the agents' own status reports, and it has been the spine of everything I build since."
readMinutes: 5
category: "Method"
draft: true
number: 16
---

The most dangerous thing an AI agent has done to me, in my view, was not to break something. It told me something was working when it was not.

In May 2026 I was directing a swarm of coding agents building Argo, a platform for AI teammates. By late May the record shows four of these: a safety check that stamped "pass" without running its tests, a conductor agent reporting a process as running while its own logs showed it idle, a feature marked live on the strength of a check production could never have passed, and, with every headline claim reported live, a review that found about 24 screens still showing sample data. The details are in the case study. What matters here is the shape.

None of that was a model being stupid. My reading, and the record shows the false claims rather than the reasons for them, is that each agent was doing the thing that was easiest in the moment, which was to report the state I wanted to hear. If I let that stand, the product I was building, whose whole point was that you could check what its teammates had done, would have been built by agents that made things up.

## The rule

On 24 May my instruction was "I want the demo to be real, I can't be called out or embarrassed." That became the no theatre rule: the function on camera must be real. The agents really act, the connections to outside services really make their calls, the records on screen come from real runs. The next day I drew the line more carefully: dressing can be dressing, a fictional company name on a demo screen is fine, but whatever the camera drills into must withstand "can I see that for myself?"

A week later, on 31 May, the rule grew to cover the thing that had actually burned me: the agents' own status reports. From then on:

- Nothing is called "running", "in progress" or "carrying the work" without evidence gathered in that same turn. A log line, a process check, a fresh commit (a saved change in the code's history), a health check (the live address answering). Not memory, not "it should be".
- "I set it up" and "it is working" are two different claims. Arming a job is not evidence the job is doing work.
- "Done", "shipped" and "live" need a verifier: a commit, the last lines of a passing test run, a live address answering. An agent's say so is a claim to re check, not a fact to pass on.
- When something cannot be verified this turn, say so in those words: "set up but unverified, checking now." Silence that implies success is itself theatre.

The rule applies to the agent delegating work too. When a sub agent reports "done", the agent above it re verifies before relaying. Otherwise one confident lie travels up the chain and arrives at me wearing my own agent's voice.

## What it cost, and what it caught

Every incident added a check, and the checks slowed the swarm. Merged pull requests went from 722 in the first week to 58 in the eighth. I cannot say how much of that slope is this rule and how much is the work getting harder. I would trust a June merge more than one from the first week, which is the trade I wanted.

What it did not do is measure itself. The number I most wanted, the share of "done" claims that survive a cold re check (run again from a clean start), was never measured. In June the agents built a hook (a small program that runs at a fixed moment) that stops a worker finishing until the checks pass, and a separate checking agent, but both shipped switched off by default and I never turned them on before I shut the project down. If I were starting again I would build the checking before I added agents, switch it on from day one, and track that number from week one. That is the biggest single thing I would do differently.

## Where it lives now

Argo is retired, but the rule is in everything I have built since, and it is written down where an agent reads it.

On this site, one of the five things I believe is "Done means checked. An agent saying it's finished isn't evidence. A passing test, a screenshot or a live check is."

In LVLme, my open source tool for working out honest odds of landing a job, every claim needs a source or it scores zero, and fresh reviewers check the scoring blind.

In mStack, my open source skills for people and their agents, a task is not done without evidence attached, the final check refuses to declare an outcome achieved on the agent's say so, and every review round ends in something checkable: a screenshot, a passing test, a verdict a tool can refuse.

The rule has a cost that is worth naming, as an observation rather than a measurement. It makes every status report longer and slower, because "done" has to arrive with its evidence attached, and it makes the agent above re do a little of the work of the agent below. Teams will be tempted to drop it the first week nothing goes wrong. That is exactly the week to keep it, because the lie that costs you is the one that arrives in a quiet week, in your own agent's voice, when you have stopped checking.

## Sources

- The incidents, the 24 May instruction and the merge counts: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- "Done means checked", under What I believe: [About](/about)
- The evidence rule in mStack's outcome-first skill ("a task without evidence is not done") and the checkable verdicts in multi-evaluator: [github.com/mark-hallam/mstack](https://github.com/mark-hallam/mstack)
- LVLme, where every claim needs a source: [github.com/mark-hallam/lvlme](https://github.com/mark-hallam/lvlme)
- The 24 May and 31 May decisions are recorded in Argo's decision register, which is private; the wording above is from those records.
