---
title: "The path of least resistance for agents"
date: "2026-04-05"
dek: "If your AI worker keeps asking for clarification, the problem isn't the model. The problem is the surface you handed it. The interesting craft is shaping the workspace so the agent can just go."
readMinutes: 7
category: "Practice"
number: 12
---

I sat watching an agent that I had asked to make a small fix on a piece of software. Twelve minutes in, it had not changed any code. It was asking me whether the variable name should match an adjacent style or the project-wide convention. I said: match the project. It then asked whether the project convention included acronym capitalisation, or whether acronyms followed the older rules used in three specific files. I said: I do not know, pick the more common one. It then asked which it should consider more common, the older files or the newer ones.

This was not a model problem. This was an environment problem. I had handed the agent a piece of work with under-specified context, then watched it spend a tenth of its working life trying to extract clarifications from me one nano-decision at a time.

The fix took me twenty minutes. I rewrote the brief. I added a one-line "match newer-file style" directive. I added a project-style file at the root of the repo that the agent could read. I added a brief-quality gate that refused to claim any work where the style was ambiguous. The next agent run shipped in four minutes without a single clarifying question.

## The variable is the surface, not the model

The lesson, which I now believe is the central craft of working with capable agents: the model is not the variable you control most. The surface is.

The model is roughly the same model your competitor is using. The surface — the briefs, the ledgers, the freshness gates, the file budgets, the canonical types, the routing rules — is yours to design. <span class="accent">That surface is where most of the work lives.</span>

I have been thinking of it as the path of least resistance. The agent will take whichever path is most frictionless to advance the work. If the most frictionless path is "ask the human a clarifying question", the agent will do that, possibly forever. If the most frictionless path is "read the style file and proceed", the agent will proceed.

You can engineer this. It is mostly unglamorous. Some examples from the systems I have built or watched work:

**A canonical brief format** that contains a freshness header, the load-bearing intent, the file budget, the verification gate. Briefs without those fields fail the linter before they can be claimed. The agent never sees a brief that lacks the surface it needs to act.

**A ledger that is the single source of truth** for what is claimed, who claimed it, what state it is in. The agent does not ask the conductor whether anything is in flight. The agent reads the ledger.

**A "wire or defer" rule** that says: every new public symbol in a brief must name its consumer. If the consumer is not landed in the same batch, the brief carries a one-line justification. Dead code does not accumulate because dead code is impossible to declare.

**A "grep before write" rule** that requires the brief author to verify a same-named surface does not already exist before declaring a new one. Parallel abstractions do not accumulate because they cannot pass the lint.

Each of these is a small piece of surface design. None of them are model-level changes. All of them dramatically increase the percentage of agent time spent shipping rather than negotiating.

## The wrong lever

I keep going back to this because I think most teams trying to get agents working are reaching for the wrong lever. They are tuning the model. They are switching providers. They are adjusting the system prompt. Those changes are real, but they are second-order.

The first-order change — the one that most teams are not making — is the surface change. Build the workspace such that the path of least resistance is forward progress.

There is a side effect of working this way that took me by surprise. Once the surface is well-designed, the same agent does much better work. The same Claude. The same Codex. No model change. Surface change. The agent becomes more capable not because anyone changed its weights but because the environment now favours the moves it was already inclined to make.

This is the closest I have come to an actual operating principle in this space. The agent is not the variable. <span class="accent">The surface is.</span>
