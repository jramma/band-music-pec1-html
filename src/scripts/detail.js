if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  const mobile = document.getElementById("mobile-menu");
  if (mobile) {
    window.toggleMenu = function () {
      mobile.classList.toggle("visible");
    };
  }

  const nav = document.getElementById("nav");
  if (nav) {
    nav.addEventListener("click", function (e) {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const targetElement = document.querySelector(
          target.getAttribute("href")
        );
        if (targetElement) {
          const targetPosition =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            100;
          window.scrollTo({ top: targetPosition, behavior: "smooth" });
        }
      }
    });
  }
}
