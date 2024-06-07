// Código relacionado con Swiper
const iSswiper = document.querySelector(".mySwiper");
if (iSswiper) {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    effect: "cards",
    grabCursor: true,
    autoplay: {
      // aumentar para que vaya más lento
      delay: 500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
    },
  });
}
