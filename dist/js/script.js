"use strict";

var burgerButton = document.querySelector(".burger-button");
if (burgerButton) {
  var openMenu = function openMenu() {
    setTimeout(function () {
      siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__site-navigation--active");
  };
  var closeMenu = function closeMenu() {
    siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__site-navigation--active");
    burgerButton.classList.remove("burger-button--active");
  };
  var siteHeader = document.querySelector(".site-header");
  var siteNavigation = document.querySelector(".site-header__site-navigation");
  burgerButton.addEventListener("click", function () {
    burgerButton.classList.toggle("burger-button--active");
    if (burgerButton.classList.contains("burger-button--active")) {
      openMenu();
    } else {
      closeMenu();
    }
  });
}
;