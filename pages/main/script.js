const burgerBtn = document.querySelector('.burger-menu');
const aboutActive = document.querySelector('.header__nav .active');

burgerBtn.addEventListener('click', () => {
  const isOpened = burgerBtn.getAttribute('aria-expanded');
  const header = document.querySelector('.header');
  // const headerWrapper = document.querySelector('.hedaer__wrapper');
  const logo = document.querySelector('.logo');
  const logoText = document.querySelector('.logo__text');
  const nav = document.querySelector('.header__nav');
  const copyright = document.querySelector('.header__copyright');

  if (isOpened === 'false') {
    burgerBtn.setAttribute('aria-expanded', 'true');
    header.classList.add('white');
    // headerWrapper.classList.add('opened');
    logo.classList.add('orange');
    logoText.classList.add('menustyle', 'orange');
    nav.classList.add('expanded', 'black');
    copyright.classList.add('black');
    aboutActive.classList.remove('active');
  } else {
    burgerBtn.setAttribute('aria-expanded', 'false');
    header.classList.remove('white');
    // headerWrapper.classList.remove('opened');
    nav.classList.remove('expanded');
    logo.classList.remove('orange');
    logoText.classList.remove('orange');
    copyright.classList.remove('black');
  }
});

aboutActive.addEventListener('click', () => {
  burgerBtn.setAttribute('aria-expanded', 'false');
  aboutActive.href = '../main/index.html';
});

// display hero button in backstage section when screen width is less than 320px

const heroBtnWrapper = document.querySelector('.hero-btn__wrapper');
const mediaQuery_320 = window.matchMedia('(max-width: 320px)');
const backstageWrapper = document.querySelector('.backstage__wrapper');

if (mediaQuery_320.matches) {
  backstageWrapper.appendChild(heroBtnWrapper);
  heroBtnWrapper.classList.add('maxwidth320');
  backstageWrapper.classList.add('maxwidth320');
}

// remove pets arrow buttons while pets gallery grid becomes 1 column
const petsGallery = document.querySelector('.pets-gallery');
const petsArrows = document.querySelector('.pets-arrows');
const mediaQuery_658 = window.matchMedia('(max-width: 658px)');
if (mediaQuery_658.matches) {
  petsArrows.style.display = 'none';
  petsGallery.style.rowGap = '20px';
}
