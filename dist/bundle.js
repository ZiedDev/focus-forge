/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `main {
    width: 100%;
    height: calc(100% - 5rem);
    display: flex;
}

.boards-section {
    flex: 1;
    background-color: var(--background-100);
}

.boards-section>.title {
    padding: 0.5rem 0.5rem;
    height: calc(3rem - 3pt);
    font-size: x-large;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-right: 3pt solid var(--accent-400);
    border-bottom: 3pt solid var(--accent-400);
    border-radius: 0 0 1rem 0;
}

.add-board-button {
    user-select: none;
    cursor: pointer;
}

.add-board-button>path {
    color: var(--accent-400);
}

.board-cards-container {
    padding: 1rem 0;
    height: calc(100% - 6rem);

    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;

    overflow-y: auto;
}

.board-cards-container::-webkit-scrollbar {
    width: 0.5rem;
}

.board-cards-container::-webkit-scrollbar-thumb {
    background-color: var(--primary-500);
    border-radius: 1rem;
}

.board-card {
    user-select: none;
    padding: 0.5rem 0.5rem;
    width: calc(100% - 2rem);

    display: flex;
    justify-content: start;
    align-items: center;

    cursor: pointer;
    background-color: var(--primary-400);
    border-radius: 1rem;
}

.board-card:hover {
    background-color: rgb(from var(--primary-500) r g b / 50%);
}

.lists-section {
    flex: 3;
    background-color: var(--background-50);
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,uCAAuC;AAC3C;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,yCAAyC;IACzC,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;;IAEX,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,0DAA0D;AAC9D;;AAEA;IACI,OAAO;IACP,sCAAsC;AAC1C","sourcesContent":["main {\r\n    width: 100%;\r\n    height: calc(100% - 5rem);\r\n    display: flex;\r\n}\r\n\r\n.boards-section {\r\n    flex: 1;\r\n    background-color: var(--background-100);\r\n}\r\n\r\n.boards-section>.title {\r\n    padding: 0.5rem 0.5rem;\r\n    height: calc(3rem - 3pt);\r\n    font-size: x-large;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    border-right: 3pt solid var(--accent-400);\r\n    border-bottom: 3pt solid var(--accent-400);\r\n    border-radius: 0 0 1rem 0;\r\n}\r\n\r\n.add-board-button {\r\n    user-select: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-board-button>path {\r\n    color: var(--accent-400);\r\n}\r\n\r\n.board-cards-container {\r\n    padding: 1rem 0;\r\n    height: calc(100% - 6rem);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n.board-cards-container::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.board-cards-container::-webkit-scrollbar-thumb {\r\n    background-color: var(--primary-500);\r\n    border-radius: 1rem;\r\n}\r\n\r\n.board-card {\r\n    user-select: none;\r\n    padding: 0.5rem 0.5rem;\r\n    width: calc(100% - 2rem);\r\n\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n    background-color: var(--primary-400);\r\n    border-radius: 1rem;\r\n}\r\n\r\n.board-card:hover {\r\n    background-color: rgb(from var(--primary-500) r g b / 50%);\r\n}\r\n\r\n.lists-section {\r\n    flex: 3;\r\n    background-color: var(--background-50);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modals.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modals.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.modal-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    position: relative;
    z-index: 100;
    padding: 2rem;
    background-color: var(--background-50);
    border-radius: 1rem;
}

.backdrop {
    position: absolute;
    z-index: 95;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
}`, "",{"version":3,"sources":["webpack://./src/css/modals.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,oCAAoC;AACxC","sourcesContent":[".modal-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    position: relative;\r\n    z-index: 100;\r\n    padding: 2rem;\r\n    background-color: var(--background-50);\r\n    border-radius: 1rem;\r\n}\r\n\r\n.backdrop {\r\n    position: absolute;\r\n    z-index: 95;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: calc(5rem - 3pt);
    border-bottom: 3pt solid var(--accent-400);

    background-color: var(--primary-400);
}

nav>.title {
    padding-left: 3rem;
    display: flex;
    align-items: baseline;
    gap: 1rem;
}


nav>.title>h1 {
    font-size: xx-large;
}

.theme-button-container {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 5rem;
    height: 5rem;
}

.theme-switch {
    position: absolute;

    width: 100%;
    height: 100%;

    appearance: none;
    cursor: pointer;
}

.theme-switch:hover {
    background-color: rgb(from var(--primary-400) r g b / 30%);
}`, "",{"version":3,"sources":["webpack://./src/css/navBar.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,wBAAwB;IACxB,0CAA0C;;IAE1C,oCAAoC;AACxC;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,qBAAqB;IACrB,SAAS;AACb;;;AAGA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;;IAElB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;;IAElB,WAAW;IACX,YAAY;;IAEZ,gBAAgB;IAChB,eAAe;AACnB;;AAEA;IACI,0DAA0D;AAC9D","sourcesContent":["nav {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n\r\n    height: calc(5rem - 3pt);\r\n    border-bottom: 3pt solid var(--accent-400);\r\n\r\n    background-color: var(--primary-400);\r\n}\r\n\r\nnav>.title {\r\n    padding-left: 3rem;\r\n    display: flex;\r\n    align-items: baseline;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\nnav>.title>h1 {\r\n    font-size: xx-large;\r\n}\r\n\r\n.theme-button-container {\r\n    position: relative;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    width: 5rem;\r\n    height: 5rem;\r\n}\r\n\r\n.theme-switch {\r\n    position: absolute;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n\r\n    appearance: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.theme-switch:hover {\r\n    background-color: rgb(from var(--primary-400) r g b / 30%);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/rubik/Rubik-VariableFont_wght.ttf */ "./src/media/fonts/rubik/Rubik-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../media/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf */ "./src/media/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root[data-theme="light"] {
    --text-50: rgb(237, 237, 248);
    --text-100: rgb(220, 218, 241);
    --text-200: rgb(185, 182, 226);
    --text-300: rgb(149, 145, 212);
    --text-400: rgb(114, 108, 198);
    --text-500: rgb(79, 71, 184);
    --text-600: rgb(63, 57, 147);
    --text-700: rgb(47, 43, 110);
    --text-800: rgb(32, 29, 73);
    --text-900: rgb(16, 14, 37);
    --text-950: rgb(8, 7, 18);

    --background-50: rgb(236, 236, 249);
    --background-100: rgb(218, 216, 243);
    --background-200: rgb(181, 178, 230);
    --background-300: rgb(143, 139, 218);
    --background-400: rgb(106, 101, 205);
    --background-500: rgb(69, 62, 193);
    --background-600: rgb(55, 50, 154);
    --background-700: rgb(41, 37, 116);
    --background-800: rgb(28, 25, 77);
    --background-900: rgb(14, 12, 39);
    --background-950: rgb(7, 6, 19);

    --primary-50: rgb(237, 236, 248);
    --primary-100: rgb(219, 218, 241);
    --primary-200: rgb(183, 180, 228);
    --primary-300: rgb(147, 143, 214);
    --primary-400: rgb(111, 105, 201);
    --primary-500: rgb(76, 68, 187);
    --primary-600: rgb(60, 54, 150);
    --primary-700: rgb(45, 41, 112);
    --primary-800: rgb(30, 27, 75);
    --primary-900: rgb(15, 14, 37);
    --primary-950: rgb(8, 7, 19);

    --secondary-50: rgb(235, 234, 251);
    --secondary-100: rgb(214, 212, 247);
    --secondary-200: rgb(174, 169, 239);
    --secondary-300: rgb(133, 126, 231);
    --secondary-400: rgb(93, 84, 222);
    --secondary-500: rgb(52, 41, 214);
    --secondary-600: rgb(42, 33, 171);
    --secondary-700: rgb(31, 24, 129);
    --secondary-800: rgb(21, 16, 86);
    --secondary-900: rgb(10, 8, 43);
    --secondary-950: rgb(5, 4, 21);

    --accent-50: rgb(232, 231, 254);
    --accent-100: rgb(210, 207, 252);
    --accent-200: rgb(164, 158, 250);
    --accent-300: rgb(119, 110, 247);
    --accent-400: rgb(73, 61, 245);
    --accent-500: rgb(28, 13, 242);
    --accent-600: rgb(22, 10, 194);
    --accent-700: rgb(17, 8, 145);
    --accent-800: rgb(11, 5, 97);
    --accent-900: rgb(6, 3, 48);
    --accent-950: rgb(3, 1, 24);

}

:root[data-theme="dark"] {
    --text-50: rgb(8, 7, 18);
    --text-100: rgb(16, 14, 37);
    --text-200: rgb(32, 29, 73);
    --text-300: rgb(47, 43, 110);
    --text-400: rgb(63, 57, 147);
    --text-500: rgb(79, 71, 184);
    --text-600: rgb(114, 108, 198);
    --text-700: rgb(149, 145, 212);
    --text-800: rgb(185, 182, 226);
    --text-900: rgb(220, 218, 241);
    --text-950: rgb(237, 237, 248);

    --background-50: rgb(7, 6, 19);
    --background-100: rgb(14, 12, 39);
    --background-200: rgb(28, 25, 77);
    --background-300: rgb(41, 37, 116);
    --background-400: rgb(55, 50, 154);
    --background-500: rgb(69, 62, 193);
    --background-600: rgb(106, 101, 205);
    --background-700: rgb(143, 139, 218);
    --background-800: rgb(181, 178, 230);
    --background-900: rgb(218, 216, 243);
    --background-950: rgb(236, 236, 249);

    --primary-50: rgb(8, 7, 19);
    --primary-100: rgb(15, 14, 37);
    --primary-200: rgb(30, 27, 75);
    --primary-300: rgb(45, 41, 112);
    --primary-400: rgb(60, 54, 150);
    --primary-500: rgb(76, 68, 187);
    --primary-600: rgb(111, 105, 201);
    --primary-700: rgb(147, 143, 214);
    --primary-800: rgb(183, 180, 228);
    --primary-900: rgb(219, 218, 241);
    --primary-950: rgb(237, 236, 248);

    --secondary-50: rgb(5, 4, 21);
    --secondary-100: rgb(10, 8, 43);
    --secondary-200: rgb(21, 16, 86);
    --secondary-300: rgb(31, 24, 129);
    --secondary-400: rgb(42, 33, 171);
    --secondary-500: rgb(52, 41, 214);
    --secondary-600: rgb(93, 84, 222);
    --secondary-700: rgb(133, 126, 231);
    --secondary-800: rgb(174, 169, 239);
    --secondary-900: rgb(214, 212, 247);
    --secondary-950: rgb(235, 234, 251);

    --accent-50: rgb(3, 1, 24);
    --accent-100: rgb(6, 3, 48);
    --accent-200: rgb(11, 5, 97);
    --accent-300: rgb(17, 8, 145);
    --accent-400: rgb(22, 10, 194);
    --accent-500: rgb(28, 13, 242);
    --accent-600: rgb(73, 61, 245);
    --accent-700: rgb(119, 110, 247);
    --accent-800: rgb(164, 158, 250);
    --accent-900: rgb(210, 207, 252);
    --accent-950: rgb(232, 231, 254);

}

@font-face {
    font-family: 'Rubik';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
    font-family: 'Rubik Italic';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

body {
    height: 100dvh;
    background-color: var(--background-100);
}

body,
body * {
    font-family: 'Rubik', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--text-900);

    margin: 0;
    padding: 0;
}

.hide {
    display: none !important;
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;IACI,6BAA6B;IAC7B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,2BAA2B;IAC3B,2BAA2B;IAC3B,yBAAyB;;IAEzB,mCAAmC;IACnC,oCAAoC;IACpC,oCAAoC;IACpC,oCAAoC;IACpC,oCAAoC;IACpC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;IAClC,iCAAiC;IACjC,iCAAiC;IACjC,+BAA+B;;IAE/B,gCAAgC;IAChC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,+BAA+B;IAC/B,+BAA+B;IAC/B,+BAA+B;IAC/B,8BAA8B;IAC9B,8BAA8B;IAC9B,4BAA4B;;IAE5B,kCAAkC;IAClC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,gCAAgC;IAChC,+BAA+B;IAC/B,8BAA8B;;IAE9B,+BAA+B;IAC/B,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,6BAA6B;IAC7B,4BAA4B;IAC5B,2BAA2B;IAC3B,2BAA2B;;AAE/B;;AAEA;IACI,wBAAwB;IACxB,2BAA2B;IAC3B,2BAA2B;IAC3B,4BAA4B;IAC5B,4BAA4B;IAC5B,4BAA4B;IAC5B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;;IAE9B,8BAA8B;IAC9B,iCAAiC;IACjC,iCAAiC;IACjC,kCAAkC;IAClC,kCAAkC;IAClC,kCAAkC;IAClC,oCAAoC;IACpC,oCAAoC;IACpC,oCAAoC;IACpC,oCAAoC;IACpC,oCAAoC;;IAEpC,2BAA2B;IAC3B,8BAA8B;IAC9B,8BAA8B;IAC9B,+BAA+B;IAC/B,+BAA+B;IAC/B,+BAA+B;IAC/B,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;;IAEjC,6BAA6B;IAC7B,+BAA+B;IAC/B,gCAAgC;IAChC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,iCAAiC;IACjC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;IACnC,mCAAmC;;IAEnC,0BAA0B;IAC1B,2BAA2B;IAC3B,4BAA4B;IAC5B,6BAA6B;IAC7B,8BAA8B;IAC9B,8BAA8B;IAC9B,8BAA8B;IAC9B,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;IAChC,gCAAgC;;AAEpC;;AAEA;IACI,oBAAoB;IACpB,4CAA0D;AAC9D;;AAEA;IACI,2BAA2B;IAC3B,4CAAiE;AACrE;;AAEA;IACI,cAAc;IACd,uCAAuC;AAC3C;;AAEA;;IAEI,4JAA4J;IAC5J,sBAAsB;;IAEtB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,wBAAwB;AAC5B","sourcesContent":[":root[data-theme=\"light\"] {\r\n    --text-50: rgb(237, 237, 248);\r\n    --text-100: rgb(220, 218, 241);\r\n    --text-200: rgb(185, 182, 226);\r\n    --text-300: rgb(149, 145, 212);\r\n    --text-400: rgb(114, 108, 198);\r\n    --text-500: rgb(79, 71, 184);\r\n    --text-600: rgb(63, 57, 147);\r\n    --text-700: rgb(47, 43, 110);\r\n    --text-800: rgb(32, 29, 73);\r\n    --text-900: rgb(16, 14, 37);\r\n    --text-950: rgb(8, 7, 18);\r\n\r\n    --background-50: rgb(236, 236, 249);\r\n    --background-100: rgb(218, 216, 243);\r\n    --background-200: rgb(181, 178, 230);\r\n    --background-300: rgb(143, 139, 218);\r\n    --background-400: rgb(106, 101, 205);\r\n    --background-500: rgb(69, 62, 193);\r\n    --background-600: rgb(55, 50, 154);\r\n    --background-700: rgb(41, 37, 116);\r\n    --background-800: rgb(28, 25, 77);\r\n    --background-900: rgb(14, 12, 39);\r\n    --background-950: rgb(7, 6, 19);\r\n\r\n    --primary-50: rgb(237, 236, 248);\r\n    --primary-100: rgb(219, 218, 241);\r\n    --primary-200: rgb(183, 180, 228);\r\n    --primary-300: rgb(147, 143, 214);\r\n    --primary-400: rgb(111, 105, 201);\r\n    --primary-500: rgb(76, 68, 187);\r\n    --primary-600: rgb(60, 54, 150);\r\n    --primary-700: rgb(45, 41, 112);\r\n    --primary-800: rgb(30, 27, 75);\r\n    --primary-900: rgb(15, 14, 37);\r\n    --primary-950: rgb(8, 7, 19);\r\n\r\n    --secondary-50: rgb(235, 234, 251);\r\n    --secondary-100: rgb(214, 212, 247);\r\n    --secondary-200: rgb(174, 169, 239);\r\n    --secondary-300: rgb(133, 126, 231);\r\n    --secondary-400: rgb(93, 84, 222);\r\n    --secondary-500: rgb(52, 41, 214);\r\n    --secondary-600: rgb(42, 33, 171);\r\n    --secondary-700: rgb(31, 24, 129);\r\n    --secondary-800: rgb(21, 16, 86);\r\n    --secondary-900: rgb(10, 8, 43);\r\n    --secondary-950: rgb(5, 4, 21);\r\n\r\n    --accent-50: rgb(232, 231, 254);\r\n    --accent-100: rgb(210, 207, 252);\r\n    --accent-200: rgb(164, 158, 250);\r\n    --accent-300: rgb(119, 110, 247);\r\n    --accent-400: rgb(73, 61, 245);\r\n    --accent-500: rgb(28, 13, 242);\r\n    --accent-600: rgb(22, 10, 194);\r\n    --accent-700: rgb(17, 8, 145);\r\n    --accent-800: rgb(11, 5, 97);\r\n    --accent-900: rgb(6, 3, 48);\r\n    --accent-950: rgb(3, 1, 24);\r\n\r\n}\r\n\r\n:root[data-theme=\"dark\"] {\r\n    --text-50: rgb(8, 7, 18);\r\n    --text-100: rgb(16, 14, 37);\r\n    --text-200: rgb(32, 29, 73);\r\n    --text-300: rgb(47, 43, 110);\r\n    --text-400: rgb(63, 57, 147);\r\n    --text-500: rgb(79, 71, 184);\r\n    --text-600: rgb(114, 108, 198);\r\n    --text-700: rgb(149, 145, 212);\r\n    --text-800: rgb(185, 182, 226);\r\n    --text-900: rgb(220, 218, 241);\r\n    --text-950: rgb(237, 237, 248);\r\n\r\n    --background-50: rgb(7, 6, 19);\r\n    --background-100: rgb(14, 12, 39);\r\n    --background-200: rgb(28, 25, 77);\r\n    --background-300: rgb(41, 37, 116);\r\n    --background-400: rgb(55, 50, 154);\r\n    --background-500: rgb(69, 62, 193);\r\n    --background-600: rgb(106, 101, 205);\r\n    --background-700: rgb(143, 139, 218);\r\n    --background-800: rgb(181, 178, 230);\r\n    --background-900: rgb(218, 216, 243);\r\n    --background-950: rgb(236, 236, 249);\r\n\r\n    --primary-50: rgb(8, 7, 19);\r\n    --primary-100: rgb(15, 14, 37);\r\n    --primary-200: rgb(30, 27, 75);\r\n    --primary-300: rgb(45, 41, 112);\r\n    --primary-400: rgb(60, 54, 150);\r\n    --primary-500: rgb(76, 68, 187);\r\n    --primary-600: rgb(111, 105, 201);\r\n    --primary-700: rgb(147, 143, 214);\r\n    --primary-800: rgb(183, 180, 228);\r\n    --primary-900: rgb(219, 218, 241);\r\n    --primary-950: rgb(237, 236, 248);\r\n\r\n    --secondary-50: rgb(5, 4, 21);\r\n    --secondary-100: rgb(10, 8, 43);\r\n    --secondary-200: rgb(21, 16, 86);\r\n    --secondary-300: rgb(31, 24, 129);\r\n    --secondary-400: rgb(42, 33, 171);\r\n    --secondary-500: rgb(52, 41, 214);\r\n    --secondary-600: rgb(93, 84, 222);\r\n    --secondary-700: rgb(133, 126, 231);\r\n    --secondary-800: rgb(174, 169, 239);\r\n    --secondary-900: rgb(214, 212, 247);\r\n    --secondary-950: rgb(235, 234, 251);\r\n\r\n    --accent-50: rgb(3, 1, 24);\r\n    --accent-100: rgb(6, 3, 48);\r\n    --accent-200: rgb(11, 5, 97);\r\n    --accent-300: rgb(17, 8, 145);\r\n    --accent-400: rgb(22, 10, 194);\r\n    --accent-500: rgb(28, 13, 242);\r\n    --accent-600: rgb(73, 61, 245);\r\n    --accent-700: rgb(119, 110, 247);\r\n    --accent-800: rgb(164, 158, 250);\r\n    --accent-900: rgb(210, 207, 252);\r\n    --accent-950: rgb(232, 231, 254);\r\n\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Rubik';\r\n    src: url(../media/fonts/rubik/Rubik-VariableFont_wght.ttf);\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Rubik Italic';\r\n    src: url(../media/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf);\r\n}\r\n\r\nbody {\r\n    height: 100dvh;\r\n    background-color: var(--background-100);\r\n}\r\n\r\nbody,\r\nbody * {\r\n    font-family: 'Rubik', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\r\n    color: var(--text-900);\r\n\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.hide {\r\n    display: none !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/modals.css":
/*!****************************!*\
  !*** ./src/css/modals.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./modals.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modals.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modals_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/navBar.css":
/*!****************************!*\
  !*** ./src/css/navBar.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./navBar.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/navBar.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_navBar_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/addNewBoard.js":
/*!*******************************!*\
  !*** ./src/js/addNewBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard),
/* harmony export */   readFromBoards: () => (/* binding */ readFromBoards),
/* harmony export */   readFromTasks: () => (/* binding */ readFromTasks),
/* harmony export */   updateBoards: () => (/* binding */ updateBoards),
/* harmony export */   updateLists: () => (/* binding */ updateLists)
/* harmony export */ });
function createBoard(boardName, boardId) {
    let board = document.createElement('div')
    board.classList.add('board-card')
    board.id = boardId

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    return board;
}

function readFromBoards(id) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    boards.sort((a, b) => a.id - b.id)

    return binarySearch(boards, id)[1]
}

function updateBoards(id, key, newValue) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    boards.sort((a, b) => a.id - b.id)

    const index = binarySearch(boards, id)[0]

    boards[index][key] = newValue

    localStorage.boards = JSON.stringify(boards)
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    tasks.sort((a, b) => a.boardId - b.boardId)

    tasks.sort((a, b) => a.id - b.id)

    return binarySearch(tasks, id, boardId)[1]
}

function updateLists(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    tasks.sort((a, b) => a.boardId - b.boardId)

    tasks.sort((a, b) => a.id - b.id)

    const index = binarySearch(tasks, id, boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}

function binarySearch(arr,id,boardId=null){/*one liner goes brrrrr*/let start=0;let end=arr.length-1;while(start<end){let mid=parseInt(Math.floor((start+end)/2));if(boardId==null){if(arr[mid].id<id){start=mid+1}else{end=mid}}else{if(arr[mid].boardId<boardId){start=mid+1}else if(arr[mid].boardId>boardId){end=mid}else{if(arr[mid].id<id){start=mid+1}else{end=mid}}}}return [end, arr[end]]}



/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModal: () => (/* binding */ createModal)
/* harmony export */ });
function createModal(title, inputs, submitButtonBehavior) {
    // declaring all the elements
    const modalContainer = document.createElement('div')
    const modal = document.createElement('div')
    const backdrop = document.createElement('div')
    const modalTitle = document.createElement('h1')
    const submitButton = document.createElement('button')
    modalTitle.textContent = title
    submitButton.textContent = 'submit'

    modalContainer.appendChild(modal)
    modalContainer.appendChild(backdrop)
    modal.appendChild(modalTitle)
    
    for (let i = 0; i < inputs.length; i++) {
        const inputTitle = document.createElement('h2')
        inputTitle.textContent = inputs[i].title

        const input = document.createElement('input')
        input.type = inputs[i].type
        input.id = inputs[i].id

        modal.appendChild(inputTitle)
        modal.appendChild(input)
    }

    modal.appendChild(submitButton)

    // adding the classes    
    modalContainer.classList.add('modal-container')
    modal.classList.add('modal')
    backdrop.classList.add('backdrop')

    backdrop.addEventListener('click' , () => {
        modalContainer.parentNode.removeChild(modalContainer)
    })

    submitButton.addEventListener('click' , () => {
        submitButtonBehavior()
        modalContainer.parentNode.removeChild(modalContainer)
    })

    return modalContainer
}



/***/ }),

/***/ "./src/js/theme.js":
/*!*************************!*\
  !*** ./src/js/theme.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setTheme: () => (/* binding */ setTheme),
/* harmony export */   switchTheme: () => (/* binding */ switchTheme)
/* harmony export */ });
function setTheme(themeButton, sun, moon) {
    const currentTheme = localStorage.getItem("theme") ? localStorage.getItem("theme") : "light";

    if (currentTheme) {
        document.documentElement.setAttribute("data-theme", currentTheme);

        if (currentTheme === "dark") {
            themeButton.checked = true;
            moon.classList.remove("hide");
        } else {
            sun.classList.remove("hide");
        }
    }
}

function switchTheme(themeButton, sun, moon) {
    if (themeButton.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        sun.classList.add("hide");
        moon.classList.remove("hide");
    }
    else {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        sun.classList.remove("hide");
        moon.classList.add("hide");
    }
}



/***/ }),

/***/ "./src/media/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf":
/*!******************************************************************!*\
  !*** ./src/media/fonts/rubik/Rubik-Italic-VariableFont_wght.ttf ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d83d9d961a7aaca406c2.ttf";

/***/ }),

/***/ "./src/media/fonts/rubik/Rubik-VariableFont_wght.ttf":
/*!***********************************************************!*\
  !*** ./src/media/fonts/rubik/Rubik-VariableFont_wght.ttf ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3a4acc0356c6ea73f2c3.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme.js */ "./src/js/theme.js");
/* harmony import */ var _addNewBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addNewBoard.js */ "./src/js/addNewBoard.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/navBar.css */ "./src/css/navBar.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_modals_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/modals.css */ "./src/css/modals.css");









// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.setTheme)(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { ;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.switchTheme)(e.target, sun, moon) })

// rest of the logic
console.log('It is working :)')

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')

addBoardButton.addEventListener('click', () => {
    document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.createModal)('Create Board', [{title: 'Board Name', type: 'text', id: 'board-name'}], () => {
        boardCardsContainer.appendChild((0,_addNewBoard_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(document.getElementById('board-name').value))
    }))
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0Q7QUFDc0Q7QUFDaEU7QUFDeEM7QUFDeUI7QUFDQztBQUNGO0FBQ0U7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0RBQVE7QUFDUixnREFBZ0QsdURBQVcsdUJBQXVCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0RBQVcsbUJBQW1CLG9EQUFvRDtBQUNoSCx3Q0FBd0MsNERBQVc7QUFDbkQsS0FBSztBQUNMLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbW9kYWxzLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbmF2QmFyLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbW9kYWxzLmNzcz9iOTkxIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9uYXZCYXIuY3NzP2M2NTciLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvYWRkTmV3Qm9hcmQuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9hcmRzLXNlY3Rpb24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcclxufVxyXG5cclxuLmJvYXJkcy1zZWN0aW9uPi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gLSAzcHQpO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJvcmRlci1yaWdodDogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDFyZW0gMDtcclxufVxyXG5cclxuLmFkZC1ib2FyZC1idXR0b24ge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtYm9hcmQtYnV0dG9uPnBhdGgge1xyXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC00MDApO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZHMtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAwLjVyZW07XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS01MDApIHIgZyBiIC8gNTAlKTtcclxufVxyXG5cclxuLmxpc3RzLXNlY3Rpb24ge1xyXG4gICAgZmxleDogMztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtNTApO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIseUNBQXlDO0lBQ3pDLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLE9BQU87SUFDUCxzQ0FBc0M7QUFDMUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtc2VjdGlvbj4udGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAtIDNwdCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJvYXJkLWJ1dHRvbiB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9hcmQtYnV0dG9uPnBhdGgge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXByaW1hcnktNTAwKSByIGcgYiAvIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi5saXN0cy1zZWN0aW9uIHtcXHJcXG4gICAgZmxleDogMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC01MCk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5NTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87O0lBRVAsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asb0NBQW9DO0FBQ3hDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5NTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogY2FsYyg1cmVtIC0gM3B0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XHJcbn1cclxuXHJcbm5hdj4udGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcbm5hdj4udGl0bGU+aDEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50aGVtZS1zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aGVtZS1zd2l0Y2g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS00MDApIHIgZyBiIC8gMzAlKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QiwwQ0FBMEM7O0lBRTFDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwREFBMEQ7QUFDOURcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGNhbGMoNXJlbSAtIDNwdCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcclxcbn1cXHJcXG5cXHJcXG5uYXY+LnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2Pi50aXRsZT5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtc3dpdGNoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS00MDApIHIgZyBiIC8gMzAlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3RbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcclxuICAgIC0tdGV4dC01MDogcmdiKDIzNywgMjM3LCAyNDgpO1xyXG4gICAgLS10ZXh0LTEwMDogcmdiKDIyMCwgMjE4LCAyNDEpO1xyXG4gICAgLS10ZXh0LTIwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xyXG4gICAgLS10ZXh0LTMwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xyXG4gICAgLS10ZXh0LTQwMDogcmdiKDExNCwgMTA4LCAxOTgpO1xyXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcclxuICAgIC0tdGV4dC02MDA6IHJnYig2MywgNTcsIDE0Nyk7XHJcbiAgICAtLXRleHQtNzAwOiByZ2IoNDcsIDQzLCAxMTApO1xyXG4gICAgLS10ZXh0LTgwMDogcmdiKDMyLCAyOSwgNzMpO1xyXG4gICAgLS10ZXh0LTkwMDogcmdiKDE2LCAxNCwgMzcpO1xyXG4gICAgLS10ZXh0LTk1MDogcmdiKDgsIDcsIDE4KTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcclxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigyMTgsIDIxNiwgMjQzKTtcclxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigxODEsIDE3OCwgMjMwKTtcclxuICAgIC0tYmFja2dyb3VuZC0zMDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcclxuICAgIC0tYmFja2dyb3VuZC00MDA6IHJnYigxMDYsIDEwMSwgMjA1KTtcclxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XHJcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoNTUsIDUwLCAxNTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTcwMDogcmdiKDQxLCAzNywgMTE2KTtcclxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigyOCwgMjUsIDc3KTtcclxuICAgIC0tYmFja2dyb3VuZC05MDA6IHJnYigxNCwgMTIsIDM5KTtcclxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYig3LCA2LCAxOSk7XHJcblxyXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XHJcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMjE5LCAyMTgsIDI0MSk7XHJcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XHJcbiAgICAtLXByaW1hcnktMzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XHJcbiAgICAtLXByaW1hcnktNDAwOiByZ2IoMTExLCAxMDUsIDIwMSk7XHJcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xyXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDYwLCA1NCwgMTUwKTtcclxuICAgIC0tcHJpbWFyeS03MDA6IHJnYig0NSwgNDEsIDExMik7XHJcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMzAsIDI3LCA3NSk7XHJcbiAgICAtLXByaW1hcnktOTAwOiByZ2IoMTUsIDE0LCAzNyk7XHJcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoOCwgNywgMTkpO1xyXG5cclxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XHJcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigyMTQsIDIxMiwgMjQ3KTtcclxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xyXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XHJcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig5MywgODQsIDIyMik7XHJcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XHJcbiAgICAtLXNlY29uZGFyeS02MDA6IHJnYig0MiwgMzMsIDE3MSk7XHJcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigzMSwgMjQsIDEyOSk7XHJcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigyMSwgMTYsIDg2KTtcclxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDEwLCA4LCA0Myk7XHJcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYig1LCA0LCAyMSk7XHJcblxyXG4gICAgLS1hY2NlbnQtNTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcclxuICAgIC0tYWNjZW50LTEwMDogcmdiKDIxMCwgMjA3LCAyNTIpO1xyXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XHJcbiAgICAtLWFjY2VudC0zMDA6IHJnYigxMTksIDExMCwgMjQ3KTtcclxuICAgIC0tYWNjZW50LTQwMDogcmdiKDczLCA2MSwgMjQ1KTtcclxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcclxuICAgIC0tYWNjZW50LTYwMDogcmdiKDIyLCAxMCwgMTk0KTtcclxuICAgIC0tYWNjZW50LTcwMDogcmdiKDE3LCA4LCAxNDUpO1xyXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTEsIDUsIDk3KTtcclxuICAgIC0tYWNjZW50LTkwMDogcmdiKDYsIDMsIDQ4KTtcclxuICAgIC0tYWNjZW50LTk1MDogcmdiKDMsIDEsIDI0KTtcclxuXHJcbn1cclxuXHJcbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcclxuICAgIC0tdGV4dC01MDogcmdiKDgsIDcsIDE4KTtcclxuICAgIC0tdGV4dC0xMDA6IHJnYigxNiwgMTQsIDM3KTtcclxuICAgIC0tdGV4dC0yMDA6IHJnYigzMiwgMjksIDczKTtcclxuICAgIC0tdGV4dC0zMDA6IHJnYig0NywgNDMsIDExMCk7XHJcbiAgICAtLXRleHQtNDAwOiByZ2IoNjMsIDU3LCAxNDcpO1xyXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcclxuICAgIC0tdGV4dC02MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcclxuICAgIC0tdGV4dC03MDA6IHJnYigxNDksIDE0NSwgMjEyKTtcclxuICAgIC0tdGV4dC04MDA6IHJnYigxODUsIDE4MiwgMjI2KTtcclxuICAgIC0tdGV4dC05MDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcclxuICAgIC0tdGV4dC05NTA6IHJnYigyMzcsIDIzNywgMjQ4KTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYig3LCA2LCAxOSk7XHJcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMTQsIDEyLCAzOSk7XHJcbiAgICAtLWJhY2tncm91bmQtMjAwOiByZ2IoMjgsIDI1LCA3Nyk7XHJcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTQwMDogcmdiKDU1LCA1MCwgMTU0KTtcclxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XHJcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XHJcbiAgICAtLWJhY2tncm91bmQtNzAwOiByZ2IoMTQzLCAxMzksIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQtODAwOiByZ2IoMTgxLCAxNzgsIDIzMCk7XHJcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XHJcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoMjM2LCAyMzYsIDI0OSk7XHJcblxyXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoOCwgNywgMTkpO1xyXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDE1LCAxNCwgMzcpO1xyXG4gICAgLS1wcmltYXJ5LTIwMDogcmdiKDMwLCAyNywgNzUpO1xyXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDQ1LCA0MSwgMTEyKTtcclxuICAgIC0tcHJpbWFyeS00MDA6IHJnYig2MCwgNTQsIDE1MCk7XHJcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xyXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xyXG4gICAgLS1wcmltYXJ5LTcwMDogcmdiKDE0NywgMTQzLCAyMTQpO1xyXG4gICAgLS1wcmltYXJ5LTgwMDogcmdiKDE4MywgMTgwLCAyMjgpO1xyXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xyXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDIzNywgMjM2LCAyNDgpO1xyXG5cclxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoNSwgNCwgMjEpO1xyXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMTAsIDgsIDQzKTtcclxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDIxLCAxNiwgODYpO1xyXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xyXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoNDIsIDMzLCAxNzEpO1xyXG4gICAgLS1zZWNvbmRhcnktNTAwOiByZ2IoNTIsIDQxLCAyMTQpO1xyXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoOTMsIDg0LCAyMjIpO1xyXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XHJcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigxNzQsIDE2OSwgMjM5KTtcclxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xyXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XHJcblxyXG4gICAgLS1hY2NlbnQtNTA6IHJnYigzLCAxLCAyNCk7XHJcbiAgICAtLWFjY2VudC0xMDA6IHJnYig2LCAzLCA0OCk7XHJcbiAgICAtLWFjY2VudC0yMDA6IHJnYigxMSwgNSwgOTcpO1xyXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTcsIDgsIDE0NSk7XHJcbiAgICAtLWFjY2VudC00MDA6IHJnYigyMiwgMTAsIDE5NCk7XHJcbiAgICAtLWFjY2VudC01MDA6IHJnYigyOCwgMTMsIDI0Mik7XHJcbiAgICAtLWFjY2VudC02MDA6IHJnYig3MywgNjEsIDI0NSk7XHJcbiAgICAtLWFjY2VudC03MDA6IHJnYigxMTksIDExMCwgMjQ3KTtcclxuICAgIC0tYWNjZW50LTgwMDogcmdiKDE2NCwgMTU4LCAyNTApO1xyXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XHJcbiAgICAtLWFjY2VudC05NTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcclxuXHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIEl0YWxpYyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMGR2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcclxufVxyXG5cclxuYm9keSxcclxuYm9keSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwMCk7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQix5QkFBeUI7O0lBRXpCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQywrQkFBK0I7O0lBRS9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7O0lBRTVCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEI7O0lBRTlCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4Qjs7SUFFOUIsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQzs7SUFFcEMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQzs7SUFFakMsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQzs7SUFFbkMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUFpRTtBQUNyRTs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUksNEpBQTRKO0lBQzVKLHNCQUFzQjs7SUFFdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdFtkYXRhLXRoZW1lPVxcXCJsaWdodFxcXCJdIHtcXHJcXG4gICAgLS10ZXh0LTUwOiByZ2IoMjM3LCAyMzcsIDI0OCk7XFxyXFxuICAgIC0tdGV4dC0xMDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcXHJcXG4gICAgLS10ZXh0LTIwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xcclxcbiAgICAtLXRleHQtMzAwOiByZ2IoMTQ5LCAxNDUsIDIxMik7XFxyXFxuICAgIC0tdGV4dC00MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcXHJcXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcXHJcXG4gICAgLS10ZXh0LTYwMDogcmdiKDYzLCA1NywgMTQ3KTtcXHJcXG4gICAgLS10ZXh0LTcwMDogcmdiKDQ3LCA0MywgMTEwKTtcXHJcXG4gICAgLS10ZXh0LTgwMDogcmdiKDMyLCAyOSwgNzMpO1xcclxcbiAgICAtLXRleHQtOTAwOiByZ2IoMTYsIDE0LCAzNyk7XFxyXFxuICAgIC0tdGV4dC05NTA6IHJnYig4LCA3LCAxOCk7XFxyXFxuXFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDogcmdiKDIzNiwgMjM2LCAyNDkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigxODEsIDE3OCwgMjMwKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTMwMDogcmdiKDE0MywgMTM5LCAyMTgpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC02MDA6IHJnYig1NSwgNTAsIDE1NCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYig0MSwgMzcsIDExNik7XFxyXFxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigyOCwgMjUsIDc3KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTkwMDogcmdiKDE0LCAxMiwgMzkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoNywgNiwgMTkpO1xcclxcblxcclxcbiAgICAtLXByaW1hcnktNTA6IHJnYigyMzcsIDIzNiwgMjQ4KTtcXHJcXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XFxyXFxuICAgIC0tcHJpbWFyeS0zMDA6IHJnYigxNDcsIDE0MywgMjE0KTtcXHJcXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xcclxcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xcclxcbiAgICAtLXByaW1hcnktNjAwOiByZ2IoNjAsIDU0LCAxNTApO1xcclxcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoNDUsIDQxLCAxMTIpO1xcclxcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMzAsIDI3LCA3NSk7XFxyXFxuICAgIC0tcHJpbWFyeS05MDA6IHJnYigxNSwgMTQsIDM3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDgsIDcsIDE5KTtcXHJcXG5cXHJcXG4gICAgLS1zZWNvbmRhcnktNTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMjE0LCAyMTIsIDI0Nyk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xcclxcbiAgICAtLXNlY29uZGFyeS0zMDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoOTMsIDg0LCAyMjIpO1xcclxcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTYwMDogcmdiKDQyLCAzMywgMTcxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xcclxcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigyMSwgMTYsIDg2KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTAwOiByZ2IoMTAsIDgsIDQzKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoNSwgNCwgMjEpO1xcclxcblxcclxcbiAgICAtLWFjY2VudC01MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xcclxcbiAgICAtLWFjY2VudC0xMDA6IHJnYigyMTAsIDIwNywgMjUyKTtcXHJcXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XFxyXFxuICAgIC0tYWNjZW50LTMwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xcclxcbiAgICAtLWFjY2VudC00MDA6IHJnYig3MywgNjEsIDI0NSk7XFxyXFxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcXHJcXG4gICAgLS1hY2NlbnQtNjAwOiByZ2IoMjIsIDEwLCAxOTQpO1xcclxcbiAgICAtLWFjY2VudC03MDA6IHJnYigxNywgOCwgMTQ1KTtcXHJcXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTEsIDUsIDk3KTtcXHJcXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoNiwgMywgNDgpO1xcclxcbiAgICAtLWFjY2VudC05NTA6IHJnYigzLCAxLCAyNCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbjpyb290W2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuICAgIC0tdGV4dC01MDogcmdiKDgsIDcsIDE4KTtcXHJcXG4gICAgLS10ZXh0LTEwMDogcmdiKDE2LCAxNCwgMzcpO1xcclxcbiAgICAtLXRleHQtMjAwOiByZ2IoMzIsIDI5LCA3Myk7XFxyXFxuICAgIC0tdGV4dC0zMDA6IHJnYig0NywgNDMsIDExMCk7XFxyXFxuICAgIC0tdGV4dC00MDA6IHJnYig2MywgNTcsIDE0Nyk7XFxyXFxuICAgIC0tdGV4dC01MDA6IHJnYig3OSwgNzEsIDE4NCk7XFxyXFxuICAgIC0tdGV4dC02MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcXHJcXG4gICAgLS10ZXh0LTcwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xcclxcbiAgICAtLXRleHQtODAwOiByZ2IoMTg1LCAxODIsIDIyNik7XFxyXFxuICAgIC0tdGV4dC05MDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcXHJcXG4gICAgLS10ZXh0LTk1MDogcmdiKDIzNywgMjM3LCAyNDgpO1xcclxcblxcclxcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYig3LCA2LCAxOSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigxNCwgMTIsIDM5KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTIwMDogcmdiKDI4LCAyNSwgNzcpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoNTUsIDUwLCAxNTQpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNTAwOiByZ2IoNjksIDYyLCAxOTMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTgwMDogcmdiKDE4MSwgMTc4LCAyMzApO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcXHJcXG5cXHJcXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoOCwgNywgMTkpO1xcclxcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMTUsIDE0LCAzNyk7XFxyXFxuICAgIC0tcHJpbWFyeS0yMDA6IHJnYigzMCwgMjcsIDc1KTtcXHJcXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDQ1LCA0MSwgMTEyKTtcXHJcXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDYwLCA1NCwgMTUwKTtcXHJcXG4gICAgLS1wcmltYXJ5LTUwMDogcmdiKDc2LCA2OCwgMTg3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xcclxcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XFxyXFxuICAgIC0tcHJpbWFyeS04MDA6IHJnYigxODMsIDE4MCwgMjI4KTtcXHJcXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XFxyXFxuXFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoNSwgNCwgMjEpO1xcclxcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigxMCwgOCwgNDMpO1xcclxcbiAgICAtLXNlY29uZGFyeS0yMDA6IHJnYigyMSwgMTYsIDg2KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xcclxcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig0MiwgMzMsIDE3MSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwMDogcmdiKDUyLCA0MSwgMjE0KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoOTMsIDg0LCAyMjIpO1xcclxcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktODAwOiByZ2IoMTc0LCAxNjksIDIzOSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xcclxcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcXHJcXG5cXHJcXG4gICAgLS1hY2NlbnQtNTA6IHJnYigzLCAxLCAyNCk7XFxyXFxuICAgIC0tYWNjZW50LTEwMDogcmdiKDYsIDMsIDQ4KTtcXHJcXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTEsIDUsIDk3KTtcXHJcXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTcsIDgsIDE0NSk7XFxyXFxuICAgIC0tYWNjZW50LTQwMDogcmdiKDIyLCAxMCwgMTk0KTtcXHJcXG4gICAgLS1hY2NlbnQtNTAwOiByZ2IoMjgsIDEzLCAyNDIpO1xcclxcbiAgICAtLWFjY2VudC02MDA6IHJnYig3MywgNjEsIDI0NSk7XFxyXFxuICAgIC0tYWNjZW50LTcwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xcclxcbiAgICAtLWFjY2VudC04MDA6IHJnYigxNjQsIDE1OCwgMjUwKTtcXHJcXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XFxyXFxuICAgIC0tYWNjZW50LTk1MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxyXFxuICAgIHNyYzogdXJsKC4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIEl0YWxpYyc7XFxyXFxuICAgIHNyYzogdXJsKC4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5ib2R5ICoge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwMCk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZE5hbWUsIGJvYXJkSWQpIHtcclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jYXJkJylcclxuICAgIGJvYXJkLmlkID0gYm9hcmRJZFxyXG5cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJvYXJkTmFtZVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRGcm9tQm9hcmRzKGlkKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmJvYXJkcyA9PSB1bmRlZmluZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib2FyZHMnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IGJvYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmJvYXJkcylcclxuXHJcbiAgICBib2FyZHMuc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaChib2FyZHMsIGlkKVsxXVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMoaWQsIGtleSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuYm9hcmRzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvYXJkcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgYm9hcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYm9hcmRzKVxyXG5cclxuICAgIGJvYXJkcy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZClcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGJpbmFyeVNlYXJjaChib2FyZHMsIGlkKVswXVxyXG5cclxuICAgIGJvYXJkc1tpbmRleF1ba2V5XSA9IG5ld1ZhbHVlXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLmJvYXJkcyA9IEpTT04uc3RyaW5naWZ5KGJvYXJkcylcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZEZyb21UYXNrcyhpZCwgYm9hcmRJZCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcyA9PSB1bmRlZmluZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcclxuXHJcbiAgICB0YXNrcy5zb3J0KChhLCBiKSA9PiBhLmJvYXJkSWQgLSBiLmJvYXJkSWQpXHJcblxyXG4gICAgdGFza3Muc29ydCgoYSwgYikgPT4gYS5pZCAtIGIuaWQpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaCh0YXNrcywgaWQsIGJvYXJkSWQpWzFdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUxpc3RzKGlkLCBib2FyZElkLCBrZXksIG5ld1ZhbHVlKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRhc2tzKVxyXG5cclxuICAgIHRhc2tzLnNvcnQoKGEsIGIpID0+IGEuYm9hcmRJZCAtIGIuYm9hcmRJZClcclxuXHJcbiAgICB0YXNrcy5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZClcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGJpbmFyeVNlYXJjaCh0YXNrcywgaWQsIGJvYXJkSWQpWzBdXHJcblxyXG4gICAgdGFza3NbaW5kZXhdW2tleV0gPSBuZXdWYWx1ZVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyLGlkLGJvYXJkSWQ9bnVsbCl7LypvbmUgbGluZXIgZ29lcyBicnJycnIqL2xldCBzdGFydD0wO2xldCBlbmQ9YXJyLmxlbmd0aC0xO3doaWxlKHN0YXJ0PGVuZCl7bGV0IG1pZD1wYXJzZUludChNYXRoLmZsb29yKChzdGFydCtlbmQpLzIpKTtpZihib2FyZElkPT1udWxsKXtpZihhcnJbbWlkXS5pZDxpZCl7c3RhcnQ9bWlkKzF9ZWxzZXtlbmQ9bWlkfX1lbHNle2lmKGFyclttaWRdLmJvYXJkSWQ8Ym9hcmRJZCl7c3RhcnQ9bWlkKzF9ZWxzZSBpZihhcnJbbWlkXS5ib2FyZElkPmJvYXJkSWQpe2VuZD1taWR9ZWxzZXtpZihhcnJbbWlkXS5pZDxpZCl7c3RhcnQ9bWlkKzF9ZWxzZXtlbmQ9bWlkfX19fXJldHVybiBbZW5kLCBhcnJbZW5kXV19XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcywgcmVhZEZyb21UYXNrcywgdXBkYXRlTGlzdHMgfSIsImZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBpbnB1dHMsIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yKSB7XHJcbiAgICAvLyBkZWNsYXJpbmcgYWxsIHRoZSBlbGVtZW50c1xyXG4gICAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVcclxuICAgIHN1Ym1pdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdzdWJtaXQnXHJcblxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpXHJcbiAgICBtb2RhbENvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZHJvcClcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsVGl0bGUpXHJcbiAgICBcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgICAgICBpbnB1dFRpdGxlLnRleHRDb250ZW50ID0gaW5wdXRzW2ldLnRpdGxlXHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGlucHV0LnR5cGUgPSBpbnB1dHNbaV0udHlwZVxyXG4gICAgICAgIGlucHV0LmlkID0gaW5wdXRzW2ldLmlkXHJcblxyXG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0VGl0bGUpXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXQpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIC8vIGFkZGluZyB0aGUgY2xhc3NlcyAgICBcclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcCcpXHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICwgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXHJcbiAgICB9KVxyXG5cclxuICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycgLCAoKSA9PiB7XHJcbiAgICAgICAgc3VibWl0QnV0dG9uQmVoYXZpb3IoKVxyXG4gICAgICAgIG1vZGFsQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobW9kYWxDb250YWluZXIpXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBtb2RhbENvbnRhaW5lclxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVNb2RhbCB9IiwiZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVCdXR0b24sIHN1biwgbW9vbikge1xyXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgOiBcImxpZ2h0XCI7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIGN1cnJlbnRUaGVtZSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XHJcbiAgICAgICAgICAgIHRoZW1lQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN1bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRoZW1lKHRoZW1lQnV0dG9uLCBzdW4sIG1vb24pIHtcclxuICAgIGlmICh0aGVtZUJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIHN1bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBtb29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgc3VuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIG1vb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldFRoZW1lLCBzd2l0Y2hUaGVtZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBzZXRUaGVtZSwgc3dpdGNoVGhlbWUgfSBmcm9tICcuL3RoZW1lLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcywgcmVhZEZyb21UYXNrcywgdXBkYXRlTGlzdHMgfSBmcm9tICcuL2FkZE5ld0JvYXJkLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVNb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnXHJcblxyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL25hdkJhci5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9tb2RhbHMuY3NzJ1xyXG5cclxuLy8gVGhlbWUgQ2hhbmdlclxyXG5jb25zdCB0aGVtZVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zd2l0Y2gnKVxyXG5zZXRUaGVtZSh0aGVtZVN3aXRjaCwgc3VuLCBtb29uKVxyXG50aGVtZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4geyBzd2l0Y2hUaGVtZShlLnRhcmdldCwgc3VuLCBtb29uKSB9KVxyXG5cclxuLy8gcmVzdCBvZiB0aGUgbG9naWNcclxuY29uc29sZS5sb2coJ0l0IGlzIHdvcmtpbmcgOiknKVxyXG5cclxuY29uc3QgYWRkQm9hcmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvYXJkLWJ1dHRvbicpXHJcbmNvbnN0IGJvYXJkQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY2FyZHMtY29udGFpbmVyJylcclxuXHJcbmFkZEJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbCgnQ3JlYXRlIEJvYXJkJywgW3t0aXRsZTogJ0JvYXJkIE5hbWUnLCB0eXBlOiAndGV4dCcsIGlkOiAnYm9hcmQtbmFtZSd9XSwgKCkgPT4ge1xyXG4gICAgICAgIGJvYXJkQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkLW5hbWUnKS52YWx1ZSkpXHJcbiAgICB9KSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=