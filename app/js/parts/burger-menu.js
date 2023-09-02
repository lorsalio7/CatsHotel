const burgerButton = document.querySelector(".burger-button");

if(burgerButton) {
  const siteHeader = document.querySelector(".site-header");
  const siteNavigation = document.querySelector(".site-header__navigation");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-button--active");
    if(burgerButton.classList.contains("burger-button--active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  function openMenu() {
    scrollController.disabledScroll();
    setTimeout(()=>{
      siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__navigation--active");
  }

  function closeMenu() {
    scrollController.enabledScrool();
    siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__navigation--active");
    burgerButton.classList.remove("burger-button--active");
  }
}
