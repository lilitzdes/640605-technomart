var formPopup = document.querySelector(".modal-contact");
var form = document.querySelector(".button-map");

if (formPopup) {
  var formClose = formPopup.querySelector(".modal-close");
  var modalForm = formPopup.querySelector(".modal-form");
  var login = formPopup.querySelector("[name=login]");
  var email = formPopup.querySelector("[name=email]");
}

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

if (formPopup) {
  form.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.add("modal-show");

    if (storage) {
      login.value = storage;
      email.focus();
    } else {
      login.focus();
    }
  });


  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formPopup.classList.remove("modal-show");
    formPopup.classList.remove("modal-error");
  });

  modalForm.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
      evt.preventDefault();
      formPopup.classList.remove("modal-error");
      formPopup.offsetWidth = formPopup.offsetWidth;
      formPopup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("login", login.value);
      }
    }
  });
}
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (formPopup.classList.contains("modal-show")) {
      formPopup.classList.remove("modal-show");
      formPopup.classList.remove("modal-error");
    }
  }
});

var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");

if (mapPopup) {
  var mapClose = mapPopup.querySelector(".modal-close");
}

if (mapPopup) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});

var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".modal-buy");

if (popup) {
  var close = popup.querySelector(".modal-close");
  var closeButton = popup.querySelector(".button-close");
}
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
  });
};

if (popup) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
}

if (popup) {
  closeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
  });
}
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});