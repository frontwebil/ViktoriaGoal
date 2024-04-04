var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".top",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});

// allowTouchMove:false,

var swiperUnder = new Swiper(".mySwiper-under", {
  pagination: {
    el: ".under",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-next-under",
    prevEl: ".custom-prev-under",
  },
});

var swiper = new Swiper(".clients-succesess-swiper", {
  pagination: {
    el: ".slider-controls-paginations-clients-success",
    type: "fraction",
  },
  navigation: {
    nextEl: ".custom-next-clients-success",
    prevEl: ".custom-prev-clients-success",
  },
  allowTouchMove: false,

});

var swiper = new Swiper(".clients-succesess-swiper-innerSwiper", {
  spaceBetween: 20,
  slidesPerView: 1,

  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});