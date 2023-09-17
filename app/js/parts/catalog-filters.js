const filtersButton = document.querySelector(".catalog-header__filter-button");

if(filtersButton) {
  const filtersModalOverlay = document.querySelector(".catalog__catalog-filters");
  const filtersForm = document.querySelector("#catalog-filters-form");
  const filtersModal = filtersModalOverlay.querySelector(".catalog-filters__wrapper");
  const catalogFiltersWidth = window.matchMedia("(max-width: 1200px)");
  const closeFiltersButton = document.querySelector(".catalog-filters__close-button");
  let previousActiveElement;
  let focusElements = [
    'a[href]',
    'area[href]',
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    'select:not([disabled]):not([aria-hidden])',
    'textarea:not([disabled]):not([aria-hidden])',
    'button:not([disabled]):not([aria-hidden])',
    'iframe',
    'object',
    'embed',
    '[contenteditable]',
    '[tabindex]:not([tabindex^="-"])',
  ];

  function focusTrap() {

    let focusable = filtersModal.querySelectorAll(focusElements);

    if(filtersModalOverlay.classList.contains("catalog__catalog-filters--active")) {
      if(focusable) {
        focusable[0].focus();
      }
    } else {
      previousActiveElement.focus();
    }
  }

  function focusCatch(e) {
    let focusable = filtersModal.querySelectorAll(focusElements);
    let focusArray = Array.prototype.slice.call(focusable);
    let focusedIndex = focusArray.indexOf(document.activeElement);

    if(e.shiftKey && focusedIndex === 0) {
      focusArray[focusArray.length - 1].focus();
      e.preventDefault();
    }

    if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
      focusArray[0].focus();
      e.preventDefault();
    }
  }

  filtersForm.addEventListener("keydown", (event) => {
    if(event.key === 'Enter' && event.target !== filtersForm.querySelector(".catalog-filters__submit-button") && event.target !== filtersForm.querySelector(".catalog-filters__reset-button")) {
      event.preventDefault();

      if (event.target.type === "checkbox") {
        event.target.checked = !event.target.checked;
      }
    }
  })

  filtersButton.addEventListener("click", () => {
    filtersButton.classList.add("catalog-header__filter-button--active");

    openFilters();
  });


  function closeFilters() {

      filtersModal.classList.remove("catalog-filters__wrapper--active");
      filtersButton.classList.remove("catalog-header__filter-button--active");


      setTimeout(() => {
        filtersModalOverlay.classList.remove("catalog__catalog-filters--active");
        filtersModalOverlay.removeAttribute("style");
        scrollController.enabledScrool(".fixed-element");
        focusTrap();
      }, 300);

      window.removeEventListener("keydown", closeFilters);
      filtersModalOverlay.removeEventListener("click", closeFilters);


    }
  function openFilters() {
    previousActiveElement = document.activeElement;
    filtersModalOverlay.style.display = "block";


    setTimeout(() => {
      filtersModalOverlay.classList.add("catalog__catalog-filters--active");
      filtersModal.classList.add("catalog-filters__wrapper--active");
      focusTrap();
    }, 10);


    window.addEventListener("keydown", (e) => {
      if(e.keyCode === 27 && filtersModal.classList.contains("catalog-filters__wrapper--active")) {
        closeFilters();
      }
      if(e.keyCode === 9 && filtersModal.classList.contains("catalog-filters__wrapper--active")) {
        focusCatch(e);
        return;
      }
    });
    filtersModalOverlay.addEventListener("click", (e) => {
      if(!e.target === filtersModal && filtersModal.classList.contains("catalog-filters__wrapper--active") || e.target === filtersModalOverlay || e.target === closeFiltersButton) {
        closeFilters();
      }
    });
    scrollController.disabledScroll(".fixed-element");
  }



  function changeView(width) {
    if(!width) {
      filtersModal.classList.remove("catalog-filters__wrapper--active");
      filtersButton.classList.remove("catalog-header__filter-button--active");
      filtersModalOverlay.classList.remove("catalog__catalog-filters--active");
      filtersModalOverlay.removeAttribute("style");
      scrollController.enabledScrool(".fixed-element");

      window.removeEventListener("keydown", closeFilters);
      filtersModalOverlay.removeEventListener("click", closeFilters);

    }
  }

  catalogFiltersWidth.onchange = (e) => {
    changeView(e.matches);
  }
}
