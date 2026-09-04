const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Hero background video =====
// Self-hosted rather than a YouTube embed: an embedded player paints its own
// chrome (play/pause overlay, playlist arrows) whenever it buffers or loops,
// and none of that can be suppressed from outside the iframe.
const heroVideo = document.querySelector(".hero-video-bg video");
if (heroVideo) {
  const showVideo = () => document.querySelector(".hero")?.classList.add("video-ready");
  // Reveal only once the video is actually playing — canplay alone fires
  // even when autoplay was silently blocked, which left mobile visitors
  // staring at a frozen first frame that looked like a static image.
  heroVideo.addEventListener("playing", showVideo);
  if (!heroVideo.paused) showVideo();

  heroVideo.muted = true;
  let playing = false;
  const tryPlay = () => {
    heroVideo
      .play()
      .then(() => { playing = true; })
      .catch(() => {});
  };
  tryPlay();

  // Mobile browsers commonly reject the autoplay attempt made before any
  // user interaction. The moment the visitor touches/clicks anywhere, retry
  // once — that gesture satisfies the browser's autoplay requirement.
  const retryOnGesture = () => {
    if (!playing) tryPlay();
  };
  ["touchstart", "click"].forEach((evt) =>
    document.addEventListener(evt, retryOnGesture, { once: true, passive: true })
  );

  // Mobile Safari suspends background video when the tab is hidden.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
}

// ===== Works dot-nav (section jump + scroll-spy) =====
const worksDotnav = document.querySelector(".works-dotnav");
if (worksDotnav) {
  const links = [...worksDotnav.querySelectorAll(".dotnav-item")];
  const targets = links
    .map((a) => document.getElementById(a.getAttribute("href").slice(1)))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${id}`));
  };

  const dotnavObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length === 0) return;
      // Pick the entry closest to the top of the viewport so the active
      // dot tracks whichever section is actually leading the screen.
      const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
      setActive(top.target.id);
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
  );
  targets.forEach((el) => dotnavObserver.observe(el));
  if (targets[0]) setActive(targets[0].id);
}

// ===== Mobile nav toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// ===== Scroll reveal =====
// `.reveal` fades a block in; `.stagger` additionally walks its children so
// grid items arrive one after another rather than all at once.
const revealObserver = REDUCED_MOTION
  ? null
  : new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.classList.contains("stagger")) {
            [...el.children].forEach((child, i) => {
              child.style.transitionDelay = `${Math.min(i * 70, 560)}ms`;
            });
          }
          el.classList.add("in");
          revealObserver.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

// Re-runnable so regrouped galleries animate too.
function initReveal(scope = document) {
  scope.querySelectorAll(".reveal, .stagger").forEach((el) => {
    if (el.classList.contains("in")) return;
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("in");
  });
}
initReveal();

// ===== Hero fade-out =====
// Fades the headline and buttons out as the page scrolls past them — no
// positional drift, so they never linger over the section below.
const heroInner = document.querySelector(".hero-inner");
if (heroInner && !REDUCED_MOTION) {
  let ticking = false;
  const fadeDistance = () => window.innerHeight * 0.45;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const opacity = Math.max(0, 1 - window.scrollY / fadeDistance());
      heroInner.style.opacity = String(opacity);
      heroInner.style.pointerEvents = opacity < 0.05 ? "none" : "";
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ===== Lightbox (image gallery) =====
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");
  document.addEventListener("click", (e) => {
    const fig = e.target.closest("[data-lightbox]");
    if (!fig) return;
    lightboxImg.src = fig.dataset.full || fig.querySelector("img").src;
    lightboxImg.alt = fig.querySelector("img").alt || "";
    lightbox.classList.add("open");
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("close-btn")) {
      lightbox.classList.remove("open");
      lightboxImg.src = "";
    }
  });
}

// ===== Video modal (YouTube embeds) =====
const videoModal = document.getElementById("video-modal");
if (videoModal) {
  const frameWrap = videoModal.querySelector(".frame-wrap");
  const note = videoModal.querySelector(".video-modal-note");

  document.querySelectorAll("[data-video-id]").forEach((card) => {
    card.addEventListener("click", () => {
      const ytId = card.dataset.videoId;
      frameWrap.innerHTML = "";
      if (ytId) {
        frameWrap.style.display = "block";
        note.style.display = "none";
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        frameWrap.appendChild(iframe);
      } else {
        frameWrap.style.display = "none";
        note.style.display = "block";
        note.textContent = `「${card.dataset.title || ""}」の YouTube リンクは準備中です。`;
      }
      videoModal.classList.add("open");
    });
  });

  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal || e.target.classList.contains("close-btn")) {
      videoModal.classList.remove("open");
      frameWrap.innerHTML = "";
    }
  });
}

// ===== Escape key closes any open overlay =====
document.addEventListener("keydown", (e) => {
  if (e.key !== "Escape") return;
  document.querySelectorAll(".lightbox.open, .video-modal.open").forEach((el) => {
    el.classList.remove("open");
    const frame = el.querySelector(".frame-wrap");
    if (frame) frame.innerHTML = "";
    const img = el.querySelector("img");
    if (img && el.classList.contains("lightbox")) img.src = "";
  });
});
