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

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    animation: zoomIn forwards 100ms ease-out;
}

.modal>div {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.modal input,
.modal>button {
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: solid 3pt var(--accent-300);

    font-size: large;

    outline: none;
}

.modal>button {
    cursor: pointer;
}

.backdrop {
    position: absolute;
    z-index: 95;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);

    animation: fadeId forwards 100ms;
}

@keyframes fadeId {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes zoomIn {
    from {
        scale: 0;
    }

    to {
        scale: 1;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/modals.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,yCAAyC;AAC7C;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;;IAEI,eAAe;IACf,qBAAqB;IACrB,mCAAmC;;IAEnC,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,oCAAoC;;IAEpC,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;AACJ","sourcesContent":[".modal-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    position: relative;\r\n    z-index: 100;\r\n    padding: 2rem;\r\n    background-color: var(--background-50);\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    animation: zoomIn forwards 100ms ease-out;\r\n}\r\n\r\n.modal>div {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal input,\r\n.modal>button {\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt var(--accent-300);\r\n\r\n    font-size: large;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal>button {\r\n    cursor: pointer;\r\n}\r\n\r\n.backdrop {\r\n    position: absolute;\r\n    z-index: 95;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n\r\n    animation: fadeId forwards 100ms;\r\n}\r\n\r\n@keyframes fadeId {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        scale: 0;\r\n    }\r\n\r\n    to {\r\n        scale: 1;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");


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

    return (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(boards, 'id', id)[1]
}

function updateBoards(id, key, newValue) {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')

    const boards = JSON.parse(localStorage.boards)

    const index = (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(boards, 'id', id)[0]

    boards[index][key] = newValue

    localStorage.boards = JSON.stringify(boards)
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    return (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(tasks, 'id', id, 'boardId', boardId)[1]
}

function updateLists(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    const index = (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(tasks, 'id', id, 'boardId', boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}



/***/ }),

/***/ "./src/js/binarySearch.js":
/*!********************************!*\
  !*** ./src/js/binarySearch.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   binarySearch: () => (/* binding */ binarySearch)
/* harmony export */ });
function binarySearch(arr = [], parm1, id1, parm2, id2 = null) {
    let start = 0;
    let end = arr.length - 1;

    arr.sort((a, b) => a[parm1] - b[parm1])
    arr.sort((a, b) => a[parm2] - b[parm2])

    while (start < end) {
        let mid = parseInt(Math.floor((start + end) / 2));
        if (id2 == null) {
            if (arr[mid][parm1] < id1) {
                start = mid + 1
            } else {
                end = mid
            }
        } else {
            if (arr[mid][parm2] < id2) {
                start = mid + 1
            } else if (arr[mid][parm2] > id2) {
                end = mid
            } else {
                if (arr[mid][parm1] < id1) {
                    start = mid + 1
                } else {
                    end = mid
                }
            }
        }
    } return [end, arr[end]]
}



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
        const inputContainer = document.createElement('div')

        const inputTitle = document.createElement('h2')
        inputTitle.textContent = inputs[i].title

        const input = document.createElement('input')
        input.type = inputs[i].type
        input.id = inputs[i].id

        inputContainer.appendChild(inputTitle)
        inputContainer.appendChild(input)

        modal.appendChild(inputContainer)
    }

    modal.appendChild(submitButton)

    // adding the classes    
    modalContainer.classList.add('modal-container')
    modal.classList.add('modal')
    backdrop.classList.add('backdrop')

    backdrop.addEventListener('click', () => {
        modalContainer.parentNode.removeChild(modalContainer)
    })

    submitButton.addEventListener('click', () => {
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
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/navBar.css */ "./src/css/navBar.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_modals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/modals.css */ "./src/css/modals.css");










// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.setTheme)(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { ;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.switchTheme)(e.target, sun, moon) })

// rest of the logic
console.log('It is working :)')

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const boards = JSON.parse(localStorage.boards)

    for (let i = 0; i < boards.length; i++) {
        boardCardsContainer.appendChild((0,_addNewBoard_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(boards[i].name, boards[i].id))
    }
})

addBoardButton.addEventListener('click', () => {
    document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_2__.createModal)('Create Board', [{ title: 'Name', type: 'text', id: 'board-name' }], () => {
        const boards = JSON.parse(localStorage.boards)

        const boardName = document.getElementById('board-name').value
        let boardId = Math.floor(Math.random() * 10000)

        if (boardName != '') {
            while ((0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_3__.binarySearch)(boards, 'id', boardId) == null) boardId = Math.floor(Math.random() * 10000)
            boardCardsContainer.appendChild((0,_addNewBoard_js__WEBPACK_IMPORTED_MODULE_1__.createBoard)(boardName, boardId))

            boards.push({ name: boardName, id: boardId })

            localStorage.boards = JSON.stringify(boards)
        }
    }))
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEs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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQWtEO0FBQ3NEO0FBQ2hFO0FBQ1E7QUFDaEQ7QUFDeUI7QUFDQztBQUNGO0FBQ0U7QUFDMUI7QUFDQTtBQUNBO0FBQ0Esb0RBQVE7QUFDUixnREFBZ0QsdURBQVcsdUJBQXVCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2Qyx3Q0FBd0MsNERBQVc7QUFDbkQ7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLDhCQUE4QixzREFBVyxvQkFBb0IsK0NBQStDO0FBQzVHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw4REFBWTtBQUMvQiw0Q0FBNEMsNERBQVc7QUFDdkQ7QUFDQSwwQkFBMEIsOEJBQThCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21vZGFscy5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL25hdkJhci5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21vZGFscy5jc3M/Yjk5MSIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbmF2QmFyLmNzcz9jNjU3Iiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2FkZE5ld0JvYXJkLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2JpbmFyeVNlYXJjaC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib2FyZHMtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xMDApO1xyXG59XHJcblxyXG4uYm9hcmRzLXNlY3Rpb24+LnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAtIDNwdCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAwO1xyXG59XHJcblxyXG4uYWRkLWJvYXJkLWJ1dHRvbiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC1ib2FyZC1idXR0b24+cGF0aCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuNXJlbTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1wcmltYXJ5LTUwMCkgciBnIGIgLyA1MCUpO1xyXG59XHJcblxyXG4ubGlzdHMtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC01MCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5Qix5Q0FBeUM7SUFDekMsMENBQTBDO0lBQzFDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHdCQUF3Qjs7SUFFeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksT0FBTztJQUNQLHNDQUFzQztBQUMxQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJtYWluIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtc2VjdGlvbiB7XFxyXFxuICAgIGZsZXg6IDE7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcy1zZWN0aW9uPi50aXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogY2FsYygzcmVtIC0gM3B0KTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yaWdodDogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9hcmQtYnV0dG9uIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ib2FyZC1idXR0b24+cGF0aCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS01MDApIHIgZyBiIC8gNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3RzLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4OiAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtNTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGFsPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsIGlucHV0LFxyXG4ubW9kYWw+YnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgM3B0IHZhcigtLWFjY2VudC0zMDApO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsPmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5NTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGVJZCBmb3J3YXJkcyAxMDBtcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgc2NhbGU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHNjYWxlOiAxO1xyXG4gICAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21vZGFscy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTzs7SUFFUCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxtQkFBbUI7O0lBRW5CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTOztJQUVULHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUNBQW1DOztJQUVuQyxnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asb0NBQW9DOztJQUVwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubW9kYWwtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC01MCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogem9vbUluIGZvcndhcmRzIDEwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQsXFxyXFxuLm1vZGFsPmJ1dHRvbiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNwdCB2YXIoLS1hY2NlbnQtMzAwKTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG5cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5NTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUlkIGZvcndhcmRzIDEwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBzY2FsZTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBzY2FsZTogMTtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYG5hdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBoZWlnaHQ6IGNhbGMoNXJlbSAtIDNwdCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xyXG59XHJcblxyXG5uYXY+LnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBnYXA6IDFyZW07XHJcbn1cclxuXHJcblxyXG5uYXY+LnRpdGxlPmgxIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi50aGVtZS1idXR0b24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA1cmVtO1xyXG59XHJcblxyXG4udGhlbWUtc3dpdGNoIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGhlbWUtc3dpdGNoOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXByaW1hcnktNDAwKSByIGcgYiAvIDMwJSk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2QmFyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1COztJQUVuQix3QkFBd0I7SUFDeEIsMENBQTBDOztJQUUxQyxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7OztBQUdBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLFdBQVc7SUFDWCxZQUFZOztJQUVaLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm5hdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDVyZW0gLSAzcHQpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcXHJcXG59XFxyXFxuXFxyXFxubmF2Pi50aXRsZSB7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbm5hdj4udGl0bGU+aDEge1xcclxcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtYnV0dG9uLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBoZWlnaHQ6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1zd2l0Y2gge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXByaW1hcnktNDAwKSByIGcgYiAvIDMwJSk7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvZm9udHMvcnViaWsvUnViaWstVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vbWVkaWEvZm9udHMvcnViaWsvUnViaWstSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290W2RhdGEtdGhlbWU9XCJsaWdodFwiXSB7XHJcbiAgICAtLXRleHQtNTA6IHJnYigyMzcsIDIzNywgMjQ4KTtcclxuICAgIC0tdGV4dC0xMDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcclxuICAgIC0tdGV4dC0yMDA6IHJnYigxODUsIDE4MiwgMjI2KTtcclxuICAgIC0tdGV4dC0zMDA6IHJnYigxNDksIDE0NSwgMjEyKTtcclxuICAgIC0tdGV4dC00MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcclxuICAgIC0tdGV4dC01MDA6IHJnYig3OSwgNzEsIDE4NCk7XHJcbiAgICAtLXRleHQtNjAwOiByZ2IoNjMsIDU3LCAxNDcpO1xyXG4gICAgLS10ZXh0LTcwMDogcmdiKDQ3LCA0MywgMTEwKTtcclxuICAgIC0tdGV4dC04MDA6IHJnYigzMiwgMjksIDczKTtcclxuICAgIC0tdGV4dC05MDA6IHJnYigxNiwgMTQsIDM3KTtcclxuICAgIC0tdGV4dC05NTA6IHJnYig4LCA3LCAxOCk7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLTUwOiByZ2IoMjM2LCAyMzYsIDI0OSk7XHJcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XHJcbiAgICAtLWJhY2tncm91bmQtMjAwOiByZ2IoMTgxLCAxNzgsIDIzMCk7XHJcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoMTQzLCAxMzksIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XHJcbiAgICAtLWJhY2tncm91bmQtNTAwOiByZ2IoNjksIDYyLCAxOTMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTYwMDogcmdiKDU1LCA1MCwgMTU0KTtcclxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYig0MSwgMzcsIDExNik7XHJcbiAgICAtLWJhY2tncm91bmQtODAwOiByZ2IoMjgsIDI1LCA3Nyk7XHJcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMTQsIDEyLCAzOSk7XHJcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoNywgNiwgMTkpO1xyXG5cclxuICAgIC0tcHJpbWFyeS01MDogcmdiKDIzNywgMjM2LCAyNDgpO1xyXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xyXG4gICAgLS1wcmltYXJ5LTIwMDogcmdiKDE4MywgMTgwLCAyMjgpO1xyXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDE0NywgMTQzLCAyMTQpO1xyXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xyXG4gICAgLS1wcmltYXJ5LTUwMDogcmdiKDc2LCA2OCwgMTg3KTtcclxuICAgIC0tcHJpbWFyeS02MDA6IHJnYig2MCwgNTQsIDE1MCk7XHJcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoNDUsIDQxLCAxMTIpO1xyXG4gICAgLS1wcmltYXJ5LTgwMDogcmdiKDMwLCAyNywgNzUpO1xyXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDE1LCAxNCwgMzcpO1xyXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDgsIDcsIDE5KTtcclxuXHJcbiAgICAtLXNlY29uZGFyeS01MDogcmdiKDIzNSwgMjM0LCAyNTEpO1xyXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMjE0LCAyMTIsIDI0Nyk7XHJcbiAgICAtLXNlY29uZGFyeS0yMDA6IHJnYigxNzQsIDE2OSwgMjM5KTtcclxuICAgIC0tc2Vjb25kYXJ5LTMwMDogcmdiKDEzMywgMTI2LCAyMzEpO1xyXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoOTMsIDg0LCAyMjIpO1xyXG4gICAgLS1zZWNvbmRhcnktNTAwOiByZ2IoNTIsIDQxLCAyMTQpO1xyXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoNDIsIDMzLCAxNzEpO1xyXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xyXG4gICAgLS1zZWNvbmRhcnktODAwOiByZ2IoMjEsIDE2LCA4Nik7XHJcbiAgICAtLXNlY29uZGFyeS05MDA6IHJnYigxMCwgOCwgNDMpO1xyXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoNSwgNCwgMjEpO1xyXG5cclxuICAgIC0tYWNjZW50LTUwOiByZ2IoMjMyLCAyMzEsIDI1NCk7XHJcbiAgICAtLWFjY2VudC0xMDA6IHJnYigyMTAsIDIwNywgMjUyKTtcclxuICAgIC0tYWNjZW50LTIwMDogcmdiKDE2NCwgMTU4LCAyNTApO1xyXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTE5LCAxMTAsIDI0Nyk7XHJcbiAgICAtLWFjY2VudC00MDA6IHJnYig3MywgNjEsIDI0NSk7XHJcbiAgICAtLWFjY2VudC01MDA6IHJnYigyOCwgMTMsIDI0Mik7XHJcbiAgICAtLWFjY2VudC02MDA6IHJnYigyMiwgMTAsIDE5NCk7XHJcbiAgICAtLWFjY2VudC03MDA6IHJnYigxNywgOCwgMTQ1KTtcclxuICAgIC0tYWNjZW50LTgwMDogcmdiKDExLCA1LCA5Nyk7XHJcbiAgICAtLWFjY2VudC05MDA6IHJnYig2LCAzLCA0OCk7XHJcbiAgICAtLWFjY2VudC05NTA6IHJnYigzLCAxLCAyNCk7XHJcblxyXG59XHJcblxyXG46cm9vdFtkYXRhLXRoZW1lPVwiZGFya1wiXSB7XHJcbiAgICAtLXRleHQtNTA6IHJnYig4LCA3LCAxOCk7XHJcbiAgICAtLXRleHQtMTAwOiByZ2IoMTYsIDE0LCAzNyk7XHJcbiAgICAtLXRleHQtMjAwOiByZ2IoMzIsIDI5LCA3Myk7XHJcbiAgICAtLXRleHQtMzAwOiByZ2IoNDcsIDQzLCAxMTApO1xyXG4gICAgLS10ZXh0LTQwMDogcmdiKDYzLCA1NywgMTQ3KTtcclxuICAgIC0tdGV4dC01MDA6IHJnYig3OSwgNzEsIDE4NCk7XHJcbiAgICAtLXRleHQtNjAwOiByZ2IoMTE0LCAxMDgsIDE5OCk7XHJcbiAgICAtLXRleHQtNzAwOiByZ2IoMTQ5LCAxNDUsIDIxMik7XHJcbiAgICAtLXRleHQtODAwOiByZ2IoMTg1LCAxODIsIDIyNik7XHJcbiAgICAtLXRleHQtOTAwOiByZ2IoMjIwLCAyMTgsIDI0MSk7XHJcbiAgICAtLXRleHQtOTUwOiByZ2IoMjM3LCAyMzcsIDI0OCk7XHJcblxyXG4gICAgLS1iYWNrZ3JvdW5kLTUwOiByZ2IoNywgNiwgMTkpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTEwMDogcmdiKDE0LCAxMiwgMzkpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTIwMDogcmdiKDI4LCAyNSwgNzcpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTMwMDogcmdiKDQxLCAzNywgMTE2KTtcclxuICAgIC0tYmFja2dyb3VuZC00MDA6IHJnYig1NSwgNTAsIDE1NCk7XHJcbiAgICAtLWJhY2tncm91bmQtNTAwOiByZ2IoNjksIDYyLCAxOTMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTYwMDogcmdiKDEwNiwgMTAxLCAyMDUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTcwMDogcmdiKDE0MywgMTM5LCAyMTgpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTgwMDogcmdiKDE4MSwgMTc4LCAyMzApO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTkwMDogcmdiKDIxOCwgMjE2LCAyNDMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTk1MDogcmdiKDIzNiwgMjM2LCAyNDkpO1xyXG5cclxuICAgIC0tcHJpbWFyeS01MDogcmdiKDgsIDcsIDE5KTtcclxuICAgIC0tcHJpbWFyeS0xMDA6IHJnYigxNSwgMTQsIDM3KTtcclxuICAgIC0tcHJpbWFyeS0yMDA6IHJnYigzMCwgMjcsIDc1KTtcclxuICAgIC0tcHJpbWFyeS0zMDA6IHJnYig0NSwgNDEsIDExMik7XHJcbiAgICAtLXByaW1hcnktNDAwOiByZ2IoNjAsIDU0LCAxNTApO1xyXG4gICAgLS1wcmltYXJ5LTUwMDogcmdiKDc2LCA2OCwgMTg3KTtcclxuICAgIC0tcHJpbWFyeS02MDA6IHJnYigxMTEsIDEwNSwgMjAxKTtcclxuICAgIC0tcHJpbWFyeS03MDA6IHJnYigxNDcsIDE0MywgMjE0KTtcclxuICAgIC0tcHJpbWFyeS04MDA6IHJnYigxODMsIDE4MCwgMjI4KTtcclxuICAgIC0tcHJpbWFyeS05MDA6IHJnYigyMTksIDIxOCwgMjQxKTtcclxuICAgIC0tcHJpbWFyeS05NTA6IHJnYigyMzcsIDIzNiwgMjQ4KTtcclxuXHJcbiAgICAtLXNlY29uZGFyeS01MDogcmdiKDUsIDQsIDIxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTEwMDogcmdiKDEwLCA4LCA0Myk7XHJcbiAgICAtLXNlY29uZGFyeS0yMDA6IHJnYigyMSwgMTYsIDg2KTtcclxuICAgIC0tc2Vjb25kYXJ5LTMwMDogcmdiKDMxLCAyNCwgMTI5KTtcclxuICAgIC0tc2Vjb25kYXJ5LTQwMDogcmdiKDQyLCAzMywgMTcxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTUwMDogcmdiKDUyLCA0MSwgMjE0KTtcclxuICAgIC0tc2Vjb25kYXJ5LTYwMDogcmdiKDkzLCA4NCwgMjIyKTtcclxuICAgIC0tc2Vjb25kYXJ5LTcwMDogcmdiKDEzMywgMTI2LCAyMzEpO1xyXG4gICAgLS1zZWNvbmRhcnktODAwOiByZ2IoMTc0LCAxNjksIDIzOSk7XHJcbiAgICAtLXNlY29uZGFyeS05MDA6IHJnYigyMTQsIDIxMiwgMjQ3KTtcclxuICAgIC0tc2Vjb25kYXJ5LTk1MDogcmdiKDIzNSwgMjM0LCAyNTEpO1xyXG5cclxuICAgIC0tYWNjZW50LTUwOiByZ2IoMywgMSwgMjQpO1xyXG4gICAgLS1hY2NlbnQtMTAwOiByZ2IoNiwgMywgNDgpO1xyXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTEsIDUsIDk3KTtcclxuICAgIC0tYWNjZW50LTMwMDogcmdiKDE3LCA4LCAxNDUpO1xyXG4gICAgLS1hY2NlbnQtNDAwOiByZ2IoMjIsIDEwLCAxOTQpO1xyXG4gICAgLS1hY2NlbnQtNTAwOiByZ2IoMjgsIDEzLCAyNDIpO1xyXG4gICAgLS1hY2NlbnQtNjAwOiByZ2IoNzMsIDYxLCAyNDUpO1xyXG4gICAgLS1hY2NlbnQtNzAwOiByZ2IoMTE5LCAxMTAsIDI0Nyk7XHJcbiAgICAtLWFjY2VudC04MDA6IHJnYigxNjQsIDE1OCwgMjUwKTtcclxuICAgIC0tYWNjZW50LTkwMDogcmdiKDIxMCwgMjA3LCAyNTIpO1xyXG4gICAgLS1hY2NlbnQtOTUwOiByZ2IoMjMyLCAyMzEsIDI1NCk7XHJcblxyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBJdGFsaWMnO1xyXG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDBkdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEwMCk7XHJcbn1cclxuXHJcbmJvZHksXHJcbmJvZHkgKiB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MDApO1xyXG5cclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5oaWRlIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IseUJBQXlCOztJQUV6QixtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsK0JBQStCOztJQUUvQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsNEJBQTRCOztJQUU1QixrQ0FBa0M7SUFDbEMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsOEJBQThCOztJQUU5QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCOztBQUUvQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7O0lBRTlCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7O0lBRXBDLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7O0lBRWpDLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7O0lBRW5DLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLDRDQUEwRDtBQUM5RDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBaUU7QUFDckU7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUNBQXVDO0FBQzNDOztBQUVBOztJQUVJLDRKQUE0SjtJQUM1SixzQkFBc0I7O0lBRXRCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3RbZGF0YS10aGVtZT1cXFwibGlnaHRcXFwiXSB7XFxyXFxuICAgIC0tdGV4dC01MDogcmdiKDIzNywgMjM3LCAyNDgpO1xcclxcbiAgICAtLXRleHQtMTAwOiByZ2IoMjIwLCAyMTgsIDI0MSk7XFxyXFxuICAgIC0tdGV4dC0yMDA6IHJnYigxODUsIDE4MiwgMjI2KTtcXHJcXG4gICAgLS10ZXh0LTMwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xcclxcbiAgICAtLXRleHQtNDAwOiByZ2IoMTE0LCAxMDgsIDE5OCk7XFxyXFxuICAgIC0tdGV4dC01MDA6IHJnYig3OSwgNzEsIDE4NCk7XFxyXFxuICAgIC0tdGV4dC02MDA6IHJnYig2MywgNTcsIDE0Nyk7XFxyXFxuICAgIC0tdGV4dC03MDA6IHJnYig0NywgNDMsIDExMCk7XFxyXFxuICAgIC0tdGV4dC04MDA6IHJnYigzMiwgMjksIDczKTtcXHJcXG4gICAgLS10ZXh0LTkwMDogcmdiKDE2LCAxNCwgMzcpO1xcclxcbiAgICAtLXRleHQtOTUwOiByZ2IoOCwgNywgMTgpO1xcclxcblxcclxcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTEwMDogcmdiKDIxOCwgMjE2LCAyNDMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMjAwOiByZ2IoMTgxLCAxNzgsIDIzMCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0zMDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTQwMDogcmdiKDEwNiwgMTAxLCAyMDUpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNTAwOiByZ2IoNjksIDYyLCAxOTMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoNTUsIDUwLCAxNTQpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xcclxcbiAgICAtLWJhY2tncm91bmQtODAwOiByZ2IoMjgsIDI1LCA3Nyk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC05MDA6IHJnYigxNCwgMTIsIDM5KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTk1MDogcmdiKDcsIDYsIDE5KTtcXHJcXG5cXHJcXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XFxyXFxuICAgIC0tcHJpbWFyeS0xMDA6IHJnYigyMTksIDIxOCwgMjQxKTtcXHJcXG4gICAgLS1wcmltYXJ5LTIwMDogcmdiKDE4MywgMTgwLCAyMjgpO1xcclxcbiAgICAtLXByaW1hcnktMzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XFxyXFxuICAgIC0tcHJpbWFyeS00MDA6IHJnYigxMTEsIDEwNSwgMjAxKTtcXHJcXG4gICAgLS1wcmltYXJ5LTUwMDogcmdiKDc2LCA2OCwgMTg3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDYwLCA1NCwgMTUwKTtcXHJcXG4gICAgLS1wcmltYXJ5LTcwMDogcmdiKDQ1LCA0MSwgMTEyKTtcXHJcXG4gICAgLS1wcmltYXJ5LTgwMDogcmdiKDMwLCAyNywgNzUpO1xcclxcbiAgICAtLXByaW1hcnktOTAwOiByZ2IoMTUsIDE0LCAzNyk7XFxyXFxuICAgIC0tcHJpbWFyeS05NTA6IHJnYig4LCA3LCAxOSk7XFxyXFxuXFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTEwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xcclxcbiAgICAtLXNlY29uZGFyeS0yMDA6IHJnYigxNzQsIDE2OSwgMjM5KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTQwMDogcmdiKDkzLCA4NCwgMjIyKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNTAwOiByZ2IoNTIsIDQxLCAyMTQpO1xcclxcbiAgICAtLXNlY29uZGFyeS02MDA6IHJnYig0MiwgMzMsIDE3MSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTcwMDogcmdiKDMxLCAyNCwgMTI5KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktODAwOiByZ2IoMjEsIDE2LCA4Nik7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDEwLCA4LCA0Myk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTk1MDogcmdiKDUsIDQsIDIxKTtcXHJcXG5cXHJcXG4gICAgLS1hY2NlbnQtNTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcXHJcXG4gICAgLS1hY2NlbnQtMTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XFxyXFxuICAgIC0tYWNjZW50LTIwMDogcmdiKDE2NCwgMTU4LCAyNTApO1xcclxcbiAgICAtLWFjY2VudC0zMDA6IHJnYigxMTksIDExMCwgMjQ3KTtcXHJcXG4gICAgLS1hY2NlbnQtNDAwOiByZ2IoNzMsIDYxLCAyNDUpO1xcclxcbiAgICAtLWFjY2VudC01MDA6IHJnYigyOCwgMTMsIDI0Mik7XFxyXFxuICAgIC0tYWNjZW50LTYwMDogcmdiKDIyLCAxMCwgMTk0KTtcXHJcXG4gICAgLS1hY2NlbnQtNzAwOiByZ2IoMTcsIDgsIDE0NSk7XFxyXFxuICAgIC0tYWNjZW50LTgwMDogcmdiKDExLCA1LCA5Nyk7XFxyXFxuICAgIC0tYWNjZW50LTkwMDogcmdiKDYsIDMsIDQ4KTtcXHJcXG4gICAgLS1hY2NlbnQtOTUwOiByZ2IoMywgMSwgMjQpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG46cm9vdFtkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIl0ge1xcclxcbiAgICAtLXRleHQtNTA6IHJnYig4LCA3LCAxOCk7XFxyXFxuICAgIC0tdGV4dC0xMDA6IHJnYigxNiwgMTQsIDM3KTtcXHJcXG4gICAgLS10ZXh0LTIwMDogcmdiKDMyLCAyOSwgNzMpO1xcclxcbiAgICAtLXRleHQtMzAwOiByZ2IoNDcsIDQzLCAxMTApO1xcclxcbiAgICAtLXRleHQtNDAwOiByZ2IoNjMsIDU3LCAxNDcpO1xcclxcbiAgICAtLXRleHQtNTAwOiByZ2IoNzksIDcxLCAxODQpO1xcclxcbiAgICAtLXRleHQtNjAwOiByZ2IoMTE0LCAxMDgsIDE5OCk7XFxyXFxuICAgIC0tdGV4dC03MDA6IHJnYigxNDksIDE0NSwgMjEyKTtcXHJcXG4gICAgLS10ZXh0LTgwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xcclxcbiAgICAtLXRleHQtOTAwOiByZ2IoMjIwLCAyMTgsIDI0MSk7XFxyXFxuICAgIC0tdGV4dC05NTA6IHJnYigyMzcsIDIzNywgMjQ4KTtcXHJcXG5cXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTUwOiByZ2IoNywgNiwgMTkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMTQsIDEyLCAzOSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigyOCwgMjUsIDc3KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTMwMDogcmdiKDQxLCAzNywgMTE2KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTQwMDogcmdiKDU1LCA1MCwgMTU0KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTUwMDogcmdiKDY5LCA2MiwgMTkzKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTYwMDogcmdiKDEwNiwgMTAxLCAyMDUpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNzAwOiByZ2IoMTQzLCAxMzksIDIxOCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigxODEsIDE3OCwgMjMwKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTkwMDogcmdiKDIxOCwgMjE2LCAyNDMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoMjM2LCAyMzYsIDI0OSk7XFxyXFxuXFxyXFxuICAgIC0tcHJpbWFyeS01MDogcmdiKDgsIDcsIDE5KTtcXHJcXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDE1LCAxNCwgMzcpO1xcclxcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMzAsIDI3LCA3NSk7XFxyXFxuICAgIC0tcHJpbWFyeS0zMDA6IHJnYig0NSwgNDEsIDExMik7XFxyXFxuICAgIC0tcHJpbWFyeS00MDA6IHJnYig2MCwgNTQsIDE1MCk7XFxyXFxuICAgIC0tcHJpbWFyeS01MDA6IHJnYig3NiwgNjgsIDE4Nyk7XFxyXFxuICAgIC0tcHJpbWFyeS02MDA6IHJnYigxMTEsIDEwNSwgMjAxKTtcXHJcXG4gICAgLS1wcmltYXJ5LTcwMDogcmdiKDE0NywgMTQzLCAyMTQpO1xcclxcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XFxyXFxuICAgIC0tcHJpbWFyeS05MDA6IHJnYigyMTksIDIxOCwgMjQxKTtcXHJcXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDIzNywgMjM2LCAyNDgpO1xcclxcblxcclxcbiAgICAtLXNlY29uZGFyeS01MDogcmdiKDUsIDQsIDIxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMTAsIDgsIDQzKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMjAwOiByZ2IoMjEsIDE2LCA4Nik7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTMwMDogcmdiKDMxLCAyNCwgMTI5KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoNDIsIDMzLCAxNzEpO1xcclxcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTYwMDogcmdiKDkzLCA4NCwgMjIyKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTgwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xcclxcbiAgICAtLXNlY29uZGFyeS05MDA6IHJnYigyMTQsIDIxMiwgMjQ3KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XFxyXFxuXFxyXFxuICAgIC0tYWNjZW50LTUwOiByZ2IoMywgMSwgMjQpO1xcclxcbiAgICAtLWFjY2VudC0xMDA6IHJnYig2LCAzLCA0OCk7XFxyXFxuICAgIC0tYWNjZW50LTIwMDogcmdiKDExLCA1LCA5Nyk7XFxyXFxuICAgIC0tYWNjZW50LTMwMDogcmdiKDE3LCA4LCAxNDUpO1xcclxcbiAgICAtLWFjY2VudC00MDA6IHJnYigyMiwgMTAsIDE5NCk7XFxyXFxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcXHJcXG4gICAgLS1hY2NlbnQtNjAwOiByZ2IoNzMsIDYxLCAyNDUpO1xcclxcbiAgICAtLWFjY2VudC03MDA6IHJnYigxMTksIDExMCwgMjQ3KTtcXHJcXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XFxyXFxuICAgIC0tYWNjZW50LTkwMDogcmdiKDIxMCwgMjA3LCAyNTIpO1xcclxcbiAgICAtLWFjY2VudC05NTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnO1xcclxcbiAgICBzcmM6IHVybCguLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayBJdGFsaWMnO1xcclxcbiAgICBzcmM6IHVybCguLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwZHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEwMCk7XFxyXFxufVxcclxcblxcclxcbmJvZHksXFxyXFxuYm9keSAqIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC05MDApO1xcclxcblxcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5oaWRlIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21vZGFscy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2QmFyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSAnLi9iaW5hcnlTZWFyY2guanMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZE5hbWUsIGJvYXJkSWQpIHtcclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jYXJkJylcclxuICAgIGJvYXJkLmlkID0gYm9hcmRJZFxyXG5cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJvYXJkTmFtZVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICByZXR1cm4gYm9hcmQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRGcm9tQm9hcmRzKGlkKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmJvYXJkcyA9PSB1bmRlZmluZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib2FyZHMnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IGJvYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmJvYXJkcylcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoKGJvYXJkcywgJ2lkJywgaWQpWzFdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUJvYXJkcyhpZCwga2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5ib2FyZHMgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9hcmRzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBiaW5hcnlTZWFyY2goYm9hcmRzLCAnaWQnLCBpZClbMF1cclxuXHJcbiAgICBib2FyZHNbaW5kZXhdW2tleV0gPSBuZXdWYWx1ZVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5ib2FyZHMgPSBKU09OLnN0cmluZ2lmeShib2FyZHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRGcm9tVGFza3MoaWQsIGJvYXJkSWQpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaCh0YXNrcywgJ2lkJywgaWQsICdib2FyZElkJywgYm9hcmRJZClbMV1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlTGlzdHMoaWQsIGJvYXJkSWQsIGtleSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBiaW5hcnlTZWFyY2godGFza3MsICdpZCcsIGlkLCAnYm9hcmRJZCcsIGJvYXJkSWQpWzBdXHJcblxyXG4gICAgdGFza3NbaW5kZXhdW2tleV0gPSBuZXdWYWx1ZVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcywgcmVhZEZyb21UYXNrcywgdXBkYXRlTGlzdHMgfSIsImZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnIgPSBbXSwgcGFybTEsIGlkMSwgcGFybTIsIGlkMiA9IG51bGwpIHtcclxuICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICBsZXQgZW5kID0gYXJyLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGFbcGFybTFdIC0gYltwYXJtMV0pXHJcbiAgICBhcnIuc29ydCgoYSwgYikgPT4gYVtwYXJtMl0gLSBiW3Bhcm0yXSlcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcclxuICAgICAgICBsZXQgbWlkID0gcGFyc2VJbnQoTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMikpO1xyXG4gICAgICAgIGlmIChpZDIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoYXJyW21pZF1bcGFybTFdIDwgaWQxKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1pZCArIDFcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZCA9IG1pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFyclttaWRdW3Bhcm0yXSA8IGlkMikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW21pZF1bcGFybTJdID4gaWQyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBtaWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJbbWlkXVtwYXJtMV0gPCBpZDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG1pZCArIDFcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbWlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IHJldHVybiBbZW5kLCBhcnJbZW5kXV1cclxufVxyXG5cclxuZXhwb3J0IHsgYmluYXJ5U2VhcmNoIH0iLCJmdW5jdGlvbiBjcmVhdGVNb2RhbCh0aXRsZSwgaW5wdXRzLCBzdWJtaXRCdXR0b25CZWhhdmlvcikge1xyXG4gICAgLy8gZGVjbGFyaW5nIGFsbCB0aGUgZWxlbWVudHNcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0J1xyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGlucHV0VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dHNbaV0udGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0c1tpXS50eXBlXHJcbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dHNbaV0uaWRcclxuXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIC8vIGFkZGluZyB0aGUgY2xhc3NlcyAgICBcclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcCcpXHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgIH0pXHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yKClcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbW9kYWxDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTW9kYWwgfSIsImZ1bmN0aW9uIHNldFRoZW1lKHRoZW1lQnV0dG9uLCBzdW4sIG1vb24pIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIDogXCJsaWdodFwiO1xyXG5cclxuICAgIGlmIChjdXJyZW50VGhlbWUpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBjdXJyZW50VGhlbWUpO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFRoZW1lID09PSBcImRhcmtcIikge1xyXG4gICAgICAgICAgICB0aGVtZUJ1dHRvbi5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9vbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzdW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzd2l0Y2hUaGVtZSh0aGVtZUJ1dHRvbiwgc3VuLCBtb29uKSB7XHJcbiAgICBpZiAodGhlbWVCdXR0b24uY2hlY2tlZCkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwiZGFya1wiKTtcclxuICAgICAgICBzdW4uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICAgICAgbW9vbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgICAgIHN1bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICBtb29uLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBzZXRUaGVtZSwgc3dpdGNoVGhlbWUgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgc2V0VGhlbWUsIHN3aXRjaFRoZW1lIH0gZnJvbSAnLi90aGVtZS5qcydcclxuaW1wb3J0IHsgY3JlYXRlQm9hcmQsIHJlYWRGcm9tQm9hcmRzLCB1cGRhdGVCb2FyZHMsIHJlYWRGcm9tVGFza3MsIHVwZGF0ZUxpc3RzIH0gZnJvbSAnLi9hZGROZXdCb2FyZC5qcydcclxuaW1wb3J0IHsgY3JlYXRlTW9kYWwgfSBmcm9tICcuL21vZGFsLmpzJ1xyXG5pbXBvcnQgeyBiaW5hcnlTZWFyY2ggfSBmcm9tICcuL2JpbmFyeVNlYXJjaC5qcydcclxuXHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbmF2QmFyLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL21vZGFscy5jc3MnXHJcblxyXG4vLyBUaGVtZSBDaGFuZ2VyXHJcbmNvbnN0IHRoZW1lU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXN3aXRjaCcpXHJcbnNldFRoZW1lKHRoZW1lU3dpdGNoLCBzdW4sIG1vb24pXHJcbnRoZW1lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7IHN3aXRjaFRoZW1lKGUudGFyZ2V0LCBzdW4sIG1vb24pIH0pXHJcblxyXG4vLyByZXN0IG9mIHRoZSBsb2dpY1xyXG5jb25zb2xlLmxvZygnSXQgaXMgd29ya2luZyA6KScpXHJcblxyXG5jb25zdCBhZGRCb2FyZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9hcmQtYnV0dG9uJylcclxuY29uc3QgYm9hcmRDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jYXJkcy1jb250YWluZXInKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuYm9hcmRzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvYXJkcycsICdbXScpXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBib2FyZENhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKGJvYXJkc1tpXS5uYW1lLCBib2FyZHNbaV0uaWQpKVxyXG4gICAgfVxyXG59KVxyXG5cclxuYWRkQm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsKCdDcmVhdGUgQm9hcmQnLCBbeyB0aXRsZTogJ05hbWUnLCB0eXBlOiAndGV4dCcsIGlkOiAnYm9hcmQtbmFtZScgfV0sICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgICAgIGNvbnN0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1uYW1lJykudmFsdWVcclxuICAgICAgICBsZXQgYm9hcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDAwKVxyXG5cclxuICAgICAgICBpZiAoYm9hcmROYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChiaW5hcnlTZWFyY2goYm9hcmRzLCAnaWQnLCBib2FyZElkKSA9PSBudWxsKSBib2FyZElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDApXHJcbiAgICAgICAgICAgIGJvYXJkQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoYm9hcmROYW1lLCBib2FyZElkKSlcclxuXHJcbiAgICAgICAgICAgIGJvYXJkcy5wdXNoKHsgbmFtZTogYm9hcmROYW1lLCBpZDogYm9hcmRJZCB9KVxyXG5cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmJvYXJkcyA9IEpTT04uc3RyaW5naWZ5KGJvYXJkcylcclxuICAgICAgICB9XHJcbiAgICB9KSlcclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=