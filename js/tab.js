document.addEventListener("DOMContentLoaded", function () {
  var periodBtns = document.querySelectorAll(".period__surname");
  periodBtns.forEach(function (tabsBtn) {
    tabsBtn.addEventListener("click", function (e) {
      const path = e.currentTarget.dataset.path;
      periodBtns.forEach(function (biographyImg) {
        biographyImg.classList.remove("period__surname--active");
      });
      e.currentTarget.classList.add("period__surname--active");
      document.querySelectorAll(".portrait").forEach(function (tabsBtn) {
        tabsBtn.classList.remove("portrait--active");
      });
      document
        .querySelector(`[data-target='${path}']`)
        .classList.add("portrait--active");
    });
  });

  // переход из шапки к определённому художнику
  var directBtns = document.querySelectorAll(".dropdown__link");
  directBtns.forEach(function (directBtn) {
    directBtn.addEventListener("click", function (e) {
      const directPath = e.currentTarget.dataset.directpath;
      document.querySelectorAll(".portrait").forEach(function (directBtn) {
        directBtn.classList.remove("portrait--active");
      });
      document
        .querySelector(`[data-target='${directPath}']`)
        .classList.add("portrait--active");
    });
  });
});
