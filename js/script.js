const headerBtn = document.querySelector(".header__toggle-btn");
const headerInnerWrapper = document.querySelector(".nav");
const headerInnerWrapperBtn = document.querySelector(".header__inner-btn");
const loaderWrapper = document.querySelector(".loader-wrapper");

headerBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.add("show-nav");
});

headerInnerWrapperBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.remove("show-nav");
});

setTimeout(() => {
  loaderWrapper.style.display = "none";
}, 2000);
