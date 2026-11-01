---
title: "Why most enterprise AI pilots die in committee"
date: "2026-05-15"
dek: "The pattern is so consistent it should embarrass us. The reason is not the technology. It is that pilots are being scoped, governed and reviewed the same way ERP migrations were scoped twenty years ago."
readMinutes: 5
category: "Operations"
number: 14
---

The pattern is so consistent it should embarrass us.

A bank — let us say a mid-tier Australian one — decides it needs an AI strategy. A working group is formed. The working group hires a consultancy. The consultancy produces a deck. The deck names twelve high-value use cases. Three are chosen as pilots. The pilots are run. The pilots are presented to a steering committee. The steering committee says *interesting* and asks for a business case. The business case is built. The business case is presented to a different committee. The different committee asks how this aligns with the data strategy. The data strategy is two years out. Nine months elapse.

By the time anyone could conceivably push a button, the underlying model has been deprecated, the budget cycle has closed, and the executive sponsor has moved on.

This is <span class="accent">not an AI problem</span>. It is an operating problem dressed in AI clothing.

## The wrong machinery for the wrong job

The reason most enterprise AI pilots die in committee is that they are scoped, governed and reviewed the same way the organisation scopes, governs and reviews three-year ERP migrations. The ceremony designed to protect a $40 million ERP cutover is the same ceremony being applied to a $250,000 pilot. The ceremony eats the pilot whole.

There is no version of this story where the technology is the bottleneck. The model exists. The data exists. The people exist. What is missing is a path from *interesting* to *in production* that does not require traversing seven layers of governance designed for a different century.

> You do not run a startup with a PMO. You run a startup with one engineer, a credit card and a deadline. The first six months of any enterprise AI capability should look the same.

I am going to make a claim that will sound glib but is not: most enterprise AI programs would be improved by deleting the program management office overseeing them. Not because PMOs are bad — they are appropriate technology for the work they were designed for — but because they are mis-sized. The PMO comes later. The PMO does not come first.

## Pilots chosen by people who never watched the work

The second pattern, near-universal: the pilots are chosen by people who do not understand the work the pilots are meant to improve. A vendor presents twelve use cases. A committee picks three. The committee has never spent a Tuesday morning watching a clerk reconcile an invoice. The result is pilots that solve textbook problems no actual employee has. They impress in demos because demos are not Tuesday mornings.

The fix is dull and inexpensive: you put the engineer in the room with the clerk for two weeks before scoping anything. You let the engineer be embarrassed by the gap between what the model can do and what the work actually requires. You let the clerk be irritated by all the things the engineer assumes she does that she does not actually do. Then you scope.

I have watched programs measured in millions die because nobody did the two weeks. I have watched a program measured in tens of thousands ship because somebody did.

## Success criteria that cannot be won

There is a third pattern, and it is the most insidious: the success criteria are written by the legal and risk team before the pilot starts, and they are written defensively. *Must not hallucinate. Must achieve human-level accuracy. Must not introduce new compliance exposure.* Read those carefully. Each is a veto, not a goal. A pilot scoped against vetoes cannot win. The only outcomes available to it are continuing or being killed; there is no path to *this is the version we ship*.

A productive enterprise AI program writes its success criteria the way a product team would: as a small number of measurable outcomes — cycle-time reduction, error-rate reduction, throughput, satisfaction — that the program is allowed to be partially wrong about. Vetoes are still there, but they are the floor, not the goal.

## What the alternative actually looks like

If you read this and want to know what the alternative looks like, it is not exotic. It is the model the best growth-stage companies use to ship anything: a small team, a one-page brief with a measurable outcome, a fixed time window, a clear sponsor empowered to say yes, and a review cadence shorter than the time it takes to lose institutional memory of why the project started.

I have built and watched others build a hundred of these. The shape is consistent and the timeline is not romantic: **six weeks of doing, two weeks of cleaning up, four weeks of arguing about whether to ship, ship, then six months of slow expansion**. Total: nine months from *let us look at AI* to *five people use this every day*. That is faster than most pilots get to first steering committee.

The depressing version of this essay is the one where I conclude that enterprises are simply not built to ship AI work and we should all wait for a generation of leadership turnover. The hopeful version — the one I am required to write because I do this work for a living — is that the operating principles required are not new. We have known how to ship things in constrained environments for thirty years. We just need to remember.

The next time someone asks for an AI strategy, ask first for an <span class="accent">AI shipping plan</span>. The strategy will follow.
