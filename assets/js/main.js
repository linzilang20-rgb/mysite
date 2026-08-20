// ===== Hero background video (YouTube IFrame API) =====
// Uses the API instead of a `playlist=` loop so YouTube never renders
// prev/next playlist controls over the background.
const heroMount = document.getElementById("hero-player");
if (heroMount) {
  const tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  document.head.appendChild(tag);

  window.onYouTubeIframeAPIReady = function () {
    new YT.Player("hero-player", {
      videoId: heroMount.dataset.videoId,
      playerVars: {
        autoplay: 1,
        mute: 1,
        controls: 0,
        disablekb: 1,
        fs: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        playsinline: 1,
      },
      events: {
        onReady: (e) => {
          e.target.mute();
          e.target.playVideo();
          document.querySelector(".hero")?.classList.add("video-ready");

          // A paused/ended player draws YouTube's overlay chrome on top of the
          // hero, so nudge it back to playing whenever it settles anywhere else.
          setInterval(() => {
            const s = e.target.getPlayerState();
            if (s === YT.PlayerState.ENDED) {
              e.target.seekTo(0);
              e.target.playVideo();
            } else if (s === YT.PlayerState.PAUSED || s === YT.PlayerState.CUED) {
              e.target.playVideo();
            }
          }, 1000);
        },
        onStateChange: (e) => {
          if (e.data === YT.PlayerState.ENDED) {
            e.target.seekTo(0);
            e.target.playVideo();
          } else if (e.data === YT.PlayerState.PAUSED) {
            e.target.playVideo();
          }
        },
      },
    });
  };
}

// ===== Mobile nav toggle =====
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => navLinks.classList.remove("open"))
  );
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));
}

// ===== Lightbox (image gallery) =====
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");
  document.querySelectorAll("[data-lightbox]").forEach((fig) => {
    fig.addEventListener("click", () => {
      lightboxImg.src = fig.dataset.full || fig.querySelector("img").src;
      lightboxImg.alt = fig.querySelector("img").alt || "";
      lightbox.classList.add("open");
    });
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
