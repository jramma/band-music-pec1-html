const mobile = document.getElementById("mobile-menu");
if (mobile) {
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
}
const nav = document.getElementById("nav");
if (nav) {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });
}