const reserveRoomModal = document.querySelector(".modal--reserve");

if(reserveRoomModal) {
  let closeReserveRoomButton = document.querySelector(".modal__close-button");
  let reserveButtons = document.querySelectorAll(".reserve-button");

  reserveButtons.forEach(item => {
    item.addEventListener("click", openReserveRoomModal);
  });

  closeReserveRoomButton.addEventListener("click", () => {
    if(reserveRoomModal.classList.contains("modal--active")) {
      closeReserveRoomModal();
    }
  })

  function openReserveRoomModal() {
    reserveRoomModal.classList.add("modal--active");
    document.querySelector("html").classList.add("no-scroll")
    document.querySelector(".overlay").classList.add("overlay--active")
  }

  function closeReserveRoomModal() {
    reserveRoomModal.classList.remove("modal--active");
    document.querySelector("html").classList.remove("no-scroll");
    document.querySelector(".overlay").classList.remove("overlay--active");
  }
}
