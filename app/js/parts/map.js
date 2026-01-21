let contactsMap = document.querySelector("#map");

if(contactsMap) {
  let mapLoaded = false;
  let scrollTimeout;
  let mapOffset = document.querySelector(".contacts__map-wrapper").getBoundingClientRect();



  function init() {
    contactsMap = new ymaps.Map(contactsMap, {
      center: [59.938627699512686,30.323111601852325],
      zoom: 19
    });

    let placemark = new ymaps.Placemark([59.938627699512686,30.323111601852325], {}, {
      iconLayout: "default#image",
      iconImageHref: "img/icons/place-ic.svg",
      iconImageSize: [32,58],
      iconImageOffset: [-19,-44]
    });
    contactsMap.geoObjects.add(placemark);
    contactsMap.behaviors.disable(["scrollZoom"]);
  }


  window.addEventListener("scroll", () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      let scrollY = window.scrollY;
      if(!mapLoaded && scrollY >= (mapOffset.top - 500)) {
        ymaps.ready(init);
        mapLoaded = true;
      }
    }, 100);
  });
}
