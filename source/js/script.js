// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';

// добавляю новые модули
import animations from './modules/animations';
import changeScreen from './modules/change-screen.js';
import AccentTypographyBuild from'./modules/letter-animation.js';


// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

// Объект fullPageScroll становится видимым глобально
window.fullPageScroll = new FullPageScroll();
window.fullPageScroll.init();

animations();
changeScreen();

const animationTopScreenTextLine = new AccentTypographyBuild(`.intro__title`, 500, `active`, `transform`);
const animationDateLine = new AccentTypographyBuild(`.intro__date`, 500, `active`, `transform`);

setTimeout(()=>{
  animationTopScreenTextLine.runAnimation();
}, 500);

setTimeout(()=>{
  animationDateLine.runAnimation();
}, 1500);
