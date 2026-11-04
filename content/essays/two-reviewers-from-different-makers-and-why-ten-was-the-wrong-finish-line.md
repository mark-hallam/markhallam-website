---
title: "Two reviewers from different makers, and why 10 out of 10 was the wrong finish line"
date: "2026-11-05"
dek: "I had AI reviewers from two companies score my work in rounds until every journey hit 10. After thirteen rounds in one day, nothing ever did. The scores told me something, but not what I had assumed."
readMinutes: 5
category: "Method"
draft: true
number: 15
---

On 4 November 2026 I ran thirteen rounds of design review in one day and nothing reached the finish line I had set. Here is the method, and what the day taught me about the finish line. I write down the journeys a real person must complete, end to end, and the criteria each is judged on. Then two AI reviewers from different companies, Claude and Codex, each drive the real thing in a real browser, in fresh context (a new session that has seen nothing of the work before), never told what I hope to hear. Each scores every journey 0 to 10, says what it would score if its fixes were made, and lists the fixes with a severity. I fix, capture the same screens the same way, and go again.

The rule I locked was simple: keep going until every journey scores 10 from both. The thirteen rounds ran across an app, my own site and a profile, and then I sat down to review the method itself. The rule was wrong.

## What the day showed

Of sixteen journeys, none ever reached 10 from both reviewers. The best any journey got was 9 from Claude and 8 from Codex. Codex never went above 8 across seven rounds on one piece of work, and when asked what it would give if its fixes were made, it never said more than 9. Its ceiling was 9. My finish line was above its ceiling.

Worse, I had been reading one point moves as progress. One of the reviews kept scoring an unchanged baseline every round, by accident rather than design. On a thing that did not change at all, Claude's score for the same journey moved by up to two points between rounds and Codex's by one. So a one point rise after a round of fixes is inside the noise. I had been making decisions on it.

By the late rounds the fixes had gone generic, along the lines of keep it current and shorten this section. The sharp findings all came early: a wrong count, a counter that did not update, a raw error message on screen, a title that broke one of my own rules. That is what the reviewers are for.

The research on using models as judges says adjacent things in more careful words. Judges favour text their own model wrote (Panickssery, Bowman and Feng, 2024). Kapetanovic and others (2026) found that a judge pulls toward scores it has already seen, which the research calls anchoring. And my own reading of the research on optimising against a stand in measure is that a perfect score on the stand in is a warning sign, not proof. My brief had been handing each reviewer last round's screenshots and asking what improved, and it carried my own design taste. I was anchoring the reviewers I had set up to be independent.

## What changed

I changed the skill the same day. It is public, in mStack, and the changes are in its changelog.

**"Done" is now "ready for people".** Every journey 9 or better from every reviewer, reviewers within a point of each other, no high severity fix open, and that held for two rounds running. A unanimous 10 is a flag to double check the brief, not the goal. There is a round cap, after which the loop stops and asks me, because the journeys or criteria may be asking for something the product should not do.

**Blind first, compare second.** The scoring brief shows this round only: no earlier screenshots, no earlier scores, no design direction. Constraints a fix must respect are shown separately and marked "not scored". A comparison with last round is a second pass, after the score is saved, and it never changes the score.

**Noise is measured, not assumed away.** The first round's screens are frozen and every reviewer scores them every round as a control, an unchanged item scored again and again to see how much the scores wobble on their own. How far that control score moves is that reviewer's noise, and the report marks any change no bigger than it as "within noise".

**Disagreement is shown, not averaged.** In the first round on my site, Claude gave one journey 4 and Codex gave it 7, with 35 proposed fixes against 9. An average of those two numbers is not information. Now the report shows the gap, and where the reviewers differ by two or more I look myself before acting on either.

**A third maker, when it helps.** An optional third reviewer through a web chat the person already pays for, as a tie breaker. It sees screenshots, not the live product, so it never counts toward "ready for people" and can never be the only reviewer.

## What I still believe

The shape of the method is right: evidence from a real browser, the same screens every round, two makers kept apart, verdicts a tool can refuse (the program that records a verdict rejects a 10 that still proposes fixes). It found real bugs I would have shipped. What was wrong was the stopping rule, and the assumption that a number from a model means the same thing in round one and round nine.

AI scores are a strong signal. They are not proof. When the loop says ready, real first time people try it, and where they disagree with the reviewers, the people win.

## Sources

- The multi-evaluator skill and its stopping rule: [github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md](https://github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/SKILL.md)
- The changes made on 4 November 2026 (ready for people, blind first, the control, disagreement shown, the chat reviewer): [mStack changelog, 0.3.0](https://github.com/mark-hallam/mstack/blob/main/CHANGELOG.md)
- Why the loop works this way: [references/method.md](https://github.com/mark-hallam/mstack/blob/main/skills/multi-evaluator/references/method.md)
- Judge research referred to above: Panickssery, Bowman and Feng, "LLM Evaluators Recognize and Favor Their Own Generations" ([arxiv.org/abs/2404.13076](https://arxiv.org/abs/2404.13076)); Kapetanovic et al, "Anchoring Bias in LLM-as-a-Judge Systems" ([arxiv.org/abs/2608.25869](https://arxiv.org/abs/2608.25869)); on proxy scores, Gao, Schulman and Hilton, "Scaling Laws for Reward Model Overoptimization" ([arxiv.org/abs/2210.10760](https://arxiv.org/abs/2210.10760))
- The round counts and scores are from my own review folders for that day, which are private; the lessons are what I can share.
