// плавная прокрутка
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute("href");
    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
// плавная прокрутка

// Google map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.39, lng: 35.022 },
    zoom: 15,
  });
}
//  /google map

// API - application programming interface
console.log("Privet");
