// Модуль для анимирования фона при переключении экрана

export default () => {
  // объект fullPageScroll для последующего переопределения его функции
  const OBJ_SCROLL = window.fullPageScroll;
  // ID экрана, фон для которого надо анимировать
  const SCR_FILL_ID = `prizes`;
  // номер экрана, фон для которого надо анимировать,  в fullPageScroll
  const NUM_SCR = Array.from(OBJ_SCROLL.screenElements).findIndex((screen) => SCR_FILL_ID === screen.id);
  // задержка для анимации фона
  const TRANS_DELAY = 310;

  // создаю элемент DOM, который будет анимированным фоном
  let divBg = document.createElement(`DIV`);
  divBg.classList.add(`bg-screen`);
  document.querySelector(`.page-content`).prepend(divBg);

  // переопределяю функцию смены экрана в fullPageScroll,
  // чтобы добавить задержку при смене на нужный экран
  OBJ_SCROLL.changePageDisplay = () => {
    // по умолчанию задержка 0
    let delay = 0;
    // проверка активного экрана ДО его смены
    if (OBJ_SCROLL.activeScreen === NUM_SCR) {
      // добавляю задержку
      delay = TRANS_DELAY;
      // "Включаю" анимацию на элементе-фоне
      divBg.classList.add(`fill`);
    }
    // Собственно смена экрана средствами fullPageScroll
    setTimeout(() => {
      OBJ_SCROLL.changeVisibilityDisplay();
      OBJ_SCROLL.changeActiveMenuItem();
      OBJ_SCROLL.emitChangeDisplayEvent();
      // "Выключаю" анимацию на элементе-фоне
      divBg.classList.remove(`fill`);
    }, delay);
  };
};
