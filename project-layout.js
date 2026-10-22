/*
  Shared layout for the project pages (used by all three versions of the site).

  - Image-only rows are "justified": every item gets a width proportional to its
    aspect ratio, so all images in a row have exactly the same height.
  - Rows that contain text columns use a CSS subgrid, so headings, subtitles,
    texts, notes and images of neighbouring columns sit on the same lines.
  - Images inside text columns all share one format (4:3).

  Needs SIZES (img/sizes.js) and the data in projects.js.
*/
(function () {
  const PL = { base: "img/", eager: false, figAttr: "", colRatio: 4 / 3 };
  const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");

  function parse(spec) {
    const o = typeof spec === "string" ? { img: spec } : spec;
    const [k, cap = ""] = o.img.split("|");
    return Object.assign({}, o, { k, cap });
  }
  function ratio(p, k) {
    const s = typeof SIZES !== "undefined" && SIZES[p.id] && SIZES[p.id][k];
    return s ? s[0] / s[1] : 1.5;
  }

  // one figure; r = aspect ratio of its box
  function fig(p, spec, LB, r, extraStyle) {
    const o = parse(spec);
    const i = LB.push({ s: `${PL.base}${p.id}/${o.k}.webp`, c: o.cap, pad: !!o.pad }) - 1;
    return `<figure class="fg${o.pad ? " pad" : ""}${o.dk ? " dkb" : ""}${o.bare ? " bare" : ""}" data-i="${i}" ${PL.figAttr} style="--r:${r.toFixed(4)};${extraStyle || ""}">` +
      `<div class="clip"><img src="${PL.base}${p.id}/${o.k}-t.webp" alt="${esc(o.cap || p.title)}" loading="${PL.eager ? "eager" : "lazy"}"></div>` +
      (o.cap ? `<figcaption>${esc(o.cap)}</figcaption>` : "") + `</figure>`;
  }

  // a text column may carry grid:true (its images in two columns); an image grid has grid:[...]
  const isText = it => typeof it === "object" && !it.img && !it.stack && !Array.isArray(it.grid);

  // ---- justified items ----
  function jItem(p, it, LB) {
    if (typeof it === "string" || it.img) {
      const r = ratio(p, parse(it).k);
      return { r, html: `<div class="ji" style="--r:${r.toFixed(4)}">${fig(p, it, LB, r)}</div>` };
    }
    if (it.stack) {
      const inv = it.stack.map(s => 1 / ratio(p, parse(s).k));
      const r = 1 / inv.reduce((a, b) => a + b, 0);
      const figs = it.stack.map((s, n) => fig(p, s, LB, ratio(p, parse(s).k), `flex-grow:${inv[n].toFixed(4)}`)).join("");
      return { r, html: `<div class="ji st" style="--r:${r.toFixed(4)}">${figs}</div>` };
    }
    // small grid of c columns
    const c = it.c || 2, rows = [];
    for (let n = 0; n < it.grid.length; n += c) rows.push(it.grid.slice(n, n + c));
    const rowH = rows.map(rw => rw.reduce((a, s) => a + 1 / ratio(p, parse(s).k), 0) / rw.length);
    const r = c / rowH.reduce((a, b) => a + b, 0);
    const figs = it.grid.map(s => fig(p, s, LB, ratio(p, parse(s).k))).join("");
    return { r, html: `<div class="ji gr" style="--r:${r.toFixed(4)};--c:${c};grid-template-rows:${rowH.map(h => h.toFixed(4) + "fr").join(" ")}">${figs}</div>` };
  }

  // ---- text column with 5 aligned slots ----
  function col(p, c, LB, label) {
    const ts = c.t ? (Array.isArray(c.t) ? c.t : [c.t]) : [];
    const ims = c.imgs || [];
    const g2 = c.grid && ims.length > 1;
    return `<div class="col rv">` +
      (c.h ? `<h3>${label ? `<i>${label}</i>` : ""}${c.h}</h3>` : `<div></div>`) +
      (c.sub ? `<p class="sb">${c.sub}</p>` : `<div></div>`) +
      `<div class="tx">${ts.map(t => `<p>${t}</p>`).join("")}</div>` +
      (c.note ? `<p class="note">${c.note}</p>` : `<div></div>`) +
      // grid:true → all images share one 4:3 box (so every column's image block has the same size);
      // otherwise each image is 4:3 and they stack
      // grid:true with natural images → side by side at the same height, nothing cropped
      (g2 && ims.every(s => parse(s).natural)
        ? `<div class="cimgs cjrow jrow">${ims.map(s => jItem(p, s, LB).html).join("")}</div>`
        : g2
        ? `<div class="cimgs g2 box" style="--box:${PL.colRatio};grid-template-rows:repeat(${Math.ceil(ims.length / 2)},minmax(0,1fr))">${ims.map(s => fig(p, s, LB, parse(s).natural ? ratio(p, parse(s).k) : PL.colRatio)).join("")}</div>`
        : `<div class="cimgs">${ims.map(s => fig(p, s, LB, parse(s).natural ? ratio(p, parse(s).k) : PL.colRatio)).join("")}</div>`) +
      `</div>`;
  }

  function crow(p, items, cols, LB, labels) {
    return `<div class="crow" style="grid-template-columns:${cols}">` + items.map((it, n) => {
      if (isText(it)) return col(p, it, LB, labels && labels[n]);
      const j = jItem(p, it, LB);
      return `<div class="solo">${j.html}</div>`;
    }).join("") + `</div>`;
  }

  PL.intro = (p, LB, labels) => crow(p, p.intro, `repeat(${p.intro.length},minmax(0,1fr))`, LB, labels);

  // on phones a justified row holds at most two items, so images stay large enough to read
  PL.rows = (p, chapter, LB) => {
    const max = matchMedia("(max-width:560px)").matches ? 2 : Infinity;
    return chapter.rows.map(r => {
      if (r.items.some(isText)) return crow(p, r.items, r.g, LB);
      const js = r.items.map(it => jItem(p, it, LB)), out = [];
      for (let n = 0; n < js.length; n += max) out.push(`<div class="jrow">${js.slice(n, n + max).map(j => j.html).join("")}</div>`);
      return out.join("");
    }).join("");
  };

  window.PL = PL;
})();
