const headerBtn = document.querySelector(".header__toggle-btn");
const headerInnerWrapper = document.querySelector(".nav");
const headerInnerWrapperBtn = document.querySelector(".header__inner-btn");


headerBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.add("show-nav");
});

headerInnerWrapperBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.remove("show-nav");
});
