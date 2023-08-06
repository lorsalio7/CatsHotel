document.addEventListener( 'DOMContentLoaded', function() {
  let roomsSlider = document.querySelector(".rooms-slider");
  let reviewsSlider = document.querySelector(".reviews__slider");
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
  }

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
  }

} );
