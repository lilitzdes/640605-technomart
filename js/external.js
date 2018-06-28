var link = document.querySelectorAll(".button-price");
var popup = document.querySelector(".modal-buy");
var close = popup.querySelector(".button-close");


for (var i = 0; i < link.length; i++) {
	link[i].addEventListener("click", function (evt) {
	evt.preventDefault();
	popap.classList.add("modal-show");
	});
};

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
  });




