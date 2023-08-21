let reserveRoomModal = document.querySelector(".modal-reserve");

if(reserveRoomModal) {
  let closeReserveModalButton = document.querySelector(".modal-reserve .modal__close-button");
  let modalContainer = reserveRoomModal.querySelector(".modal__container");
  let reserveButtons = document.querySelectorAll(".reserve-button");

  reserveButtons.forEach(item => {
    item.addEventListener("click", openReserveModal);
  });

  function openReserveModal() {
    reserveRoomModal.style.display = "flex";
    setTimeout(() => {
      reserveRoomModal.classList.add("modal--active");
      modalContainer.classList.add("modal__container--active")
      document.querySelector("html").classList.add("no-scroll");
    }, 10)
  }

  function closeReserveModal(e) {
    let target = e.target;
    if(target === reserveRoomModal || target === closeReserveModalButton) {
      reserveRoomModal.classList.remove("modal--active");
      modalContainer.classList.remove("modal__container--active");
      document.querySelector("html").classList.remove("no-scroll");

      setTimeout(() => {
        reserveRoomModal.removeAttribute("style");
      }, 300);
    }

  }

  reserveRoomModal.addEventListener("click", closeReserveModal);
}
