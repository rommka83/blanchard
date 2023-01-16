var periodItem = document.querySelectorAll(".period__btn"),
  bodyItem = document.querySelectorAll(".period__list");
periodItem.__proto__.forEach = [].__proto__.forEach;

var activePeriod;
periodItem.forEach(function (item, i, periodItem) {
  item.addEventListener("click", function (e) {
    //открыл, что хотел
    this.classList.add("btn--active");
    this.nextElementSibling.classList.add("period__list--active");
    //спрятал ранее показанную
    if (activePeriod) {
      activePeriod.classList.remove("btn--active");
      activePeriod.nextElementSibling.classList.remove("period__list--active");
    }
    activePeriod = activePeriod === this ? 0 : this;
  });
});
