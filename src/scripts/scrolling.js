// Código relacionado con el scrolling
const contentDiv = document.querySelector(".scroll-vertical");
if (contentDiv) {
  let scrollInterval = setInterval(function () {
    if (
      contentDiv.scrollTop <
      contentDiv.scrollHeight - contentDiv.clientHeight
    ) {
      contentDiv.scrollTop += 2; // Ajusta este valor para controlar la velocidad del scroll
    } else {
      clearInterval(scrollInterval); // Detiene el scroll cuando se llega al final
    }
  }, 50);
}
