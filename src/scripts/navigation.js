// Código relacionado con la navegación
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
