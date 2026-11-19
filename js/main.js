/* =====================================================================
   TRAVESSA 32 — JavaScript vanilla, sem jQuery, sem dependências extras.
   Baseado na arquitetura do template Fade, adaptado para o site.
   ===================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------- Links centralizados
     Preenche automaticamente qualquer elemento com data-whatsapp,
     data-avec, data-instagram, data-tel, data-maps-link ou
     data-maps-embed usando js/config.js. */
  function initConfigLinks() {
    var cfg = window.TRAVESSA32;
    if (!cfg) return;
    document.querySelectorAll("[data-whatsapp]").forEach(function (el) { el.href = cfg.whatsapp; });
    document.querySelectorAll("[data-avec]").forEach(function (el) { el.href = cfg.avec; });
    document.querySelectorAll("[data-instagram]").forEach(function (el) { el.href = cfg.instagram; });
    document.querySelectorAll("[data-tel]").forEach(function (el) { el.href = cfg.telefoneLink; });
    document.querySelectorAll("[data-maps-link]").forEach(function (el) { el.href = cfg.mapaDirecoesUrl; });
    document.querySelectorAll("[data-google-reviews]").forEach(function (el) { el.href = cfg.googleReviewsUrl; });
    document.querySelectorAll("[data-maps-embed]").forEach(function (el) { el.src = cfg.mapaEmbedSrc; });

    // Links de WhatsApp com mensagem já preenchida citando o serviço escolhido.
    document.querySelectorAll("[data-whatsapp-service]").forEach(function (el) {
      var service = el.getAttribute("data-whatsapp-service");
      var msg = "Olá! Vim pelo site e gostaria de agendar: " + service + ".";
      el.href = "https://wa.me/" + cfg.telefoneWhatsapp + "?text=" + encodeURIComponent(msg);
    });
  }

  /* ------------------------------------------------------ Menu mobile */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var menu = document.getElementById("nav-menu");
    if (!toggle || !menu) return;

    function close() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 992) close();
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) close();
    });
  }

  /* ------------------------------------------------- Header ao rolar */
  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("is-scrolled", window.pageYOffset > 24);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ------------------------------------------------- Reveal ao rolar */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          o.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---------------------------------------------------- Números animados */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    function format(el, val) {
      var suffix = el.getAttribute("data-suffix") || "";
      return val.toLocaleString("pt-BR") + suffix;
    }
    if (reduceMotion || !("IntersectionObserver" in window)) {
      nums.forEach(function (n) { n.textContent = format(n, +n.getAttribute("data-count")); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = +el.getAttribute("data-count");
        var dur = 1200, start = null;
        function step(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(el, Math.floor(eased * target));
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = format(el, target);
        }
        requestAnimationFrame(step);
        o.unobserve(el);
      });
    }, { threshold: 0.4 });
    nums.forEach(function (n) { obs.observe(n); });
  }

  /* -------------------------------------------------------- Lightbox */
  function initLightbox() {
    var triggers = Array.prototype.slice.call(document.querySelectorAll(".gallery-item"));
    var box = document.getElementById("lightbox");
    if (!triggers.length || !box) return;
    var imgEl = box.querySelector(".lightbox__img");
    var capEl = box.querySelector(".lightbox__cap");
    var current = 0;
    var lastFocus = null;

    function show(idx) {
      current = (idx + triggers.length) % triggers.length;
      var t = triggers[current];
      var img = t.querySelector("img");
      imgEl.src = t.getAttribute("data-full") || img.src;
      imgEl.alt = img.alt;
      capEl.textContent = t.getAttribute("data-caption") || img.alt;
    }
    function open(t) {
      lastFocus = document.activeElement;
      show(triggers.indexOf(t));
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      box.querySelector(".lightbox__close").focus();
    }
    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    triggers.forEach(function (t) {
      t.addEventListener("click", function () { open(t); });
    });
    box.querySelector(".lightbox__close").addEventListener("click", close);
    var nextBtn = box.querySelector(".lightbox__next");
    var prevBtn = box.querySelector(".lightbox__prev");
    if (triggers.length > 1 && nextBtn && prevBtn) {
      nextBtn.addEventListener("click", function () { show(current + 1); });
      prevBtn.addEventListener("click", function () { show(current - 1); });
    } else {
      if (nextBtn) nextBtn.style.display = "none";
      if (prevBtn) prevBtn.style.display = "none";
    }
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    document.addEventListener("keydown", function (e) {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") show(current + 1);
      if (e.key === "ArrowLeft") show(current - 1);
    });
  }

  /* ----------------------------------------------------- Ano atual */
  function initYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ------------------------------------------ Menu: seção ativa ao rolar
     Página única: destaca no menu a seção visível no momento. */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-list a[href^="#"]'));
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = links.map(function (link) {
      var id = link.getAttribute("href").slice(1);
      return { link: link, section: document.getElementById(id) };
    }).filter(function (m) { return m.section; });
    if (!map.length) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        map.forEach(function (m) { m.link.classList.remove("is-active"); });
        var active = map.filter(function (m) { return m.section === entry.target; })[0];
        if (active) active.link.classList.add("is-active");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    map.forEach(function (m) { obs.observe(m.section); });
  }

  /* ----------------------------------------------- Parallax do hero */
  function initParallax() {
    var img = document.querySelector(".hero__bg img");
    if (!img || reduceMotion) return;
    var ticking = false;
    function update() {
      var y = window.pageYOffset;
      var shift = Math.min(y * 0.18, 90);
      img.style.transform = "translateY(" + shift + "px) scale(1.08)";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  }

  /* ----------------------------------------- Botões com leve "ímã" */
  function initMagneticButtons() {
    if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    document.querySelectorAll(".btn-t32").forEach(function (btn) {
      btn.addEventListener("mousemove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * 0.18;
        var y = (e.clientY - r.top - r.height / 2) * 0.35;
        btn.style.transform = "translate(" + x + "px, " + (y - 2) + "px)";
      });
      btn.addEventListener("mouseleave", function () { btn.style.transform = ""; });
    });

    // Mesmo "ímã" nos cards de serviço, mais suave por serem maiores.
    // O deslocamento vai em variáveis CSS para somar ao zoom do hover.
    document.querySelectorAll(".service-card").forEach(function (card) {
      card.addEventListener("mousemove", function (e) {
        var r = card.getBoundingClientRect();
        card.style.setProperty("--mx", ((e.clientX - r.left - r.width / 2) * 0.06) + "px");
        card.style.setProperty("--my", ((e.clientY - r.top - r.height / 2) * 0.08) + "px");
      });
      card.addEventListener("mouseleave", function () {
        card.style.removeProperty("--mx");
        card.style.removeProperty("--my");
      });
    });
    // Ícones de contato: a linha inteira atrai o ícone em direção ao mouse,
    // com deslocamento limitado para o círculo não "fugir" do lugar.
    function clamp(v, m) { return Math.max(-m, Math.min(m, v)); }
    document.querySelectorAll(".contact-card").forEach(function (row) {
      var icon = row.querySelector(".contact-card__icon");
      if (!icon) return;
      row.addEventListener("mousemove", function (e) {
        var r = icon.getBoundingClientRect();
        var x = clamp((e.clientX - r.left - r.width / 2) * 0.12, 9);
        var y = clamp((e.clientY - r.top - r.height / 2) * 0.3, 7);
        icon.style.transform = "translate(" + x + "px, " + (y - 2) + "px)";
      });
      row.addEventListener("mouseleave", function () { icon.style.transform = ""; });
    });
  }

  /* ------------------------------------------- Navegação por âncora
     Página única: controla a rolagem na mão para nunca errar o alvo
     (o salto nativo do navegador costuma falhar quando imagens ainda
     estão carregando, especialmente ao abrir um link direto tipo
     /#contato). O clique rola suavemente; a carga inicial com #hash
     na URL salta direto, sem animação, e se corrige de novo quando a
     página termina de carregar todas as imagens. */
  var HEADER_OFFSET = 90;

  function scrollToId(id, behavior) {
    var target = document.getElementById(id);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: Math.max(top, 0), behavior: behavior });
  }

  function initAnchorNav() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      if (!id) return;
      link.addEventListener("click", function (e) {
        if (!document.getElementById(id)) return;
        e.preventDefault();
        scrollToId(id, reduceMotion ? "auto" : "smooth");
        history.pushState(null, "", "#" + id);
      });
    });
  }

  function initInitialHash() {
    if (!location.hash) return;
    var id = location.hash.slice(1);
    if (!document.getElementById(id)) return;
    scrollToId(id, "auto");
    window.addEventListener("load", function () { scrollToId(id, "auto"); });
  }

  /* ----------------------------------------------------------- Init */
  document.addEventListener("DOMContentLoaded", function () {
    initConfigLinks();
    initMobileNav();
    initHeaderScroll();
    initReveal();
    initCountUp();
    initLightbox();
    initYear();
    initScrollSpy();
    initParallax();
    initMagneticButtons();
    initAnchorNav();
    initInitialHash();
  });
})();
