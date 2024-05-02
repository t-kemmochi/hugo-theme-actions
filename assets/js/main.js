const button = document.querySelector(".js-button");
const menu = document.querySelector(".js-menu");
const list = document.querySelector(".js-list");

let isMenuOpen = false; // メニューの状態を表す変数

const toggleMenu = () => {
  isMenuOpen = !isMenuOpen; // メニューの状態を反転

  // メニューがオープンの場合
  if (isMenuOpen) {
    button.classList.add("is-active");
    menu.classList.add("is-active");
    button.setAttribute("aria-expanded", "true");
    button.setAttribute("aria-label", "メニューを閉じる");
    list.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  // メニューがクローズの場合
  else {
    button.classList.remove("is-active");
    menu.classList.remove("is-active");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "メニューを開く");
    list.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
};

button.addEventListener("click", toggleMenu);
