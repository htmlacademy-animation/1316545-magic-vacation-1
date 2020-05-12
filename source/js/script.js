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
import animations from './modules/animations';
import apData from './modules/data.js';
import changeScreen from './modules/change-screen.js';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

window.fullPageScroll = new FullPageScroll();
window.fullPageScroll.init();

animations();
changeScreen();
