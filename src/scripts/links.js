// loading padding effect
window.addEventListener("load", function () {
    document.body.classList.add("loaded");
});

window.toggleMenu = function() {
    var menu = document.getElementById('mobile-menu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
window.addEventListener("scroll", function () {
  var middle = window.innerHeight / 2;
  var elements = document.querySelectorAll(".text li");

  elements.forEach(function (element) {
    var rect = element.getBoundingClientRect();

    if (rect.top <= middle && rect.bottom >= middle) {
      element.style.color = "#fca41e";
    } else {
      element.style.color = "white";
    }
  });
});
