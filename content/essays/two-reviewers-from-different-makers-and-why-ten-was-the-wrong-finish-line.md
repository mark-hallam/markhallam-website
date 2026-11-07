---
title: "Multiple agent reviewers from different makers equals better UX and UI"
date: "2026-11-05"
dek: "Thirteen rounds in one day, two AI reviewers, and not one journey scored 10 from both. The finish line I set was above what the reviewers could give. Here is what I changed."
readMinutes: 3
category: "Method"
draft: true
number: 15
---

On 4 November 2026 I ran thirteen rounds of design review in one day. Not one journey (a path a real person takes, start to finish) ever scored 10 from both reviewers.

I had set that rule myself: keep going until every journey hits 10. So I kept going. Claude and Codex each drove the real thing in a real browser, in fresh context (a new session that has seen nothing of the work). Each scored every journey 0 to 10, said what it would score if its fixes were made, and listed the fixes. I fixed, captured the same screens, and went again.

Then I sat down to review the method itself. The rule was wrong.

Of sixteen journeys, the best any got was 9 from Claude and 8 from Codex. Codex never went above 8 across seven rounds on one piece of work. Asked what it would give if its fixes were made, it never said more than 9. Its ceiling was 9. My finish line was above its ceiling.

One review had kept scoring an unchanged baseline every round, by accident. On something that did not change at all, Claude's score moved by up to two points and Codex's by one. I had been reading one point rises as progress, and making decisions on them.

The sharp findings all came early: a wrong count, a counter that did not update, a raw error message on screen, a title that broke one of my own rules. That is what the reviewers are for.

And I was part of the problem. My brief handed each reviewer last round's screenshots and carried my own design taste. I was anchoring (nudging toward earlier answers) the reviewers I had set up to be independent. The research says adjacent things in more careful words. Judges favour text their own model wrote (Panickssery, Bowman and Feng, 2024). Kapetanovic and others (2026) found that a judge pulls toward scores it has already seen. My own reading is that a perfect score on a stand in measure is a warning sign, not proof.

So I changed the skill the same day.

**"Done" is now "ready for people".** Every journey 9 or better from every reviewer, reviewers within a point of each other, no high severity fix open, held for two rounds running. A unanimous 10 is a flag to check the brief.

**Blind first, compare second.** The brief shows this round only. No earlier scores, no design direction.

**Noise is measured.** Round one's screens are frozen and scored every round as a control. Any change no bigger than that wobble is marked "within noise".

The method itself held up. Real browser, same screens, two makers kept apart. It found real bugs I would have shipped. What failed was the stopping rule.

Disagreement is shown, not averaged. In the first round on my site, Claude gave one journey 4 and Codex gave it 7, with 35 proposed fixes against 9. An average of those is not information. Where they differ by two or more, I look myself.

AI scores are a strong signal. They are not proof. When the loop says ready, real people try it, and where they disagree with the reviewers, the people win.

## Try it

The multi-evaluator skill is free in mStack, and it now stops at ready for people, not 10. Try it on your own site or app, and tell me where it gets it wrong: [github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md)

## Sources

- The multi-evaluator skill and its stopping rule: [github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md)
- The changes made on 4 November 2026 (ready for people, blind first, the control, disagreement shown, the chat reviewer): [mStack changelog, 0.3.0](https://github.com/mark-hallam/mstack/blob/main/CHANGELOG.md)
- Why the loop works this way: [references/method.md](https://github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/references/method.md)
- Judge research referred to above: Panickssery, Bowman and Feng, "LLM Evaluators Recognize and Favor Their Own Generations" ([arxiv.org/abs/2404.13076](https://arxiv.org/abs/2404.13076)); Kapetanovic et al, "Anchoring Bias in LLM-as-a-Judge Systems" ([arxiv.org/abs/2608.25869](https://arxiv.org/abs/2608.25869)); on proxy scores, Gao, Schulman and Hilton, "Scaling Laws for Reward Model Overoptimization" ([arxiv.org/abs/2210.10760](https://arxiv.org/abs/2210.10760))
- The round counts and scores are from my own review folders for that day, which are private; the lessons are what I can share.
