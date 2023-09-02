document.addEventListener( 'DOMContentLoaded', function() {
  let roomsSlider = document.querySelector(".rooms-slider");
  let reviewsSlider = document.querySelector(".reviews__slider");
  let cardRoomSlider = document.querySelector(".card-room__big-slider");
  let cardRoomThumbs = document.querySelector(".card-room__thumbs-slider");
  if(roomsSlider) {
    new Splide(roomsSlider, {
      gap: 45,
      mediaQuery: 'min',
      classes: {
        prev: "splide__arrow--prev rooms-slider__arrow",
        next: "splide__arrow--next rooms-slider__arrow"
      },
      breakpoints: {
        200: {
          arrows: false,
        },
        768: {
          padding: 15
        },
        950: {
          padding: 0,
          arrows: true,
        },
      }
    }).mount();
  };

  if(reviewsSlider) {
    new Splide(reviewsSlider, {
      gap: 30,
      mediaQuery: 'min',
      classes: {
        prev: "splide__arrow--prev reviews-slider__arrow",
        next: "splide__arrow--next reviews-slider__arrow"
      },
      breakpoints: {
        200: {
          arrows: false,
        },
        950: {
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
