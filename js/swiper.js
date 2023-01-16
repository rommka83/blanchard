// Обложка
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".hero-section__swiper", {
    loop: true,
    effect: "slide",
    grabCursor: true,
    clicable: true,
    speed: 2000,
    touchRatio: 3,
    autoplay: {
      delay: 3000,
    },
  });
});

// Галерея
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".gallery__swiper", {
    loop: false,
    effect: "slide",
    centerInsufficientSlides: true,
    centeredSlides: false,
    createElements: true,
    simulateTouch: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderBullet: function (index, className) {
        return (
          '<span class= " ' + className + ' ">' + (index + 1) + "/" + "</span>"
        );
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
      eventsTarget: ".galleri__slider",
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 33,
      },
      1550: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  });
});

// События
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".events__swiper", {
    loop: false,
    effect: "slide",
    grabCursor: true,
    slidesPerView: 1,
    spaceBetween: 35,
    centerInsufficientSlides: false,
    centeredSlides: false,
    centeredSlidesBounds: true,
    createElements: true,
    simulateTouch: true,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    breakpoints: {
      601: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 35,
      },
      780: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 25,
      },
      1550: {
        slidesPerView: 3,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    },
  });
});

// Проекты
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".projects__swiper", {
    effect: "slide",
    grabCursor: true,
    clicable: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    centerInsufficientSlides: true,
    centeredSlides: false,
    createElements: true,
    simulateTouch: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: false,
      onlyInViewport: true,
      pageUpDown: true,
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 35,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 50,
      },

      1550: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50,
      },
    },
  });
});
