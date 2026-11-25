/* Shared layout, data rendering and contact form. */
(function () {
  const P = window.PORTFOLIO;
  const page = document.body.dataset.page;

  const ICONS = {
    code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
    tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z"/>',
    spark: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3.1-.4 6.4-1.5 6.4-7a5.4 5.4 0 0 0-1.5-3.7 5 5 0 0 0-.1-3.8s-1.2-.3-3.9 1.5a13.4 13.4 0 0 0-7 0C6.3 1.7 5.1 2 5.1 2a5 5 0 0 0-.1 3.8A5.4 5.4 0 0 0 3.5 9.5c0 5.4 3.3 6.6 6.4 7a3.4 3.4 0 0 0-.9 2.6V22"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    external: '<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'
  };
  const icon = (n, cls = "icon") =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ""}</svg>`;
  window.icon = icon;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const NAV = [
    ["home", "index.html", "Home"],
    ["about", "about.html", "About"],
    ["skills", "skills.html", "Skills"],
    ["projects", "projects.html", "Projects"],
    ["experience", "experience.html", "Experience"],
    ["education", "education.html", "Education"],
    ["certifications", "certifications.html", "Certifications"],
    ["contact", "contact.html", "Contact"]
  ];

  // A link that becomes a disabled button when the URL is empty.
  function linkBtn(url, label, cls, iconName, opts = {}) {
    const inner = (iconName ? icon(iconName) : "") + (label ? `<span>${esc(label)}</span>` : "");
    const aria = opts.aria ? ` aria-label="${esc(opts.aria)}"` : "";
    if (!url) {
      return `<span class="${cls} is-disabled" title="${esc(opts.missing || "Coming soon")}"${aria} aria-disabled="true">${inner}</span>`;
    }
    const ext = /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";
    const dl = opts.download ? " download" : "";
    return `<a class="${cls}" href="${esc(url)}"${ext}${dl}${aria}>${inner}</a>`;
  }
  window.linkBtn = linkBtn;

  const socials = (cls = "social") =>
    linkBtn(P.github, "", cls, "github", { aria: "GitHub", missing: "GitHub link coming soon" }) +
    linkBtn(P.linkedin, "", cls, "linkedin", { aria: "LinkedIn", missing: "LinkedIn link coming soon" });

  // ---------- Header ----------
  const header = document.getElementById("site-header");
  if (header) {
    header.innerHTML = `
      <div class="container nav-bar">
        <a class="brand" href="index.html"><span class="brand-mark">PS</span><span>${esc(P.shortName)}</span></a>
        <nav class="nav-links" id="nav-links" aria-label="Main">
          ${NAV.map(([k, h, t]) => `<a href="${h}"${k === page ? ' class="active" aria-current="page"' : ""}>${t}</a>`).join("")}
          ${linkBtn(P.cv, "Download CV", "btn btn-primary btn-sm nav-cv", "download", { download: true, missing: "CV coming soon" })}
        </nav>
        <button class="nav-toggle" id="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-links">${icon("menu")}</button>
      </div>`;
    const btn = document.getElementById("nav-toggle");
    const links = document.getElementById("nav-links");
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      btn.innerHTML = icon(open ? "close" : "menu");
    });
    window.addEventListener("scroll", () => header.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
  }

  // ---------- Footer ----------
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <a class="brand" href="index.html"><span class="brand-mark">PS</span><span>${esc(P.name)}</span></a>
          <p class="footer-title">${esc(P.title)}</p>
          <div class="socials">${socials()}</div>
        </div>
        <nav class="footer-links" aria-label="Footer">
          ${NAV.map(([, h, t]) => `<a href="${h}">${t}</a>`).join("")}
        </nav>
      </div>
      <div class="container footer-bottom">
        <span>&copy; ${new Date().getFullYear()} ${esc(P.name)}. All rights reserved.</span>
        <span class="motto">Built with curiosity. Driven by purpose.</span>
      </div>`;
  }

  // ---------- Simple fills ----------
  document.querySelectorAll("[data-socials]").forEach((el) => (el.innerHTML = socials()));
  document.querySelectorAll("[data-cv]").forEach((el) => {
    el.outerHTML = linkBtn(P.cv, "Download CV", el.className, "download", { download: true, missing: "CV coming soon" });
  });
  document.querySelectorAll("[data-fill]").forEach((el) => {
    const v = P[el.dataset.fill];
    if (Array.isArray(v)) {
      el.innerHTML = v.length ? v.map((x) => `<li>${esc(x)}</li>`).join("") : `<li class="muted">To be added</li>`;
    } else {
      el.textContent = v || "To be added";
      if (!v) el.classList.add("muted");
    }
  });

  // Profile photo, with initials if the image is missing.
  document.querySelectorAll("[data-photo]").forEach((el) => {
    const img = new Image();
    img.alt = `Portrait of ${P.name}`;
    img.src = P.photo;
    img.onload = () => { el.innerHTML = ""; el.appendChild(img); el.classList.add("has-photo"); };
    el.innerHTML = `<span class="initials">PS</span>`;
  });

  // ---------- Skills ----------
  document.querySelectorAll("[data-skills]").forEach((el) => {
    const compact = el.dataset.skills === "compact";
    el.innerHTML = P.skills.map((s) => `
      <article class="card skill-card reveal">
        <div class="skill-head">
          <span class="icon-badge">${icon(s.icon)}</span>
          <div><h3>${esc(s.group)}</h3>${compact ? "" : `<p class="level">${esc(s.level)}</p>`}</div>
        </div>
        <ul class="chips">${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
      </article>`).join("");
  });

  // ---------- Projects ----------
  document.querySelectorAll("[data-projects]").forEach((el) => {
    const preview = el.dataset.projects === "preview";
    el.innerHTML = P.projects.map((p) => `
      <article class="card project-card reveal">
        <div class="project-shot">
          ${p.image ? `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.name)}" loading="lazy">`
                    : `<div class="shot-placeholder">${icon("image")}<span>Screenshot coming soon</span></div>`}
          <span class="status">${esc(p.status)}</span>
        </div>
        <div class="project-body">
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.description)}</p>
          <ul class="chips chips-sm">${p.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
          ${preview ? "" : `<div class="project-actions">
            ${linkBtn(p.live, "Live site", "btn btn-primary btn-sm", "external", { missing: "Live link coming soon" })}
            ${linkBtn(p.repo, "GitHub", "btn btn-outline btn-sm", "github", { missing: "Repository link coming soon" })}
          </div>`}
        </div>
      </article>`).join("");
  });

  // ---------- Certifications ----------
  const certs = document.querySelector("[data-certs]");
  if (certs && P.certifications.length) {
    certs.innerHTML = P.certifications.map((c) => `
      <article class="card cert-card reveal">
        <h3>${esc(c.name)}</h3>
        <p class="muted">${esc([c.issuer, c.year].filter(Boolean).join(" · "))}</p>
        ${c.link ? linkBtn(c.link, "View certificate", "btn btn-outline btn-sm", "external") : ""}
      </article>`).join("");
  }

  // ---------- Contact details ----------
  document.querySelectorAll("[data-contact-list]").forEach((el) => {
    const row = (ic, label, value, href) => `
      <li><span class="icon-badge">${icon(ic)}</span><div><span class="label">${label}</span>
      ${value ? (href ? `<a href="${esc(href)}"${/^https?:/.test(href) ? ' target="_blank" rel="noopener"' : ""}>${esc(value)}</a>` : `<span>${esc(value)}</span>`)
              : `<span class="muted">To be added</span>`}</div></li>`;
    el.innerHTML =
      row("mail", "Email", P.email, P.email && `mailto:${P.email}`) +
      (P.phone ? row("phone", "Phone", P.phone, `tel:${P.phone.replace(/\s/g, "")}`) : "") +
      row("linkedin", "LinkedIn", P.linkedin && P.linkedin.replace(/^https?:\/\/(www\.)?/, ""), P.linkedin) +
      row("github", "GitHub", P.github && P.github.replace(/^https?:\/\/(www\.)?/, ""), P.github) +
      row("pin", "Location", P.location);
  });

  // ---------- Contact form (Netlify Forms) ----------
  const form = document.getElementById("contact-form");
  if (form) {
    const status = document.getElementById("form-status");
    const rules = {
      name: { max: 100, msg: "Please enter your full name." },
      email: { max: 255, msg: "Please enter a valid email address." },
      subject: { max: 150, msg: "Please enter a subject." },
      message: { max: 2000, msg: "Please enter a message." }
    };
    const setErr = (f, m) => {
      const box = form.querySelector(`[data-error-for="${f.name}"]`);
      f.setAttribute("aria-invalid", m ? "true" : "false");
      if (box) box.textContent = m || "";
    };
    const check = (f) => {
      const r = rules[f.name]; const v = f.value.trim();
      if (!v) return setErr(f, r.msg), false;
      if (v.length > r.max) return setErr(f, `Please keep this under ${r.max} characters.`), false;
      if (f.name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return setErr(f, r.msg), false;
      return setErr(f, ""), true;
    };
    Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", (e) => check(e.target)));

    const msgBox = form.elements.message;
    const counter = document.getElementById("msg-count");
    msgBox.addEventListener("input", () => (counter.textContent = `${msgBox.value.length} / 2000`));

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const ok = Object.keys(rules).map((n) => check(form.elements[n])).every(Boolean);
      if (!ok) { status.className = "form-status error"; status.textContent = "Please fix the highlighted fields."; return; }

      const btn = form.querySelector("button[type=submit]");
      btn.disabled = true; btn.textContent = "Sending…";
      status.className = "form-status"; status.textContent = "";
      try {
        // FormSubmit (free): emails each message to P.email. The very first
        // message sends an activation email that must be confirmed once.
        if (!P.email) throw new Error("no email set");
        const d = Object.fromEntries(new FormData(form));
        if (d._honey) throw new Error("spam");
        const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(P.email)}`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: d.name, email: d.email, message: d.message,
            _subject: `Portfolio message: ${d.subject}`,
            _replyto: d.email,
            _template: "table"
          })
        });
        const out = await res.json().catch(() => ({}));
        if (/activat/i.test(out.message || "")) {
          // First-ever message: FormSubmit emails the owner an activation link instead of delivering.
          status.className = "form-status error";
          status.textContent = "The contact form is still being set up, so this message was not delivered yet. " +
            `Please email me directly at ${P.email}.`;
          console.warn("FormSubmit:", out.message);
          return;
        }
        if (!res.ok || String(out.success) !== "true") {
          console.warn("FormSubmit error:", res.status, out);
          throw new Error(out.message || res.status);
        }
        form.reset(); counter.textContent = "0 / 2000";
        status.className = "form-status success";
        status.textContent = "Thank you! Your message has been sent. I will get back to you soon.";
      } catch {
        status.className = "form-status error";
        status.textContent = "Sorry, your message could not be sent right now." +
          (P.email ? ` Please email me directly at ${P.email}.` : " Please try again later.");
      } finally {
        btn.disabled = false; btn.textContent = "Send Message";
      }
    });
  }

  // ---------- "Always Learning" band (shared by several pages) ----------
  const LEARN = [
    "Improving my programming skills",
    "Developing practical software projects",
    "Learning new technologies",
    "Improving technical documentation",
    "Developing communication and presentation skills",
    "Exploring emerging technology trends"
  ];
  document.querySelectorAll("[data-learning]").forEach((el) => {
    el.outerHTML = `
      <section class="section learning dark">
        <div class="container">
          <div class="section-head">
            <span class="eyebrow">Growth mindset</span>
            <h2>Always Learning, Always Building</h2>
            <p>I keep growing through study, practice and real projects. Right now I'm focused on:</p>
          </div>
          <div class="grid grid-3">
            ${LEARN.map((t, i) => `<div class="learn-item reveal"><span class="num">0${i + 1}</span><span>${t}</span></div>`).join("")}
          </div>
        </div>
      </section>`;
  });

  // ---------- Reveal on scroll ----------
  const els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
  } else {
    els.forEach((el) => el.classList.add("in"));
  }
})();
