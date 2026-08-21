const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Hero background video =====
// Self-hosted rather than a YouTube embed: an embedded player paints its own
// chrome (play/pause overlay, playlist arrows) whenever it buffers or loops,
// and none of that can be suppressed from outside the iframe.
const heroVideo = document.querySelector(".hero-video-bg video");
if (heroVideo) {
  const showVideo = () => document.querySelector(".hero")?.classList.add("video-ready");
  if (heroVideo.readyState >= 3) showVideo();
  heroVideo.addEventListener("canplay", showVideo, { once: true });

  // Some browsers refuse autoplay until muted state is confirmed in JS.
  heroVideo.muted = true;
  const tryPlay = () => heroVideo.play().catch(() => {});
  tryPlay();
  // Mobile Safari suspends background video when the tab is hidden.
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) tryPlay();
  });
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

// ===== Hero parallax =====
// Drifts the headline slower than the page and fades it as it leaves.
const heroInner = document.querySelector(".hero-inner");
if (heroInner && !REDUCED_MOTION) {
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroInner.style.transform = `translateY(${y * 0.28}px)`;
        heroInner.style.opacity = String(Math.max(0, 1 - y / (window.innerHeight * 0.75)));
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ===== Gallery grouping (by medium / by project) =====
// One pool of figures, two ways to read it. Switching moves the existing
// nodes rather than re-creating them, so nothing is downloaded twice.
const galleryRoot = document.getElementById("gallery-root");
if (galleryRoot) {
  const allFigures = [...galleryRoot.querySelectorAll("figure")];

  const GROUPS = {
    medium: [
      ["watercolor", "水彩画", "Watercolor", "紙と水彩絵具による作品。にじみと重なりを活かして、光や空気の質感を描いています。"],
      ["pencil-color", "色鉛筆画", "Colored Pencil", "色鉛筆による作品。線を重ねて色をつくり、やわらかい質感と物語の空気感を表現しています。"],
      ["digital", "デジタルペイント", "Digital Painting", "液晶タブレットと Photoshop / Clip Studio Paint によるデジタルイラストです。"],
      ["character", "キャラクターデザイン", "Character Design", "物語に登場する人物の設定画。三面図、配色、衣装と小物の素材設定までをまとめています。"],
      ["modeling", "モデリング", "3D Modeling", "Blender / Maya / ZBrush によるモデリング。制作工程は上の「制作プロセス」でご覧いただけます。"],
      ["environment", "背景・環境デザイン", "Environment Art", "背景シーンの構築とライティング。空間の設計からアセット配置、雰囲気づくりまでを担当しました。"],
      ["dessin", "鉛筆デッサン", "Pencil Dessin", "鉛筆による静物デッサン。手をモチーフに、構造と陰影の観察を重ねた習作です。"],
    ],
    project: [
      ["himawari", "ひまわりの日", "Sunflower Day", "手描き 2D アニメーション。イメージボードとキャラクター設定を色鉛筆で制作しました。"],
      ["zhujian", "逐剣", "Chasing the Sword", "3D / 2D アニメーション。キャラクターデザインと雪山の背景シーンを担当しています。"],
      ["abyss", "ABYSS II", "Abyss II", "CG ショートフィルム。巨像のモデリングから洞窟シーンのライティングまで一貫して制作しました。"],
      ["cyberpunk", "サイバーパンクシティ", "Cyberpunk City", "3DCG による都市の背景デザイン。空間設計からシェーダー、ライティングまで Blender で構築しました。"],
      ["telescope", "望遠鏡", "Telescope", "プロップデザイン。ハードサーフェスモデリングとテクスチャリングを行いました。"],
      ["honda", "Honda CIVIC", "Honda CIVIC", "CG 映像制作。車両のモデリング、テクスチャ、サーキット背景とレンダリングを担当しました。"],
      ["study", "練習・個人制作", "Studies & Personal Work", "課題や個人制作として描いたイラスト、デッサン、CG の習作です。"],
    ],
  };

  const render = (view) => {
    const key = view === "project" ? "project" : "medium";
    galleryRoot.textContent = "";

    GROUPS[view].forEach(([id, ja, en, desc], i) => {
      const items = allFigures.filter((f) => f.dataset[key] === id);
      if (!items.length) return;

      const group = document.createElement("div");
      group.className = "gallery-group";
      group.innerHTML = `
      <div class="gallery-group-head">
        <span class="group-index">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3></h3>
          <p class="group-en"></p>
        </div>
        <p class="group-desc"></p>
      </div>
      <div class="masonry stagger"></div>`;
      group.querySelector("h3").textContent = ja;
      group.querySelector(".group-en").textContent = en;
      group.querySelector(".group-desc").textContent = desc;

      const masonry = group.querySelector(".masonry");
      items.forEach((f) => {
        f.style.transitionDelay = "";
        masonry.appendChild(f);
      });
      galleryRoot.appendChild(group);
    });

    initReveal(galleryRoot);
  };

  document.querySelectorAll(".view-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.getAttribute("aria-pressed") === "true") return;
      document.querySelectorAll(".view-toggle button").forEach((b) =>
        b.setAttribute("aria-pressed", String(b === btn))
      );
      render(btn.dataset.view);
    });
  });
}

// ===== Lightbox (image gallery) =====
// Delegated so figures moved by the grouping switch stay clickable.
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
