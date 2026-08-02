/* hr-live.js - the screening fairness + quality simulator (learn-ai-hr-with-phoebe).
   Reusable "watch the number climb" pattern (finance/marketing/brand/leadership/content/law/pm-live family),
   with one difference that matters: TWO meters move, and one of them is a legal test.

   Deterministic, offline, no dependencies. Renders into #hr-live.

   What is real: the slate is a fixed synthetic set of 24 applicants, and BOTH numbers are computed
   live from the shortlist the levers produce - the shortlist quality, and the adverse impact ratio
   under the four-fifths rule (the lower group's selection rate divided by the higher group's).
   Nothing is hardcoded; toggle in any order and both numbers move monotonically.

   What is a teaching simplification: the "AI screen" is a scripted scorer, the groups are synthetic
   labels standing in for a protected characteristic, and a real bias audit under NYC Local Law 144
   is an INDEPENDENT annual audit by a third party, not a number on a course page.

   The design point of the sixth lever: "run the adverse impact check" does not improve the ratio.
   It reveals it and blocks the slate. Measuring is not fixing - and a screen that never measures
   fails silently, which is the whole problem. */
(function () {
  var host = document.getElementById("hr-live");
  if (!host) return;

  var LEVERS = [
    { id: "structured", label: "Structured criteria",  hint: "rate against the real job, not the CV" },
    { id: "proxies",    label: "Scrub the proxies",    hint: "school, postcode, name, career gap" },
    { id: "evidence",   label: "Evidence per rating",  hint: "quote the work, not the impression" },
    { id: "calibrate",  label: "Calibrate the raters", hint: "same rubric, two independent reads" },
    { id: "gate",       label: "Human decision gate",  hint: "no auto-reject at the threshold" },
    { id: "audit",      label: "Run the impact check", hint: "the four-fifths rule, every slate" }
  ];

  /* the slate: 24 applicants, 12 in each synthetic group, shortlist 12.
     Six group-A applicants and one group-B applicant are strong enough to survive any screen.
     Five contested PAIRS sit on the shortlist boundary: each weak group-A applicant is carried
     above their stronger group-B counterpart by exactly ONE defect in the screen. Remove that
     defect and the pair flips. That is why every lever is worth exactly one seat. */
  var ALWAYS = [
    { id: "A01", g: "A", fit: 8.6 }, { id: "A02", g: "A", fit: 8.4 }, { id: "A03", g: "A", fit: 8.2 },
    { id: "A04", g: "A", fit: 8.0 }, { id: "A05", g: "A", fit: 7.8 }, { id: "A06", g: "A", fit: 7.5 },
    { id: "B01", g: "B", fit: 9.5 }
  ];
  var PAIRS = [
    { a: "A07", aFit: 3.0, defect: "structured", b: "B02", bFit: 7.4,
      why: "rated on CV polish and buzzwords instead of the job's real requirements" },
    { a: "A08", aFit: 2.6, defect: "proxies", b: "B03", bFit: 7.2,
      why: "carried by a prestige school and a familiar postcode; B03 is penalised for a career gap" },
    { a: "A09", aFit: 2.3, defect: "evidence", b: "B04", bFit: 7.1,
      why: "a confident rating with nothing quoted underneath it" },
    { a: "A10", aFit: 1.9, defect: "calibrate", b: "B05", bFit: 7.0,
      why: "one rater's drift, never checked against a second read" },
    { a: "A11", aFit: 1.5, defect: "gate", b: "B06", bFit: 6.8,
      why: "auto-rejected at the score threshold with no human looking at the near-misses" }
  ];
  var NEVER = [
    { id: "A12", g: "A", fit: 1.2 }, { id: "B07", g: "B", fit: 4.5 }, { id: "B08", g: "B", fit: 4.0 },
    { id: "B09", g: "B", fit: 3.4 }, { id: "B10", g: "B", fit: 2.8 }, { id: "B11", g: "B", fit: 2.4 },
    { id: "B12", g: "B", fit: 2.0 }
  ];

  var POOL = ALWAYS.concat(NEVER).map(function (c) { return { id: c.id, g: c.g, fit: c.fit, defect: null }; });
  PAIRS.forEach(function (p) {
    POOL.push({ id: p.a, g: "A", fit: p.aFit, defect: p.defect, why: p.why });
    POOL.push({ id: p.b, g: "B", fit: p.bFit, defect: null, pairOf: p.defect });
  });

  var SEATS = 12;
  var fitsDesc = POOL.map(function (c) { return c.fit; }).sort(function (x, y) { return y - x; });
  var BEST = fitsDesc.slice(0, SEATS).reduce(function (s, v) { return s + v; }, 0);
  var WORST = fitsDesc.slice(-SEATS).reduce(function (s, v) { return s + v; }, 0);

  var state = { structured: false, proxies: false, evidence: false, calibrate: false, gate: false, audit: false, mode: "slate" };

  function shortlist() {
    var scored = POOL.map(function (c) {
      /* the defect lifts a weak applicant over a stronger one, and only while it is present */
      var s = c.fit + (c.defect && !state[c.defect] ? 6.0 : 0);
      return { c: c, s: s };
    });
    scored.sort(function (x, y) { return y.s - x.s || (x.c.id < y.c.id ? -1 : 1); });
    return scored.slice(0, SEATS).map(function (x) { return x.c; });
  }

  function metrics() {
    var sel = shortlist();
    var selA = sel.filter(function (c) { return c.g === "A"; }).length;
    var selB = sel.length - selA;
    var rateA = selA / 12, rateB = selB / 12;
    var hi = Math.max(rateA, rateB), lo = Math.min(rateA, rateB);
    var ratio = hi > 0 ? lo / hi : 0;
    var sum = sel.reduce(function (s, c) { return s + c.fit; }, 0);
    var quality = Math.round(((sum - WORST) / (BEST - WORST)) * 100);
    return { sel: sel, selA: selA, selB: selB, rateA: rateA, rateB: rateB, ratio: ratio, quality: quality };
  }

  host.innerHTML =
    '<div class="hrw-shell">' +
      '<div class="hrw-controls">' +
        '<div class="hrw-ctitle">Fix the screen</div>' +
        '<div class="hrw-q">Slate: <b>24 applicants for 12 interview slots</b> at Kestrel. An AI screen ranks them. Group A and Group B are synthetic labels standing in for a protected characteristic.</div>' +
        '<div class="hrw-levers"></div>' +
        '<div class="hrw-modes">' +
          '<button type="button" class="hrw-mode hrw-on" data-mode="slate">The shortlist</button>' +
          '<button type="button" class="hrw-mode" data-mode="audit">Four-fifths table</button>' +
        '</div>' +
      '</div>' +
      '<div class="hrw-stage">' +
        '<div class="hrw-meters">' +
          '<div class="hrw-meter"><span class="hrw-mlabel">Shortlist quality</span><span class="hrw-mval" id="hrw-q">61</span><div class="hrw-bar"><i id="hrw-qbar"></i></div></div>' +
          '<div class="hrw-meter" id="hrw-impact"><span class="hrw-mlabel">Adverse impact ratio</span><span class="hrw-mval" id="hrw-r">not measured</span><div class="hrw-bar"><i id="hrw-rbar"></i></div></div>' +
        '</div>' +
        '<div id="hrw-flag"></div>' +
        '<div id="hrw-body"></div>' +
        '<p class="hrw-rail">The slate is synthetic and the AI screen here is a scripted teaching model. What is real is the arithmetic: the shortlist quality and the four-fifths ratio are both computed live from whatever shortlist your levers produce. What is also real is the rule underneath - a person decides, the decision is recorded with its evidence, and a genuine bias audit under NYC Local Law 144 is an independent annual audit by a third party, not this page. Not legal advice; obligations vary by jurisdiction.</p>' +
      '</div>' +
    '</div>';

  var leverWrap = host.querySelector(".hrw-levers");
  LEVERS.forEach(function (l) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "hrw-lever" + (l.id === "audit" ? " hrw-auditlever" : "");
    b.setAttribute("data-lever", l.id);
    b.innerHTML = '<span class="hrw-sw"></span><span class="hrw-ltext"><b>' + l.label + '</b><span>' + l.hint + '</span></span>';
    b.addEventListener("click", function () { state[l.id] = !state[l.id]; render(); });
    leverWrap.appendChild(b);
  });
  host.querySelectorAll(".hrw-mode").forEach(function (m) {
    m.addEventListener("click", function () { state.mode = m.getAttribute("data-mode"); render(); });
  });

  function pct(x) { return Math.round(x * 100) + "%"; }

  function render() {
    host.querySelectorAll(".hrw-lever").forEach(function (b) {
      b.classList.toggle("hrw-active", !!state[b.getAttribute("data-lever")]);
    });
    host.querySelectorAll(".hrw-mode").forEach(function (m) {
      m.classList.toggle("hrw-on", m.getAttribute("data-mode") === state.mode);
    });

    var m = metrics();
    host.querySelector("#hrw-q").textContent = m.quality;
    host.querySelector("#hrw-qbar").style.width = m.quality + "%";

    var rEl = host.querySelector("#hrw-r"), rBar = host.querySelector("#hrw-rbar");
    if (state.audit) {
      rEl.textContent = m.ratio.toFixed(2);
      rEl.className = "hrw-mval" + (m.ratio >= 0.8 ? " hrw-good" : " hrw-bad");
      rBar.style.width = Math.round(m.ratio * 100) + "%";
      rBar.className = m.ratio >= 0.8 ? "" : "hrw-barbad";
    } else {
      rEl.textContent = "not measured";
      rEl.className = "hrw-mval hrw-unknown";
      rBar.style.width = "0%";
    }

    var flag = host.querySelector("#hrw-flag");
    if (!state.audit) {
      flag.innerHTML = '<div class="hrw-flag hrw-warn">No impact check is running. This screen can be shipped, and nobody will know whether it passes the four-fifths rule - including you.</div>';
    } else if (m.ratio >= 0.8) {
      flag.innerHTML = '<div class="hrw-flag hrw-ok">Ratio ' + m.ratio.toFixed(2) + ' - at or above the 0.80 four-fifths threshold. Record the check, the slate, and who signed it off. Passing today does not license shipping unaudited tomorrow.</div>';
    } else {
      flag.innerHTML = '<div class="hrw-flag hrw-block">SLATE BLOCKED. Ratio ' + m.ratio.toFixed(2) + ' is below 0.80 - a prima facie adverse impact. Note what the check did NOT do: it did not improve the number by a single point. Measuring is not fixing.</div>';
    }

    var body = host.querySelector("#hrw-body");
    if (state.mode === "audit") {
      body.innerHTML =
        '<div class="hrw-scorehead">The four-fifths rule, computed on this slate</div>' +
        '<table class="hrw-table"><thead><tr><th>Group</th><th>Applicants</th><th>Shortlisted</th><th>Selection rate</th></tr></thead><tbody>' +
        '<tr><td>Group A</td><td>12</td><td>' + m.selA + '</td><td>' + pct(m.rateA) + '</td></tr>' +
        '<tr><td>Group B</td><td>12</td><td>' + m.selB + '</td><td>' + pct(m.rateB) + '</td></tr>' +
        '</tbody></table>' +
        '<p class="hrw-note"><b>Ratio = lower rate / higher rate = ' + pct(Math.min(m.rateA, m.rateB)) + ' / ' + pct(Math.max(m.rateA, m.rateB)) + ' = ' + m.ratio.toFixed(2) + '</b>' +
        (state.audit ? '' : ' (you are only seeing this because you opened the table - the screen itself is not checking)') +
        '. Below 0.80 is the threshold regulators and plaintiffs use as evidence of adverse impact. It is a screening signal, not a verdict: a passing ratio does not make a bad process lawful, and a failing one is the start of the investigation, not the end of it.</p>' +
        '<p class="hrw-note">Small slates make this number jump. Twelve seats means one seat moves the ratio by a lot, which is exactly why the check belongs on the aggregate of a hiring wave as well as on a single slate.</p>';
    } else {
      var rows = m.sel.slice().sort(function (x, y) { return y.fit - x.fit; }).map(function (c) {
        var carried = c.defect && !state[c.defect];
        return '<tr class="' + (carried ? "hrw-r-bad" : "") + '"><td>' + c.id + '</td><td><span class="hrw-g hrw-g' + c.g + '">Group ' + c.g + '</span></td><td>' + c.fit.toFixed(1) + '</td><td>' +
          (carried ? "carried by the screen: " + c.why : "shortlisted on the job requirements") + '</td></tr>';
      }).join("");
      var missed = PAIRS.filter(function (p) { return !state[p.defect]; })
        .map(function (p) { return p.b; });
      body.innerHTML =
        '<div class="hrw-draftlabel">Shortlist · 12 of 24 · ' + m.selA + ' from Group A, ' + m.selB + ' from Group B</div>' +
        '<table class="hrw-table"><thead><tr><th>Applicant</th><th>Group</th><th>Job fit</th><th>Why they are on the list</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        (missed.length
          ? '<p class="hrw-note hrw-missnote"><b>Cut, and better at the job than people you kept:</b> ' + missed.join(", ") + '. Each one loses a seat to a specific defect in the screen, not to a stronger candidate. Turn the matching lever on and watch that seat come back.</p>'
          : '<p class="hrw-note"><b>Every seat now goes to one of the twelve strongest applicants for this job.</b> The quality number and the impact ratio moved together, because they were never in tension - the screen was just measuring the wrong thing.</p>');
    }
  }

  render();
})();
