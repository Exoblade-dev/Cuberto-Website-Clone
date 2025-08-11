// ----------------- LENIS + GSAP SYNC -----------------
// const lenis = new Lenis({
//   duration: 1.2,
//   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//   smoothWheel: true,
//   smoothTouch: false
// });

// // Sync Lenis with GSAP's ScrollTrigger (if GSAP exists)
// if (typeof ScrollTrigger !== 'undefined') {
//   lenis.on('scroll', ScrollTrigger.update);
//   gsap.ticker.add((time) => {
//     lenis.raf(time * 1000); // time in ms
//   });
//   gsap.ticker.lagSmoothing(0);
// } else {
//   // Fallback if GSAP not loaded
//   function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
//   }
//   requestAnimationFrame(raf);
// }
// ------------------------------------------------------


// ----------------- SHERY.JS -----------------
Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// ----------------- VIDEO HOVER -----------------
document.querySelectorAll(".video-hover-container").forEach((container) => {
  const img = container.querySelector(".video-thumbnail");
  const vid = container.querySelector(".video-preview");

  container.addEventListener("mouseenter", () => {
    img.style.display = "none";
    vid.style.display = "block";
    vid.play();
  });

  container.addEventListener("mouseleave", () => {
    vid.pause();
    vid.currentTime = 0;
    vid.style.display = "none";
    img.style.display = "block";
  });
});

// ----------------- TAB BUTTONS -----------------
const tabButtons = document.querySelectorAll(".tab-button");
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

// ----------------- SERVICE BUTTONS -----------------
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.service-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  });
});


