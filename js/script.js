
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




const tabButtons = document.querySelectorAll('.tab-button');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all
      tabButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked one
      button.classList.add('active');

      // You can also show/hide specific sections here:
      // For example: document.getElementById("applications").style.display = "block";
    });
  });
