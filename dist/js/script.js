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
document.addEventListener('DOMContentLoaded', function () {
  var roomsSlider = document.querySelector(".rooms-slider");
  var reviewsSlider = document.querySelector(".reviews__slider");
  if (roomsSlider) {
    new Splide(roomsSlider, {
      gap: 30,
      mediaQuery: 'min',
      breakpoints: {
        200: {
          arrows: false
        },
        798: {
          arrows: true
        }
      }
    }).mount();
  }
  if (reviewsSlider) {
    new Splide(reviewsSlider, {
      gap: 30,
      mediaQuery: 'min',
      breakpoints: {
        200: {
          arrows: false
        },
        798: {
          arrows: true
        }
      }
    }).mount();
  }
});
;
var dropdown = document.querySelector(".dropdown");
if (dropdown) {
  var openDropdown = function openDropdown() {
    dropdownList.classList.add("dropdown-filter__list--active");
  };
  var closeDropdown = function closeDropdown() {
    dropdownButton.classList.remove("dropdown__toggle--active");
    dropdownList.classList.remove("dropdown-filter__list--active");
    dropdownButton.setAttribute("aria-expanded", "false");
  };
  var getDataOption = function getDataOption(item) {
    var optionText = item.innerHTML;
    var optionIcon = item.dataset.optionIcon;
    dropdownButton.innerHTML = optionText;
    dropdownButton.style.backgroundImage = "url(\"".concat(optionIcon, "\")");
  };
  var dropdownButton = dropdown.querySelector(".dropdown__toggle");
  var dropdownList = dropdown.querySelector(".dropdown-filter__list");
  var dropdownOptions = dropdown.querySelectorAll(".dropdown-filter__option");
  dropdownButton.addEventListener("click", function () {
    dropdownButton.classList.toggle("dropdown__toggle--active");
    dropdownButton.setAttribute("aria-expanded", "true");
    if (dropdownButton.classList.contains("dropdown__toggle--active")) {
      openDropdown();
      dropdownOptions.forEach(function (item) {
        item.addEventListener("click", function () {
          getDataOption(item);
          closeDropdown();
        });
        item.addEventListener("keydown", function (e) {
          if (dropdownButton.classList.contains("dropdown__toggle--active") && e.key === "Enter") {
            getDataOption(e.target);
            closeDropdown();
          }
        });
      });
    } else {
      closeDropdown();
    }
  });
}
;
var filtersButton = document.querySelector(".catalog-header__filter-button");
if (filtersButton) {
  var openFilters = function openFilters() {
    pageHtml.classList.add("no-scroll");
    filtersModal.classList.add("catalog-filters__wrapper--active");
    overlay.classList.add("overlay--active");
  };
  var closeFilters = function closeFilters() {
    pageHtml.classList.remove("no-scroll");
    filtersForm.scrollTo(0, 0);
    filtersModal.classList.remove("catalog-filters__wrapper--active");
    overlay.classList.remove("overlay--active");
    filtersButton.classList.remove("catalog-header__filter-button--active");
  };
  var pageHtml = document.querySelector("html");
  var filtersModal = document.querySelector(".catalog-filters__wrapper");
  var filtersForm = filtersModal.querySelector(".catalog-filters__form");
  var closeFiltersButton = document.querySelector(".catalog-filters__close-button");
  var overlay = document.querySelector(".overlay");
  filtersButton.addEventListener("click", function () {
    filtersButton.classList.toggle("catalog-header__filter-button--active");
    if (filtersButton.classList.contains("catalog-header__filter-button--active")) {
      openFilters();
    } else {
      closeFilters();
    }
  });
  closeFiltersButton.addEventListener("click", function () {
    if (filtersModal.classList.contains("catalog-filters__wrapper--active")) {
      closeFilters();
    }
  });
}
;