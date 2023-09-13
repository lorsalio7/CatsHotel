function modalInit({modalWindow, buttonOpen, buttonClose}) {
  let modal = document.querySelector(modalWindow);

  if(modal) {
    let openModalButtons = document.querySelectorAll(buttonOpen);
    let closeModalButton = modal.querySelector(buttonClose);
    let modalBody = modal.querySelector(".modal__container");

    openModalButtons.forEach(item => {
      item.addEventListener("click", openModal);
    });


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

      let focusable = modal.querySelectorAll(focusElements);

      if(modal.classList.contains("modal--active")) {
        if(focusable) {
          focusable[0].focus();
        }
      } else {
        previousActiveElement.focus();
      }
    }

    function focusCatch(e) {
      let focusable = modal.querySelectorAll(focusElements);
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

    function closeModal(event) {

        modal.classList.remove("modal--active");
        modalBody.classList.remove("modal__container--active");

        setTimeout(() => {
          modal.removeAttribute("style");
          scrollController.enabledScrool(".fixed-element");
          focusTrap();
        },300);


        window.removeEventListener("keydown", closeModal);

        modal.removeEventListener("click", closeModal);


    }

    function openModal() {

      previousActiveElement = document.activeElement;
      modal.style.display = "flex";

      setTimeout(() => {
        modal.classList.add("modal--active");
        modalBody.classList.add("modal__container--active");
        focusTrap();
      },10);

      window.addEventListener("keydown", (e) => {
        if(e.keyCode === 27 && modal.classList.contains("modal--active")) {
          closeModal();
        }
        if(e.keyCode === 9 && modal.classList.contains("modal--active")) {
          focusCatch(e);
          return;
        }
      });

      modal.addEventListener("click", (e) => {
        if(!e.target === modalBody && modal.classList.contains("modal--active") || e.target === modal || e.target === closeModalButton) {
          closeModal();
        }
      });
      scrollController.disabledScroll(".fixed-element");
    }

  };
};

modalInit({
  modalWindow: ".modal-reserve",
  buttonOpen: ".reserve-button",
  buttonClose: ".modal__close-button"
});
