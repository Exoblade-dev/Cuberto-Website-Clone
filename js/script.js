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





// class RopeEffect {
//   constructor(lineElement, svgElement, pathElement) {
//     this.line = lineElement;
//     this.svg = svgElement;
//     this.path = pathElement;
//     this.isActive = false;
//     this.animationId = null;

//     // Physics properties
//     this.mouseX = 0;
//     this.mouseY = 0;
//     this.ropeY = 100; // Center position in SVG
//     this.velocity = 0;
//     this.damping = 0.92;
//     this.tension = 0.15;
//     this.maxStretch = 80;

//     this.init();
//   }

//   init() {
//     // Get line boundaries
//     this.updateLineBounds();

//     // Mouse events
//     this.line.addEventListener("mouseenter", (e) => this.startEffect(e));
//     this.line.addEventListener("mousemove", (e) => this.updateMouse(e));
//     this.line.addEventListener("mouseleave", () => this.endEffect());

//     // Window resize
//     window.addEventListener("resize", () => this.updateLineBounds());
//   }

//   updateLineBounds() {
//     const rect = this.line.getBoundingClientRect();
//     this.lineRect = rect;
//     this.lineWidth = rect.width;
//   }

//   startEffect(e) {
//     this.isActive = true;
//     this.updateMouse(e);
//     this.animate();
//   }

//   updateMouse(e) {
//     if (!this.isActive) return;

//     const rect = this.lineRect;
//     this.mouseX = ((e.clientX - rect.left) / rect.width) * 100; // Percentage
//     this.mouseY = e.clientY - rect.top;

//     // Limit stretch distance
//     this.mouseY = Math.max(
//       -this.maxStretch,
//       Math.min(this.maxStretch, this.mouseY)
//     );
//   }

//   endEffect() {
//     this.isActive = false;
//     this.mouseY = 0; // Return to center
//   }

//   animate() {
//     if (this.animationId) {
//       cancelAnimationFrame(this.animationId);
//     }

//     const update = () => {
//       // Physics simulation
//       const targetY = this.isActive ? this.mouseY + 100 : 100; // 100 is center
//       const force = (targetY - this.ropeY) * this.tension;
//       this.velocity += force;
//       this.velocity *= this.damping;
//       this.ropeY += this.velocity;

//       // Update rope path
//       this.updateRopePath();

//       // Continue animation if there's movement or if active
//       if (
//         this.isActive ||
//         Math.abs(this.velocity) > 0.1 ||
//         Math.abs(this.ropeY - 100) > 0.5
//       ) {
//         this.animationId = requestAnimationFrame(update);
//       } else {
//         // Snap to final position
//         this.ropeY = 100;
//         this.velocity = 0;
//         this.updateRopePath();
//       }
//     };

//     update();
//   }

//   updateRopePath() {
//     const width = 100; // Percentage
//     const centerY = 100; // SVG center

//     if (Math.abs(this.ropeY - centerY) < 1) {
//       // Show as straight line
//       this.path.setAttribute("d", `M 0,${centerY} L 100,${centerY}`);
//     } else {
//       // Create curved rope effect
//       const mouseXPercent = this.mouseX;
//       const ropeY = this.ropeY;

//       // Create a smooth curve through the mouse position
//       const controlPoint1X = mouseXPercent * 0.5;
//       const controlPoint2X = mouseXPercent + (100 - mouseXPercent) * 0.5;
//       const controlY1 = centerY + (ropeY - centerY) * 0.3;
//       const controlY2 = centerY + (ropeY - centerY) * 0.3;

//       const pathData = `M 0,${centerY} 
//                             C ${controlPoint1X},${controlY1} 
//                               ${mouseXPercent - 10},${ropeY} 
//                               ${mouseXPercent},${ropeY}
//                             C ${mouseXPercent + 10},${ropeY}
//                               ${controlPoint2X},${controlY2}
//                               100,${centerY}`;

//       this.path.setAttribute("d", pathData);
//     }
//   }
// }

// // Auto-initialize function
// function initRopeEffect(containerSelector) {
//   const container = document.querySelector(containerSelector);
//   if (!container) {
//     console.error("Rope container not found:", containerSelector);
//     return;
//   }

//   const line = container.querySelector(".rope-line");
//   const svg = container.querySelector(".rope-svg");
//   const path = container.querySelector(".rope-path");

//   if (line && svg && path) {
//     return new RopeEffect(line, svg, path);
//   } else {
//     console.error("Required rope elements not found in container");
//   }
// }
