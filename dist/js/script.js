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

// =========================== Фикс скачка браузерного скролла и плавной прокрутки ==========================================

var scrollController = {
  scrollPosition: 0,
  disabledScroll: function disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = "\n      overflow: hidden;\n      position: fixed;\n      top: -".concat(scrollController.scrollPosition, "px;\n      left: 0;\n      height: 100vh;\n      width: 100vw;\n      padding-right: ").concat(parseInt(window.innerWidth - document.body.offsetWidth), "px;\n    ");
    document.documentElement.style.scrollBehavior = "unset";
  },
  enabledScrool: function enabledScrool() {
    document.body.style.cssText = "";
    window.scroll({
      top: scrollController.scrollPosition
    });
    document.documentElement.style.scrollBehavior = "";
  }
};
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
    scrollController.disabledScroll();
    setTimeout(function () {
      _siteHeader.classList.add("site-header--active");
    }, 300);
    siteNavigation.classList.add("site-header__navigation--active");
  };
  var closeMenu = function closeMenu() {
    scrollController.enabledScrool();
    _siteHeader.classList.remove("site-header--active");
    siteNavigation.classList.remove("site-header__navigation--active");
    burgerButton.classList.remove("burger-button--active");
  };
  var _siteHeader = document.querySelector(".site-header");
  var siteNavigation = document.querySelector(".site-header__navigation");
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
      gap: 45,
      mediaQuery: 'min',
      classes: {
        prev: "splide__arrow--prev rooms-slider__arrow",
        next: "splide__arrow--next rooms-slider__arrow"
      },
      breakpoints: {
        200: {
          arrows: false
        },
        769: {
          padding: 15
        },
        950: {
          padding: 0,
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
      classes: {
        prev: "splide__arrow--prev reviews-slider__arrow",
        next: "splide__arrow--next reviews-slider__arrow"
      },
      breakpoints: {
        200: {
          arrows: false
        },
        950: {
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
      mediaQuery: 'min',
      gap: 16,
      perPage: 3,
      arrows: false,
      pagination: false,
      isNavigation: true,
      breakpoints: {
        426: {
          gap: 40
        },
        600: {
          gap: 25
        },
        769: {
          gap: 21
        },
        950: {
          direction: 'ttb',
          height: 396,
          gap: 30
        }
      }
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
function modalInit(_ref) {
  var modalWindow = _ref.modalWindow,
    buttonOpen = _ref.buttonOpen,
    buttonClose = _ref.buttonClose;
  var modal = document.querySelector(modalWindow);
  if (modal) {
    var closeModal = function closeModal(event) {
      var target = event.target;
      if (target === modal || buttonClose && target === closeModalButton || event.keyCode === 27) {
        modal.classList.remove("modal--active");
        modalBody.classList.remove("modal__container--active");
        setTimeout(function () {
          modal.removeAttribute("style");
          scrollController.enabledScrool();
        }, 300);
        window.removeEventListener("keydown", closeModal);
      }
    };
    var openModal = function openModal() {
      modal.style.display = "flex";
      setTimeout(function () {
        modal.classList.add("modal--active");
        modalBody.classList.add("modal__container--active");
      }, 10);
      window.addEventListener("keydown", closeModal);
      scrollController.disabledScroll();
    };
    var openModalButtons = document.querySelectorAll(buttonOpen);
    var closeModalButton = modal.querySelector(buttonClose);
    var modalBody = modal.querySelector(".modal__container");
    openModalButtons.forEach(function (item) {
      item.addEventListener("click", openModal);
    });
    modal.addEventListener("click", closeModal);
  }
  ;
}
;
modalInit({
  modalWindow: ".modal-reserve",
  buttonOpen: ".reserve-button",
  buttonClose: ".modal__close-button"
});
;
var contactsMap = document.querySelector("#map");
if (contactsMap) {
  var init = function init() {
    contactsMap = new ymaps.Map(contactsMap, {
      center: [59.938627699512686, 30.323111601852325],
      zoom: 19
    });
    var placemark = new ymaps.Placemark([59.938627699512686, 30.323111601852325], {}, {
      iconLayout: "default#image",
      iconImageHref: "../img/place-ic.svg",
      iconImageSize: [32, 58],
      iconImageOffset: [-19, -44]
    });
    contactsMap.geoObjects.add(placemark);
    contactsMap.behaviors.disable(["scrollZoom"]);
  };
  ymaps.ready(init);
}
;