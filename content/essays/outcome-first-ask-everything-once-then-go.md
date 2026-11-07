---
title: "Outcome first: ask me everything once, then go"
date: "2026-11-05"
dek: "Most of my lost time with agents is them stopping to ask something. So I settle the outcome and every question up front, and the agent runs to a result it can prove."
readMinutes: 3
category: "Method"
draft: true
number: 14
---

I'm cooking, or on the train. The agent is twenty minutes into a job, has hit a choice it could have raised at the start, and waits. The work sits there until I come back and type "yes, the second one". Then it runs another twenty minutes and stops again. A typical run, as I remember them.

Most of the time I lose with an agent is not the agent being slow. It is the agent stopping.

So I now run every real piece of work the other way round. Before it starts, we settle the outcome in my words, what done looks like in things it can prove, and every question it will need answered. The questions come as one batch, each with a sensible default, so I can reply "go". Then it runs to the end without me and reports once.

I learned this on Argo, the platform a swarm of Claude and Codex agents built for me over eight weeks in 2026. Every piece of work was a row in a ledger (one table tracking all the work), and every row pointed to a written brief.

What I saw, and this is my own reading of the record, not a number anyone measured, is that a gap in a brief rarely came back as a question. It came back as confident work built on a guess. A mid May audit found that about a quarter of the conductor's briefs had recreated something that already existed. My explanation is that nobody asked "does this already exist?" before writing them.

The agents were not the problem. The minute before the agent started was.

## The method, written down

I turned it into a skill called outcome-first, part of mStack, my open source collection of skills for people and their agents.

**One sentence for the outcome**, in plain terms.

**Done, as things that can be proved.** A test that passes, an address that loads, a screenshot. "The page looks right" is not on the list.

**Every question, once, with defaults.** Two are always in the batch: is this what done looks like, and may it run unattended until it is done, including scheduling its own resume if a usage limit stops it.

**A progress file that survives restarts**, readable from my phone.

**Finish with evidence.** A small program, not the agent, refuses to declare the outcome achieved while a question for me is still open.

Then it reports once.

## The honest part

A usage limit stops an agent mid turn, before it can schedule anything. As far as I have found, Claude Code has no scheduler for after a limit. So the skill arms a resume in advance, with my yes, using the computer's own scheduler.

The skill is new, published on 5 November 2026. The written brief and the proof of done are months old, from Argo. The batched questions and the progress file are new, and I cannot yet point you at a finished run of it.

An agent that asks good questions is not the goal. An agent that asked all of them before it started is.

## Try it

The skill is [outcome-first in mStack](https://github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md), free and open source. It is days old and I cannot yet show you a finished run of the packaged skill. Try it and tell me what happened.

## Sources

- The outcome-first skill, with the steps above and the tool that runs them: [github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/outcome-first/SKILL.md)
- How the Argo swarm ran on briefs and a ledger, and the mid May audit that found about a quarter of the briefs recreating existing work: [Eight weeks running a swarm of AI coding agents](/writing/eight-weeks-running-a-swarm-of-ai-coding-agents)
