document.addEventListener("DOMContentLoaded", function(event) {
  function js_Load() {
    document.body.style.visibility = "visible";
  }

  const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "15px",
    duration: 1000,
    desktop: true,
    mobile: true
  };

  ScrollReveal().reveal("#left-banner", {
    ...defaultProps,
    delay: 350,
    origin: "left"
  });

  ScrollReveal().reveal(".banner-image", {
    ...defaultProps,
    delay: 350,
    origin: "right"
  });

  ScrollReveal().reveal(".mobile-img-banner", {
    ...defaultProps,
    delay: 350,
    origin: "right"
  });

  ScrollReveal().reveal(".about-image", {
    ...defaultProps,
    delay: 600,
    origin: "left"
  });

  ScrollReveal().reveal(".about-me-title", {
    ...defaultProps,
    delay: 650,
    origin: "top"
  });

  ScrollReveal().reveal(".services-title", {
    ...defaultProps,
    delay: 700,
    origin: "top"
  });

  ScrollReveal().reveal(".services-list", {
    ...defaultProps,
    delay: 800,
    origin: "left"
  });

  ScrollReveal().reveal(".blue-button", {
    ...defaultProps,
    delay: 400,
    origin: "bottom"
  });

  ScrollReveal().reveal(".about-me-buttons", {
    ...defaultProps,
    delay: 400,
    origin: "bottom"
  });

  ScrollReveal().reveal(".para", {
    ...defaultProps,
    delay: 700,
    origin: "right"
  });

  ScrollReveal().reveal(".project-wrapper__text", {
    ...defaultProps,
    delay: 600,
    origin: "left"
  });

  ScrollReveal().reveal(".project-wrapper__image", {
    ...defaultProps,
    delay: 685,
    origin: "right"
  });

  ScrollReveal().reveal("footer", {
    ...defaultProps,
    delay: 400,
    origin: "bottom"
  });
});
