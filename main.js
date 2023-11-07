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

anime({
    targets: '.image-man',
    translateX: -350, // -> '250px'
    rotate: 360, // -> '540deg'
    delay: 1000
});
anime({
    targets: '.image-woman',
    translateX: 350, // -> '250px'
    rotate: 360, // -> '540deg'
    delay: 1000,
    endDelay: 1000,
    direction: 'alternate',
});

setupCounter(document.querySelector('#counter'))
