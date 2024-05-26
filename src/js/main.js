ScrollTrigger.create({
    trigger: ".scrollTitle",
    toggleClass: "active_scroll-title",
    start: "top top+=50px",
    endTrigger: ".text_img",
    end: "top top+=250px",
    pin: true,
    pinSpacing: false,
    scrub: 1,
  });