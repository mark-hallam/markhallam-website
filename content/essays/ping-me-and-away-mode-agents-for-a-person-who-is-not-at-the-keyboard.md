---
title: "Build agents for a person who is not at the keyboard"
date: "2026-11-05"
dek: "I follow most agent jobs from my phone, and the tools kept waiting for me at a screen. Two small rules, written down so any agent follows them, changed how much I can hand over."
readMinutes: 2
category: "Method"
number: 17
---

I start most jobs at my desk and follow them from my phone. A job starts, I go and do something else, and the agent either finishes or stops to ask me something.

Then it puts the question on the screen and waits. In the kitchen, I am not there to answer. When it does finish, it hands me a file path and an `open` command, which my phone cannot do anything with. The thing I kept typing from my phone was "send me a screenshot".

So I wrote two rules down, ping me and away mode. In November 2026 I made them public skills in mStack (my open source skills for agents), so they switch on by themselves in whatever agent I use.

## Ping me

When an agent needs my decision or my input, or a task I asked for is done or blocked, it tells me straight away, without being asked. Phone and watch where it can, and it says which channel it used. One line, under 200 characters, leading with what I would act on: "Need your OK to publish the site: 2 options in the chat". Not for routine progress. Three open questions come as one ping, not three.

If I know I will be told, I can walk away. In my experience, and I have not timed it, the agent gets a long uninterrupted run.

The hard part was being honest about what reaches a phone. In Claude Code with its remote control feature connected, a push (a phone notification) reaches my phone and watch. In Codex, Cursor and any headless run (no screen attached), the skill uses the agent's own notification where it has one, and otherwise a desktop alert, and computers do not forward banners to phones. The first version of the skill implied they did. I took that line out. A rule that quietly fails is worse than none, because you walk away trusting it.

## Away mode

From a phone I cannot click a local path or look at a file on the computer. So before presenting anything, the agent works out whether I am there.

My own words win: "I'm on my phone" means away. Then what the harness (the tool the agent runs inside) says. Then the machine: ten minutes idle, a locked screen. When it cannot tell, it delivers both ways, because that is cheap.

When I am away, it makes copies my phone can show. A report becomes a PDF plus a phone width screenshot, a local web app becomes screenshots. It sends those into the chat, with the key points in the message itself. Never just a path.

My design review loop used to end with "the report is at this path". In my own runs in early November 2026, a round ends with the PDF, a screenshot, the headline scores and a ping. I can read a round on the train and reply "fix the top three". The loop did not get smarter. It got delivered.

In every agent workflow I have run, the person at the keyboard was the bottleneck. Making the agent need me less is right. The other half is making my absence safe. Agents built for someone who is always present will keep waiting for a person who is not there.

## Try them

If you are not always at the keyboard, add the [ping me](https://github.com/mark-hallam/mstack/blob/main/skills/ping-me/SKILL.md) and [away mode](https://github.com/mark-hallam/mstack/blob/main/skills/away-mode/SKILL.md) skills to the agent you already use. They are free, in mStack, and they switch on by themselves. If one fails you on the train, that is the bug I want to hear about.

## Sources

- The ping-me skill, including what honestly reaches a phone and the opt in push service: [github.com/mark-hallam/mstack/blob/main/skills/ping-me/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/ping-me/SKILL.md)
- The away-mode skill, with the detection layers and the phone readable copies: [github.com/mark-hallam/mstack/blob/main/skills/away-mode/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/away-mode/SKILL.md)
- The line about phones mirroring the computer's notifications being removed: [mStack changelog, 0.3.0](https://github.com/mark-hallam/mstack/blob/main/CHANGELOG.md)
- The review loop that produces the report: [Two reviewers from different makers, and why 10 out of 10 was the wrong finish line](/writing/two-reviewers-from-different-makers-and-why-ten-was-the-wrong-finish-line)
