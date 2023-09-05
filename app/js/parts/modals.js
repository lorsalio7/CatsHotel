function modalInit({modalWindow, buttonOpen, buttonClose}) {
  let modal = document.querySelector(modalWindow);

  if(modal) {
    let openModalButtons = document.querySelectorAll(buttonOpen);
    let closeModalButton = modal.querySelector(buttonClose);
    let modalBody = modal.querySelector(".modal__container");

    openModalButtons.forEach(item => {
      item.addEventListener("click", openModal);
    });

    function closeModal(event) {
      let target = event.target;

      if(target === modal || (buttonClose && target === closeModalButton) || event.keyCode === 27) {
        modal.classList.remove("modal--active");
        modalBody.classList.remove("modal__container--active");

        setTimeout(() => {
          modal.removeAttribute("style");
          scrollController.enabledScrool();
        },300);


        window.removeEventListener("keydown", closeModal);
      }
    }

    function openModal() {
      modal.style.display = "flex";
      setTimeout(() => {
        modal.classList.add("modal--active");
        modalBody.classList.add("modal__container--active");
      },10);
      window.addEventListener("keydown", closeModal);
      scrollController.disabledScroll();
    }

    modal.addEventListener("click", closeModal);
  };
};

modalInit({
  modalWindow: ".modal-reserve",
  buttonOpen: ".reserve-button",
  buttonClose: ".modal__close-button"
});