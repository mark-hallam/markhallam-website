---
title: "First principles before second principles"
date: "2026-02-28"
dek: "Most agent failures are not failures of execution. They are failures of alignment upstream — clever solutions to the wrong problem. The cheapest move is to ask 'what is the actual problem' before evaluating any answer."
readMinutes: 6
category: "Strategy"
number: 10
---

The pattern I see most often when an agent has produced a brilliant solution to the wrong problem: the operator looks at the work, says "this is great, but it does not actually do what we needed", and the agent says "I can adjust" and produces an equally brilliant solution to a slightly less wrong problem. Both parties are satisfied at the local level. The work is craft. The output is wrong.

The mistake happened before either of them did anything technically. The mistake happened in the first sixty seconds, when the brief was accepted without a hard look at whether it described the actual problem.

I have come to think of this as a second-principles failure. The agent did the work correctly, given the framing it was handed. The framing was wrong. Second-principles work is "executing well against a question". First-principles work is "asking whether this is the right question". <span class="accent">Most agent failures, in my experience, are first-principles failures dressed as second-principles failures.</span>

## The unglamorous fix

The fix is not exotic. It is unglamorous and discipline-heavy. Before an agent starts work, you ask — out loud, on paper, into the brief — what the actual problem is. Not the surface symptom. The underlying mechanic that is producing the surface symptom.

The example I keep coming back to: a client asked me to help them improve their AI-generated draft-response system for customer support. The drafts were "low quality" — agents producing replies that the human reviewers were rewriting more than half the time. The proposed solution was a better model. A different vendor. More fine-tuning. More guardrails.

When I asked what was actually wrong with the drafts the reviewers were rewriting, the answer was: tone. The drafts were technically correct but read as cold. The reviewers were not changing facts. They were warming the language up.

That is a tone problem, not a model problem. The fix was a system-prompt edit — about forty words — that specified the desired tone. The rewrite rate dropped from 56% to 9% over the next week. No new model, no fine-tuning, no vendor change. The problem the team had been trying to solve was "the model is not good enough". The actual problem was "we never told the model what tone we wanted". Once the actual problem was named, the solution was trivial.

I tell this story often because it is so unflattering to everyone involved, including me. I had been on the engagement for two weeks before I asked the question. The team had been on it for three months. The agents had been generating drafts for six. Nobody had asked "what specifically is wrong with these drafts" in a way that produced a usable answer until the work was already deep into a solution-shaped phase.

## The cheapest sixty seconds in the system

The procedural fix that I now live by is small. Before any meaningful work starts — agent work, human work, my own work — I write down the question I think the work is answering. Then I write down the question I think the work *should* be answering. If the two are different, I do the alignment work first. Usually the alignment work takes minutes. The wrong-problem work it would have replaced takes weeks.

This is not a new principle. Toyota's "five whys" is the same principle, more famously. What is new is that the cost of solving the wrong problem has fallen drastically because agents can produce wrong-problem work extremely fast. The constraint used to be "we cannot produce a solution quickly enough". The constraint is now "we cannot tell whether the solution we just produced was the solution we needed".

In that new constraint regime, the first-principles question — "what is the problem we are actually solving?" — becomes the most expensive question to skip and the cheapest to ask.

If I had to name a single discipline that separates the AI projects that ship from the ones that drown, it would be this. Sixty seconds of alignment before sixty hours of execution. The work the agent does is downstream of the question the operator handed it. <span class="accent">The question is the leverage point. The model is not.</span>
