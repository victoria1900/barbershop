var link = document.querySelector(".button-contacts");
var popup = document.querySelector(".map");
var close = document.querySelector(".map-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("map-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("map-show");
});