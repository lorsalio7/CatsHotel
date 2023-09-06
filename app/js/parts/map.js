let contactsMap = document.querySelector("#map");

if(contactsMap) {
  ymaps.ready(init);

  function init() {
    contactsMap = new ymaps.Map(contactsMap, {
      center: [59.938627699512686,30.323111601852325],
      zoom: 19
    });

    let placemark = new ymaps.Placemark([59.938627699512686,30.323111601852325], {}, {
      iconLayout: "default#image",
      iconImageHref: "../img/place-ic.svg",
      iconImageSize: [32,58],
      iconImageOffset: [-19,-44]
    });
    contactsMap.geoObjects.add(placemark);
    contactsMap.behaviors.disable(["scrollZoom"]);
  }
}
