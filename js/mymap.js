ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [55.760425, 37.614436],
      zoom: 14,
      controls: ["geolocationControl", "zoomControl"],
    },
    {
      geolocationControlPosition: {
        top: "350px",
        right: "25px",
      },
      zoomControlSize: "small",
      zoomControlPosition: {
        top: "250px",
        right: "25px",
      },
    },
    (myPlacemark = new ymaps.Placemark(
      [55.760425, 37.614436],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "img/icon/my-adress.svg",
        iconImageSize: [20, 20],
        // iconImageOffset: [0, 0],
      }
    ))
  );
  myMap.geoObjects.add(myPlacemark);
  myMap.behaviors.disable("scrollZoom");
}
