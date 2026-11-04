---
title: "Ping me, and away mode: agents for a person who is not at the keyboard"
date: "2026-11-05"
dek: "Most agent tooling assumes you are sitting in front of it. I'm usually not. Two small rules, written down so any agent follows them, changed how much I can hand over."
readMinutes: 4
category: "Method"
draft: true
number: 17
---

I start most jobs at my desk and follow them from my phone. That is not a preference. It is how a day goes: a job starts, I go and do something else, and the agent either finishes or stops to ask me something. The problem is that the agent tools I use assume I am sitting in front of them. It stops, puts a question on the screen, and waits. If I am in the kitchen it waits until I come back. When it does finish, it hands me a file path and an `open` command, which my phone cannot do anything with. The thing I kept typing from my phone was "send me a screenshot".

So I wrote two rules down, ping me and away mode, and this week I made them public skills in mStack, so they switch on by themselves in whatever agent I am using.

## Ping me

Whenever an agent needs my decision or my input, or a task I asked for is complete or blocked, it tells me straight away, without being asked, on my phone and watch where it can, and otherwise by the best channel it has, saying which one it used. One line, under 200 characters, leading with what I would act on: "Need your OK to publish the site: 2 options in the chat". Not for routine progress, and not when I am clearly at the screen answering it. If there are three open questions they come as one ping, not three.

That sounds trivial. It is not, because of what it lets me do. If I know I will be told, I can walk away. In my experience, and I have not timed it, the agent gets a long uninterrupted run instead of short bursts between my check ins, and I get my afternoon back.

The hard part was being honest about what actually reaches a phone. In Claude Code with its remote control feature connected, a push (a phone notification) goes to the phone and watch through the Claude app. In Codex, Cursor and any headless run (a run with no screen attached), the skill uses the agent's own notification where it has one, and otherwise a desktop alert on the computer, and computers do not forward their banners to phones. The first version of the skill implied they did. I took that line out, because a notification rule that quietly fails is worse than none: you walk away trusting it. Now the skill says which channel it used, offers a free phone push service as an opt in, and never turns that on without a yes, because it sends the text to a third party.

## Away mode

The second rule is about what the agent hands me when I am away. From a phone I cannot click a local path, run an `open` command, or look at a file on the computer. So before presenting anything, the agent works out whether I am there.

It reads that in layers, most trusted first. My own words win: "I'm on my phone" means away, "I'm back" means present. Then whatever the harness (the tool the agent runs inside) tells it: a note that I am following from another device, or a push that was not sent because I am at the terminal. Then the machine itself: keyboard and mouse idle for ten minutes, a locked screen, a sleeping display. When it cannot tell, it delivers both ways, because that is cheap.

When I am away, it makes copies my phone can show. An HTML report becomes a PDF plus a phone width screenshot. A Markdown file becomes a page, then the same. A local web app becomes desktop and phone screenshots. It sends those into the chat, puts the three to five key points in the message itself, and mentions the local path once at the end so I can find the file later. Never just a path.

## One example

The design review loop I run produces a report every round, a web page with scores, screenshots and a list of fixes. The first rounds ended the way most agent work ends: "the report is at this path". From the phone that is nothing. In my own runs this week (the review of this site's essays on 4 and 5 November; my record, not public) a round ends with the report as a PDF and a phone screenshot in the chat, the headline scores in the message, and a ping that says the files are there. I can read a round on the train and reply "fix the top three" without touching the computer. The loop did not get smarter. It got delivered.

## Why I think this matters beyond me

In every agent workflow I have run, the person at the keyboard was the bottleneck. The usual fix is to make the agent need the person less, which is right, and I work on that too. The other half is to make the person's absence safe: tell them when they are genuinely needed, in a line they can act on, and hand them things they can actually read where they are. Agents built for someone who is always present will keep waiting for a person who is not there.

## Sources

- The ping-me skill, including what honestly reaches a phone and the opt in push service: [github.com/mark-hallam/mstack/blob/main/skills/ping-me/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/ping-me/SKILL.md)
- The away-mode skill, with the detection layers and the phone readable copies: [github.com/mark-hallam/mstack/blob/main/skills/away-mode/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/away-mode/SKILL.md)
- The line about phones mirroring the computer's notifications being removed: [mStack changelog, 0.3.0](https://github.com/mark-hallam/mstack/blob/main/CHANGELOG.md)
- The review loop that produces the report: [Two reviewers from different makers, and why 10 out of 10 was the wrong finish line](/writing/two-reviewers-from-different-makers-and-why-ten-was-the-wrong-finish-line)
