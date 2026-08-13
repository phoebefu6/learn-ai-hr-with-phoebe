<!-- phoebe header -->

[![Open the live course](https://img.shields.io/badge/%E2%96%B6%20open%20the%20live%20course-1f6feb?style=for-the-badge)](https://phoebefu6.github.io/learn-ai-hr-with-phoebe/)
[![Star this repo](https://img.shields.io/github/stars/phoebefu6/learn-ai-hr-with-phoebe?style=for-the-badge&label=star%20this%20repo&color=444444)](https://github.com/phoebefu6/learn-ai-hr-with-phoebe/stargazers)
[![Free courses](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fphoebefu6.github.io%2Flearn-with-phoebe%2Fstats.json&query=%24.courses_live&label=free%20courses&style=for-the-badge&color=111111)](https://phoebefu6.github.io/learn-with-phoebe/)

### ▶︎ [Open the live course →](https://phoebefu6.github.io/learn-ai-hr-with-phoebe/)

Free, runs in your browser. No install, no login.

> 📚 Part of **[Learn with Phoebe](https://phoebefu6.github.io/learn-with-phoebe/)** - free, hands-on courses on AI, data, and the craft around them. **[Browse every course ↗](https://phoebefu6.github.io/learn-with-phoebe/)**

<!-- /phoebe header -->

# learn AI + HR with phoebe

AI across the whole people lifecycle, taught the way the law and the person on the other side of
the decision both require - sixteen 45-minute sessions across two tracks, on one running company.

A **leader track** (6 sessions) for CHROs, HR directors and heads of talent: what AI changes about
the people function, the legal map, governing AI in hiring, what fairness requires you to measure,
people data and trust, and rolling it out. An **HR track** (10 sessions) for HR partners, recruiters,
L&D and people ops: the workspace, role scorecards and job descriptions, sourcing at volume, the
screening slate with a live simulator, structured interviews, offers and decision records,
onboarding, performance writing, internal mobility, and a full hiring wave as a capstone.

The running company is **Kestrel**, a fictional 400-person services firm scaling to 600, with a
120-role hiring wave, a performance cycle, and an engineering attrition problem. Kestrel and every
number in it are invented.

## The three rails

- **A person decides, and the record shows which person** - with the reason written the same day.
- **Rate the job, not the polish** - undefined criteria quietly measure background.
- **People data is not prompt fodder** - no CVs, health, grievances or named pay in a workspace.

## The simulator

Session b4 carries `hr-live.js` - a screening fairness and quality simulator. A synthetic slate of
24 applicants competes for 12 interview slots. **Two numbers move at once**: shortlist quality, and
the adverse impact ratio under the four-fifths rule, both computed live from whatever shortlist the
levers produce.

`61 quality · 0.09 ratio (FAIL) → structured criteria → scrub proxies → evidence per rating → calibrated raters → human decision gate → 100 quality · 1.00 ratio`

A sixth lever, the impact check, deliberately moves neither number: it reveals the ratio and blocks
the slate. Measuring is not fixing - and a screen that never measures fails silently. The arithmetic
is real; the slate and the AI screen are a labelled teaching simulation.

## Sessions

**Leader track** - a1 what AI changes about the people function · a2 the legal map · a3 governing AI
in hiring · a4 fairness in practice · a5 people data, monitoring and trust · a6 rolling it out

**HR track** - b1 your HR workspace · b2 role definition and the job description · b3 sourcing and
outreach · b4 the screening slate (live simulator) · b5 structured interviews and calibration ·
b6 offers and the decision record · b7 onboarding · b8 performance and feedback · b9 L&D, mobility
and attrition signals · b10 capstone: a hiring wave and a performance cycle

Each session ends with a build-along, a 3-question quiz, a sources-covered list, and a cheat sheet.

## Run locally

```bash
python3 -m http.server 8661
# open http://localhost:8661
```

Static HTML/CSS/JS, no build step.

Sources: EU AI Act Annex III (employment high-risk), NYC Local Law 144, EEOC four-fifths guidance,
GDPR and Singapore PDPA, and selection research. Coverage and the deliberate gaps are documented in
[materials/official-course-map.md](materials/official-course-map.md).

**This is education for HR professionals, not legal advice.** Obligations vary by jurisdiction, and
the dates in this course have already moved once - verify the current position before you act.

by Phoebe Fu
