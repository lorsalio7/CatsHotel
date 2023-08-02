const burgerButton = document.querySelector(".burger-button");

if(burgerButton) {
  const siteHeader = document.querySelector(".site-header");
  const siteNavigation = document.querySelector(".site-header__site-navigation");

  burgerButton.addEventListener("click", () => {
    burgerButton.classList.toggle("burger-button--active");
    if(burgerButton.classList.contains("burger-button--active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  function openMenu() {
    setTimeout(()=>{
      siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__site-navigation--active");
  }

  function closeMenu() {
    siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__site-navigation--active");
    burgerButton.classList.remove("burger-button--active");
  }
}
