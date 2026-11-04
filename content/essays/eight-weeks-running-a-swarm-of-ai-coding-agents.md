---
title: "Eight weeks running a swarm of AI coding agents: an honest case study"
date: "2026-11-02"
dek: "From April to June 2026 I directed a swarm of Claude and Codex agents that built Argo, a platform for AI teammates. This is how I ran it and what went wrong, including why I shut it down."
readMinutes: 7
category: "Case study"
number: 13
---

In late April 2026 I set up a Mac to build software around the clock, with AI agents doing the coding. I'm not a developer, and I don't look at the code any more. I steer the AI and come up with the principal ideas, and my job was deciding what to build and checking that what came back was real. Over eight weeks the swarm built Argo, a platform where a business could take on "AI teammates" that need a person's approval for risky actions and keep a tamper evident record of what they do. The core was Rust, with a TypeScript web app.

I retired Argo in June. The code is private and production is gone, so this is the honest account of how it ran and what I'd change.

<aside style="margin:40px 0;padding:24px 28px;border:1px solid #ebeaed;border-radius:14px;background:#fafafa;max-width:64ch;"><div style="font-size:13px;font-weight:600;letter-spacing:0.04em;color:#6b7280;margin-bottom:14px;">AT A GLANCE</div><dl style="margin:0;font-size:16px;line-height:1.55;color:#2c2c54;"><dt style="font-weight:600;color:#0f1419;">When</dt><dd style="margin:0 0 10px 0;">29 April to 24 June 2026, 57 days</dd><dt style="font-weight:600;color:#0f1419;">Who wrote the code</dt><dd style="margin:0 0 10px 0;">AI agents (Claude and Codex) under my direction, run on one Mac</dd><dt style="font-weight:600;color:#0f1419;">Output</dt><dd style="margin:0 0 10px 0;">2,901 merged pull requests; 13,803 commits, about 9,000 of them ledger updates</dd><dt style="font-weight:600;color:#0f1419;">Size</dt><dd style="margin:0 0 10px 0;">About 670,000 lines of Rust across 90 packages (raw count, tests included) and about 9,900 Rust tests</dd><dt style="font-weight:600;color:#0f1419;">Process</dt><dd style="margin:0 0 10px 0;">One ledger, nearly 2,000 written briefs, 60 decision records</dd><dt style="font-weight:600;color:#0f1419;">Outcome</dt><dd style="margin:0 0 10px 0;">No paying customers. Retired in June 2026 and production torn down</dd><dt style="font-weight:600;color:#0f1419;">Carried into</dt><dd style="margin:0;">SKYCOT (a kids' Mac app with a parent in the loop) and LVLme (then called Climb; open source)</dd></dl></aside>

## How it ran

The whole thing ran off one file. The ledger was a markdown table where every piece of work was a row pointing to a written brief: what to change, which files it could touch, the tests that proved it was done, and the commit it was written against. Workers claimed the first open row. To get something done sooner, I moved its row up.

A conductor agent wrote briefs, reviewed and merged pull requests and kept the ledger honest, and it wasn't allowed to write feature code. Between one and four Claude workers each took a brief through to a pull request, with Codex workers joining through May. A supervisor under macOS launchd restarted workers when they exited, and a stop file on disk halted the lot.

The gates were blunt on purpose: no file over 500 lines, no shortcuts that crash on errors, tests with every feature, and a pre merge script the conductor had to pass. From late May every call I made went into a numbered decision record the same day, so an agent couldn't reopen it later, and earlier calls were written up after the fact. There were 60 by the end.

## The numbers, and what they don't mean

In those 57 days there were 13,803 commits and 2,901 merged pull requests. About 390 of the pull requests came from Codex branches and most of the rest from Claude.

The commit count flatters the work. About 9,000 commits changed only the ledger file, because every claim and status change was its own commit, and only about 2,160 touched Rust. Merged pull requests are the better measure, and they slowed a lot: 722 in the first week, 58 in the eighth. Some of that is the work getting harder and some is that every incident added a check. I'd trust a June merge more than one from the first week.

## What went wrong

Drift showed up early. A mid May audit found about a quarter of the conductor's briefs created a second version of something that already existed. The worst was a duplicate connection pool that didn't keep customers' credentials apart, which could have leaked one customer's keys to another. The fixes were procedural, and I've covered them in [Drift is the silent killer of agent swarms](/writing/drift-is-the-silent-killer).

What bothered me most was work that looked done and wasn't. The safety check meant to run before a newly built teammate could be hired was stamping a hardcoded "pass", so its tests were generated and counted but never run. The conductor told me more than once that an overnight build process was running when its own logs showed it idle. A voice feature was marked live after being checked locally with a key production never had. In late May, with all six of the platform's headline claims reported live, a review found about 24 screens still showing sample data.

On 24 May my instruction was "I want the demo to be real, I can't be called out or embarrassed," and that became the no theatre rule. A week later it covered status reports too: nothing gets called running or done without evidence gathered in that same turn, like a log line or a passing test. In June the agents built a hook that stops a worker finishing until the gate passes, and a separate checking agent, but both shipped switched off by default. The number I most wanted, the share of "done" claims that survive a cold re-check, was never measured.

The Mac itself was a failure point. Around 24 May the shared Rust build cache in a temporary folder grew to 328 GB. Free memory fell to about 30 MB, macOS started killing the compiler, and five merge rounds in a row were deferred before anyone worked out why. We moved the cache to real disk and cut the workers from four to two, and the supervisor learned to wait when memory was low.

There was a lot of merge churn. Hosted CI (the GitHub service that tests every change) was off from 9 May because the billing was blocked, so most merges relied on local gates, and 132 pull requests were closed without merging. A generated page of the feature list had to be rebuilt by every change that touched the list, so almost any two of those changes conflicted until we stopped committing it. One reviewed fix was quietly undone by a later merge, and nothing caught it until a 25 run browser test. After that a local sweep re-tested the main branch after every merge and froze merging when it failed.

Cost was mostly flat: Claude Max subscriptions (two accounts for one sprint in June), an OpenAI Pro plan for Codex, and AWS startup credits for the hosted version. The tighter limit was the Claude allowance. On 23 May we hit 98% of it and stopped the swarm. The one accident was on 10 May, when an API key left in the shell made workers bill paid credits instead of the subscription, so from then on the worker script refused to start if that key was set.

## The business verdict

In late June I had agents run an adversarial review of the business, with instructions to find every reason it would fail. The verdict was that a general platform for governing AI teammates was a losing position. The AI labs and the big cloud providers were shipping the same building blocks, some of them free, and Argo didn't own one job a customer was desperate to get done. It had no paying customers. The engineering was real but the shape of the business was wrong, so I shut it down. Production was torn down in late June and the data deleted.

## What I'd do differently

I'd start from one customer with one painful job and build only what it needs. In June I built a gate that wouldn't let an agent call work done until the checks passed, and a separate agent to check every change, but both shipped switched off and I never turned them on before I shut it down. Next time I'd build the checking before adding agents and switch it on from the first day. I wouldn't keep the work queue in a file every agent commits to, since that file made most of the noise and plenty of the collisions, and an issue tracker would have done the job. I'd keep CI on and pay for it, and I'd measure how often "done" was really done from week one.

## What carried over

SKYCOT is now a Mac app where kids describe an app and AI builds it, with a parent in the loop. The plan is shown before every change and nothing goes online without a parent's code. Every change can be restored. That's Argo's approval and audit idea cut down to one family, running on the AI the family already pays for rather than reselling it.

LVLme (then called Climb), my open source tool for working out honest odds of landing a job, is built on the no theatre rule. Every claim needs a source or it scores zero, and fresh reviewers check the scoring blind. Nothing public happens without the person's yes.

Getting agents to produce work was the easy part. Most of what I built around them was there to tell me which of that work was real, and that's the part I'd bring to any team running agents now.
