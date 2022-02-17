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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_headerModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/headerModal */ \"./src/modules/headerModal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_servicesModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/servicesModal */ \"./src/modules/servicesModal.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_document__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/document */ \"./src/modules/document.js\");\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('22 february 2022')\n;(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_headerModal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_servicesModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\n;(0,_modules_document__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n\n//# sourceURL=webpack://okna/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calc = () => {\n    const check = document.querySelector('title')\n    if (check.textContent == ('Остекление балконов и лоджий')) {\n        const total = document.getElementById('calc-total')\n        const square = document.getElementById('calc-input')\n        const material = document.getElementById('calc-type-material')\n        const type = document.getElementById('calc-type')\n        const calcBlock = document.getElementById('calc')\n\n        const countCalc = () => {\n            const typeValue = +type.options[type.selectedIndex].value\n            const materialValue = +material.options[material.selectedIndex].value\n            const squareValue = square.value\n            let totalValue = 0\n\n            if (typeValue && materialValue && squareValue) {\n                totalValue = typeValue * materialValue * squareValue\n                total.placeholder = 'Итого: ' + totalValue + ' руб.'\n            }\n        }\n\n        calcBlock.addEventListener('input', (e) => {\n            if (e.target === type || e.target === material ||\n                e.target === square) {\n                countCalc()\n            }\n        })\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n// square * value type * value material\n\n//# sourceURL=webpack://okna/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/document.js":
/*!*********************************!*\
  !*** ./src/modules/document.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst documents = () => {\n    const docOpen = document.querySelectorAll('.document-overlay')\n    const docBig = document.querySelector('.document-original--opened')\n    const overlay = document.querySelector('.overlay')\n\n    docOpen.forEach((e) => {\n        e.addEventListener('click', () => {\n            docBig.classList.toggle('document-original')\n            overlay.style.display = 'block'\n            \n        })\n        let documentClose = document.querySelector('.document-modal__close')\n        documentClose.addEventListener('click', () => {\n            docBig.classList.add('document-original')\n            overlay.style.display = 'none'\n            \n        })\n    })\n    overlay.addEventListener('click', () => {\n        docBig.classList.add('document-original')\n        overlay.style.display = 'none'\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (documents);\n\n//# sourceURL=webpack://okna/./src/modules/document.js?");

/***/ }),

/***/ "./src/modules/headerModal.js":
/*!************************************!*\
  !*** ./src/modules/headerModal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst headerModal = () => {\n    const button = document.querySelector('.btn-header')\n    const modal = document.querySelector('.header-modal')\n    const overlay = document.querySelector('.overlay')\n    const headerClose = document.querySelector('.header-modal__close')\n\n    button.addEventListener('click', () => {\n        modal.classList.toggle('header-modal')\n        overlay.style.display = 'block'\n\n    })\n\n    headerClose.addEventListener('click', () => {\n        modal.classList.toggle('header-modal')\n        overlay.style.display = 'none'\n    })\n    overlay.addEventListener('click', () => {\n        modal.classList.add('header-modal')\n        overlay.style.display = 'none'\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerModal);\n\n//# sourceURL=webpack://okna/./src/modules/headerModal.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\n\n    const scrollLink = document.querySelector('.smooth-scroll');\n\n    let counter = 0\n\n    window.addEventListener('scroll', () => {\n        if (window.pageYOffset < 200) {\n            scrollLink.style.display = \"none\"\n            counter++\n        }\n        if (window.pageYOffset > 700 && counter > 0) {\n            scrollLink.style.display = \"block\"\n        }\n    })\n    scrollLink.addEventListener('click', () => {\n        window.scrollTo({ top: 0, behavior: \"smooth\" })\n\n    })\n\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://okna/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/servicesModal.js":
/*!**************************************!*\
  !*** ./src/modules/servicesModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst servicesModal = () => {\n    const servicesButton = document.querySelectorAll('.service-button')\n    const servicesModal = document.querySelector('.services-modal')\n    const overlay = document.querySelector('.overlay')\n    const servicesClose = document.querySelector('.services-modal__close')\n\n    servicesButton.forEach((e) => {\n        e.addEventListener('click', () => {\n            servicesModal.classList.toggle('services-modal')\n            overlay.style.display = 'block'\n        })\n    })\n    servicesClose.addEventListener('click', () => {\n        servicesModal.classList.toggle('services-modal')\n        overlay.style.display = 'none'\n    })\n    overlay.addEventListener('click', () => {\n        servicesModal.classList.add('services-modal')\n        overlay.style.display = 'none'\n    })\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (servicesModal);\n\n//# sourceURL=webpack://okna/./src/modules/servicesModal.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n    const sliderLine = document.querySelector('.slider-line')\n    const sliderSlide = document.querySelector('.slider-slide')\n    let offset = 0\n    document.querySelector('.services__arrow--right').addEventListener('click', () => {\n        if (sliderSlide.offsetWidth < 556) {\n            offset = offset + sliderSlide.offsetWidth;\n            if (offset > 1666) {\n                offset = 0;\n            }\n        } else {\n\n            offset = offset + sliderSlide.offsetWidth\n            if (offset > 1200) {\n                offset = 0\n            }\n        }\n        sliderLine.style.left = -offset + 'px'\n    })\n    document.querySelector('.services__arrow--left').addEventListener('click', () => {\n        if (sliderSlide.offsetWidth < 556) {\n            offset = offset - sliderSlide.offsetWidth;\n            if (offset <= 0) {\n                offset = 1666;\n            }\n        } else {\n\n            offset = offset - sliderSlide.offsetWidth\n            if (offset < 0) {\n                offset = 1200\n            }\n        }\n        sliderLine.style.left = -offset + 'px'\n    })\n    let benefitsOffset = 0\n    const sliderBlock = document.querySelector('.benefits-wrap')\n    const slides = document.querySelector('.benefits__item')\n    document.querySelector('.benefits__arrow--right').addEventListener('click', () => {\n        if (window.innerWidth > 576 && slides.offsetWidth < slides.offsetWidth * 3) {\n            benefitsOffset = benefitsOffset + slides.offsetWidth;\n            if (benefitsOffset > slides.offsetWidth * 3) {\n                benefitsOffset = 0;\n            }\n        } else if (window.innerWidth < 576 && slides.offsetWidth < slides.offsetWidth * 5) {\n            benefitsOffset = benefitsOffset + slides.offsetWidth;\n            if (benefitsOffset > slides.offsetWidth * 5) {\n                benefitsOffset = 0;\n            }\n        }\n        sliderBlock.style.left = -benefitsOffset + 'px'\n    })\n    document.querySelector('.benefits__arrow--left').addEventListener('click', () => {\n        if (window.innerWidth > 576 && slides.offsetWidth < slides.offsetWidth * 3) {\n            benefitsOffset = benefitsOffset - slides.offsetWidth;\n            if (benefitsOffset <= -185) {\n                benefitsOffset = slides.offsetWidth * 3;\n            }\n        } else if (window.innerWidth < 576 && slides.offsetWidth < slides.offsetWidth * 5) {\n            benefitsOffset = benefitsOffset - slides.offsetWidth;\n            if (benefitsOffset <= -185) {\n                benefitsOffset = slides.offsetWidth * 5;\n            }\n        }\n        sliderBlock.style.left = -benefitsOffset + 'px'\n    })\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://okna/./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n\n    const timerDay = document.querySelectorAll('.count_1')\n    const timerHour = document.querySelectorAll('.count_2')\n    const timerMinute = document.querySelectorAll('.count_3')\n    const timerSecond = document.querySelectorAll('.count_4')\n\n    const getTimeRemaining = () => {\n\n        let dateStop = new Date(deadline).getTime()\n        let dateNow = new Date().getTime()\n        let timeRemaining = (dateStop - dateNow) / 1000\n        let days = Math.floor((timeRemaining / 60 / 60 / 24))\n        let hours = Math.floor((timeRemaining / 60 / 60) % 24)\n        let minutes = Math.floor((timeRemaining / 60) % 60)\n        let seconds = Math.floor(timeRemaining % 60)\n\n        return {\n            timeRemaining,\n            days,\n            hours,\n            minutes,\n            seconds\n\n        }\n    }\n\n\n    const updateClock = () => {\n        let getTime = getTimeRemaining()\n\n        timerDay.forEach(element => {\n            let timerDays = element.querySelector(\"span\")\n            timerDays.textContent = (\"0\" + getTime.days).slice(-2)\n\n        })\n        timerHour.forEach(element => {\n            let timerHours = element.querySelector(\"span\")\n            timerHours.textContent = (\"0\" + getTime.hours).slice(-2)\n\n        })\n        timerMinute.forEach(element => {\n            let timerMinutes = element.querySelector(\"span\")\n            timerMinutes.textContent = (\"0\" + getTime.minutes).slice(-2)\n\n        })\n        timerSecond.forEach(element => {\n            let timerSeconds = element.querySelector(\"span\")\n            timerSeconds.textContent = (\"0\" + getTime.seconds).slice(-2)\n\n        })\n        if (getTime.timeRemaining > 0) {\n\n            setTimeout(updateClock, 1000)\n\n        } else {\n            timerDays.textContent = '00'\n            timerHours.textContent = '00'\n            timerMinutes.textContent = '00'\n            timerSeconds.textContent = '00'\n\n        }\n    }\n    updateClock()\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://okna/./src/modules/timer.js?");

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