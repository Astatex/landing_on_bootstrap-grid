function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const burgerLinks = document.querySelectorAll('.js-burger-link');

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  function open() {
    btn.classList.add(params.activeClass);
    menu.classList.add(params.activeClass);
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', true);
  }

  function close() {
    btn.classList.remove(params.activeClass);
    menu.classList.add(params.hiddenClass);
    document.body.removeAttribute('style');
    btn.setAttribute('aria-expanded', false);
  }

  btn.addEventListener("click", function () {
    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      open();
    } else {
      close();
    }
  });

  burgerLinks.forEach(function (link) {
    if (screen.width <= 1280) {
      link.addEventListener('click', close);
    }
  });
}

setBurger({
  btnClass: "js-burger",
  menuClass: "js-menu-wrap",
  activeClass: "is-opened",
  hiddenClass: "is-closed",
});
