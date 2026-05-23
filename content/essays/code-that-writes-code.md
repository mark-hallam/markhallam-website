---
title: "Code that writes code"
date: "2025-10-22"
dek: "The interesting questions are no longer 'what does the agent do for you'. They are 'what do you let the agent build, and how do you preserve enough understanding of the result to remain its operator'."
readMinutes: 8
category: "Strategy"
number: 6
---

There is a moment that happens when you have been building agents for a few months that I think most builders will eventually have. You realise you have built an agent that, on a good day, you would trust to refactor your agent. The line between the thing being built and the thing doing the building blurs. The substrate becomes reflexive.

## The moment

The first time it happened to me was unremarkable. I had spent the morning hand-editing a small library of agent skills — adding a new skill, tweaking a few descriptions, adjusting the routing rules. Around lunch I caught myself doing the same kind of routine work for the eighth time in a week. I opened a fresh Claude session and asked it to build me a skill for editing skills. The skill would take a description, generate the boilerplate, propose a position in the routing rules, write tests, and commit.

The skill took about an hour to build, by an agent, using mostly the same patterns I had been using by hand. I tested it on three new skills. They worked. From that point onward, I did not write a skill by hand again. I asked a skill to write skills.

This sounds like a small technical achievement. It is something else. It is <span class="accent">the first time, in a system I built, that the system started building itself.</span>

## The substrate is becoming reflexive

I do not think this is a singular moment for any particular project. I think it is the substrate of the next phase of how we build software. The interesting questions are not "what does the agent do for you" anymore. The interesting questions are "what do you let the agent build, and how do you preserve enough understanding of the result to remain its operator".

The second part of that question is the part I think about most. If I let agents write the agents, and let those agents write the next agents, very quickly I am running a system whose composition I did not design directly. I designed the seed. Everything after the seed is downstream of decisions made by something that is not me, in a sequence I did not approve in detail.

You can either flinch at this or you can be deliberate about it. Flinching looks like "stop letting the agent build itself, it is dangerous". Being deliberate looks like "build the seed carefully, instrument the loop, and trust the loop only as far as the instrumentation can tell you the trust is earned".

## Instrumentation is the discipline

The instrumentation matters. The instrumentation is the thing I think most operators are not investing enough in. If you are going to run a reflexive system, you need to be able to see, at any moment, what it has done to itself recently, whether those changes preserved the load-bearing invariants, whether the system's behaviour is still in the envelope you intended. Without that instrumentation, you have a runaway. With it, you have a powerful substrate that gets better the more it runs.

> Every agent-authored change to an agent's behaviour produces a row in a ledger; the ledger row includes what changed, why, and the test evidence that the change preserved invariants.

My instrumentation is unglamorous. It is mostly: every agent-authored change to an agent's behaviour produces a row in a ledger; the ledger row includes what changed, why, and the test evidence that the change preserved invariants; a separate audit agent reviews ledger rows on a cron and flags anything anomalous. The audit agent is itself agent-authored, and I review the audit agent on a slightly slower cron. It is turtles for a few layers. The turtles bottom out at a small set of human-locked operating principles that no agent is allowed to modify.

## What the next decade looks like

I think the next decade of building is going to be about getting good at this. Not at writing code. Not at directing agents to write code. At building reflexive systems whose evolution preserves the invariants the builder cares about. The operator becomes the gardener of a self-modifying system, not the author of an inert one.

If you are uncomfortable with the framing, the comfort is this: gardeners do not lose their job when the garden grows. Gardeners get more sophisticated at the kind of garden they can grow. The work changes. The work does not disappear. It moves up a layer. <span class="accent">The layer is reflexive systems, and that is where I think the most interesting building of the next decade will happen.</span>
