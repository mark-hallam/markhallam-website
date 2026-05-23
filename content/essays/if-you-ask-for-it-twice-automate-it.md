---
title: "If you ask for it twice, automate it"
date: "2025-11-08"
dek: "Most of the wasted cycles I see working with AI agents come from the gap between 'I noticed I am doing this often' and 'I built a thing so I do not have to do it any more'. That gap is where the entire compounding game lives."
readMinutes: 6
category: "Practice"
number: 7
---

The rule I have evolved, and now defend with the kind of certainty I usually reserve for things I have changed my mind about three times: if you ask the agent for the same thing twice, the third time it should not be a request. It should be a slash-command, a hook, a skill, a routine. Something automatic. Something the human does not have to think about.

This sounds like the obvious advice about software engineering that everyone has been giving since the dawn of software engineering. The "don't repeat yourself" principle, applied to AI prompts. Slightly cute. Not very profound.

It is much more important than that.

## The compounding gap

Most of the wasted cycles I see in people working with AI agents come from the gap between "I noticed I am doing this often" and "I built a thing so I do not have to do it any more". That gap is where the entire compounding game happens. People who close it grow ten percent more leveraged every week. People who do not close it grow about as leveraged as they were six months ago.

The discipline is mostly procedural and mostly cheap. When I notice I have typed roughly the same prompt twice — "format this commit message in our style", "check this brief against the freshness rules", "run the test suite and tell me what is broken in plain English" — I stop. I do not type it again. I open a slash-command file. I dump the prompt in. I commit. From the third occurrence onward, I type `/commit-style` or `/brief-freshness` or `/test-plain` and the agent runs the routine.

The cost is two minutes. The benefit is the rest of my life with that routine being free.

## The second-order effect

There is a second-order effect that I think matters more than the time saving. When the routine becomes a slash-command, it also becomes shareable. The next person on my team types `/brief-freshness` and gets the same behaviour. The next agent loaded into the project gets the same hook. The routine is no longer a thing in my head. It is now a thing in the project.

> Every routine I have turned into a slash-command is one less thing the org would lose if I disappeared tomorrow.

That changes what kind of organisation you can build. An organisation made of head-knowledge collapses every time someone leaves. An organisation made of repo-knowledge does not.

## The three layers

The same principle, applied to longer-form: **hooks**. If the agent does the right thing 99% of the time but I have to remind it about the 1% case three times in a row, I write a hook. The hook fires before the agent acts. The hook injects the reminder automatically. The 1% case becomes the 0% case. I never type the reminder again.

The same principle, applied to longer-still: **skills**. A skill is a routine that bundles a set of slash-commands, a hook, a small piece of reference material, and a clear "when to use this" instruction. When the agent recognises the situation, it loads the skill, executes the routine, and you never had to be in the loop.

I have something like twenty skills now in active rotation across my projects. Each one started as something I noticed I was doing twice. Each one took an afternoon to build. Together they probably save me twenty hours a week.

## Routine is a feature

Routine is a feature. The agent does not get tired of the routine. The agent does not forget the routine. The agent does not develop preferences about the routine. The agent just runs it. You ask for the routine once when you build it, and after that it runs forever.

I think this is the actual shape of leverage in the agent era. Not "I am using AI". Not "I am using AI well". The leverage is <span class="accent">"I have automated my work to the point where AI is the substrate"</span>.

If you are working with agents and finding that the time you save on individual tasks gets eaten by the time you spend re-explaining the same things, you have the symptom this rule is designed to fix. Notice the repetition. Spend the two minutes. Build the slash-command. By the end of the month you will have a folder full of them, and you will wonder how you used to work.
