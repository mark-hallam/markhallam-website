---
title: "Write the claims before the code"
date: "2026-05-23"
revised: "2026-11-05"
dek: "Argo's agents started building a week before I wrote down what it was for. Here is what that week cost, and the dull rule I now run every project under."
readMinutes: 2
category: "Strategy"
number: 9
---

The code for Argo began on 29 April 2026. The six sentences saying what Argo exists to make true were written on 6 May. For that week a swarm of AI agents shipped around the clock with nothing to aim at, and some of that week's work was later thrown away.

I wish I had written the six first.

I know this mistake. In eighteen years of aviation projects I built things that did not need to exist. Each was a sound response to a sound request. None advanced anything that mattered.

## The rule

Every change must trace back to a small number of claims about what the thing is for. If you cannot name the claim your change advances, you do not make the change. You go back and work out what it is actually for.

It sounds like a slogan. In practice it is dull, and it saves projects.

## How it went on Argo

Once the claims existed, I set a rule for the conductor agent (the one that directs the others), as I remember it. Every brief and roadmap item had to name which of the six it advanced. If it advanced none, it was not worked on. It was not applied perfectly every time. The audits that followed are the evidence.

Then an evaluator agent checked the code against the claims directly. On 23 May it went through every package (one unit of the code, 89 that day) against the six and logged 29 gaps. That is the hundred thousand foot view turned into a checklist an agent can run.

## What it gives you

It filters work fast. An agent proposes a feature and it sounds great. I look at the six and it advances none. I say no, with the reason, in a sentence. Nobody spends two weeks on a perfectly competent feature that nothing needed.

It also shows drift (work wandering off course) when nothing is technically wrong. A team can ship cleanly, pass every test, and quietly move away from the claims. Without them you find out years later, by the absence of the thing you meant to build.

Decisions get faster too. "Which claim does this advance?" cuts short most of the arguments.

## The limit

All six claims were reported live by late May. In late June an adversarial review of the business found that a general platform for governing AI teammates was a losing position, with no job a customer was desperate to have done. I shut it down.

The rule kept the swarm pointed at the mission. It could not tell me the mission was wrong. That needed a different question, asked of the market, and I asked it late.

So write the claims first. They will feel embarrassingly few. My rule of thumb, nothing more: five or six is normal, three is fine, and more than ten means you have not yet decided what the thing is for. Then ask someone outside the building whether those claims are worth making true.

## Try it

The nearest thing I have published is the [outcome-first](https://github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md) skill in mStack, open source. It pins one job's outcome before the agent starts, not a project's claims. The claims are still on you. The June verdict on Argo, and why the claims were not enough, is in the [case study](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents).

## Sources

- How Argo ran, the six claims reported live, and the June business verdict: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- The dates of the first code (29 April 2026) and the mission claims file (6 May 2026), and the evaluator's 23 May check of 89 packages against the six claims with 29 gaps logged, are from the Argo repository (its agents' shared log; the code is public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo)), read on 4 November 2026.
- "Eighteen years" matches my dated career on the [About](/about) page.
- First published 23 May 2026. Revised 5 November 2026: the original said the claims were written "before I wrote a single line of code" and called the project Skycot (in May 2026 Argo was going to take the SKYCOT name; SKYCOT is now a different product); both corrected. The section on the limit of the rule is new, written with what I knew by June.
