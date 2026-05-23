---
title: "The room is the architecture"
date: "2025-12-04"
dek: "The interesting unit of senior knowledge work is no longer the conversation with one agent. It is the room — the conductor, the workers, the audit loop, the marketing cron. The operator becomes the architect of how agents talk to each other and to the work."
readMinutes: 7
category: "Practice"
number: 8
---

I run my building work through a layout that took me about nine months to settle into and that I now cannot imagine working without. It is a room of windows. Specifically: it is several terminal windows, each running a Claude instance, each playing a different role.

## The layout

One window is the **conductor**. The conductor reads the live ledger every fifteen minutes, picks the next piece of work, authors the brief for it, and dispatches the brief to a queue. The conductor does not write code. The conductor's job is to know what should happen next.

Two to four windows are **workers**. Each worker pulls a brief from the queue, does the work, opens a PR, and waits. Workers can be Claude or Codex or any other agent family — the queue does not care. When a brief completes, the conductor picks up the next brief in priority order.

One window is an **audit cron**. It runs every two hours, scans the recent changes for drift, type duplicates, dead code, anything that looks like the swarm produced something it should not have. If it finds something, it writes a follow-up brief and adds it to the queue. The conductor picks up follow-up briefs the same way it picks up new work.

One window is a **marketing cron**, which is genuinely my favourite. It runs once a day, reads the day's commits and ledger updates, and drafts a couple of LinkedIn post candidates in my voice for me to look at the next morning. I edit the ones that resonate. I throw away the ones that do not. The ones I post are mostly distilled from the work that actually happened that day, which means they are never bullshit.

## Why "room" is the load-bearing word

The reason I tell you this in detail is that the most important word in the whole setup is "room". The leverage is not the agents. The leverage is the architecture of how the agents talk to each other and to the work. Once the room is built, my job becomes mostly architectural. Not typing.

> My output went up by something like ten times, and my hours did not.

Here is the thing that surprised me about working this way for nine months: my output went up by something like ten times, and my hours did not. My hours went down a little, actually, because the throughput of the room runs in parallel to me being in it. I sleep, the swarm keeps shipping until the queue empties. I am home with my family, the audit cron catches something, the conductor authors a follow-up. I come back to a row of completed work to review.

## The skill is room architecture

The skill I have been most steadily developing is not prompting. It is not picking models. It is **room architecture**. Which agents do what. How they signal to each other. Where state lives. How drift is detected. What the operator looks like in the room — and what the operator no longer needs to be in the room for.

Most people working with AI right now are working in a single window. One Claude tab, one conversation, one human handing off to one agent. That model works fine for a single conversation. It scales nowhere. The interesting unit of work is not the conversation. The interesting unit of work is the room.

I think this is the actual shape of senior knowledge work over the next few years. Not "AI replaces people". Not "AI is just a copilot". Both of those framings are stuck in the single-window model. The third framing — <span class="accent">operator as architect of the room</span> — is the one I have not seen anyone articulate well but is the one I am living in every day.

## A small request

If you are an operator wondering what to invest in learning, invest in this. Pick one project — a small one is fine — and build the room. Conductor, workers, an audit loop, maybe a marketing cron. Live in it for a month. By week three, you will not work any other way.
