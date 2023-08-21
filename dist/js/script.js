"use strict";

function throttle(func, delay) {
  var wait = false;
  return function () {
    if (wait) {
      return;
    }
    func.apply(void 0, arguments);
    wait = true;
    setTimeout(function () {
      wait = false;
    }, delay);
  };
}
function debounce(func, delay) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, delay);
  };
}
;
var siteHeader = document.querySelector(".site-header");
if (siteHeader) {
  var addShadow = function addShadow() {
    var offsetTop = window.pageYOffset;
    if (offsetTop > 0) {
      siteHeader.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    } else {
      siteHeader.removeAttribute("style");
    }
  };
  window.addEventListener("scroll", debounce(addShadow, 150));
}
;
var burgerButton = document.querySelector(".burger-button");
if (burgerButton) {
  var openMenu = function openMenu() {
    setTimeout(function () {
      _siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__site-navigation--active");
  };
  var closeMenu = function closeMenu() {
    _siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__site-navigation--active");
    burgerButton.classList.remove("burger-button--active");
  };
  var _siteHeader = document.querySelector(".site-header");
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
  var cardRoomSlider = document.querySelector(".card-room__big-slider");
  var cardRoomThumbs = document.querySelector(".card-room__thumbs-slider");
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
  ;
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
  ;
  if (cardRoomSlider) {
    cardRoomSlider = new Splide(cardRoomSlider, {
      gap: 30,
      arrows: false,
      pagination: false
    }).mount();
    cardRoomThumbs = new Splide(cardRoomThumbs, {
      gap: 16,
      perPage: 3,
      arrows: false,
      pagination: false,
      isNavigation: true
    }).mount();
    cardRoomSlider.sync(cardRoomThumbs);
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
var arrivalInput = new Cleave('.modal-form__arrival-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});
var departureInput = new Cleave('.modal-form__departure-date', {
  date: true,
  delimiter: '.',
  datePattern: ['d', 'm', 'Y']
});
;
var reserveRoomModal = document.querySelector(".modal-reserve");
if (reserveRoomModal) {
  var openReserveModal = function openReserveModal() {
    reserveRoomModal.style.display = "flex";
    setTimeout(function () {
      reserveRoomModal.classList.add("modal--active");
      modalContainer.classList.add("modal__container--active");
      document.querySelector("html").classList.add("no-scroll");
    }, 10);
  };
  var closeReserveModal = function closeReserveModal(e) {
    var target = e.target;
    if (target === reserveRoomModal || target === closeReserveModalButton) {
      reserveRoomModal.classList.remove("modal--active");
      modalContainer.classList.remove("modal__container--active");
      document.querySelector("html").classList.remove("no-scroll");
      setTimeout(function () {
        reserveRoomModal.removeAttribute("style");
      }, 300);
    }
  };
  var closeReserveModalButton = document.querySelector(".modal-reserve .modal__close-button");
  var modalContainer = reserveRoomModal.querySelector(".modal__container");
  var reserveButtons = document.querySelectorAll(".reserve-button");
  reserveButtons.forEach(function (item) {
    item.addEventListener("click", openReserveModal);
  });
  reserveRoomModal.addEventListener("click", closeReserveModal);
}
;