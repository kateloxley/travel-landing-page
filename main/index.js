import './scss/main.scss';
import facebookIcon from './assets/image/facebook-icon.svg';
import googleIcon from './assets/image/google-icon.svg';


const body = document.body;

// Scrolling by anchors

const menuLinks = document.querySelectorAll(".header__link[data-goto]");

const onAnchorClick = (event) => {
  const menuLink = event.target;
  if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
    const gotoBlock = document.querySelector(menuLink.dataset.goto);
    const gotoBlockValue = gotoBlock.getBoundingClientRect().top;

    window.scrollTo({
      top: gotoBlockValue,
      behavior: 'smooth'
    })
    event.preventDefault()
  }
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onAnchorClick)
  })
}

// Mobile menu

const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelectorAll(".header__link");
const headerClose = document.querySelector(".header__close");
const headerBack = document.querySelector(".header__back");


const closeMenu = (event) => {
  if (event.target.classList.contains("header__link") ||
    event.target.classList.contains("active") ||
    event.target.classList.contains("header__close")) {
    headerBurger.classList.remove("active")
    headerMenu.classList.remove("active")
    headerBack.classList.remove("active")
    body.classList.remove("noscroll")
  }
}

headerBurger.addEventListener("click", () => {
  headerBurger.classList.toggle("active")
  headerMenu.classList.toggle("active")
  headerBack.classList.toggle("active")
  body.classList.toggle("noscroll")
})

headerLinks.forEach(el => el.addEventListener("click", closeMenu))

headerClose.addEventListener("click", closeMenu)

headerBack.addEventListener("click", closeMenu)

// Login popup

const headerLogin = document.querySelector(".header__login");

const createDomElement = (element, innerHTML, ...classes) => {
    const node = document.createElement(element);
    node.classList.add(...classes);
    node.innerHTML = innerHTML;
    return node;
};

const loginPopup = document.querySelector('.login-popup');
const accountLink = document.getElementById('account');

const createLoginPopup = () => {
  const loginPopupWrapper = createDomElement('div', '', 'login-popup__wrapper');
  loginPopup.appendChild(loginPopupWrapper);
  loginPopupWrapper.appendChild(createDomElement('h2', 'Sign In', 'login-popup__title'));

  const popupClose = loginPopupWrapper.appendChild(createDomElement('span', '', "login-popup__close"));
  popupClose.addEventListener("click", (event) => {
    if (event.target.classList.contains("login-popup__close")) {
      loginPopup.classList.remove("active");
      loginPopup.removeChild(loginPopup.firstChild);
      body.classList.remove('noscroll');
    }
  });

  const loginPopupIcons = loginPopupWrapper.appendChild(createDomElement('div', '', 'login-popup__icons'));
  const loginPopupIconLink_1 = loginPopupIcons.appendChild(createDomElement('a', '', 'login-popup__link'))
  loginPopupIconLink_1.href ='#';
  const loginPopupIcon_1 = loginPopupIconLink_1.appendChild(createDomElement('img', '', 'login-popup__icon'));
  loginPopupIcon_1.setAttribute('src', `${facebookIcon}`);
  const loginPopupIconLink_2 = loginPopupIcons.appendChild(createDomElement('a', '', 'login-popup__link'))
  loginPopupIconLink_2.href ='##';
  const loginPopupIcon_2 = loginPopupIconLink_2.appendChild(createDomElement('img', '', 'login-popup__icon'));
  loginPopupIcon_2.setAttribute('src', `${googleIcon}`);
  loginPopupWrapper.appendChild(createDomElement('div', '', 'login-popup__divider'));
  const loginPopupForm = loginPopupWrapper.appendChild(createDomElement('div', '', 'login-popup__form'));
  const loginPopupItem_1 = loginPopupForm.appendChild(createDomElement('div', '', 'login-popup__item'));
  loginPopupItem_1.appendChild(createDomElement('label', 'Username', 'login-popup__label')).setAttribute('for', 'user');
  const loginPopupInput_1 = loginPopupItem_1.appendChild(createDomElement('input', '', 'login-popup__input'));
  loginPopupInput_1.id = 'user';
  loginPopupInput_1.type = 'text';

  const loginPopupItem_2 = loginPopupForm.appendChild(createDomElement('div', '', 'login-popup__item'));
  loginPopupItem_2.appendChild(createDomElement('label', 'Password', 'login-popup__label')).setAttribute('for', 'password');
  const loginPopupInput_2 = loginPopupItem_2.appendChild(createDomElement('input', '', 'login-popup__input'));
  loginPopupInput_2.id = 'password';
  loginPopupInput_2.type = 'password';

  const loginPopupItem_3 = loginPopupForm.appendChild(createDomElement('div', '', 'login-popup__item'));
  loginPopupItem_3.appendChild(createDomElement('button', 'Sign In', 'login-popup__btn'));
  loginPopupItem_3.type = 'submit';
  loginPopup.classList.add('active');
  body.classList.add('noscroll');
  return loginPopupWrapper;
}

headerLogin.addEventListener('click', createLoginPopup);

loginPopup.addEventListener("click", (event) => {
    if (event.target.classList.contains("active")) {
      loginPopup.classList.remove("active");
      loginPopup.removeChild(loginPopup.firstChild);
      body.classList.remove('noscroll');
    }
});

accountLink.addEventListener('click', createLoginPopup);


// slider

const swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        loop: true,
      });
