window.addEventListener("load", () => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // 1. Preloader slide up
  tl.to("#preloader", {
    yPercent: -100,
    duration: 1.2,
    delay: 0.2,
  });

  // 2. Nav bar animation
  tl.from("#navLeft", { y: -50, opacity: 0, duration: 0.8 }, "-=0.8");
  tl.from(
    "#navRight a",
    { y: -50, opacity: 0, stagger: 0.1, duration: 0.6 },
    "-=0.6"
  );

  // 3. Hero page (index.html)
  if (document.querySelector("#headingText h2")) {
    tl.from(
      "#headingText h2",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.3"
    );
    tl.from(
      "#headingText h4",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.6"
    );
  }

  // 4. Services page
  if (document.querySelector("#ourServicesPageHeading p")) {
    tl.from(
      "#ourServicesPageHeading p",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.3"
    );
    tl.from(
      "#ourServicesPageHeading h2",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.6"
    );
  }

  // 5. Projects page
  if (document.querySelector("#ourProjectsHeadingMain h2")) {
    tl.from(
      "#ourProjectsHeadingMain h2",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.3"
    );
    tl.from(
      "#ourProjectsHeadingMain p",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.6"
    );

    const buttons = document.querySelectorAll(
      "#ourProjectsHeadingMain .tab-button"
    );
    if (buttons.length > 0) {
      tl.from(
        buttons,
        { y: 50, opacity: 0, stagger: 0.1, duration: 0.6 },
        "-=0.5"
      );
    }
  }

  // 6. Company page
  if (document.querySelector("#companyPageHeadingMain h2")) {
    tl.from(
      "#companyPageHeadingMain h2",
      {
        yPercent: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
      },
      "-=0.3"
    );

    tl.from(
      "#companyPageHeadingMain img",
      {
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
      },
      "-=0.5"
    );
  }

  // 7. Contact page
  if (document.querySelector("#contactPageHeading p")) {
    // Heading animation
    tl.from(
      "#contactPageHeading p",
      { yPercent: 100, opacity: 0, duration: 0.8 },
      "-=0.3"
    );

    // "I'm interested in..." text
    if (document.querySelector("#contactPageInfo p")) {
      tl.from(
        "#contactPageInfo p",
        { yPercent: 100, opacity: 0, duration: 0.8 },
        "-=0.5"
      );
    }

    // Service buttons animation
    const serviceButtons = document.querySelectorAll(".service-btn");
    if (serviceButtons.length > 0) {
      tl.from(
        serviceButtons,
        { y: 30, opacity: 0, stagger: 0.1, duration: 0.7 },
        "-=0.4"
      );
    }
  }
  
  // 8. Shared videos (index & services)
  const videoEl =
    document.querySelector("#heroInformation video") ||
    document.querySelector("#ourServicesPageVideo video");
  if (videoEl) {
    tl.from(videoEl, { scale: 1.2, opacity: 0, duration: 1.2 }, "-=0.5");
  }
});
