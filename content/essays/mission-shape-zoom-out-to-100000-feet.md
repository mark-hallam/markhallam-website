---
title: "Mission shape: zoom out to one hundred thousand feet"
date: "2026-01-12"
dek: "Without a 100,000-foot view, every local decision is rational and the aggregate trajectory is nowhere in particular. The cure is dull: write down the load-bearing claims first, and only commit work that advances one of them."
readMinutes: 6
category: "Strategy"
number: 9
---

A small confession. I have built more things in the past decade that did not need to exist than things that did. Not in a corrupt way. In a perfectly reasonable, well-intentioned, locally-rational way. Every one of them was, in the moment of building, a sensible response to a sensible request. None of them, in retrospect, advanced anything that actually mattered.

This is the cost of building without a 100,000-foot view. Without one, every individual decision is locally rational and the aggregate trajectory is nowhere in particular. The work feels productive while it happens and feels confusing six months later.

## A discipline distilled from twenty years of getting it wrong

I now run every project I touch — including Skycot, and including my one-person side projects — under a discipline I have stolen from no particular methodology but distilled from twenty years of doing the wrong thing. The rule is: every change you commit must trace back to a small number of load-bearing claims about what this thing is for. If you cannot name the claim your change advances, you do not commit the change. You go back to thinking about what the change is actually for.

This sounds like a slogan. It is dull in practice and saves projects routinely. Let me make it concrete.

Skycot has six mission claims that I wrote down before I wrote a single line of code. Six sentences. They name the things Skycot exists to make true in the world. Every brief I write, every PR that gets merged, every roadmap item — each has to name which of those six claims it advances. If it does not advance one, it does not get worked on.

This is harder than it looks. The natural mode of any building team is to chase locally interesting problems. A new model drops, a vendor releases a feature, a customer asks for a thing. Each of those is interesting. Each of those is locally rational. Without the claims, you cannot tell which interesting things are also necessary things.

## What the discipline gives you

The discipline does two things that I find more valuable the longer I live with them.

The first thing it does is filter incoming requests at a speed nothing else can match. A founder sends me an idea. The idea sounds great. I look at the six claims. The idea advances none of them. I say no, with reasoning, in a sentence. I save the team between two weeks and three months of effort that would have produced a perfectly competent feature nobody at Skycot would have remembered building.

The second thing it does is reveal when the work you are doing is wrong even when nothing is technically wrong. A team can be shipping cleanly, hitting deadlines, producing high-craft output, and quietly drifting away from the load-bearing claims. The claims are how you detect that. Without them you do not detect it at all. You discover it years later by the absence of the thing you meant to build.

> A team can be shipping cleanly, hitting deadlines, producing high-craft output, and quietly drifting away from the load-bearing claims.

There is a side effect of running this way that I had not anticipated. Decision-making gets faster, not slower. Most of the disagreements that slow down decisions are second-order disagreements about implementation. The claim-trace question — "which mission claim does this advance" — short-circuits most of them. If everyone agrees on the claims, most implementation arguments resolve themselves in the direction of the claim being best advanced.

## Strategy as the structure that makes "no" obvious

I think this is what people mean when they say strategy is about saying no. Saying no is the visible part. The invisible part is having a thing you can point to that makes saying no obvious instead of arbitrary.

If you are building something — a company, a product, a piece of infrastructure, a swarm of agents — write the claims first. They will feel embarrassingly few when you are done. Five or six is normal. Three is fine. More than ten and you have not yet done the work of deciding what the thing is for.

After that, <span class="accent">the next ten thousand commits write themselves.</span>
