const filtersButton = document.querySelector(".catalog-header__filter-button");

if(filtersButton) {
  const filtersModal = document.querySelector(".catalog-filters__wrapper");
  const filtersForm = filtersModal.querySelector(".catalog-filters__form");
  const catalogFiltersWidth = window.matchMedia("(max-width: 1200px)");
  const closeFiltersButton = document.querySelector(".catalog-filters__close-button");
  filtersButton.addEventListener("click", () => {
    filtersButton.classList.toggle("catalog-header__filter-button--active");

    if(filtersButton.classList.contains("catalog-header__filter-button--active")) {
      openFilters();
    } else {
      closeFilters();
    }
  });

  document.querySelector(".overlay").addEventListener("click", () => {
    if(document.querySelector(".overlay").classList.contains("overlay--active")) {
      closeFilters();

    }
  })

  closeFiltersButton.addEventListener("click", () => {
    if(filtersModal.classList.contains("catalog-filters__wrapper--active")) {
      closeFilters();

    }
  });

  function openFilters() {
    scrollController.disabledScroll(".fixed-element");

    filtersModal.classList.add("catalog-filters__wrapper--active");
    document.querySelector(".overlay").classList.add("overlay--active");
  }

  function closeFilters() {
    scrollController.enabledScrool(".fixed-element");

    filtersForm.scrollTo(0, 0);
    filtersModal.classList.remove("catalog-filters__wrapper--active");
    document.querySelector(".overlay").classList.remove("overlay--active");
    filtersButton.classList.remove("catalog-header__filter-button--active");
  }

  function changeView(width) {
    if(!width) {
      closeFilters();
    }
  }

  catalogFiltersWidth.onchange = (e) => {
    changeView(e.matches);
  }
}
