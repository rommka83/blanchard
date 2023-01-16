var menu = document.querySelector(".nav");

// плавный переход по ссылкам внутри страницы
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.remove("nav--active");
    document.body.classList.remove("no-scroll");
    const blockID = anchor.getAttribute("href").substr(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// всплывающие меню и поиск по сайту
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const exit = document.querySelector(".exit");
  const searchInput = document.querySelector(".site-search__input");
  const searchMagnifer = document.querySelector(".site-search__magnifier");
  burger.addEventListener("click", function () {
    document.body.classList.add("no-scroll");
    menu.classList.add("nav--active");
  });
  exit.addEventListener("click", function () {
    document.body.classList.remove("no-scroll");
    menu.classList.remove("nav--active");
  });
  searchMagnifer.addEventListener("click", function () {
    searchInput.classList.toggle("site-search__input--active");
  });

  // выпадающие списки в шапке
  const directBtn = document.querySelectorAll(".directions-list__btn");
  const drops = document.querySelectorAll(".dropdown");
  directBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      let currentBtn = e.currentTarget;
      let drop = currentBtn
        .closest(".directions-list__item")
        .querySelector(".dropdown");

      directBtn.forEach((el) => {
        if (el !== currentBtn) {
          el.classList.remove("directions-list__btn_open");
        }
      });

      drops.forEach((el) => {
        if (el !== drop) {
          el.classList.remove("dropdown_active");
        }
      });

      drop.classList.toggle("dropdown_active");
      currentBtn.classList.toggle("directions-list__btn_open");
    });
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".directions-list__item")) {
      directBtn.forEach((el) => {
        el.classList.remove("directions-list__btn_open");
      });

      drops.forEach((el) => {
        el.classList.remove("dropdown_active");
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {});
