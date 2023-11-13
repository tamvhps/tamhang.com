// import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'
import anime from 'animejs/lib/anime.es.js';


// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `


// anime({
//     targets: 'div',
//     translateX: 250,
//     rotate: '1turn',
//     backgroundColor: '#FFF',
//     duration: 800
// });

// anime({
//     targets: '.image-man',
//     translateX: -350, // -> '250px'
//     rotate: 360, // -> '540deg'
//     delay: 1000
// });
// anime({
//     targets: '.image-woman',
//     translateX: 350, // -> '250px'
//     rotate: 360, // -> '540deg'
//     delay: 1000,
//     endDelay: 1000,
//     direction: 'alternate',
// });

// setupCounter(document.querySelector('#counter'))

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
    gallery: '#image-gallery',
    children: 'a',
    showHideAnimationType: 'none',
    pswpModule: () => import('photoswipe')
});
lightbox.init()

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
const activeNavbar = document.getElementById("events");
const navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = activeNavbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
        navbar.classList.remove("absolute");
    } else {
        navbar.classList.add("absolute");
        navbar.classList.remove("sticky");
    }
}