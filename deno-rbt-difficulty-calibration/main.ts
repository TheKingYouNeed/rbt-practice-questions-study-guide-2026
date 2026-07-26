const canonical = "https://rbt-difficulty-calibration.dahmani-limited.deno.net/";
const playUrl =
  "https://play.google.com/store/apps/details?id=com.dahmanilimited.rbtpractice";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>RBT Practice Question Difficulty Calibration Lab</title>
  <meta name="description" content="A free browser-only worksheet for comparing the study difficulty of original RBT practice questions without predicting exam results.">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <style>
    :root {
      --ink:#18302b; --muted:#526962; --paper:#fbfcf7; --card:#fff;
      --leaf:#18745f; --leaf-dark:#0e5747; --mint:#dff4eb; --line:#d7e4dc;
      --gold:#f2b84b; --rose:#d76a65; --shadow:0 18px 55px rgba(24,48,43,.10);
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:
      radial-gradient(circle at 12% 0%,#e2f4e9 0,transparent 30rem),
      linear-gradient(180deg,#f8fbf4 0,#f3f7f1 100%);
      color:var(--ink);font:16px/1.62 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    a{color:var(--leaf-dark)}
    .wrap{width:min(1120px,calc(100% - 32px));margin:auto}
    header{padding:64px 0 34px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;border:1px solid #badacb;
      border-radius:999px;background:#f8fff9;padding:6px 12px;color:var(--leaf-dark);
      font-size:.78rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    h1{max-width:850px;margin:18px 0 15px;font:800 clamp(2.25rem,6vw,4.6rem)/.99 Georgia,serif;
      letter-spacing:-.045em}
    .lede{max-width:760px;margin:0;color:var(--muted);font-size:1.12rem}
    .hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .button,button{border:0;border-radius:12px;padding:12px 16px;font:800 .92rem/1.2 inherit;
      cursor:pointer;transition:.18s transform,.18s background,.18s box-shadow}
    .button{display:inline-block;text-decoration:none}
    .primary{background:var(--leaf);color:#fff;box-shadow:0 9px 25px rgba(24,116,95,.22)}
    .primary:hover,button.primary:hover{background:var(--leaf-dark);transform:translateY(-1px)}
    .secondary{background:#fff;color:var(--ink);border:1px solid var(--line)}
    .secondary:hover{background:#f3faf6}
    .notice{margin:26px 0 0;padding:14px 17px;border-left:4px solid var(--gold);
      border-radius:0 10px 10px 0;background:#fffaf0;color:#5d4a28;max-width:850px}
    .grid{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(310px,.88fr);gap:22px;align-items:start}
    .card{background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow)}
    .panel{padding:24px}
    .panel h2{margin:0 0 7px;font:700 1.55rem/1.15 Georgia,serif}
    .panel-intro{margin:0 0 20px;color:var(--muted)}
    .factor{padding:17px 0;border-top:1px solid #e7eee9}
    .factor:first-of-type{border-top:0}
    .factor-head{display:flex;justify-content:space-between;gap:18px;align-items:start}
    .factor h3{margin:0;font-size:1rem}
    .factor p{margin:4px 0 12px;color:var(--muted);font-size:.88rem}
    output{min-width:31px;border-radius:8px;background:var(--mint);padding:4px 8px;text-align:center;
      color:var(--leaf-dark);font-weight:900}
    input[type=range]{width:100%;accent-color:var(--leaf)}
    .scale{display:flex;justify-content:space-between;color:#72857f;font-size:.72rem}
    .presets{display:flex;flex-wrap:wrap;gap:8px;margin:2px 0 20px}
    .presets button{padding:8px 11px;background:#eef6f1;color:var(--leaf-dark);font-size:.79rem}
    .result{position:sticky;top:18px;overflow:hidden}
    .result-top{padding:25px;background:linear-gradient(145deg,#173c33,#0e6853);color:#fff}
    .result-label{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;opacity:.76;font-weight:800}
    .score-line{display:flex;align-items:end;gap:12px;margin:10px 0}
    .score{font:800 4.5rem/.88 Georgia,serif}
    .outof{opacity:.72;margin-bottom:5px}
    .band{display:inline-block;border-radius:999px;background:rgba(255,255,255,.15);padding:6px 10px;font-weight:800}
    .result-body{padding:24px}
    .result-body h3{margin:0 0 7px}
    .result-body p{margin:0 0 17px;color:var(--muted)}
    .meter{height:10px;border-radius:999px;background:#e4ece7;overflow:hidden;margin:8px 0 18px}
    .meter span{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--leaf),var(--gold),var(--rose));transition:width .25s}
    .breakdown{list-style:none;padding:0;margin:0 0 18px}
    .breakdown li{display:flex;justify-content:space-between;gap:12px;padding:8px 0;border-bottom:1px solid #edf1ee;font-size:.88rem}
    .next{padding:13px;border-radius:11px;background:#f4f8f5;border:1px solid var(--line)}
    .next strong{display:block;margin-bottom:3px}
    section.guide{padding:64px 0}
    .guide-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .guide article{padding:20px;background:rgba(255,255,255,.75);border:1px solid var(--line);border-radius:15px}
    .guide h2{font:700 clamp(1.8rem,4vw,2.8rem)/1.05 Georgia,serif;margin:0 0 13px}
    .guide h3{margin:0 0 8px}
    .guide p{margin:0;color:var(--muted)}
    .method{margin-top:22px;padding:24px}
    .method ol{margin:12px 0 0;padding-left:20px}
    .method li{margin:8px 0}
    footer{padding:34px 0 48px;border-top:1px solid var(--line);color:var(--muted);font-size:.88rem}
    footer strong{color:var(--ink)}
    .sources{display:flex;flex-wrap:wrap;gap:14px;margin-top:12px}
    @media(max-width:820px){.grid{grid-template-columns:1fr}.result{position:static}.guide-grid{grid-template-columns:1fr}header{padding-top:42px}}
    @media print{header .hero-actions,.presets,.actions,footer{display:none}.wrap{width:100%}.card{box-shadow:none}.grid{grid-template-columns:1fr 1fr}.guide{padding:28px 0}}
  </style>
</head>
<body>
  <header class="wrap">
    <span class="eyebrow">Free browser worksheet · no sign-in</span>
    <h1>RBT practice question difficulty calibration lab</h1>
    <p class="lede">Compare original practice items with one consistent five-factor lens. The score is a study-planning aid—not an exam prediction, psychometric rating, or substitute for qualified training and supervision.</p>
    <div class="hero-actions">
      <a class="button primary" href="#lab">Open the calibration lab</a>
      <a class="button secondary" href="${playUrl}">View RBT Practice Questions 2026 on Google Play</a>
    </div>
    <p class="notice"><strong>Use only original or authorized practice material.</strong> Never paste secure exam content, client information, workplace records, or identifying data into any study tool.</p>
  </header>

  <main>
    <section id="lab" class="wrap grid" aria-label="Difficulty calibration tool">
      <div class="card panel">
        <h2>Rate one practice item</h2>
        <p class="panel-intro">Move each slider from 1 (light demand) to 5 (high demand). Rate what the item asks the learner to do—not whether the learner happened to answer correctly.</p>
        <div class="presets" aria-label="Example presets">
          <button type="button" data-preset="basic">Basic definition example</button>
          <button type="button" data-preset="contrast">Near-neighbour contrast</button>
          <button type="button" data-preset="multistep">Multi-step scenario</button>
        </div>

        <div class="factor">
          <div class="factor-head"><div><h3>1. Evidence steps</h3><p>How many distinct facts must be found and connected?</p></div><output id="stepsOut">3</output></div>
          <input id="steps" type="range" min="1" max="5" value="3" aria-label="Evidence steps">
          <div class="scale"><span>one direct fact</span><span>several linked facts</span></div>
        </div>
        <div class="factor">
          <div class="factor-head"><div><h3>2. Distractor similarity</h3><p>How closely do the incorrect options resemble the best answer?</p></div><output id="distractorsOut">3</output></div>
          <input id="distractors" type="range" min="1" max="5" value="3" aria-label="Distractor similarity">
          <div class="scale"><span>clearly different</span><span>near-neighbours</span></div>
        </div>
        <div class="factor">
          <div class="factor-head"><div><h3>3. Working-memory load</h3><p>How much information must be held while comparing options?</p></div><output id="memoryOut">3</output></div>
          <input id="memory" type="range" min="1" max="5" value="3" aria-label="Working-memory load">
          <div class="scale"><span>one short element</span><span>multiple elements</span></div>
        </div>
        <div class="factor">
          <div class="factor-head"><div><h3>4. Wording complexity</h3><p>Does the stem use negatives, qualifiers, time order, or dense phrasing?</p></div><output id="wordingOut">3</output></div>
          <input id="wording" type="range" min="1" max="5" value="3" aria-label="Wording complexity">
          <div class="scale"><span>plain and direct</span><span>layered wording</span></div>
        </div>
        <div class="factor">
          <div class="factor-head"><div><h3>5. Boundary sensitivity</h3><p>Does one small detail change which option is best?</p></div><output id="boundaryOut">3</output></div>
          <input id="boundary" type="range" min="1" max="5" value="3" aria-label="Boundary sensitivity">
          <div class="scale"><span>broad distinction</span><span>fine distinction</span></div>
        </div>
        <div class="actions hero-actions">
          <button class="primary" id="print" type="button">Print calibration card</button>
          <button class="secondary" id="reset" type="button">Reset</button>
        </div>
      </div>

      <aside class="card result" aria-live="polite">
        <div class="result-top">
          <div class="result-label">Study-demand score</div>
          <div class="score-line"><span class="score" id="score">15</span><span class="outof">/ 25</span></div>
          <span class="band" id="band">Moderate comparison demand</span>
        </div>
        <div class="result-body">
          <h3 id="summaryTitle">Use a two-pass review</h3>
          <p id="summary">Answer once for accuracy, then explain why the closest distractor is not the best answer.</p>
          <div class="meter" aria-hidden="true"><span id="meter"></span></div>
          <ul class="breakdown" id="breakdown"></ul>
          <div class="next"><strong>Highest-leverage review move</strong><span id="nextMove"></span></div>
        </div>
      </aside>
    </section>

    <section class="guide wrap">
      <h2>What the five factors reveal</h2>
      <div class="guide-grid">
        <article><h3>Difficulty is not the same as importance</h3><p>A highly important concept can appear in a simple item, while a less central fact can be wrapped in dense wording. Keep content coverage and item demand as separate labels.</p></article>
        <article><h3>A wrong answer is not a difficulty score</h3><p>One learner may miss an easy definition because it is unfamiliar. Another may solve a demanding contrast through strong prior knowledge. Rate the item structure first, then log the learner's result separately.</p></article>
        <article><h3>Small comparisons beat vague labels</h3><p>Instead of calling an item “hard,” compare it with another original item: Which one requires more evidence steps? Which has closer distractors? Which detail changes the decision?</p></article>
      </div>

      <article class="card method">
        <h3>A repeatable four-step calibration routine</h3>
        <ol>
          <li><strong>Remove the answer key.</strong> Read the original stem and options as a learner would. Count only the information that is actually visible.</li>
          <li><strong>Rate each factor independently.</strong> Do not let one complicated phrase inflate every slider. A wordy item may still have obvious distractors; a short item may require a very fine boundary.</li>
          <li><strong>Compare two items.</strong> If both receive the same total, inspect their factor patterns. A memory-heavy item needs a different repair strategy from a boundary-sensitive item.</li>
          <li><strong>Write one revision or review move.</strong> Simplify unnecessary wording, improve distractor logic, or select a targeted practice method. Preserve the concept being assessed.</li>
        </ol>
      </article>

      <article class="card method">
        <h3>How to use the result responsibly</h3>
        <p>The score is intentionally transparent: five ratings are added to a total from 5 to 25. It does not estimate whether an item would appear on an exam, whether it is psychometrically valid, or whether a person will pass. Use current official sources for requirements and scope, and work with qualified instructors and supervisors for applied training.</p>
      </article>
    </section>
  </main>

  <footer>
    <div class="wrap">
      <strong>Disclosure and educational boundary</strong>
      <p>This original resource is published by Dahmani Limited, owner of the linked RBT Practice Questions 2026 Android app. Dahmani Limited and the app are not affiliated with, endorsed by, or sponsored by the Behavior Analyst Certification Board (BACB). “RBT” is used descriptively. This page provides a study-organization framework only; it is not clinical advice, supervision, required training, an official exam resource, or a guarantee of any result.</p>
      <p>All calculations run locally in your browser. This page does not send or store your slider choices.</p>
      <div class="sources">
        <a href="https://www.bacb.com/rbt/" rel="noopener noreferrer">Official BACB RBT page</a>
        <a href="https://www.bacb.com/rbt-test-content-outline/" rel="noopener noreferrer">Official RBT Test Content Outline</a>
        <a href="https://www.bacb.com/rbt-handbook/" rel="noopener noreferrer">Official RBT Handbook</a>
      </div>
    </div>
  </footer>

  <script>
    (function(){
      var ids=["steps","distractors","memory","wording","boundary"];
      var labels={steps:"Evidence steps",distractors:"Distractor similarity",memory:"Working-memory load",wording:"Wording complexity",boundary:"Boundary sensitivity"};
      var moves={
        steps:"List the minimum facts in the stem, then connect them in order before looking at the options.",
        distractors:"Write one sentence explaining the exact boundary between the best answer and the closest distractor.",
        memory:"Convert the stem into a short fact table so each relevant element stays visible during comparison.",
        wording:"Rewrite the stem in plain language without changing its meaning, then answer the original version again.",
        boundary:"Change one detail at a time and note whether that change should alter the best answer."
      };
      var presets={basic:[1,1,1,1,1],contrast:[2,5,2,2,5],multistep:[5,4,5,4,4]};
      function update(){
        var values=ids.map(function(id){return Number(document.getElementById(id).value)});
        ids.forEach(function(id,i){document.getElementById(id+"Out").textContent=values[i]});
        var total=values.reduce(function(a,b){return a+b},0);
        document.getElementById("score").textContent=total;
        document.getElementById("meter").style.width=(total/25*100)+"%";
        var band,title,summary;
        if(total<=10){band="Accessible retrieval demand";title="Use for quick retrieval checks";summary="The structure is relatively direct. Focus on accurate recall and a brief explanation of the correct option."}
        else if(total<=18){band="Moderate comparison demand";title="Use a two-pass review";summary="Answer once for accuracy, then explain why the closest distractor is not the best answer."}
        else{band="High layered demand";title="Decompose before answering";summary="Separate the evidence, wording, and option comparison into visible steps before selecting an answer."}
        document.getElementById("band").textContent=band;
        document.getElementById("summaryTitle").textContent=title;
        document.getElementById("summary").textContent=summary;
        document.getElementById("breakdown").innerHTML=ids.map(function(id,i){return "<li><span>"+labels[id]+"</span><strong>"+values[i]+"/5</strong></li>"}).join("");
        var max=Math.max.apply(null,values);
        var top=ids[values.indexOf(max)];
        document.getElementById("nextMove").textContent=moves[top];
      }
      ids.forEach(function(id){document.getElementById(id).addEventListener("input",update)});
      document.querySelectorAll("[data-preset]").forEach(function(button){
        button.addEventListener("click",function(){
          presets[button.dataset.preset].forEach(function(value,i){document.getElementById(ids[i]).value=value});
          update();
        });
      });
      document.getElementById("reset").addEventListener("click",function(){ids.forEach(function(id){document.getElementById(id).value=3});update()});
      document.getElementById("print").addEventListener("click",function(){window.print()});
      update();
    })();
  </script>
</body>
</html>`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${canonical}</loc></url>
</urlset>`;

const port = Number(Deno.env.get("PORT") ?? "8000");

Deno.serve({ port }, (request) => {
  const url = new URL(request.url);

  if (url.pathname === "/robots.txt") {
    return new Response(`User-agent: *\nAllow: /\nSitemap: ${canonical}sitemap.xml\n`, {
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  if (url.pathname === "/sitemap.xml") {
    return new Response(sitemap, {
      headers: { "content-type": "application/xml; charset=utf-8" },
    });
  }

  if (url.pathname !== "/") {
    return new Response("Not found", {
      status: 404,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300",
      "x-content-type-options": "nosniff",
      "referrer-policy": "strict-origin-when-cross-origin",
    },
  });
});
