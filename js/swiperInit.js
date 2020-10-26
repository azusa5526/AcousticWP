let swiper1 = new Swiper(".swiper1", {
  loop: true,
  autoplay: { delay: 4000 },
  pagination: ".swiper-pagination1",
  paginationClickable: true,
});
let swiper2 = new Swiper(".swiper2", {
  slidesPerView: "1",
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: { delay: 3000 },
  pagination: ".swiper-pagination2",
  paginationClickable: true,
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 3.5,
      spaceBetween: 25,
    },
  }
});
let galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
let galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  thumbs: {
    swiper: galleryThumbs
  }
});
