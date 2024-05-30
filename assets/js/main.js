const button = document.querySelector(".js-button");
const menu = document.querySelector(".js-menu");
const icon = document.querySelector(".js-icon");

let isMenuOpen = false; // メニューの状態を表す変数

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen; // メニューの状態を反転

  // メニューがオープンの場合
  if (isMenuOpen) {
    button.classList.add("is-active");
    menu.classList.add("is-active");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "Close menu");
    icon.setAttribute("name", "close");
  }
  // メニューがクローズの場合
  else {
    button.classList.remove("is-active");
    menu.classList.remove("is-active");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Open menu");
    icon.setAttribute("name", "menu");
  }
};

button.addEventListener("click", toggleMenu);
menu.addEventListener("click", toggleMenu);
