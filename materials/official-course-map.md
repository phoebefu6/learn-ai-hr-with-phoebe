# Official course map - learn AI + HR with phoebe

What this course teaches, mapped to the sources it is built from, and what it deliberately leaves
out. Written before the pages, verified against public sources on 2026-07-31.

**Two fast-moving warnings.** The AI tooling surface changes monthly. More importantly, so does the
law: the EU AI Act's high-risk obligations for employment were already postponed once, and NYC's
enforcement posture keeps developing. **Re-verify every date and threshold in a2, a3 and a4 before
delivering this course**, and say out loud in session a1 that you are doing so. The HR craft in the
course - structured criteria, evidence, calibration, a human decision - does not move.

---

## Source universe

| # | Source | What it anchors | Status |
|---|--------|-----------------|--------|
| S1 | EU AI Act, Annex III point 4 (employment, workers management, self-employment) | AI used for recruitment, selection, targeted job ads, filtering applications, evaluating candidates, promotion and termination is HIGH-RISK; obligations cover risk management, data governance, technical documentation, record-keeping, transparency, human oversight, accuracy and robustness | Verified 2026-07. **Timing moved:** the Digital Omnibus agreement postpones Annex III high-risk obligations from 2 Aug 2026 to **2 Dec 2027**. Teach it as moved, and re-check status before delivery |
| S2 | NYC Local Law 144 of 2021 (Automated Employment Decision Tools) | The live, enforceable one: an **independent annual bias audit** of the AEDT, a **public summary** of the audit results, and **at least 10 business days' notice** to candidates before the tool is used on them | Verified 2026-07. In effect since 1 Jan 2023, enforced by DCWP since 5 Jul 2023. Penalties from $500 per violation rising to $1,500 per day for continuing violations |
| S3 | EEOC Uniform Guidelines on Employee Selection Procedures - the four-fifths rule | The arithmetic the simulator computes: a selection rate for any group below 80% of the highest group's rate is evidence of adverse impact | Standard reference, stable |
| S4 | GDPR (incl. automated decision-making and profiling) + Singapore PDPA | Employee and candidate data: lawful basis, minimisation, retention, and the limits on decisions made without human involvement | Standard references |
| S5 | Structured-interview and selection research | Why structured criteria, scorecards and calibrated raters outperform unstructured judgment - the reason the fixes in this course are quality fixes, not just fairness fixes | Long-established selection literature |
| S6 | Anthropic docs - Projects, Skills, connectors/MCP | The workspace layer: how an HR team actually sets this up | Verified 2026-07; re-check before delivery |
| S7 | `learn-ai-governance-with-phoebe` and `learn-pdpa-dnc-with-phoebe` | The governance and privacy depth this course points at rather than repeating | Internal, live |

### Verified facts used on the pages

- The EU AI Act treats recruitment and selection AI as high-risk under Annex III, including tools
  that place targeted job ads, filter applications, and evaluate candidates - and extends to
  performance evaluation, task allocation, monitoring, promotion and termination.
- Annex III high-risk obligations were pushed to **2 December 2027** by the Digital Omnibus
  agreement. Systems already in use before that date are out of scope unless significantly changed
  in design; public authorities have until 2 August 2030. State this as "as of mid-2026, and check".
- NYC LL144 requires the bias audit to be **independent** and **annual**, the summary to be
  **public**, and candidate notice of **at least 10 business days**. This is the obligation most
  learners will actually be subject to first, and it applies to the employer, not just the vendor.
- The four-fifths rule: lower group's selection rate divided by the higher group's, below 0.80 is
  evidence of adverse impact. It is a screening signal that starts an investigation, not a verdict
  and not a safe harbour.
- Small slates make the ratio volatile - one seat can swing it - so the check belongs on the
  aggregate of a hiring wave as well as on each slate. The simulator makes this visible.

---

## Coverage by session

✓ = taught to working depth · ◐ = introduced, depth lives elsewhere

### Leader track (6 x 45 min) - CHRO, HR directors, heads of talent

| # | Session | S1 | S2 | S3 | S4 | S5 | S6 | S7 |
|---|---------|----|----|----|----|----|----|----|
| a1 | What AI changes about the people function | ◐ | ◐ | | | ✓ | ◐ | |
| a2 | The legal map | ✓ | ✓ | ✓ | ✓ | | | ◐ |
| a3 | Governing AI in hiring - vendors, audits, notice, records | ✓ | ✓ | ◐ | ◐ | | ◐ | ◐ |
| a4 | Fairness in practice - proxies, four-fifths, explainability | ◐ | ✓ | ✓ | ◐ | ✓ | | |
| a5 | People data, monitoring and employee trust | ◐ | | | ✓ | | ◐ | ✓ |
| a6 | Rolling it out to an HR function | ◐ | ◐ | ◐ | | ✓ | ✓ | |

### HR track (10 x 45 min) - HR partners, recruiters, L&D, people ops

| # | Session | S1 | S2 | S3 | S4 | S5 | S6 |
|---|---------|----|----|----|----|----|----|
| b1 | Your HR workspace and the three rails | ◐ | ◐ | | ✓ | | ✓ |
| b2 | Role definition and the job description | | | ◐ | | ✓ | ◐ |
| b3 | Sourcing and outreach at volume | ✓ | ◐ | | ✓ | | ◐ |
| b4 | **The screening slate - live simulator** | ✓ | ✓ | ✓ | ◐ | ✓ | |
| b5 | Structured interviews, scorecards, calibration | ◐ | | ◐ | | ✓ | ◐ |
| b6 | Offers, comp bands and the decision record | ◐ | ✓ | ◐ | ✓ | | ◐ |
| b7 | Onboarding that lands | | | | ◐ | ✓ | ✓ |
| b8 | Performance and feedback | ✓ | | ◐ | ✓ | ✓ | ◐ |
| b9 | L&D, internal mobility and attrition signals | ✓ | | | ✓ | ✓ | ◐ |
| b10 | Capstone - a hiring wave and a performance cycle | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |

The 80% bar: each session teaches roughly 80% of its mapped sources' working content. Certification
(SHRM, CIPD), the normative text of the AI Act, and any actual legal opinion stay with their owners -
the pages say so.

---

## The running company - Kestrel, week by week

A fictional 400-person services firm scaling to 600: a 120-role hiring wave, a performance cycle,
and an engineering attrition problem. Kestrel and every number in it are invented.

| Session | Where Kestrel is |
|---------|------------------|
| b1 | Week 0 - the hiring wave is approved, HR has no AI policy and three tools already in use |
| b2 | Week 1 - the first five roles get defined properly |
| b3 | Week 2 - sourcing at volume without turning into spam |
| b4 | Week 4 - 24 applicants, 12 interview slots, and a screen that fails the four-fifths rule |
| b5 | Week 6 - interviews get structured and raters get calibrated |
| b6 | Week 8 - the first offers, the comp band conversation, the decision record |
| b7 | Week 10 - 22 new joiners in one month |
| b8 | Week 20 - the performance cycle, written honestly |
| b9 | Week 24 - engineering attrition, the skills inventory, internal moves |
| b10 | Week 26 - one full hiring wave and one performance cycle, audited end to end |

---

## Not covered, by design

- **Legal advice.** The course teaches what the obligations are and how to work with them. It does
  not tell any learner what is lawful in their jurisdiction. Every legal session says so.
- **A specific HRIS or ATS.** Workday, SuccessFactors, Greenhouse, Ashby - configuration is the
  vendor's documentation. The course connects to them, it does not administer them.
- **SHRM / CIPD certification content.** This is a working course, not exam preparation.
- **Payroll, benefits administration, immigration.** Real HR work, wrong course.
- **Building your own scoring model.** The course is aimed at HR teams using tools, not at data
  scientists building them. Where a model is being built, that is a governance conversation and it
  routes to `learn-ai-governance-with-phoebe`.
- **Fully automated hiring decisions.** Not covered because it is not endorsed. A person decides,
  and the record shows which person.

## Honest coverage note for delivery

Say it in a1 and again in b4: this is the aidm domain where getting it wrong is not embarrassing,
it is actionable. Dates and thresholds in this course were correct on 2026-07-31 and one of them
has already moved once. Check before you teach it, and tell learners to check before they act.

by Phoebe Fu
