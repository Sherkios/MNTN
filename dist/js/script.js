/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/classes/activeClass.js":
/*!***************************************!*\
  !*** ./src/js/classes/activeClass.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ActiveClass)\n/* harmony export */ });\nclass ActiveClass {\r\n  _active = false\r\n  constructor ({element, active = true, className = 'active'}) {\r\n    this._className = className;\r\n    if (element.nodeType == 1) {\r\n      this._element = element;      \r\n    } else {\r\n      this._element = document.querySelector(element);\r\n    }\r\n    this._setActive(active);\r\n    this._setClass();\r\n  }\r\n\r\n  _setActive(value) {\r\n    this._active = value\r\n  }\r\n\r\n  _setClass() {\r\n    if (this._active) {\r\n      this._element.classList.add(this._className)\r\n    } else {\r\n      this._element.classList.remove(this._className)\r\n    }\r\n  }\r\n\r\n  get active() {\r\n    return this._active;\r\n  }\r\n  get element() {\r\n    return this._element;\r\n  }\r\n\r\n  set active (value) {\r\n    if (typeof value != \"boolean\") {\r\n      this._active = false;\r\n      return\r\n    }\r\n    this._active = value;\r\n    this._setClass();\r\n  }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9hY3RpdmVDbGFzcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLGdCQUFnQiw2Q0FBNkM7QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLTIwMjMtMDgtMjEvLi9zcmMvanMvY2xhc3Nlcy9hY3RpdmVDbGFzcy5qcz9iODE4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2ZUNsYXNzIHtcclxuICBfYWN0aXZlID0gZmFsc2VcclxuICBjb25zdHJ1Y3RvciAoe2VsZW1lbnQsIGFjdGl2ZSA9IHRydWUsIGNsYXNzTmFtZSA9ICdhY3RpdmUnfSkge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKGVsZW1lbnQubm9kZVR5cGUgPT0gMSkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDsgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fc2V0QWN0aXZlKGFjdGl2ZSk7XHJcbiAgICB0aGlzLl9zZXRDbGFzcygpO1xyXG4gIH1cclxuXHJcbiAgX3NldEFjdGl2ZSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWVcclxuICB9XHJcblxyXG4gIF9zZXRDbGFzcygpIHtcclxuICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcclxuICAgICAgdGhpcy5fZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzTmFtZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9jbGFzc05hbWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICB9XHJcbiAgZ2V0IGVsZW1lbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudDtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmUgKHZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIHRoaXMuX2FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fc2V0Q2xhc3MoKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/classes/activeClass.js\n");

/***/ }),

/***/ "./src/js/modules/rightNavigate.js":
/*!*****************************************!*\
  !*** ./src/js/modules/rightNavigate.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_activeClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/activeClass.js */ \"./src/js/classes/activeClass.js\");\n\r\n\r\n\r\nconst buttons = document.querySelectorAll(\".header-progress__stage\");\r\nlet buttonsActive = [];\r\nbuttons.forEach((button, index) => {\r\n  buttonsActive.push(new _classes_activeClass_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\r\n    element: button,\r\n    active: index == 0,\r\n  }))\r\n})\r\n\r\nconst items = document.querySelectorAll(\".item\");\r\nconst mainBlock = document.querySelector(\".main\");\r\n\r\n// блоки слайдов\r\nconst options = {\r\n  threshold: 0.5,\r\n}\r\n\r\nconst callback = (entries, observer) => {\r\n  entries.forEach(({isIntersecting, target}) => {\r\n  if (isIntersecting) {\r\n    clearStages();\r\n    \r\n    switch (target.id) {\r\n      case \"item1\":\r\n        buttonsActive[1].active = true\r\n        break;\r\n\r\n      case \"item2\":\r\n        buttonsActive[2].active = true\r\n        break;\r\n      case \"item3\":\r\n        buttonsActive[3].active = true\r\n        break;\r\n    \r\n      default:\r\n        buttonsActive[0].active = true\r\n        break;\r\n    }\r\n    }\r\n  });\r\n}\r\n\r\nconst ItemObserver = new IntersectionObserver(callback, options);\r\n\r\nitems.forEach(item => ItemObserver.observe(item));\r\n\r\n// Главный блок\r\n\r\nconst mainObserver = new IntersectionObserver(callback, options);\r\n\r\nmainObserver.observe(mainBlock);\r\n\r\n\r\n\r\n\r\nfunction clearStages() {\r\n  buttonsActive.forEach(button => button.active = false);\r\n}\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbW9kdWxlcy9yaWdodE5hdmlnYXRlLmpzIiwibWFwcGluZ3MiOiI7O0FBQW9EO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsK0RBQVc7QUFDcEM7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWxwLTIwMjMtMDgtMjEvLi9zcmMvanMvbW9kdWxlcy9yaWdodE5hdmlnYXRlLmpzP2E0OGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFjdGl2ZUNsYXNzIGZyb20gXCIuLi9jbGFzc2VzL2FjdGl2ZUNsYXNzLmpzXCI7XHJcblxyXG5cclxuY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyLXByb2dyZXNzX19zdGFnZVwiKTtcclxubGV0IGJ1dHRvbnNBY3RpdmUgPSBbXTtcclxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGluZGV4KSA9PiB7XHJcbiAgYnV0dG9uc0FjdGl2ZS5wdXNoKG5ldyBBY3RpdmVDbGFzcyh7XHJcbiAgICBlbGVtZW50OiBidXR0b24sXHJcbiAgICBhY3RpdmU6IGluZGV4ID09IDAsXHJcbiAgfSkpXHJcbn0pXHJcblxyXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaXRlbVwiKTtcclxuY29uc3QgbWFpbkJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xyXG5cclxuLy8g0LHQu9C+0LrQuCDRgdC70LDQudC00L7QslxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHRocmVzaG9sZDogMC41LFxyXG59XHJcblxyXG5jb25zdCBjYWxsYmFjayA9IChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xyXG4gIGVudHJpZXMuZm9yRWFjaCgoe2lzSW50ZXJzZWN0aW5nLCB0YXJnZXR9KSA9PiB7XHJcbiAgaWYgKGlzSW50ZXJzZWN0aW5nKSB7XHJcbiAgICBjbGVhclN0YWdlcygpO1xyXG4gICAgXHJcbiAgICBzd2l0Y2ggKHRhcmdldC5pZCkge1xyXG4gICAgICBjYXNlIFwiaXRlbTFcIjpcclxuICAgICAgICBidXR0b25zQWN0aXZlWzFdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJpdGVtMlwiOlxyXG4gICAgICAgIGJ1dHRvbnNBY3RpdmVbMl0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiaXRlbTNcIjpcclxuICAgICAgICBidXR0b25zQWN0aXZlWzNdLmFjdGl2ZSA9IHRydWVcclxuICAgICAgICBicmVhaztcclxuICAgIFxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJ1dHRvbnNBY3RpdmVbMF0uYWN0aXZlID0gdHJ1ZVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBJdGVtT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG5cclxuaXRlbXMuZm9yRWFjaChpdGVtID0+IEl0ZW1PYnNlcnZlci5vYnNlcnZlKGl0ZW0pKTtcclxuXHJcbi8vINCT0LvQsNCy0L3Ri9C5INCx0LvQvtC6XHJcblxyXG5jb25zdCBtYWluT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2FsbGJhY2ssIG9wdGlvbnMpO1xyXG5cclxubWFpbk9ic2VydmVyLm9ic2VydmUobWFpbkJsb2NrKTtcclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNsZWFyU3RhZ2VzKCkge1xyXG4gIGJ1dHRvbnNBY3RpdmUuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmFjdGl2ZSA9IGZhbHNlKTtcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/modules/rightNavigate.js\n");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_rightNavigate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/rightNavigate.js */ \"./src/js/modules/rightNavigate.js\");\n\r\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2NyaXB0LmpzIiwibWFwcGluZ3MiOiI7O0FBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL2d1bHAtMjAyMy0wOC0yMS8uL3NyYy9qcy9zY3JpcHQuanM/Y2E2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIlxyXG5pbXBvcnQgXCIuL21vZHVsZXMvcmlnaHROYXZpZ2F0ZS5qc1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/script.js\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;