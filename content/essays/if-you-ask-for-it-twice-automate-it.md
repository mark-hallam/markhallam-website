---
title: "If you ask for it twice, automate it"
date: "2026-05-23"
revised: "2026-11-05"
dek: "Most of the wasted effort I see in people working with AI agents sits in the gap between 'I noticed I keep doing this' and 'I built a thing so I don't have to'. That gap is where the compounding lives."
readMinutes: 4
category: "Practice"
number: 7
---

The third time, as I remember it, that I typed "check this brief is still current" into a chat, I stopped typing and had the agent write a script instead. That is the whole method, and the rule I have come to from it, which I now defend with the kind of certainty I usually reserve for things I have changed my mind about three times: if you ask the agent for the same thing twice, the third time should not be a request. It should be a command, a hook, a script, a skill. Something automatic. Something the human does not have to think about.

This sounds like the oldest advice in software, "don't repeat yourself", applied to AI prompts. Slightly cute. Not very profound.

It is more important than that.

## The gap

People who close the gap between "I keep doing this" and "I built a thing so I don't have to" get a little more leverage every week. People who do not are about where they were six months ago, typing the same reminder into a new chat. I have not measured the difference and I will not pretend to; I have watched it.

## Three real ones

On Argo, the platform a swarm of agents is building for me as I write this, the same three things kept coming up, and each became a script the agents wrote and ran instead of a thing I asked for.

**"Check this brief is still current."** Every brief named the exact commit it was written against. By 8 May, a script checked that before a worker could claim the brief, and refused a stale one. I do not remember ever asking an agent to check freshness again.

**"Check this brief does not duplicate something that exists."** A mid May audit found about a quarter of the conductor's briefs recreating something already in the codebase. From 14 May a brief linting script (a lint checks a file against the house rules) looked for same named types before a brief was saved into the project, with a hook, a small program that runs at a fixed moment, running it automatically on every brief about to be saved. The rule I had been repeating became a thing the repository checked on every save.

**"Run the gate before you merge."** By 18 May a pre merge script ran the checks the conductor had to pass before merging anything. The conductor's instructions now pointed it at the script instead of at me.

As I remember it, none of these took longer than an afternoon. None was clever. Each one started as something I had said twice.

## The second order effect

There is an effect I think matters more than the time saved. When a routine becomes a script or a skill, it becomes shareable. The next agent loaded into the project runs the same hook. The next person who picks up the project gets the same check. The routine is no longer in my head. It is in the project.

> Every routine I turn into a script is one less thing that would be lost if I stopped showing up.

That changes the kind of thing you can build. Something made of head knowledge collapses whenever the head leaves. Something made of repository knowledge does not.

## Scripts, hooks and skills

Scripts are the first layer, the three above. The same principle, applied to longer forms, gives two more. **Hooks**: if the agent does the right thing nearly every time but I have to remind it about the exception three times in a row, I have a hook written, one that fires before the agent acts and injects the reminder. I never type the reminder again.

**Skills**: a skill is a written method plus the small tools that carry it out, with a clear "when to use this". When the agent recognises the situation, it loads the skill and runs the routine, and I was never in the loop. (Added November 2026.) This month I published the four working skills I use most (the fifth is the index), as mStack: ping me on my phone when you need me, pin the outcome and ask every question once, review the design with independent reviewers from different makers, and deliver in a form my phone can show when I am away. Each one began as something I had typed into a chat more than twice.

## Routine is a feature

The agent does not get tired of the routine. It does not forget it. It does not develop opinions about it. It runs it, repeatably rather than infallibly. (Whether it ran correctly is a separate question, and I check that too; a routine that fires is not the same as a routine that worked.)

If the time you save on individual tasks keeps getting eaten by re explaining the same things, you have the symptom this rule fixes. Notice the repetition. Spend the afternoon. Have the script built. By the end of the month the project knows things that used to live only in your head, and that is the point.

## Sources

- How the swarm ran, the mid May audit, and the pre merge gate: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The three scripts and their dates (freshness check 8 May, brief lint and its hook 14 May, pre merge gate 18 May 2026) are in the private Argo repository, read on 4 November 2026.
- The four published skills: [github.com/mark-hallam/mstack](https://github.com/mark-hallam/mstack)
- First published 23 May 2026. Revised 5 November 2026: the original claimed "something like twenty skills" and "twenty hours a week" saved, which I had not measured; both are gone, and the three real scripts and the published skills are in their place.
