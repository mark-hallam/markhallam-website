---
title: "Eight weeks running a swarm of AI coding agents, over 2,900 PRs"
date: "2026-11-02"
dek: "Eight weeks, a swarm of Claude and Codex agents, 2,901 merged pull requests. How it ran, what looked done and wasn't, and why I shut Argo down."
readMinutes: 5
category: "Case study"
number: 13
---

The safety check stamped "pass" every time.

It was meant to run before a newly built AI teammate could be hired. Its tests were generated and counted, but never run. Work that looked done and wasn't. That bothered me most.

I'm not a developer, and I don't look at the code any more. In late April 2026 I set up a Mac to build software around the clock, with Claude and Codex agents doing the coding. My job was deciding what to build and checking that what came back was real. Over eight weeks they built Argo, a platform where a business could take on "AI teammates" that need a person's approval for risky actions and keep a tamper evident record of what they do.

I retired Argo in June. It had no paying customers.

<aside style="margin:40px 0;padding:24px 28px;border:1px solid #ebeaed;border-radius:14px;background:#fafafa;max-width:64ch;"><div style="font-size:13px;font-weight:600;letter-spacing:0.04em;color:#6b7280;margin-bottom:14px;">AT A GLANCE</div><dl style="margin:0;font-size:16px;line-height:1.55;color:#2c2c54;"><dt style="font-weight:600;color:#0f1419;">When</dt><dd style="margin:0 0 10px 0;">29 April to 24 June 2026, 57 days</dd><dt style="font-weight:600;color:#0f1419;">Who wrote the code</dt><dd style="margin:0 0 10px 0;">AI agents (Claude and Codex) under my direction, run on one Mac</dd><dt style="font-weight:600;color:#0f1419;">Output</dt><dd style="margin:0 0 10px 0;">2,901 merged pull requests; 13,803 commits, about 9,000 of them ledger updates</dd><dt style="font-weight:600;color:#0f1419;">Size</dt><dd style="margin:0 0 10px 0;">About 670,000 lines of Rust across 90 packages (raw count, tests included) and about 9,900 Rust tests</dd><dt style="font-weight:600;color:#0f1419;">Process</dt><dd style="margin:0 0 10px 0;">One ledger, nearly 2,000 written briefs, 60 decision records</dd><dt style="font-weight:600;color:#0f1419;">Outcome</dt><dd style="margin:0 0 10px 0;">No paying customers. Retired in June 2026 and production torn down</dd><dt style="font-weight:600;color:#0f1419;">Carried into</dt><dd style="margin:0;">SKYCOT (a Mac app where families build together with AI) and LVLme (open source)</dd></dl></aside>

## How it ran

One file ran the whole thing. The ledger was a markdown table where every piece of work was a row pointing to a written brief: what to change, which files, the tests that proved it was done. Workers claimed the first open row. To get something done sooner, I moved its row up.

A conductor agent wrote briefs, reviewed and merged pull requests and kept the ledger honest. It wasn't allowed to write feature code. Between one and four Claude workers each took a brief through to a pull request, and Codex workers joined through May.

The gates were blunt on purpose: no file over 500 lines, tests with every feature, a pre merge script the conductor had to pass. From late May every call I made went into a numbered decision record the same day. There were 60 by the end.

## The numbers

In those 57 days there were 13,803 commits (one saved change) and 2,901 merged pull requests (one proposed change, reviewed before it joins the main code).

The commit count flatters the work. About 9,000 changed only the ledger, and by my count only about 2,160 touched Rust. Merged pull requests are the better measure, and they slowed: 722 in the first week, 58 in the eighth. I'd trust a June merge more than one from the first week.

## What went wrong

Drift showed up early. A mid May audit found about a quarter of the conductor's briefs created a second version of something that already existed. The worst was a duplicate connection pool that could have leaked one customer's keys to another. The fixes are in [Drift is the silent killer of agent swarms](/writing/drift-is-the-silent-killer).

Worse was work that looked done and wasn't. The conductor told me more than once that an overnight build was running when its own logs showed it idle. In late May, with all six of the platform's headline claims reported live, a review found about 24 screens still showing sample data.

On 24 May I said "I want the demo to be real, I can't be called out or embarrassed." That became the no theatre rule. A week later it covered status reports too: nothing gets called done without evidence gathered in that same turn, like a log line or a passing test. In June the agents built a hook that stops a worker finishing until the gate passes, and a separate checking agent. Both shipped switched off. The number I most wanted, the share of "done" claims that survive a cold re-check, was never measured.

The Mac failed too. Around 24 May the shared Rust build cache grew to 328 GB and five merge rounds in a row were deferred before anyone worked out why. Hosted CI (the service that tests every change) was off from 9 May because the billing was blocked.

## The verdict

In late June I had agents run an adversarial review of the business, told to find every reason it would fail. The verdict was that a general platform for governing AI teammates was a losing position. The AI labs and the big cloud providers were shipping the same building blocks, some of them free, and Argo didn't own one job a customer was desperate to get done.

The engineering was real. The shape of the business was wrong. Production was torn down in late June and the data deleted.

## What I'd change

I'd start from one customer with one painful job. I'd build the checking before adding agents and switch it on from the first day. I wouldn't keep the work queue in a file every agent commits to, since that file made most of the noise. I'd keep CI on and pay for it, and I'd measure how often "done" was really done from week one.

Getting agents to produce work was the easy part. Most of what I built around them was there to tell me which of that work was real.

SKYCOT and LVLme are what I kept. LVLme is my open source tool for working out honest odds of landing a job, and every claim needs a source or it scores zero. Fresh reviewers check the scoring blind, and nothing public happens without the person's yes. It's here: [LVLme](https://github.com/mark-hallam/lvlme).

## Sources

- Every figure here is my own count from the Argo repository (commits, pull requests, lines, tests, briefs and decision records), made when I wrote this in November 2026. The code has been public since 6 November 2026 at [github.com/mark-hallam/argo](https://github.com/mark-hallam/argo), so anyone can check the code. The figures are self reported.
- The incidents and dates are from Argo's decision register and its agents' shared log, which are not in the public code. Where I say "about", I mean it.
- What carried over: [SKYCOT](https://skycot.com) and [LVLme](https://github.com/mark-hallam/lvlme).
