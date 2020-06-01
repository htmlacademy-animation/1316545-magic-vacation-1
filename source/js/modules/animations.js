export default () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    document.querySelector(`body`).classList.add(`load`);
  });

  // подписка на окончание анимации на экране Правила
  document.querySelector(`.rules__item:last-child`).onanimationend = () => {
    document.querySelector(`.rules__link`).classList.add(`show-link`);
    setTimeout(() => {
      document.querySelector(`.rules__link`).classList.remove(`show-link`);
    }, 1000);
  };
};
