---
title: "If you ask for it twice, automate it"
date: "2026-05-23"
revised: "2026-11-05"
dek: "I typed the same request into a chat three times, then stopped. Here are the three scripts that came out of it, and why I think the gap before you build them is where the compounding lives."
readMinutes: 2
category: "Practice"
number: 7
---

The third time, as I remember it, that I typed "check this brief is still current" into a chat, I stopped typing. I had the agent write a script instead.

That is the whole method. If you ask the agent for the same thing twice, the third time should not be a request. It should be a command, a hook (a small program that fires at a set moment), a script or a skill. Something the human does not have to think about.

## The gap

Some people close the gap between "I keep doing this" and "I built a thing so I don't have to". They get a little further ahead every week. The rest are about where they were six months ago, typing the same reminder into a new chat. I have not measured the difference and I will not pretend to. I have watched it.

## Three real ones

On Argo, the platform a swarm of agents built for me in 2026, the same three things kept coming up. Each became a script the agents wrote and ran.

**"Check this brief is still current."** Every brief named the commit it was written against. By 8 May a script checked that before a worker could claim the brief, and refused a stale one. I do not remember ever asking an agent about freshness again.

**"Check this brief does not duplicate something that exists."** A mid May audit found about a quarter of the conductor's briefs recreating something already in the codebase. From 14 May a brief lint (a check against house rules) looked for same named types, and a hook ran it on every brief about to be saved. The rule I had been repeating became something the repository checked on every save.

**"Run the gate before you merge."** By 18 May a pre merge script ran the checks the conductor had to pass. Its instructions now pointed at the script, not at me.

As I remember it, none took longer than an afternoon. None was clever.

## What it changes

The time saved matters less than this. A routine that is a script can be shared. The next agent runs the same hook. The next person gets the same check. The routine is no longer in my head. It is in the project.

> Every routine I turn into a script is one less thing that would be lost if I stopped showing up.

Something made of head knowledge collapses when the head leaves. Something made of repository knowledge does not.

The agent runs it repeatably, not infallibly. Whether it ran correctly is a separate question, and I check that too.

Notice the repetition. Spend the afternoon. By the end of the month the project knows things that used to live only in your head.

## Try it

The skills I use most are published as [mStack](https://github.com/mark-hallam/mstack), free and open source. Each one began as something I typed into a chat more than twice. The one I would start with is [outcome-first](https://github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md): it pins the outcome and asks every question once, before the agent starts. If it breaks on you, open an issue.

## Sources

- How the swarm ran, the mid May audit, and the pre merge gate: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The three scripts and their dates (freshness check 8 May, brief lint and its hook 14 May, pre merge gate 18 May 2026) are in the Argo repository (public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo)), read on 4 November 2026.
- The four published skills: [github.com/mark-hallam/mstack](https://github.com/mark-hallam/mstack)
- First published 23 May 2026. Revised 5 November 2026: the original claimed "something like twenty skills" and "twenty hours a week" saved, which I had not measured; both are gone, and the three real scripts and the published skills are in their place.
