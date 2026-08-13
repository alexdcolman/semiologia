(function () {
  const data = window.SEMIO_DATA;
  const body = document.body;
  const root = body.dataset.root || ".";
  const page = body.dataset.page || "";
  const key = "semiologiaCBC.comision";
  const allowed = Object.keys(data.commissions);

  const escapeHtml = (s) => String(s).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const commissionId = () => {
    const value = localStorage.getItem(key);
    return allowed.includes(value) ? value : null;
  };
  const current = () => data.commissions[commissionId()] || null;

  const mainNav = [
    ["inicio", "Inicio", "index.html"],
    ["programa", "Programa", "programa.html"],
    ["materiales", "Materiales y cronograma", "materiales.html"],
    ["guias", "Guías de lectura", "guias.html"],
    ["evaluacion", "Formas de evaluación", "evaluacion.html"],
    ["modelos", "Modelos de parcial", "modelos.html"],
    ["fichas", "Fichas", "fichas.html"],
    ["consultas", "Clases de consulta", "consultas.html"],
    ["regularizacion", "Cómo regularizar o aprobar", "regularizacion.html"],
    ["recuperatorios", "Recuperatorios", "recuperatorios.html"],
    ["informacion", "Otra información", "informacion.html"]
  ];

  function guideGroups() {
    const groups = [];
    data.guides.forEach(g => {
      let group = groups.find(x => x.name === g.group);
      if (!group) { group = {name:g.group, guides:[]}; groups.push(group); }
      group.guides.push(g);
    });
    return groups;
  }

  function navHtml() {
    const items = mainNav.map(([id,label,href]) => {
      if (id !== "guias") {
        return `<li><a ${page===id?'aria-current="page"':''} href="${root}/${href}">${label}</a></li>`;
      }
      const sub = guideGroups().map(group => `
        <div class="nav-guide-group">
          <span>${escapeHtml(group.name)}</span>
          ${group.guides.map(g => `<a href="${root}/guias/${g.slug}.html">${escapeHtml(g.title)}</a>`).join("")}
        </div>`).join("");
      return `<li class="nav-guides">
        <a ${page==="guias"?'aria-current="page"':''} href="${root}/guias.html">${label}</a>
        <details>
          <summary>Ver autores y temas</summary>
          <div class="nav-guide-list">${sub}</div>
        </details>
      </li>`;
    }).join("");
    return `<nav class="site-nav" aria-label="Navegación principal"><ul>${items}</ul></nav>`;
  }

  function headerHtml(c) {
    return `<a class="skip-link" href="#contenido">Ir al contenido</a>
      <header class="site-header">
        <div class="masthead">
          <div>
            <a class="site-title" href="${root}/index.html">${data.course.name}</a>
            <div class="site-subtitle">${data.course.institution} · ${data.course.chair}</div>
          </div>
          <div class="commission-pill">
            <span>${escapeHtml(c.label)}</span>
            <span>${escapeHtml(c.schedule)}</span>
            <button type="button" class="link-button" data-change-commission>Cambiar comisión</button>
          </div>
        </div>
        ${navHtml()}
      </header>`;
  }

  function footerHtml() {
    return `<footer class="site-footer">
      <p><strong>${data.course.name}</strong> · ${data.course.chair} · ${data.course.term}</p>
      <p>Versión del sitio ${data.version}. ${data.course.notice}</p>
    </footer>`;
  }

  function selectorHtml() {
    return `<section class="commission-gate" aria-labelledby="selector-title">
      <div class="gate-mark">CBC · UBA</div>
      <h1 id="selector-title">Semiología</h1>
      <p class="gate-chair">Cátedra Vitale · Segundo cuatrimestre 2026</p>
      <p>Seleccionar una comisión para acceder al sitio de cursada.</p>
      <div class="commission-options">
        ${allowed.map(id => {
          const c=data.commissions[id];
          return `<button type="button" data-select-commission="${id}">
            <strong>${escapeHtml(c.label)}</strong>
            <span>${escapeHtml(c.schedule)}</span>
            <span>${escapeHtml(c.teachers.join(" · "))}</span>
          </button>`;
        }).join("")}
      </div>
    </section>`;
  }

  function mountShell() {
    let c=current();
    body.classList.remove("commission-pending");
    const shell=document.querySelector("[data-site-shell]");
    const header=document.querySelector("[data-site-header]");
    const footer=document.querySelector("[data-site-footer]");
    if (!c) {
      body.classList.add("commission-locked");
      if (header) header.innerHTML="";
      if (footer) footer.innerHTML="";
      if (shell) shell.innerHTML=selectorHtml();
      document.querySelectorAll("[data-select-commission]").forEach(btn => btn.addEventListener("click", () => {
        localStorage.setItem(key, btn.dataset.selectCommission);
        window.location.reload();
      }));
      return false;
    }
    body.classList.remove("commission-locked");
    if (header) header.innerHTML=headerHtml(c);
    if (footer) footer.innerHTML=footerHtml();
    if (shell) shell.innerHTML="";
    document.querySelectorAll("[data-change-commission]").forEach(btn => btn.addEventListener("click", () => {
      localStorage.removeItem(key);
      window.location.href=`${root}/index.html`;
    }));
    hydrate(c);
    return true;
  }

  function hydrate(c) {
    document.querySelectorAll("[data-commission-label]").forEach(el => el.textContent=c.label);
    document.querySelectorAll("[data-commission-schedule]").forEach(el => el.textContent=c.schedule);
    document.querySelectorAll("[data-commission-teachers]").forEach(el => el.textContent=c.teachers.join(" y "));

    const materials=document.querySelector("[data-materials-list]");
    if (materials) materials.innerHTML=data.materials.map(m => `<li><span class="material-code">${escapeHtml(m.code)}</span><div><span>${escapeHtml(m.author)} (${m.year}). </span><cite>${escapeHtml(m.title)}</cite>. <span>${escapeHtml(m.details)}</span></div></li>`).join("");
    document.querySelectorAll("[data-materials-where]").forEach(el => el.textContent=data.materialsWhere);

    const evalMap = {
      "data-eval-rounding": data.evaluation.rounding,
      "data-eval-promotion": data.evaluation.promotion,
      "data-eval-regular": data.evaluation.regular,
      "data-eval-recovery": data.evaluation.recovery,
      "data-eval-phones": data.evaluation.phones,
      "data-eval-cards": data.evaluation.cards,
      "data-eval-review": data.evaluation.review,
      "data-eval-review-work": data.evaluation.reviewWork
    };
    Object.entries(evalMap).forEach(([attr,value]) => {
      document.querySelectorAll(`[${attr}]`).forEach(el => el.textContent=value);
    });

    const timeline=document.querySelector("[data-timeline]");
    if (timeline) timeline.innerHTML=data.timeline.map(item => `<li class="timeline-item ${item.kind}"><div class="timeline-date">${escapeHtml(item.date)}</div><div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.reading)}</p></div></li>`).join("");

    const guideIndex=document.querySelector("[data-guide-index]");
    if (guideIndex) guideIndex.innerHTML=guideGroups().map(group => `<section class="guide-group"><h2>${escapeHtml(group.name)}</h2><ol>${group.guides.map(g=>`<li><a href="guias/${g.slug}.html">${escapeHtml(g.title)}</a></li>`).join("")}</ol></section>`).join("");

    const links=document.querySelector("[data-useful-links]");
    if (links) links.innerHTML=data.links.map(l=>`<li><a href="${l.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(l.label)} <span aria-hidden="true">↗</span></a></li>`).join("");

    const finals=document.querySelector("[data-finals]");
    if (finals) finals.innerHTML=data.finals.map(f=>`<div class="final-row"><h3>${escapeHtml(f.period)}</h3><p>${escapeHtml(f.enrollment)}</p></div>`).join("");
  }

  document.addEventListener("DOMContentLoaded", mountShell);
})();
