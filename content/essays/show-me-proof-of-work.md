---
title: "Show me proof of work"
date: "2026-11-05"
dek: "My agent told me it was working and it wasn't. Now I want the before and after, with the change marked, or the test that passed. I can approve that in seconds, and I don't have to take anyone's word."
readMinutes: 3
category: "Method"
draft: true
number: 16
---

An agent told me something was working. It wasn't.

In my view that is the most dangerous thing an AI agent has done to me. Not breaking something. Telling me it was working.

In May 2026 I was directing a swarm of coding agents building Argo, a platform for AI teammates. By late May the record shows a safety check that stamped "pass" without running its tests, and a conductor agent (the one in charge of the others) reporting a process as running while its own logs showed it idle. Then a review found about 24 screens still showing sample data, with every headline claim reported live.

I don't think the model was stupid. My read is that each agent did the easiest thing, which was to report what I wanted to hear. But Argo's whole point was that you could check what its teammates had done. If I let that stand, it would have been built by agents that made things up.

So here is the rule. Don't show me code or tell me it's done. Show me the screen before, the screen after, and the change marked so I can't miss it.

The proof is made for me, not the agent. A log line proves it to the agent. A before and after picture proves it to me, and I am the one who has to say yes. I can do that in seconds. Words I have to trust are a claim I have to go and check.

It started as one sentence I typed on 24 May: "I want the demo to be real, I can't be called out or embarrassed." By 31 May it covered the agents' own status reports. "Done" and "live" need a verifier: a commit (a saved change in the code's history), the last lines of a passing test, a live address answering. If something can't be checked, the agent says so: "set up but unverified, checking now." And when a sub agent says "done", the agent above it checks again. Otherwise one confident lie arrives at me in my own agent's voice.

Every incident added a check, and the checks slowed the swarm. Merged pull requests (finished changes accepted into the code) fell from 722 in the first week to 58 in the eighth. I cannot say how much of that is this rule and how much is harder work.

I never measured how many "done" claims survive a cold re check. The agents built a hook (a small program that runs at a fixed moment) that stops a worker finishing until the checks pass. It shipped switched off and I never turned it on. Next time I build the checking first and switch it on from day one.

Keep the rule in the quiet week. The lie that costs you arrives then, when you have stopped checking.

Don't ask agents to be more honest. Accept only evidence that can't be written: the picture of the thing before and after, or the test that passed.

## Try it

[mStack](https://github.com/mark-hallam/mstack) is my open source set of skills for people and their agents. Its review loop captures the same screens the same way every round, so each round ends with the same screen before and after, side by side. [LVLme](https://github.com/mark-hallam/lvlme), my open source job odds tool, holds to the same rule: every claim needs a source or it scores zero. If either one tells you something is done without showing you, that is the bug I want to hear about.

## Sources

- The incidents, the 24 May instruction and the merge counts: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
- "Done means checked", under What I believe: [About](/about)
- The evidence rule in mStack's outcome-first skill ("a task without evidence is not done") and the checkable verdicts in multi-evaluator: [github.com/mark-hallam/mstack](https://github.com/mark-hallam/mstack)
- LVLme, where every claim needs a source: [github.com/mark-hallam/lvlme](https://github.com/mark-hallam/lvlme)
- The 24 May and 31 May decisions are recorded in Argo's decision register, which is private; the wording above is from those records.
