const bannerContainer = document.querySelector('.banner');
const bannerOpenPopupBtn = bannerContainer.querySelector('.banner__btn');
const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close-btn');

bannerOpenPopupBtn.addEventListener('click', () => {
  popup.classList.add('opened');
})

popupCloseBtn.addEventListener('click', () => {
  popup.classList.remove('opened');
})
