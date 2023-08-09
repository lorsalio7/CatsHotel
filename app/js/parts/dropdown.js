const dropdown = document.querySelector(".dropdown");

if(dropdown) {
  const dropdownButton = dropdown.querySelector(".dropdown__toggle");
  const dropdownList = dropdown.querySelector(".dropdown-filter__list");
  const dropdownOptions = dropdown.querySelectorAll(".dropdown-filter__option");

  dropdownButton.addEventListener("click", () => {
    dropdownButton.classList.toggle("dropdown__toggle--active");
    dropdownButton.setAttribute("aria-expanded", "true");

    if(dropdownButton.classList.contains("dropdown__toggle--active")) {
      openDropdown();
      dropdownOptions.forEach(item => {
        item.addEventListener("click", () => {
          getDataOption(item);
          closeDropdown();
        });

        item.addEventListener("keydown", (e) => {
          if(dropdownButton.classList.contains("dropdown__toggle--active") && e.key === "Enter") {
            getDataOption(e.target);
            closeDropdown();
          }
        })
      })
    } else {
      closeDropdown();
    }
  });

  function openDropdown() {
    dropdownList.classList.add("dropdown-filter__list--active");
  }

  function closeDropdown() {
    dropdownButton.classList.remove("dropdown__toggle--active");
    dropdownList.classList.remove("dropdown-filter__list--active");
    dropdownButton.setAttribute("aria-expanded", "false");
  }

  function getDataOption(item) {
    let optionText = item.innerHTML;
    let optionIcon = item.dataset.optionIcon;
    dropdownButton.innerHTML = optionText;
    dropdownButton.style.backgroundImage = `url("${optionIcon}")`;
  }
}
