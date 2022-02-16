/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/headerModal */ \"./src/modules/headerModal.js\");\n/* harmony import */ var _modules_servicesSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/servicesSlider */ \"./src/modules/servicesSlider.js\");\n/* harmony import */ var _modules_servicesModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/servicesModal */ \"./src/modules/servicesModal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/document */ \"./src/modules/document.js\");\n/* harmony import */ var _modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/benefitsSlider */ \"./src/modules/benefitsSlider.js\");\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('17 february 2022')\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_servicesSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_servicesModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(100)\n;(0,_modules_document__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_benefitsSlider__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n\n//# sourceURL=webpack://okna/./src/index.js?");

/***/ }),

/***/ "./src/modules/benefitsSlider.js":
/*!***************************************!*\
  !*** ./src/modules/benefitsSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst benefitsSlider = () => {\r\n    const sliderBlock = document.querySelector('.benefits-wrap')\r\n    const slides = document.querySelectorAll('.benefits__item')\r\n\r\n    let currentSlide = 3\r\n    let interval\r\n\r\n\r\n\r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass)\r\n    }\r\n\r\n    const autoSlide = () => {\r\n        prevSlide(slides, currentSlide - 2, 'benefits__item-active')\r\n        prevSlide(slides, currentSlide - 1, 'benefits__item-active')\r\n        prevSlide(slides, currentSlide, 'benefits__item-active')\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 2\r\n        }\r\n        nextSlide(slides, currentSlide - 2, 'benefits__item-active')\r\n        nextSlide(slides, currentSlide - 1, 'benefits__item-active')\r\n        nextSlide(slides, currentSlide, 'benefits__item-active')\r\n    }\r\n\r\n    const startSlide = () => {\r\n        interval = setInterval(autoSlide, 2500)\r\n    }\r\n\r\n    const stopSlide = () => {\r\n        clearInterval(interval)\r\n    }\r\n\r\n\r\n    sliderBlock.addEventListener('mouseenter', (event) => {\r\n        if (event.target.matches('.portfolio-btn')) {\r\n            stopSlide()\r\n        }\r\n\r\n    }, true)\r\n    sliderBlock.addEventListener('mouseleave', (event) => {\r\n        if (event.target.matches('.portfolio-btn')) {\r\n            startSlide()\r\n        }\r\n\r\n    }, true)\r\n\r\n    startSlide()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (benefitsSlider);\n\n//# sourceURL=webpack://okna/./src/modules/benefitsSlider.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = (price = 1000) => {\n    const check = document.querySelector('title')\n    if (check.textContent == ('Остекление балконов и лоджий')) {\n        const total = document.getElementById('calc-total')\n        const square = document.getElementById('calc-input')\n        const material = document.getElementById('calc-type-material')\n        const type = document.getElementById('calc-type')\n        const calcBlock = document.getElementById('calc')\n\n        const countCalc = () => {\n            const typeValue = +type.options[type.selectedIndex].value\n            const materialValue = +material.options[material.selectedIndex].value\n            const squareValue = square.value\n            let totalValue = 0\n\n            if (typeValue && materialValue && squareValue) {\n                totalValue = price * typeValue * materialValue * squareValue\n                total.placeholder = 'Итого: ' + totalValue + ' руб.'\n            }\n        }\n\n        calcBlock.addEventListener('input', (e) => {\n            if (e.target === type || e.target === material ||\n                e.target === square) {\n                countCalc()\n            }\n        })\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n// square * value type * value material\n\n//# sourceURL=webpack://okna/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/document.js":
/*!*********************************!*\
  !*** ./src/modules/document.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documents = () => {\r\n    const docOpen = document.querySelectorAll('.document-overlay')\r\n    const docBig = document.querySelector('.document-original--opened')\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    docOpen.forEach((e) => {\r\n        e.addEventListener('click', () => {\r\n            docBig.classList.toggle('document-original')\r\n            overlay.style.display = 'block'\r\n        })\r\n    })\r\n    overlay.addEventListener('click', () => {\r\n        docBig.classList.add('document-original')\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documents);\n\n//# sourceURL=webpack://okna/./src/modules/document.js?");

/***/ }),

/***/ "./src/modules/headerModal.js":
/*!************************************!*\
  !*** ./src/modules/headerModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerModal = () => {\r\n    const button = document.querySelector('.btn-header')\r\n    const modal = document.querySelector('.header-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const headerClose = document.querySelector('.header-modal__close')\r\n\r\n    button.addEventListener('click', () => {\r\n        modal.classList.toggle('header-modal')\r\n        overlay.style.display = 'block'\r\n\r\n    })\r\n\r\n    headerClose.addEventListener('click', () => {\r\n        modal.classList.toggle('header-modal')\r\n        overlay.style.display = 'none'\r\n    })\r\n    overlay.addEventListener('click', () => {\r\n        modal.classList.add('header-modal')\r\n        overlay.style.display = 'none'\r\n    })\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack://okna/./src/modules/headerModal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n\r\n    const scrolllink = document.querySelector('.smooth-scroll');\r\n    scrolllink.addEventListener('click', () => {\r\n        window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n\r\n    })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://okna/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/servicesModal.js":
/*!**************************************!*\
  !*** ./src/modules/servicesModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\r\n    const servicesButton = document.querySelectorAll('.service-button')\r\n    const servicesModal = document.querySelector('.services-modal')\r\n    const overlay = document.querySelector('.overlay')\r\n    const servicesClose = document.querySelector('.services-modal__close')\r\n\r\n    servicesButton.forEach((e) => {\r\n        e.addEventListener('click', () => {\r\n            servicesModal.classList.toggle('services-modal')\r\n            overlay.style.display = 'block'\r\n        })\r\n    })\r\n\r\n    servicesClose.addEventListener('click', () => {\r\n        servicesModal.classList.toggle('services-modal')\r\n        overlay.style.display = 'none'\r\n    })\r\n    overlay.addEventListener('click', () => {\r\n        servicesModal.classList.add('services-modal')\r\n        overlay.style.display = 'none'\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack://okna/./src/modules/servicesModal.js?");

/***/ }),

/***/ "./src/modules/servicesSlider.js":
/*!***************************************!*\
  !*** ./src/modules/servicesSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesSlider = () => {\r\n\r\n    const sliderLine = document.querySelector('.slider-line')\r\n    const sliderSlide = document.querySelector('.slider-slide')\r\n    let offset = 0\r\n\r\n    document.querySelector('.services__arrow--right').addEventListener('click', function() {\r\n        if (sliderSlide.offsetWidth < 556) {\r\n            offset = offset + 555;\r\n            if (offset > 1666) {\r\n                offset = 0;\r\n            }\r\n        } else {\r\n\r\n            offset = offset + 600\r\n            if (offset > 1200) {\r\n                offset = 0\r\n            }\r\n        }\r\n        sliderLine.style.left = -offset + 'px'\r\n    });\r\n\r\n    document.querySelector('.services__arrow--left').addEventListener('click', function() {\r\n        if (sliderSlide.offsetWidth < 556) {\r\n            offset = offset - 555;\r\n            if (offset <= 0) {\r\n                offset = 1666;\r\n            }\r\n        } else {\r\n\r\n            offset = offset - 600\r\n            if (offset < 0) {\r\n                offset = 1200\r\n            }\r\n        }\r\n        sliderLine.style.left = -offset + 'px'\r\n        console.log(offset)\r\n    });\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesSlider);\n\n//# sourceURL=webpack://okna/./src/modules/servicesSlider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n\r\n    const timerDay = document.querySelectorAll('.count_1')\r\n    const timerHour = document.querySelectorAll('.count_2')\r\n    const timerMinute = document.querySelectorAll('.count_3')\r\n    const timerSecond = document.querySelectorAll('.count_4')\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor((timeRemaining / 60 / 60 / 24))\r\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return {\r\n            timeRemaining,\r\n            days,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n\r\n        }\r\n    }\r\n\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining()\r\n\r\n        timerDay.forEach(element => {\r\n            let timerDays = element.querySelector(\"span\")\r\n            timerDays.textContent = (\"0\" + getTime.days).slice(-2)\r\n\r\n        })\r\n        timerHour.forEach(element => {\r\n            let timerHours = element.querySelector(\"span\")\r\n            timerHours.textContent = (\"0\" + getTime.hours).slice(-2)\r\n\r\n        })\r\n        timerMinute.forEach(element => {\r\n            let timerMinutes = element.querySelector(\"span\")\r\n            timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2)\r\n\r\n        })\r\n        timerSecond.forEach(element => {\r\n            let timerSeconds = element.querySelector(\"span\")\r\n            timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2)\r\n\r\n        })\r\n        if (getTime.timeRemaining > 0) {\r\n\r\n            setTimeout(updateClock, 1000)\r\n\r\n        } else {\r\n            timerDays.textContent = '00'\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n\r\n        }\r\n    }\r\n    updateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://okna/./src/modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;