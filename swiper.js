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