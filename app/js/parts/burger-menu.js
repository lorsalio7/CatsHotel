const burgerButton = document.querySelector(".burger-button");

if(burgerButton) {
  const siteHeader = document.querySelector(".site-header");
  const siteNavigation = document.querySelector(".site-header__navigation");
  let burgerMenuWidth = window.matchMedia("(max-width: 768px)");
  let siteNavigationLinks = siteNavigation.querySelectorAll(".site-navigation-list__link");

  burgerButton.addEventListener("click", () => {
    // let widthScroll = window.innerWidth - document.body.offsetWidth + "px";
    burgerButton.classList.toggle("burger-button--active");
    // burgerButton.style.marginRight = widthScroll;
    if(burgerButton.classList.contains("burger-button--active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  function openMenu() {
    scrollController.disabledScroll(".fixed-element");
    setTimeout(()=>{
      siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__navigation--active");
  }

  function closeMenu() {
    scrollController.enabledScrool(".fixed-element");
    siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__navigation--active");
    burgerButton.classList.remove("burger-button--active");
  }

  function changeView(width) {
    if(!width) {
      closeMenu();
    }
  }

  burgerMenuWidth.onchange = (e) => {
    changeView(e.matches);
  }

  siteNavigationLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  })
}
