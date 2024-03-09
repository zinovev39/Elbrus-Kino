const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
