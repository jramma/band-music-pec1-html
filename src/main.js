window.addEventListener("DOMContentLoaded", (event) => {
  import("./scripts/navigation.js"); // Código relacionado con la navegación
  import("./scripts/canvas.js"); // Código relacionado con la animación de canvas
  import("./scripts/scrolling.js"); // Código relacionado con el scrolling
  import("./scripts/swipper.js"); // Código relacionado con Swiper
  import("./scripts/links.js"); // Código relacionado con el scrolling
});
if (typeof window !== "undefined") {
  window.addEventListener("load", function () {
    document.body.classList.add("loaded");
  });

  window.toggleMenu = function () {
    var menu = document.getElementById("mobile-menu");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  };
}

const nav = document.getElementById("nav");
if (nav) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - 100; // Ajusta el valor según tus necesidades

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });
}
