const filtersButton = document.querySelector(".catalog-header__filter-button");

if(filtersButton) {
  const pageHtml = document.querySelector("html");
  const filtersModal = document.querySelector(".catalog-filters__wrapper");
  const filtersForm = filtersModal.querySelector(".catalog-filters__form");
  const closeFiltersButton = document.querySelector(".catalog-filters__close-button");
  const overlay = document.querySelector(".overlay");
  filtersButton.addEventListener("click", () => {
    filtersButton.classList.toggle("catalog-header__filter-button--active");

    if(filtersButton.classList.contains("catalog-header__filter-button--active")) {
      openFilters();
    } else {
      closeFilters();
    }
  });

  closeFiltersButton.addEventListener("click", () => {
    if(filtersModal.classList.contains("catalog-filters__wrapper--active")) {
      closeFilters();
    }
  });

  function openFilters() {
    pageHtml.classList.add("no-scroll");
    filtersModal.classList.add("catalog-filters__wrapper--active");
    overlay.classList.add("overlay--active");
  }

  function closeFilters() {
    pageHtml.classList.remove("no-scroll");
    filtersForm.scrollTo(0, 0);
    filtersModal.classList.remove("catalog-filters__wrapper--active");
    overlay.classList.remove("overlay--active");
    filtersButton.classList.remove("catalog-header__filter-button--active");
  }
}
