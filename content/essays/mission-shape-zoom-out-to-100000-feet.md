---
title: "Mission shape: zoom out to one hundred thousand feet"
date: "2026-05-23"
revised: "2026-11-05"
dek: "Without a hundred thousand foot view, every local decision is sensible and the whole adds up to nowhere in particular. The cure is dull: write down the few claims the thing exists to make true, and only do work that advances one of them."
readMinutes: 4
category: "Strategy"
number: 9
---

The code for Argo, the platform a swarm of AI agents is building for me, began on 29 April 2026. The six sentences saying what Argo exists to make true were written on 6 May. For a week a swarm shipped around the clock with no anchor, and some of that week's work was later thrown away. I have done the same thing, more slowly, in eighteen years of aviation projects: built things that did not need to exist, each one a sound response to a sound request in the moment, none of them advancing anything that mattered.

That is the cost of building without a hundred thousand foot view. Without one, every individual decision is locally sensible and the whole adds up to nowhere in particular. The work feels productive while it happens and looks confusing six months later.

## The rule

I now try to run every project I touch under one rule, distilled from eighteen years of watching projects fail at the requirement: every change must trace back to a small number of claims about what the thing is for. If you cannot name the claim your change advances, you do not make the change. You go back and work out what the change is actually for.

It sounds like a slogan. In practice it is dull, and it saves projects.

## How it went on Argo

I wish I had written the six claims first. A week of a swarm shipping around the clock is a lot of code with no anchor.

Once the claims existed, the rule I set for the conductor agent, as I remember setting it, was that every brief it wrote and every roadmap item had to name which of the six it advanced, and if it advanced none it was not worked on. I will not claim the rule was applied perfectly every time; the audits that followed are the evidence that it was not. An evaluator agent then went further and checked the code against the claims directly: on 23 May it went through every package in the codebase (a package is one unit of the code; 89 of them that day, 90 by the end) against the six claims and logged 29 gaps. That is the hundred thousand foot view turned into a checklist an agent can run.

This is harder than it sounds. The natural mode of any building team, human or agent, is to chase locally interesting problems. A new model drops, a vendor ships a feature, an agent proposes a clever addition. Each is interesting. Each is locally sensible. Without the claims you cannot tell which interesting things are also necessary things.

## What the rule gives you

Two things, and I value both more the longer I live with them.

It filters incoming work at a speed nothing else matches. An agent proposes a feature. It sounds great. I look at the six claims. It advances none of them. I say no, with the reason, in a sentence, and nobody spends two weeks producing a perfectly competent feature that nothing needed.

And it shows you when the work is wrong even when nothing is technically wrong. A team can be shipping cleanly, passing every test, producing high craft output, and quietly drifting away from the claims. The claims are how you notice. Without them you do not notice at all; you find out years later by the absence of the thing you meant to build.

There is a side effect I did not expect. Decisions get faster, not slower. Most of the arguments that slow a decision are second order arguments about implementation. "Which claim does this advance?" short circuits most of them.

## The limit of the rule

This section is from November 2026, with what I knew by June.

The claims keep you honest about the work. They do not make the claims right. All six of Argo's were reported live by late May. In late June an adversarial review of the business found that a general platform for governing AI teammates was a losing position, with no job a customer was desperate to have done, and I shut it down. The rule kept the swarm pointed at the mission. It could not tell me the mission was wrong. That needed a different question, asked of the market, and I asked it late.

So: write the claims first. They will feel embarrassingly few. My rule of thumb, nothing more: five or six is normal, three is fine, and more than ten means you have not yet decided what the thing is for. Then ask someone outside the building whether those claims are worth making true, before the next ten thousand changes write themselves.

## Sources

- How Argo ran, the six claims reported live, and the June business verdict: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The dates of the first code (29 April 2026) and the mission claims file (6 May 2026), and the evaluator's 23 May check of 89 packages against the six claims with 29 gaps logged, are from the private Argo repository (its agents' shared log), read on 4 November 2026.
- "Eighteen years" matches my dated career on the [About](/about) page.
- First published 23 May 2026. Revised 5 November 2026: the original said the claims were written "before I wrote a single line of code" and called the project Skycot (in May 2026 Argo was going to take the SKYCOT name; SKYCOT is now a different product); both corrected. The section on the limit of the rule is new, written with what I knew by June.
