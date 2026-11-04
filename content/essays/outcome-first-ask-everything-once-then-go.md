---
title: "Outcome first: ask me everything once, then go"
date: "2026-11-05"
dek: "The expensive moment in agent work is the clarifying question that arrives while I'm away from the keyboard. Pin the outcome, ask every question in one batch with defaults, then run to a result the agent can prove."
readMinutes: 4
category: "Method"
draft: true
number: 14
---

A typical run, as I remember them: an agent gets twenty minutes into a job, hits a choice it could have raised at the start, and waits. I'm cooking, or on the train, and the work sits there until I come back and type "yes, the second one". Then it runs for another twenty minutes and stops again. Most of the time I lose with an agent is not the agent being slow. It is the agent stopping.

I now run every real piece of work the other way round. Before the agent starts, we settle three things: the outcome in my words, what done looks like in things it can prove, and every question it will need answered. The questions come as one batch, each with a sensible default, so I can reply "go". Then it runs to the end without me, and reports once.

## Where it came from

The example here is borrowed from before the skill existed, and I say so. I learned this on Argo, the platform I had a swarm of Claude and Codex agents build over eight weeks in 2026. The whole swarm ran off one file: a ledger (one table that tracked every piece of work) where every row pointed to a written brief. A brief said what to change, which files it could touch, the tests that proved it was done, and the exact version of the code it was written against. A worker claimed the first open row and went.

What I saw, and it is my own reading of the record rather than a number anyone measured, is that a gap in a brief rarely came back as a question. It came back as confident work built on a guess. The clearest case is in the record: a mid May audit found that about a quarter of the conductor's briefs had recreated something that already existed. My explanation, and it is mine, is that nobody asked the one question that mattered before writing them, "does this already exist?" The agents were not the problem. The minute before the agent started was, because in my experience that is the cheapest moment to get every question answered. Disagreements surface there, not three changes in.

## What the method is now

I wrote it down as a skill called outcome-first, part of mStack, my open source collection of skills for people and their agents. The steps are plain.

**One sentence for the outcome**, in the person's terms. "The site is live at the new address with the new pricing page, and checkout works."

**Done, as things that can be proved.** A test that passes, an address that loads, a file that exists, a screenshot, a number. Where a command can prove it, the command goes next to it. "The page looks right" is not on the list; "the address answers and the screenshot matches" is.

**Every question, once, with defaults.** The agent thinks through the whole job first: every choice, credential, preference and unknown it will hit. Then it asks them all at once. Two questions are always in the batch: "is this what done looks like?" and "may I run unattended until it is done, including scheduling my own resume if a usage limit stops me?"

**A progress file that survives restarts.** One file that anyone can read, including the agent after a crash, another agent, or me from my phone, to see exactly where things stand. Work done without it is not following the method, because there is no evidence trail and nothing to resume from.

**Run in parallel, finish with evidence.** Independent parts start at the same time. A task is marked done only with the evidence attached. The skill's final check (a small program, not the agent) refuses to declare the outcome achieved while a question for me is still open; it does not get to guess my answer.

**Report once.** The outcome, the evidence for each done check, and anything left for me. Then a ping, to my phone where the setup allows it, and otherwise by the best channel the agent has.

## The honest part about usage limits

A usage limit stops an agent mid turn, before it can schedule anything, and Claude Code, as of November 2026 and as far as I have been able to find, has no scheduler for after a limit; its own wake up timer stops at an hour. So the skill's answer is a resume armed in advance, at the start and with my yes, from the computer's own scheduler, with a command that runs unattended; it is removed when the outcome is achieved. I would rather say that plainly than promise a resume that cannot happen.

## Where it stands

I should be plain about how new the packaged version is. The parts of the method that came from Argo, the written brief and the proof of done, are months old; the batched questions and the progress file that survives a restart are new with the skill, which was published this week, and I cannot yet point you at a finished run of it with its progress file. The Argo briefs are the real example. The skill is the method written down so that any agent I use follows it the same way.

## What it changes

The person says what they want once. The agent asks once. The person hears back once, when it is done or when a decision is genuinely theirs. That is the path of least resistance for the person, which is the only path that matters.

It also changes what "a good agent" means. An agent that asks good questions is not the goal. An agent that asked all of them before it started is.

## Sources

- The outcome-first skill, with the steps above and the tool that runs them: [github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md)
- How the Argo swarm ran on briefs and a ledger, and the mid May audit that found about a quarter of the briefs recreating existing work: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
