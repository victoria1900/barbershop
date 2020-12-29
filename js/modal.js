var link = document.querySelector(".button__login");
var popup = document.querySelector(".modal");
var close = document.querySelector(".button-close");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
});
close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});