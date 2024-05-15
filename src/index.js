const bannerContainer = document.querySelector(".banner");
const bannerOpenPopupBtn = bannerContainer.querySelector(".banner__btn");
const popup = document.querySelector(".popup");
const popupCloseBtn = popup.querySelector(".popup__close-btn");
const form = popup.querySelector(".popup__form");
const submitButton = popup.querySelector(".popup__btn-submit");
const popupSuccess = document.querySelector(".popup_type_success");
const popupExitBtn = popupSuccess.querySelector(".popup__btn_type_success");
console.log(popupSuccess);
const page = document.body;

// открытие попапа
bannerOpenPopupBtn.addEventListener("click", () => {
  popup.classList.add("opened");
  popup.classList.remove("closed")
  page.style.overflow = "hidden";
});

// закрытие попапа
popupCloseBtn.addEventListener("click", () => {
  popup.classList.remove("opened");
  popup.classList.add('closed')
  page.style.overflow = "auto";
  form.reset();
});

popupExitBtn.addEventListener("click", () => {
  popupSuccess.classList.remove("opened");
  popupSuccess.classList.add('closed')
  page.style.overflow = "auto";
});

// маска для телефона
const element = document.querySelector(".popup__input_type_phone");
const maskOptions = {
  mask: '+{7} (#00) 000-00-00',
  definitions: {
      '#': /[89]/
  }
};

const mask = IMask(element, maskOptions);

// Функция для проверки заполнения всех полей и выбора чекбокса
function validateForm() {
  const inputs = form.querySelectorAll(".popup__input");
  const checkbox = form.querySelector(".popup__checkbox");
  const phoneInput = form.querySelector(".popup__input_type_phone");

  let inputsFilled = true;
  inputs.forEach((input) => {
    if (
      input.value.trim() === "" ||
      phoneInput.value.length < 18 ||
      input.value.length < 3
    ) {
      inputsFilled = false;
    }
  });

  const checkboxChecked = checkbox.checked;

  return inputsFilled && checkboxChecked;
}

submitButton.disabled = true;

// Обработчик события input для формы
form.addEventListener("input", () => {
  if (validateForm()) {
    submitButton.disabled = false;
    submitButton.classList.remove("popup__btn-submit_type_disabled");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("popup__btn-submit_type_disabled");
  }
});

// Обработчик события change для чекбокса
form.querySelector(".popup__checkbox").addEventListener("change", () => {
  if (validateForm()) {
    submitButton.disabled = false;
    submitButton.classList.remove("popup__btn-submit_type_disabled");
  } else {
    submitButton.disabled = true;
    submitButton.classList.add("popup__btn-submit_type_disabled");
  }
});

// отправка формы
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log({
    name: form.querySelector(".popup__input").value,
    phone: form.querySelector(".popup__input_type_phone").value,
  });
  popup.classList.remove("opened");
  popup.classList.add('closed')
  popupSuccess.classList.remove('closed')
  popupSuccess.classList.add("opened");
  page.style.overflow = "auto";
  form.reset();
});
