// loading padding effect
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

const contentDiv = document.querySelector('.scroll-vertical');

let scrollInterval = setInterval(function() {
  if (contentDiv.scrollTop < contentDiv.scrollHeight - contentDiv.clientHeight) {
    contentDiv.scrollTop += 2; // Ajusta este valor para controlar la velocidad del scroll
  } else {
    clearInterval(scrollInterval); // Detiene el scroll cuando se llega al final
  }
}, 50); 