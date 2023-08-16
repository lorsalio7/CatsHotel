document.addEventListener( 'DOMContentLoaded', function() {
  let roomsSlider = document.querySelector(".rooms-slider");
  let reviewsSlider = document.querySelector(".reviews__slider");
  let cardRoomSlider = document.querySelector(".card-room__big-slider");
  let cardRoomThumbs = document.querySelector(".card-room__thumbs-slider");
  if(roomsSlider) {
    new Splide(roomsSlider, {
      gap: 30,
      mediaQuery: 'min',
      breakpoints: {
        200: {
          arrows: false,
        },
        798: {
          arrows: true,
        },
      }
    }).mount();
  };

  if(reviewsSlider) {
    new Splide(reviewsSlider, {
      gap: 30,
      mediaQuery: 'min',
      breakpoints: {
        200: {
          arrows: false,
        },
        798: {
          arrows: true,
        },
      }
    }).mount();
  };

  if(cardRoomSlider) {
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
      isNavigation: true,
    }).mount();

    cardRoomSlider.sync(cardRoomThumbs);
  }

} );
