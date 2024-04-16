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

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  effect:"cards",
  grabCursor: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});