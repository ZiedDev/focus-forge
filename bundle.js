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

    border-right: 1.5pt solid var(--accent-400);
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

.tasks-section {
    flex: 3;
    background-color: var(--background-50);
}

.tasks-section>.title {
    padding: 0.5rem 0.5rem;
    height: calc(3rem - 3pt);
    font-size: x-large;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-left: 1.5pt solid var(--accent-400);
    border-bottom: 3pt solid var(--accent-400);
    border-radius: 0 0 0 1rem;
}

.add-task-button {
    user-select: none;
    cursor: pointer;
}

.add-task-button>path {
    color: var(--accent-400);
}

.tasks-cards-container {
    position: relative;
    padding: 1rem 0;
    height: calc(100% - 6rem);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 0.5rem;
    overflow-y: auto;
}

.task-card {
    user-select: none;
    padding: 0.5rem 0.5rem;
    width: calc(100% - 2rem);

    display: flex;
    justify-content: start;
    align-items: center;

    cursor: grab;
    background-color: var(--primary-200);
    border-radius: 1rem;

    gap: 0.5rem;
}

.task-card>div {
    display: flex;
    justify-content: start;
    align-items: center;

    cursor: pointer;
}

.chooseABoard {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}

.chooseABoard>img {
    height: 50%;
}`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,yBAAyB;IACzB,aAAa;AACjB;;AAEA;IACI,OAAO;IACP,uCAAuC;AAC3C;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,2CAA2C;IAC3C,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,eAAe;IACf,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;;IAEX,gBAAgB;AACpB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,eAAe;IACf,oCAAoC;IACpC,mBAAmB;AACvB;;AAEA;IACI,0DAA0D;AAC9D;;AAEA;IACI,OAAO;IACP,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,kBAAkB;;IAElB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,0CAA0C;IAC1C,0CAA0C;IAC1C,yBAAyB;AAC7B;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,mBAAmB;IACnB,WAAW;IACX,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,sBAAsB;IACtB,wBAAwB;;IAExB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,YAAY;IACZ,oCAAoC;IACpC,mBAAmB;;IAEnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;AACf","sourcesContent":["main {\r\n    width: 100%;\r\n    height: calc(100% - 5rem);\r\n    display: flex;\r\n}\r\n\r\n.boards-section {\r\n    flex: 1;\r\n    background-color: var(--background-100);\r\n}\r\n\r\n.boards-section>.title {\r\n    padding: 0.5rem 0.5rem;\r\n    height: calc(3rem - 3pt);\r\n    font-size: x-large;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    border-right: 1.5pt solid var(--accent-400);\r\n    border-bottom: 3pt solid var(--accent-400);\r\n    border-radius: 0 0 1rem 0;\r\n}\r\n\r\n.add-board-button {\r\n    user-select: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-board-button>path {\r\n    color: var(--accent-400);\r\n}\r\n\r\n.board-cards-container {\r\n    padding: 1rem 0;\r\n    height: calc(100% - 6rem);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n\r\n    overflow-y: auto;\r\n}\r\n\r\n.board-cards-container::-webkit-scrollbar {\r\n    width: 0.5rem;\r\n}\r\n\r\n.board-cards-container::-webkit-scrollbar-thumb {\r\n    background-color: var(--primary-500);\r\n    border-radius: 1rem;\r\n}\r\n\r\n.board-card {\r\n    user-select: none;\r\n    padding: 0.5rem 0.5rem;\r\n    width: calc(100% - 2rem);\r\n\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n    background-color: var(--primary-400);\r\n    border-radius: 1rem;\r\n}\r\n\r\n.board-card:hover {\r\n    background-color: rgb(from var(--primary-500) r g b / 50%);\r\n}\r\n\r\n.tasks-section {\r\n    flex: 3;\r\n    background-color: var(--background-50);\r\n}\r\n\r\n.tasks-section>.title {\r\n    padding: 0.5rem 0.5rem;\r\n    height: calc(3rem - 3pt);\r\n    font-size: x-large;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n\r\n    border-left: 1.5pt solid var(--accent-400);\r\n    border-bottom: 3pt solid var(--accent-400);\r\n    border-radius: 0 0 0 1rem;\r\n}\r\n\r\n.add-task-button {\r\n    user-select: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.add-task-button>path {\r\n    color: var(--accent-400);\r\n}\r\n\r\n.tasks-cards-container {\r\n    position: relative;\r\n    padding: 1rem 0;\r\n    height: calc(100% - 6rem);\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: start;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    overflow-y: auto;\r\n}\r\n\r\n.task-card {\r\n    user-select: none;\r\n    padding: 0.5rem 0.5rem;\r\n    width: calc(100% - 2rem);\r\n\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n\r\n    cursor: grab;\r\n    background-color: var(--primary-200);\r\n    border-radius: 1rem;\r\n\r\n    gap: 0.5rem;\r\n}\r\n\r\n.task-card>div {\r\n    display: flex;\r\n    justify-content: start;\r\n    align-items: center;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.chooseABoard {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1.5rem;\r\n}\r\n\r\n.chooseABoard>img {\r\n    height: 50%;\r\n}"],"sourceRoot":""}]);
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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

.modal input[type="checkbox"] {
    height: 2rem;
    width: 2rem;
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
}

@media screen and (max-width: 475px) {

    .modal>div {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/css/modals.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;;IAEP,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,mBAAmB;;IAEnB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;;IAET,yCAAyC;AAC7C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,SAAS;AACb;;AAEA;;IAEI,eAAe;IACf,qBAAqB;IACrB,mCAAmC;;IAEnC,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,eAAe;IACf,qBAAqB;IACrB,mCAAmC;;IAEnC,gBAAgB;;IAEhB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,MAAM;IACN,SAAS;IACT,QAAQ;IACR,OAAO;IACP,oCAAoC;;IAEpC,gCAAgC;AACpC;;AAEA;IACI;QACI,UAAU;IACd;;IAEA;QACI,UAAU;IACd;AACJ;;AAEA;IACI;QACI,QAAQ;IACZ;;IAEA;QACI,QAAQ;IACZ;AACJ;;AAEA;;IAEI;QACI,WAAW;QACX,aAAa;QACb,mBAAmB;QACnB,8BAA8B;QAC9B,sBAAsB;QACtB,SAAS;IACb;AACJ","sourcesContent":[".modal-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.modal {\r\n    position: relative;\r\n    z-index: 100;\r\n    padding: 2rem;\r\n    background-color: var(--background-50);\r\n    border-radius: 1rem;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    animation: zoomIn forwards 100ms ease-out;\r\n}\r\n\r\n.modal>div {\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n}\r\n\r\n.modal input,\r\n.modal>button {\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt var(--accent-300);\r\n\r\n    font-size: large;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal input[type=\"checkbox\"] {\r\n    height: 2rem;\r\n    width: 2rem;\r\n    padding: 0.5rem;\r\n    border-radius: 0.5rem;\r\n    border: solid 3pt var(--accent-300);\r\n\r\n    font-size: large;\r\n\r\n    outline: none;\r\n}\r\n\r\n.modal>button {\r\n    cursor: pointer;\r\n}\r\n\r\n.backdrop {\r\n    position: absolute;\r\n    z-index: 95;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    left: 0;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n\r\n    animation: fadeId forwards 100ms;\r\n}\r\n\r\n@keyframes fadeId {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes zoomIn {\r\n    from {\r\n        scale: 0;\r\n    }\r\n\r\n    to {\r\n        scale: 1;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 475px) {\r\n\r\n    .modal>div {\r\n        width: 100%;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/js/boards.js":
/*!**************************!*\
  !*** ./src/js/boards.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createBoard: () => (/* binding */ createBoard),
/* harmony export */   readFromBoards: () => (/* binding */ readFromBoards),
/* harmony export */   updateBoards: () => (/* binding */ updateBoards)
/* harmony export */ });
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");


function createBoard(boardName, boardId, boardOnClickEvent) {
    let board = document.createElement('div')
    board.classList.add('board-card')
    board.id = `board-${boardId}`

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    board.addEventListener('click', () => boardOnClickEvent())

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



/***/ }),

/***/ "./src/js/media.js":
/*!*************************!*\
  !*** ./src/js/media.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkSVG: () => (/* binding */ checkSVG),
/* harmony export */   chooseABoardImage: () => (/* binding */ chooseABoardImage),
/* harmony export */   dottedCircleSVG: () => (/* binding */ dottedCircleSVG)
/* harmony export */ });
/* harmony import */ var _media_images_blob_board_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/blob_board.png */ "./src/media/images/blob_board.png");


function parser(DOMString, mimeType) {
    const domParser = new DOMParser()
    let doc = domParser.parseFromString(DOMString, mimeType)
    return doc.documentElement
}

const checkSVG = parser('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M176.49 95.51a12 12 0 0 1 0 17l-56 56a12 12 0 0 1-17 0l-24-24a12 12 0 1 1 17-17L112 143l47.51-47.52a12 12 0 0 1 16.98.03M236 128A108 108 0 1 1 128 20a108.12 108.12 0 0 1 108 108m-24 0a84 84 0 1 0-84 84a84.09 84.09 0 0 0 84-84"/></svg>', 'image/svg+xml')
const dottedCircleSVG = parser('<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M92.38 38.05A12 12 0 0 1 101 23.42a108 108 0 0 1 54 0a12 12 0 1 1-6 23.23a84.11 84.11 0 0 0-42 0a12 12 0 0 1-14.62-8.6M50.94 52.34a108.1 108.1 0 0 0-27 46.76a12 12 0 0 0 8.37 14.77a12.2 12.2 0 0 0 3.2.43a12 12 0 0 0 11.56-8.8a84 84 0 0 1 21-36.35a12 12 0 1 0-17.13-16.81m-3.88 98.14a12 12 0 0 0-23.12 6.42a108 108 0 0 0 27 46.78A12 12 0 0 0 68 186.85a84 84 0 0 1-20.94-36.37M149 209.35a84 84 0 0 1-42 0a12 12 0 1 0-6 23.23a108 108 0 0 0 54 0a12 12 0 1 0-6-23.23m74.72-67.22A12 12 0 0 0 209 150.5a84 84 0 0 1-21 36.35a12 12 0 0 0 17.12 16.82a108.19 108.19 0 0 0 27-46.77a12 12 0 0 0-8.41-14.77Zm-14.77-36.61a12 12 0 0 0 23.12-6.42a108 108 0 0 0-27-46.78A12 12 0 1 0 188 69.15a84 84 0 0 1 20.94 36.37Z"/></svg>', 'image/svg+xml')

const chooseABoardImage = document.createElement('img')
chooseABoardImage.src = _media_images_blob_board_png__WEBPACK_IMPORTED_MODULE_0__



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

/***/ "./src/js/tasks.js":
/*!*************************!*\
  !*** ./src/js/tasks.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTask: () => (/* binding */ createTask),
/* harmony export */   emptyBoardTip: () => (/* binding */ emptyBoardTip),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   readFromTasks: () => (/* binding */ readFromTasks),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.js */ "./src/js/media.js");



function createTask(taskName, taskId) {
    const task = document.createElement('div')
    task.classList.add('task-card')
    task.id = `task-${taskId}`

    const name = document.createElement('h2')
    name.textContent = taskName

    const check = document.createElement('div')
    const uncheckedSVG = _media_js__WEBPACK_IMPORTED_MODULE_1__.dottedCircleSVG.cloneNode(true)
    const checkedSVG = _media_js__WEBPACK_IMPORTED_MODULE_1__.checkSVG.cloneNode(true)

    checkedSVG.classList.add('hide')

    check.appendChild(uncheckedSVG)
    check.appendChild(checkedSVG)


    task.appendChild(check)

    check.addEventListener('click', () => taskDone(uncheckedSVG, checkedSVG))

    task.appendChild(name)

    return task;
}

function readFromTasks(id, boardId) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    return (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(tasks, 'id', id, 'boardId', boardId)[1]
}

function updateTasks(id, boardId, key, newValue) {
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const tasks = JSON.parse(localStorage.tasks)

    const index = (0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(tasks, 'id', id, 'boardId', boardId)[0]

    tasks[index][key] = newValue

    localStorage.tasks = JSON.stringify(tasks)
}

function loadTasks(boardId, tasksCardsContainer, noTasksBehavior) {
    tasksCardsContainer.innerHTML = ''

    const tasks = JSON.parse(localStorage.tasks).filter((task) => task.boardId == boardId)

    for (let i = 0; i < tasks.length; i++) {
        tasksCardsContainer.appendChild(createTask(tasks[i].title, tasks[i].id))
    }

    if (tasks.length == 0) {
        noTasksBehavior()
    }
}

function taskDone(unchecked, checked) {
    if (unchecked.classList.contains('hide')) {
        unchecked.classList.remove('hide')
        checked.classList.add('hide')
    } else {
        unchecked.classList.add('hide')
        checked.classList.remove('hide')
    }
}

function emptyBoardTip(tip, image) {
    const container = document.createElement('div')

    container.id = 'chooseABoard'
    container.classList.add('chooseABoard')

    container.appendChild(image)

    const imageDescription = document.createElement('h2')
    imageDescription.textContent = tip
    container.appendChild(imageDescription)

    return container
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

/***/ }),

/***/ "./src/media/images/blob_board.png":
/*!*****************************************!*\
  !*** ./src/media/images/blob_board.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b167118da0c9c83e7d6d.png";

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
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ "./src/js/modal.js");
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media.js */ "./src/js/media.js");
/* harmony import */ var _boards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boards.js */ "./src/js/boards.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.js */ "./src/js/tasks.js");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_navBar_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/navBar.css */ "./src/css/navBar.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_modals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../css/modals.css */ "./src/css/modals.css");













// Theme Changer
const themeSwitch = document.getElementById('theme-switch')
;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.setTheme)(themeSwitch, sun, moon)
themeSwitch.addEventListener('change', (e) => { ;(0,_theme_js__WEBPACK_IMPORTED_MODULE_0__.switchTheme)(e.target, sun, moon) })

const addBoardButton = document.getElementById('add-board-button')
const boardCardsContainer = document.getElementById('board-cards-container')

const addTaskButton = document.getElementById('add-task-button')
const tasksCardsContainer = document.getElementById('tasks-cards-container')

let currentBoard = 0;

// Images
tasksCardsContainer.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.emptyBoardTip)('Choose a Board', _media_js__WEBPACK_IMPORTED_MODULE_3__.chooseABoardImage))

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const boards = JSON.parse(localStorage.boards)

    for (let i = 0; i < boards.length; i++) {
        boardCardsContainer.appendChild((0,_boards_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(boards[i].name, boards[i].id, () => {
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.loadTasks)(boards[i].id, tasksCardsContainer, () => tasksCardsContainer.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.emptyBoardTip)('Oops! No tasks here', _media_js__WEBPACK_IMPORTED_MODULE_3__.chooseABoardImage)))

            currentBoard = boards[i].id
        }))
    }
})

// Add Board
addBoardButton.addEventListener('click', () => {
    document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.createModal)('Create Board', [{ title: 'Name', type: 'text', id: 'board-name' }], () => {
        const boards = JSON.parse(localStorage.boards)

        const boardName = document.getElementById('board-name').value
        let boardId = Math.floor(Math.random() * 99999)

        if (boardName != '') {
            while ((0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_2__.binarySearch)(boards, 'id', boardId) == null) boardId = Math.floor(Math.random() * 99999)

            boardCardsContainer.appendChild((0,_boards_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(boards[i].name, boards[i].id, () => {
                ;(0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.loadTasks)(boardId, tasksCardsContainer, () => tasksCardsContainer.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.emptyBoardTip)('Oops! No tasks here', _media_js__WEBPACK_IMPORTED_MODULE_3__.chooseABoardImage)))

                currentBoard = boardId
            }))

            boards.push({ name: boardName, id: boardId })

            localStorage.boards = JSON.stringify(boards)
        }
    }))
})

// Add Task
addTaskButton.addEventListener('click', () => {
    if (currentBoard != 0) {
        document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.createModal)('Create Task', [{ title: 'Name', type: 'text', id: 'task-name' }, { title: 'Description', type: 'text', id: 'task-description' }, { title: 'Due Date ', type: 'date', id: 'task-dueDate' }, { title: 'Priority ', type: 'number', id: 'task-priority' }], () => {
            const tasks = JSON.parse(localStorage.tasks)

            const taskName = document.getElementById('task-name').value
            const taskDescription = document.getElementById('task-description').value
            const taskDueDate = document.getElementById('task-dueDate').value
            const taskPriority = document.getElementById('task-priority').value

            let taskId = Math.floor(Math.random() * 99999)

            if (taskName != '' && taskName != '' && taskDescription != '' && taskDueDate != '' && taskPriority != '') {
                while ((0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_2__.binarySearch)(tasks, 'id', taskId) == null) taskId = Math.floor(Math.random() * 99999)
                tasksCardsContainer.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.createTask)(taskName, taskId))

                tasks.push({ title: taskName, boardId: currentBoard, id: taskId, description: taskDescription, taskDueDate: taskDueDate, taskPriority: taskPriority, taskDone: false })


                localStorage.tasks = JSON.stringify(tasks)
            }
        }))
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FB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O0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxzREFBVyxtQkFBbUIsOENBQThDLElBQUksNERBQTRELElBQUksc0RBQXNELElBQUkseURBQXlEO0FBQ3JTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhEQUFZO0FBQ25DLGdEQUFnRCxxREFBVTtBQUMxRDtBQUNBLDZCQUE2Qix5SkFBeUo7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21vZGFscy5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL25hdkJhci5jc3MiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL21vZGFscy5jc3M/Yjk5MSIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbmF2QmFyLmNzcz9jNjU3Iiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2JpbmFyeVNlYXJjaC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9ib2FyZHMuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNXJlbSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYm9hcmRzLXNlY3Rpb24ge1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcclxufVxyXG5cclxuLmJvYXJkcy1zZWN0aW9uPi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gLSAzcHQpO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJvcmRlci1yaWdodDogMS41cHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAwO1xyXG59XHJcblxyXG4uYWRkLWJvYXJkLWJ1dHRvbiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC1ib2FyZC1idXR0b24+cGF0aCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcblxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuNXJlbTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1wcmltYXJ5LTUwMCkgciBnIGIgLyA1MCUpO1xyXG59XHJcblxyXG4udGFza3Mtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC01MCk7XHJcbn1cclxuXHJcbi50YXNrcy1zZWN0aW9uPi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gLSAzcHQpO1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIGJvcmRlci1sZWZ0OiAxLjVwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDFyZW07XHJcbn1cclxuXHJcbi5hZGQtdGFzay1idXR0b24ge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hZGQtdGFzay1idXR0b24+cGF0aCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XHJcbn1cclxuXHJcbi50YXNrcy1jYXJkcy1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi50YXNrLWNhcmQge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IGdyYWI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTIwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG5cclxuICAgIGdhcDogMC41cmVtO1xyXG59XHJcblxyXG4udGFzay1jYXJkPmRpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uY2hvb3NlQUJvYXJkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbn1cclxuXHJcbi5jaG9vc2VBQm9hcmQ+aW1nIHtcclxuICAgIGhlaWdodDogNTAlO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksT0FBTztJQUNQLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsMkNBQTJDO0lBQzNDLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7O0lBRXpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXOztJQUVYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLE9BQU87SUFDUCxzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsd0JBQXdCOztJQUV4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxtQkFBbUI7O0lBRW5CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIm1haW4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkcy1zZWN0aW9uIHtcXHJcXG4gICAgZmxleDogMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzLXNlY3Rpb24+LnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gLSAzcHQpO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMXJlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLWJvYXJkLWJ1dHRvbiB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9hcmQtYnV0dG9uPnBhdGgge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS01MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZCB7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtY2FyZDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXByaW1hcnktNTAwKSByIGcgYiAvIDUwJSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1zZWN0aW9uIHtcXHJcXG4gICAgZmxleDogMztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC01MCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1zZWN0aW9uPi50aXRsZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICAgIGhlaWdodDogY2FsYygzcmVtIC0gM3B0KTtcXHJcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIGJvcmRlci1sZWZ0OiAxLjVwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnV0dG9uIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC10YXNrLWJ1dHRvbj5wYXRoIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC00MDApO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3MtY2FyZHMtY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNnJlbSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTIwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxuXFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jYXJkPmRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNob29zZUFCb2FyZCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5jaG9vc2VBQm9hcmQ+aW1nIHtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDFyZW07XHJcblxyXG4gICAgYW5pbWF0aW9uOiB6b29tSW4gZm9yd2FyZHMgMTAwbXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5tb2RhbD5kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuLm1vZGFsIGlucHV0LFxyXG4ubW9kYWw+YnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgM3B0IHZhcigtLWFjY2VudC0zMDApO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogc29saWQgM3B0IHZhcigtLWFjY2VudC0zMDApO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcblxyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLm1vZGFsPmJ1dHRvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5iYWNrZHJvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiA5NTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuXHJcbiAgICBhbmltYXRpb246IGZhZGVJZCBmb3J3YXJkcyAxMDBtcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmYWRlSWQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB6b29tSW4ge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgc2NhbGU6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgdG8ge1xyXG4gICAgICAgIHNjYWxlOiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xyXG5cclxuICAgIC5tb2RhbD5kaXYge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDFyZW07XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbW9kYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPOztJQUVQLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG1CQUFtQjs7SUFFbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQzs7SUFFbkMsZ0JBQWdCOztJQUVoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLG1DQUFtQzs7SUFFbkMsZ0JBQWdCOztJQUVoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLG9DQUFvQzs7SUFFcEMsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksUUFBUTtJQUNaOztJQUVBO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxXQUFXO1FBQ1gsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsc0JBQXNCO1FBQ3RCLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb2RhbC1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiB6b29tSW4gZm9yd2FyZHMgMTAwbXMgZWFzZS1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbD5kaXYge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dCxcXHJcXG4ubW9kYWw+YnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgM3B0IHZhcigtLWFjY2VudC0zMDApO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcblxcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIGhlaWdodDogMnJlbTtcXHJcXG4gICAgd2lkdGg6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDNwdCB2YXIoLS1hY2NlbnQtMzAwKTtcXHJcXG5cXHJcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXHJcXG5cXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiA5NTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuXFxyXFxuICAgIGFuaW1hdGlvbjogZmFkZUlkIGZvcndhcmRzIDEwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XFxyXFxuICAgIGZyb20ge1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgem9vbUluIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBzY2FsZTogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBzY2FsZTogMTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NzVweCkge1xcclxcblxcclxcbiAgICAubW9kYWw+ZGl2IHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgZ2FwOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogY2FsYyg1cmVtIC0gM3B0KTtcclxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XHJcbn1cclxuXHJcbm5hdj4udGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuXHJcbm5hdj4udGl0bGU+aDEge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuLnRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgICBoZWlnaHQ6IDVyZW07XHJcbn1cclxuXHJcbi50aGVtZS1zd2l0Y2gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50aGVtZS1zd2l0Y2g6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS00MDApIHIgZyBiIC8gMzAlKTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXZCYXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7O0lBRW5CLHdCQUF3QjtJQUN4QiwwQ0FBMEM7O0lBRTFDLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7O0FBR0E7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsV0FBVztJQUNYLFlBQVk7O0lBRVosZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSwwREFBMEQ7QUFDOURcIixcInNvdXJjZXNDb250ZW50XCI6W1wibmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGNhbGMoNXJlbSAtIDNwdCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeS00MDApO1xcclxcbn1cXHJcXG5cXHJcXG5uYXY+LnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxubmF2Pi50aXRsZT5oMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1idXR0b24tY29udGFpbmVyIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDVyZW07XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLXN3aXRjaCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG5cXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtc3dpdGNoOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS00MDApIHIgZyBiIC8gMzAlKTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi9tZWRpYS9mb250cy9ydWJpay9SdWJpay1JdGFsaWMtVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3RbZGF0YS10aGVtZT1cImxpZ2h0XCJdIHtcclxuICAgIC0tdGV4dC01MDogcmdiKDIzNywgMjM3LCAyNDgpO1xyXG4gICAgLS10ZXh0LTEwMDogcmdiKDIyMCwgMjE4LCAyNDEpO1xyXG4gICAgLS10ZXh0LTIwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xyXG4gICAgLS10ZXh0LTMwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xyXG4gICAgLS10ZXh0LTQwMDogcmdiKDExNCwgMTA4LCAxOTgpO1xyXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcclxuICAgIC0tdGV4dC02MDA6IHJnYig2MywgNTcsIDE0Nyk7XHJcbiAgICAtLXRleHQtNzAwOiByZ2IoNDcsIDQzLCAxMTApO1xyXG4gICAgLS10ZXh0LTgwMDogcmdiKDMyLCAyOSwgNzMpO1xyXG4gICAgLS10ZXh0LTkwMDogcmdiKDE2LCAxNCwgMzcpO1xyXG4gICAgLS10ZXh0LTk1MDogcmdiKDgsIDcsIDE4KTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcclxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigyMTgsIDIxNiwgMjQzKTtcclxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigxODEsIDE3OCwgMjMwKTtcclxuICAgIC0tYmFja2dyb3VuZC0zMDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcclxuICAgIC0tYmFja2dyb3VuZC00MDA6IHJnYigxMDYsIDEwMSwgMjA1KTtcclxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XHJcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoNTUsIDUwLCAxNTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTcwMDogcmdiKDQxLCAzNywgMTE2KTtcclxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigyOCwgMjUsIDc3KTtcclxuICAgIC0tYmFja2dyb3VuZC05MDA6IHJnYigxNCwgMTIsIDM5KTtcclxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYig3LCA2LCAxOSk7XHJcblxyXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XHJcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMjE5LCAyMTgsIDI0MSk7XHJcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XHJcbiAgICAtLXByaW1hcnktMzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XHJcbiAgICAtLXByaW1hcnktNDAwOiByZ2IoMTExLCAxMDUsIDIwMSk7XHJcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xyXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDYwLCA1NCwgMTUwKTtcclxuICAgIC0tcHJpbWFyeS03MDA6IHJnYig0NSwgNDEsIDExMik7XHJcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMzAsIDI3LCA3NSk7XHJcbiAgICAtLXByaW1hcnktOTAwOiByZ2IoMTUsIDE0LCAzNyk7XHJcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoOCwgNywgMTkpO1xyXG5cclxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XHJcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigyMTQsIDIxMiwgMjQ3KTtcclxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xyXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XHJcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig5MywgODQsIDIyMik7XHJcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XHJcbiAgICAtLXNlY29uZGFyeS02MDA6IHJnYig0MiwgMzMsIDE3MSk7XHJcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigzMSwgMjQsIDEyOSk7XHJcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigyMSwgMTYsIDg2KTtcclxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDEwLCA4LCA0Myk7XHJcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYig1LCA0LCAyMSk7XHJcblxyXG4gICAgLS1hY2NlbnQtNTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcclxuICAgIC0tYWNjZW50LTEwMDogcmdiKDIxMCwgMjA3LCAyNTIpO1xyXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XHJcbiAgICAtLWFjY2VudC0zMDA6IHJnYigxMTksIDExMCwgMjQ3KTtcclxuICAgIC0tYWNjZW50LTQwMDogcmdiKDczLCA2MSwgMjQ1KTtcclxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcclxuICAgIC0tYWNjZW50LTYwMDogcmdiKDIyLCAxMCwgMTk0KTtcclxuICAgIC0tYWNjZW50LTcwMDogcmdiKDE3LCA4LCAxNDUpO1xyXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTEsIDUsIDk3KTtcclxuICAgIC0tYWNjZW50LTkwMDogcmdiKDYsIDMsIDQ4KTtcclxuICAgIC0tYWNjZW50LTk1MDogcmdiKDMsIDEsIDI0KTtcclxuXHJcbn1cclxuXHJcbjpyb290W2RhdGEtdGhlbWU9XCJkYXJrXCJdIHtcclxuICAgIC0tdGV4dC01MDogcmdiKDgsIDcsIDE4KTtcclxuICAgIC0tdGV4dC0xMDA6IHJnYigxNiwgMTQsIDM3KTtcclxuICAgIC0tdGV4dC0yMDA6IHJnYigzMiwgMjksIDczKTtcclxuICAgIC0tdGV4dC0zMDA6IHJnYig0NywgNDMsIDExMCk7XHJcbiAgICAtLXRleHQtNDAwOiByZ2IoNjMsIDU3LCAxNDcpO1xyXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcclxuICAgIC0tdGV4dC02MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcclxuICAgIC0tdGV4dC03MDA6IHJnYigxNDksIDE0NSwgMjEyKTtcclxuICAgIC0tdGV4dC04MDA6IHJnYigxODUsIDE4MiwgMjI2KTtcclxuICAgIC0tdGV4dC05MDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcclxuICAgIC0tdGV4dC05NTA6IHJnYigyMzcsIDIzNywgMjQ4KTtcclxuXHJcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYig3LCA2LCAxOSk7XHJcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMTQsIDEyLCAzOSk7XHJcbiAgICAtLWJhY2tncm91bmQtMjAwOiByZ2IoMjgsIDI1LCA3Nyk7XHJcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTQwMDogcmdiKDU1LCA1MCwgMTU0KTtcclxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XHJcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XHJcbiAgICAtLWJhY2tncm91bmQtNzAwOiByZ2IoMTQzLCAxMzksIDIxOCk7XHJcbiAgICAtLWJhY2tncm91bmQtODAwOiByZ2IoMTgxLCAxNzgsIDIzMCk7XHJcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XHJcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoMjM2LCAyMzYsIDI0OSk7XHJcblxyXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoOCwgNywgMTkpO1xyXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDE1LCAxNCwgMzcpO1xyXG4gICAgLS1wcmltYXJ5LTIwMDogcmdiKDMwLCAyNywgNzUpO1xyXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDQ1LCA0MSwgMTEyKTtcclxuICAgIC0tcHJpbWFyeS00MDA6IHJnYig2MCwgNTQsIDE1MCk7XHJcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xyXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xyXG4gICAgLS1wcmltYXJ5LTcwMDogcmdiKDE0NywgMTQzLCAyMTQpO1xyXG4gICAgLS1wcmltYXJ5LTgwMDogcmdiKDE4MywgMTgwLCAyMjgpO1xyXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xyXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDIzNywgMjM2LCAyNDgpO1xyXG5cclxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoNSwgNCwgMjEpO1xyXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMTAsIDgsIDQzKTtcclxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDIxLCAxNiwgODYpO1xyXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xyXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoNDIsIDMzLCAxNzEpO1xyXG4gICAgLS1zZWNvbmRhcnktNTAwOiByZ2IoNTIsIDQxLCAyMTQpO1xyXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoOTMsIDg0LCAyMjIpO1xyXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMTMzLCAxMjYsIDIzMSk7XHJcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigxNzQsIDE2OSwgMjM5KTtcclxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xyXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoMjM1LCAyMzQsIDI1MSk7XHJcblxyXG4gICAgLS1hY2NlbnQtNTA6IHJnYigzLCAxLCAyNCk7XHJcbiAgICAtLWFjY2VudC0xMDA6IHJnYig2LCAzLCA0OCk7XHJcbiAgICAtLWFjY2VudC0yMDA6IHJnYigxMSwgNSwgOTcpO1xyXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTcsIDgsIDE0NSk7XHJcbiAgICAtLWFjY2VudC00MDA6IHJnYigyMiwgMTAsIDE5NCk7XHJcbiAgICAtLWFjY2VudC01MDA6IHJnYigyOCwgMTMsIDI0Mik7XHJcbiAgICAtLWFjY2VudC02MDA6IHJnYig3MywgNjEsIDI0NSk7XHJcbiAgICAtLWFjY2VudC03MDA6IHJnYigxMTksIDExMCwgMjQ3KTtcclxuICAgIC0tYWNjZW50LTgwMDogcmdiKDE2NCwgMTU4LCAyNTApO1xyXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XHJcbiAgICAtLWFjY2VudC05NTA6IHJnYigyMzIsIDIzMSwgMjU0KTtcclxuXHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIEl0YWxpYyc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMGR2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcclxufVxyXG5cclxuYm9keSxcclxuYm9keSAqIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwMCk7XHJcblxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmhpZGUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDZCQUE2QjtJQUM3Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQix5QkFBeUI7O0lBRXpCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQywrQkFBK0I7O0lBRS9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7O0lBRTVCLGtDQUFrQztJQUNsQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBQ2hDLCtCQUErQjtJQUMvQiw4QkFBOEI7O0lBRTlCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQiwyQkFBMkI7O0FBRS9COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4Qjs7SUFFOUIsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQzs7SUFFcEMsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQzs7SUFFakMsNkJBQTZCO0lBQzdCLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLG1DQUFtQzs7SUFFbkMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLGdDQUFnQzs7QUFFcEM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsNENBQTBEO0FBQzlEOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUFpRTtBQUNyRTs7QUFFQTtJQUNJLGNBQWM7SUFDZCx1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUksNEpBQTRKO0lBQzVKLHNCQUFzQjs7SUFFdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdFtkYXRhLXRoZW1lPVxcXCJsaWdodFxcXCJdIHtcXHJcXG4gICAgLS10ZXh0LTUwOiByZ2IoMjM3LCAyMzcsIDI0OCk7XFxyXFxuICAgIC0tdGV4dC0xMDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcXHJcXG4gICAgLS10ZXh0LTIwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xcclxcbiAgICAtLXRleHQtMzAwOiByZ2IoMTQ5LCAxNDUsIDIxMik7XFxyXFxuICAgIC0tdGV4dC00MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcXHJcXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcXHJcXG4gICAgLS10ZXh0LTYwMDogcmdiKDYzLCA1NywgMTQ3KTtcXHJcXG4gICAgLS10ZXh0LTcwMDogcmdiKDQ3LCA0MywgMTEwKTtcXHJcXG4gICAgLS10ZXh0LTgwMDogcmdiKDMyLCAyOSwgNzMpO1xcclxcbiAgICAtLXRleHQtOTAwOiByZ2IoMTYsIDE0LCAzNyk7XFxyXFxuICAgIC0tdGV4dC05NTA6IHJnYig4LCA3LCAxOCk7XFxyXFxuXFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDogcmdiKDIzNiwgMjM2LCAyNDkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigxODEsIDE3OCwgMjMwKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTMwMDogcmdiKDE0MywgMTM5LCAyMTgpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC02MDA6IHJnYig1NSwgNTAsIDE1NCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYig0MSwgMzcsIDExNik7XFxyXFxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigyOCwgMjUsIDc3KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTkwMDogcmdiKDE0LCAxMiwgMzkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTUwOiByZ2IoNywgNiwgMTkpO1xcclxcblxcclxcbiAgICAtLXByaW1hcnktNTA6IHJnYigyMzcsIDIzNiwgMjQ4KTtcXHJcXG4gICAgLS1wcmltYXJ5LTEwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XFxyXFxuICAgIC0tcHJpbWFyeS0zMDA6IHJnYigxNDcsIDE0MywgMjE0KTtcXHJcXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xcclxcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xcclxcbiAgICAtLXByaW1hcnktNjAwOiByZ2IoNjAsIDU0LCAxNTApO1xcclxcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoNDUsIDQxLCAxMTIpO1xcclxcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMzAsIDI3LCA3NSk7XFxyXFxuICAgIC0tcHJpbWFyeS05MDA6IHJnYigxNSwgMTQsIDM3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTk1MDogcmdiKDgsIDcsIDE5KTtcXHJcXG5cXHJcXG4gICAgLS1zZWNvbmRhcnktNTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMTAwOiByZ2IoMjE0LCAyMTIsIDI0Nyk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xcclxcbiAgICAtLXNlY29uZGFyeS0zMDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNDAwOiByZ2IoOTMsIDg0LCAyMjIpO1xcclxcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTYwMDogcmdiKDQyLCAzMywgMTcxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xcclxcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigyMSwgMTYsIDg2KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTAwOiByZ2IoMTAsIDgsIDQzKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTUwOiByZ2IoNSwgNCwgMjEpO1xcclxcblxcclxcbiAgICAtLWFjY2VudC01MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xcclxcbiAgICAtLWFjY2VudC0xMDA6IHJnYigyMTAsIDIwNywgMjUyKTtcXHJcXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XFxyXFxuICAgIC0tYWNjZW50LTMwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xcclxcbiAgICAtLWFjY2VudC00MDA6IHJnYig3MywgNjEsIDI0NSk7XFxyXFxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcXHJcXG4gICAgLS1hY2NlbnQtNjAwOiByZ2IoMjIsIDEwLCAxOTQpO1xcclxcbiAgICAtLWFjY2VudC03MDA6IHJnYigxNywgOCwgMTQ1KTtcXHJcXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTEsIDUsIDk3KTtcXHJcXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoNiwgMywgNDgpO1xcclxcbiAgICAtLWFjY2VudC05NTA6IHJnYigzLCAxLCAyNCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbjpyb290W2RhdGEtdGhlbWU9XFxcImRhcmtcXFwiXSB7XFxyXFxuICAgIC0tdGV4dC01MDogcmdiKDgsIDcsIDE4KTtcXHJcXG4gICAgLS10ZXh0LTEwMDogcmdiKDE2LCAxNCwgMzcpO1xcclxcbiAgICAtLXRleHQtMjAwOiByZ2IoMzIsIDI5LCA3Myk7XFxyXFxuICAgIC0tdGV4dC0zMDA6IHJnYig0NywgNDMsIDExMCk7XFxyXFxuICAgIC0tdGV4dC00MDA6IHJnYig2MywgNTcsIDE0Nyk7XFxyXFxuICAgIC0tdGV4dC01MDA6IHJnYig3OSwgNzEsIDE4NCk7XFxyXFxuICAgIC0tdGV4dC02MDA6IHJnYigxMTQsIDEwOCwgMTk4KTtcXHJcXG4gICAgLS10ZXh0LTcwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xcclxcbiAgICAtLXRleHQtODAwOiByZ2IoMTg1LCAxODIsIDIyNik7XFxyXFxuICAgIC0tdGV4dC05MDA6IHJnYigyMjAsIDIxOCwgMjQxKTtcXHJcXG4gICAgLS10ZXh0LTk1MDogcmdiKDIzNywgMjM3LCAyNDgpO1xcclxcblxcclxcbiAgICAtLWJhY2tncm91bmQtNTA6IHJnYig3LCA2LCAxOSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigxNCwgMTIsIDM5KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTIwMDogcmdiKDI4LCAyNSwgNzcpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoNTUsIDUwLCAxNTQpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNTAwOiByZ2IoNjksIDYyLCAxOTMpO1xcclxcbiAgICAtLWJhY2tncm91bmQtNjAwOiByZ2IoMTA2LCAxMDEsIDIwNSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTgwMDogcmdiKDE4MSwgMTc4LCAyMzApO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMjE4LCAyMTYsIDI0Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcXHJcXG5cXHJcXG4gICAgLS1wcmltYXJ5LTUwOiByZ2IoOCwgNywgMTkpO1xcclxcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMTUsIDE0LCAzNyk7XFxyXFxuICAgIC0tcHJpbWFyeS0yMDA6IHJnYigzMCwgMjcsIDc1KTtcXHJcXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDQ1LCA0MSwgMTEyKTtcXHJcXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDYwLCA1NCwgMTUwKTtcXHJcXG4gICAgLS1wcmltYXJ5LTUwMDogcmdiKDc2LCA2OCwgMTg3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTYwMDogcmdiKDExMSwgMTA1LCAyMDEpO1xcclxcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XFxyXFxuICAgIC0tcHJpbWFyeS04MDA6IHJnYigxODMsIDE4MCwgMjI4KTtcXHJcXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDIxOSwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XFxyXFxuXFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwOiByZ2IoNSwgNCwgMjEpO1xcclxcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigxMCwgOCwgNDMpO1xcclxcbiAgICAtLXNlY29uZGFyeS0yMDA6IHJnYigyMSwgMTYsIDg2KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMzAwOiByZ2IoMzEsIDI0LCAxMjkpO1xcclxcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig0MiwgMzMsIDE3MSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwMDogcmdiKDUyLCA0MSwgMjE0KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoOTMsIDg0LCAyMjIpO1xcclxcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktODAwOiByZ2IoMTc0LCAxNjksIDIzOSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTkwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xcclxcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcXHJcXG5cXHJcXG4gICAgLS1hY2NlbnQtNTA6IHJnYigzLCAxLCAyNCk7XFxyXFxuICAgIC0tYWNjZW50LTEwMDogcmdiKDYsIDMsIDQ4KTtcXHJcXG4gICAgLS1hY2NlbnQtMjAwOiByZ2IoMTEsIDUsIDk3KTtcXHJcXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTcsIDgsIDE0NSk7XFxyXFxuICAgIC0tYWNjZW50LTQwMDogcmdiKDIyLCAxMCwgMTk0KTtcXHJcXG4gICAgLS1hY2NlbnQtNTAwOiByZ2IoMjgsIDEzLCAyNDIpO1xcclxcbiAgICAtLWFjY2VudC02MDA6IHJnYig3MywgNjEsIDI0NSk7XFxyXFxuICAgIC0tYWNjZW50LTcwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xcclxcbiAgICAtLWFjY2VudC04MDA6IHJnYigxNjQsIDE1OCwgMjUwKTtcXHJcXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XFxyXFxuICAgIC0tYWNjZW50LTk1MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpayc7XFxyXFxuICAgIHNyYzogdXJsKC4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrIEl0YWxpYyc7XFxyXFxuICAgIHNyYzogdXJsKC4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDBkdmg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtMTAwKTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5ib2R5ICoge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LTkwMCk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW9kYWxzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXZCYXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBiaW5hcnlTZWFyY2goYXJyID0gW10sIHBhcm0xLCBpZDEsIHBhcm0yLCBpZDIgPSBudWxsKSB7XHJcbiAgICBsZXQgc3RhcnQgPSAwO1xyXG4gICAgbGV0IGVuZCA9IGFyci5sZW5ndGggLSAxO1xyXG5cclxuICAgIGFyci5zb3J0KChhLCBiKSA9PiBhW3Bhcm0xXSAtIGJbcGFybTFdKVxyXG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGFbcGFybTJdIC0gYltwYXJtMl0pXHJcblxyXG4gICAgd2hpbGUgKHN0YXJ0IDwgZW5kKSB7XHJcbiAgICAgICAgbGV0IG1pZCA9IHBhcnNlSW50KE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpKTtcclxuICAgICAgICBpZiAoaWQyID09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGFyclttaWRdW3Bhcm0xXSA8IGlkMSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBtaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbbWlkXVtwYXJtMl0gPCBpZDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0ID0gbWlkICsgMVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyclttaWRdW3Bhcm0yXSA+IGlkMikge1xyXG4gICAgICAgICAgICAgICAgZW5kID0gbWlkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJyW21pZF1bcGFybTFdIDwgaWQxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IG1pZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSByZXR1cm4gW2VuZCwgYXJyW2VuZF1dXHJcbn1cclxuXHJcbmV4cG9ydCB7IGJpbmFyeVNlYXJjaCB9IiwiaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSAnLi9iaW5hcnlTZWFyY2guanMnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZE5hbWUsIGJvYXJkSWQsIGJvYXJkT25DbGlja0V2ZW50KSB7XHJcbiAgICBsZXQgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQtY2FyZCcpXHJcbiAgICBib2FyZC5pZCA9IGBib2FyZC0ke2JvYXJkSWR9YFxyXG5cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJvYXJkTmFtZVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJvYXJkT25DbGlja0V2ZW50KCkpXHJcblxyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkRnJvbUJvYXJkcyhpZCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5ib2FyZHMgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9hcmRzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaChib2FyZHMsICdpZCcsIGlkKVsxXVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMoaWQsIGtleSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuYm9hcmRzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvYXJkcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgYm9hcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYm9hcmRzKVxyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gYmluYXJ5U2VhcmNoKGJvYXJkcywgJ2lkJywgaWQpWzBdXHJcblxyXG4gICAgYm9hcmRzW2luZGV4XVtrZXldID0gbmV3VmFsdWVcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UuYm9hcmRzID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRzKVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcyB9IiwiaW1wb3J0IGJsb2JfYm9hcmQgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL2Jsb2JfYm9hcmQucG5nJ1xyXG5cclxuZnVuY3Rpb24gcGFyc2VyKERPTVN0cmluZywgbWltZVR5cGUpIHtcclxuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxyXG4gICAgbGV0IGRvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoRE9NU3RyaW5nLCBtaW1lVHlwZSlcclxuICAgIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrU1ZHID0gcGFyc2VyKCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNzYuNDkgOTUuNTFhMTIgMTIgMCAwIDEgMCAxN2wtNTYgNTZhMTIgMTIgMCAwIDEtMTcgMGwtMjQtMjRhMTIgMTIgMCAxIDEgMTctMTdMMTEyIDE0M2w0Ny41MS00Ny41MmExMiAxMiAwIDAgMSAxNi45OC4wM00yMzYgMTI4QTEwOCAxMDggMCAxIDEgMTI4IDIwYTEwOC4xMiAxMDguMTIgMCAwIDEgMTA4IDEwOG0tMjQgMGE4NCA4NCAwIDEgMC04NCA4NGE4NC4wOSA4NC4wOSAwIDAgMCA4NC04NFwiLz48L3N2Zz4nLCAnaW1hZ2Uvc3ZnK3htbCcpXHJcbmNvbnN0IGRvdHRlZENpcmNsZVNWRyA9IHBhcnNlcignPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNOTIuMzggMzguMDVBMTIgMTIgMCAwIDEgMTAxIDIzLjQyYTEwOCAxMDggMCAwIDEgNTQgMGExMiAxMiAwIDEgMS02IDIzLjIzYTg0LjExIDg0LjExIDAgMCAwLTQyIDBhMTIgMTIgMCAwIDEtMTQuNjItOC42TTUwLjk0IDUyLjM0YTEwOC4xIDEwOC4xIDAgMCAwLTI3IDQ2Ljc2YTEyIDEyIDAgMCAwIDguMzcgMTQuNzdhMTIuMiAxMi4yIDAgMCAwIDMuMi40M2ExMiAxMiAwIDAgMCAxMS41Ni04LjhhODQgODQgMCAwIDEgMjEtMzYuMzVhMTIgMTIgMCAxIDAtMTcuMTMtMTYuODFtLTMuODggOTguMTRhMTIgMTIgMCAwIDAtMjMuMTIgNi40MmExMDggMTA4IDAgMCAwIDI3IDQ2Ljc4QTEyIDEyIDAgMCAwIDY4IDE4Ni44NWE4NCA4NCAwIDAgMS0yMC45NC0zNi4zN00xNDkgMjA5LjM1YTg0IDg0IDAgMCAxLTQyIDBhMTIgMTIgMCAxIDAtNiAyMy4yM2ExMDggMTA4IDAgMCAwIDU0IDBhMTIgMTIgMCAxIDAtNi0yMy4yM203NC43Mi02Ny4yMkExMiAxMiAwIDAgMCAyMDkgMTUwLjVhODQgODQgMCAwIDEtMjEgMzYuMzVhMTIgMTIgMCAwIDAgMTcuMTIgMTYuODJhMTA4LjE5IDEwOC4xOSAwIDAgMCAyNy00Ni43N2ExMiAxMiAwIDAgMC04LjQxLTE0Ljc3Wm0tMTQuNzctMzYuNjFhMTIgMTIgMCAwIDAgMjMuMTItNi40MmExMDggMTA4IDAgMCAwLTI3LTQ2Ljc4QTEyIDEyIDAgMSAwIDE4OCA2OS4xNWE4NCA4NCAwIDAgMSAyMC45NCAzNi4zN1pcIi8+PC9zdmc+JywgJ2ltYWdlL3N2Zyt4bWwnKVxyXG5cclxuY29uc3QgY2hvb3NlQUJvYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5jaG9vc2VBQm9hcmRJbWFnZS5zcmMgPSBibG9iX2JvYXJkXHJcblxyXG5leHBvcnQgeyBjaGVja1NWRywgZG90dGVkQ2lyY2xlU1ZHLCBjaG9vc2VBQm9hcmRJbWFnZSB9IiwiZnVuY3Rpb24gY3JlYXRlTW9kYWwodGl0bGUsIGlucHV0cywgc3VibWl0QnV0dG9uQmVoYXZpb3IpIHtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0J1xyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGlucHV0VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dHNbaV0udGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0c1tpXS50eXBlXHJcbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dHNbaV0uaWRcclxuXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcCcpXHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgIH0pXHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yKClcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbW9kYWxDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTW9kYWwgfSIsImltcG9ydCB7IGJpbmFyeVNlYXJjaCB9IGZyb20gJy4vYmluYXJ5U2VhcmNoLmpzJ1xyXG5pbXBvcnQgeyBjaGVja1NWRywgZG90dGVkQ2lyY2xlU1ZHIH0gZnJvbSAnLi9tZWRpYS5qcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tJZCkge1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpXHJcbiAgICB0YXNrLmlkID0gYHRhc2stJHt0YXNrSWR9YFxyXG5cclxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdGFza05hbWVcclxuXHJcbiAgICBjb25zdCBjaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCB1bmNoZWNrZWRTVkcgPSBkb3R0ZWRDaXJjbGVTVkcuY2xvbmVOb2RlKHRydWUpXHJcbiAgICBjb25zdCBjaGVja2VkU1ZHID0gY2hlY2tTVkcuY2xvbmVOb2RlKHRydWUpXHJcblxyXG4gICAgY2hlY2tlZFNWRy5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuXHJcbiAgICBjaGVjay5hcHBlbmRDaGlsZCh1bmNoZWNrZWRTVkcpXHJcbiAgICBjaGVjay5hcHBlbmRDaGlsZChjaGVja2VkU1ZHKVxyXG5cclxuXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrKVxyXG5cclxuICAgIGNoZWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFza0RvbmUodW5jaGVja2VkU1ZHLCBjaGVja2VkU1ZHKSlcclxuXHJcbiAgICB0YXNrLmFwcGVuZENoaWxkKG5hbWUpXHJcblxyXG4gICAgcmV0dXJuIHRhc2s7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlYWRGcm9tVGFza3MoaWQsIGJvYXJkSWQpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaCh0YXNrcywgJ2lkJywgaWQsICdib2FyZElkJywgYm9hcmRJZClbMV1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza3MoaWQsIGJvYXJkSWQsIGtleSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UudGFza3MpXHJcblxyXG4gICAgY29uc3QgaW5kZXggPSBiaW5hcnlTZWFyY2godGFza3MsICdpZCcsIGlkLCAnYm9hcmRJZCcsIGJvYXJkSWQpWzBdXHJcblxyXG4gICAgdGFza3NbaW5kZXhdW2tleV0gPSBuZXdWYWx1ZVxyXG5cclxuICAgIGxvY2FsU3RvcmFnZS50YXNrcyA9IEpTT04uc3RyaW5naWZ5KHRhc2tzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkVGFza3MoYm9hcmRJZCwgdGFza3NDYXJkc0NvbnRhaW5lciwgbm9UYXNrc0JlaGF2aW9yKSB7XHJcbiAgICB0YXNrc0NhcmRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcykuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmJvYXJkSWQgPT0gYm9hcmRJZClcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFza3NDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrKHRhc2tzW2ldLnRpdGxlLCB0YXNrc1tpXS5pZCkpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhc2tzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgbm9UYXNrc0JlaGF2aW9yKClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdGFza0RvbmUodW5jaGVja2VkLCBjaGVja2VkKSB7XHJcbiAgICBpZiAodW5jaGVja2VkLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgdW5jaGVja2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHVuY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdoaWRlJylcclxuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBlbXB0eUJvYXJkVGlwKHRpcCwgaW1hZ2UpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgY29udGFpbmVyLmlkID0gJ2Nob29zZUFCb2FyZCdcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjaG9vc2VBQm9hcmQnKVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZSlcclxuXHJcbiAgICBjb25zdCBpbWFnZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgaW1hZ2VEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRpcFxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRGVzY3JpcHRpb24pXHJcblxyXG4gICAgcmV0dXJuIGNvbnRhaW5lclxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVUYXNrLCByZWFkRnJvbVRhc2tzLCB1cGRhdGVUYXNrcywgbG9hZFRhc2tzLCBlbXB0eUJvYXJkVGlwIH0iLCJmdW5jdGlvbiBzZXRUaGVtZSh0aGVtZUJ1dHRvbiwgc3VuLCBtb29uKSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA6IFwibGlnaHRcIjtcclxuXHJcbiAgICBpZiAoY3VycmVudFRoZW1lKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgY3VycmVudFRoZW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcclxuICAgICAgICAgICAgdGhlbWVCdXR0b24uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIG1vb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3VuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3dpdGNoVGhlbWUodGhlbWVCdXR0b24sIHN1biwgbW9vbikge1xyXG4gICAgaWYgKHRoZW1lQnV0dG9uLmNoZWNrZWQpIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImRhcmtcIik7XHJcbiAgICAgICAgc3VuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xyXG4gICAgICAgIG1vb24uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10aGVtZVwiLCBcImxpZ2h0XCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBzdW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGVcIik7XHJcbiAgICAgICAgbW9vbi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgc2V0VGhlbWUsIHN3aXRjaFRoZW1lIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHNldFRoZW1lLCBzd2l0Y2hUaGVtZSB9IGZyb20gJy4vdGhlbWUuanMnXHJcbmltcG9ydCB7IGNyZWF0ZU1vZGFsIH0gZnJvbSAnLi9tb2RhbC5qcydcclxuaW1wb3J0IHsgYmluYXJ5U2VhcmNoIH0gZnJvbSAnLi9iaW5hcnlTZWFyY2guanMnXHJcbmltcG9ydCB7IGNob29zZUFCb2FyZEltYWdlIH0gZnJvbSAnLi9tZWRpYS5qcydcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUJvYXJkLCByZWFkRnJvbUJvYXJkcywgdXBkYXRlQm9hcmRzIH0gZnJvbSAnLi9ib2FyZHMuanMnXHJcbmltcG9ydCB7IGNyZWF0ZVRhc2ssIHJlYWRGcm9tVGFza3MsIHVwZGF0ZVRhc2tzLCBsb2FkVGFza3MsIGVtcHR5Qm9hcmRUaXAgfSBmcm9tICcuL3Rhc2tzLmpzJztcclxuXHJcbmltcG9ydCAnLi4vY3NzL3N0eWxlLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbmF2QmFyLmNzcydcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL21vZGFscy5jc3MnXHJcblxyXG4vLyBUaGVtZSBDaGFuZ2VyXHJcbmNvbnN0IHRoZW1lU3dpdGNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RoZW1lLXN3aXRjaCcpXHJcbnNldFRoZW1lKHRoZW1lU3dpdGNoLCBzdW4sIG1vb24pXHJcbnRoZW1lU3dpdGNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7IHN3aXRjaFRoZW1lKGUudGFyZ2V0LCBzdW4sIG1vb24pIH0pXHJcblxyXG5jb25zdCBhZGRCb2FyZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYm9hcmQtYnV0dG9uJylcclxuY29uc3QgYm9hcmRDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1jYXJkcy1jb250YWluZXInKVxyXG5cclxuY29uc3QgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzay1idXR0b24nKVxyXG5jb25zdCB0YXNrc0NhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzLWNhcmRzLWNvbnRhaW5lcicpXHJcblxyXG5sZXQgY3VycmVudEJvYXJkID0gMDtcclxuXHJcbi8vIEltYWdlc1xyXG50YXNrc0NhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5Qm9hcmRUaXAoJ0Nob29zZSBhIEJvYXJkJywgY2hvb3NlQUJvYXJkSW1hZ2UpKVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuYm9hcmRzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvYXJkcycsICdbXScpXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLnRhc2tzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBib2FyZENhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUJvYXJkKGJvYXJkc1tpXS5uYW1lLCBib2FyZHNbaV0uaWQsICgpID0+IHtcclxuICAgICAgICAgICAgbG9hZFRhc2tzKGJvYXJkc1tpXS5pZCwgdGFza3NDYXJkc0NvbnRhaW5lciwgKCkgPT4gdGFza3NDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eUJvYXJkVGlwKCdPb3BzISBObyB0YXNrcyBoZXJlJywgY2hvb3NlQUJvYXJkSW1hZ2UpKSlcclxuXHJcbiAgICAgICAgICAgIGN1cnJlbnRCb2FyZCA9IGJvYXJkc1tpXS5pZFxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG59KVxyXG5cclxuLy8gQWRkIEJvYXJkXHJcbmFkZEJvYXJkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNb2RhbCgnQ3JlYXRlIEJvYXJkJywgW3sgdGl0bGU6ICdOYW1lJywgdHlwZTogJ3RleHQnLCBpZDogJ2JvYXJkLW5hbWUnIH1dLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9hcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYm9hcmRzKVxyXG5cclxuICAgICAgICBjb25zdCBib2FyZE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtbmFtZScpLnZhbHVlXHJcbiAgICAgICAgbGV0IGJvYXJkSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OSlcclxuXHJcbiAgICAgICAgaWYgKGJvYXJkTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICB3aGlsZSAoYmluYXJ5U2VhcmNoKGJvYXJkcywgJ2lkJywgYm9hcmRJZCkgPT0gbnVsbCkgYm9hcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5KVxyXG5cclxuICAgICAgICAgICAgYm9hcmRDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVCb2FyZChib2FyZHNbaV0ubmFtZSwgYm9hcmRzW2ldLmlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsb2FkVGFza3MoYm9hcmRJZCwgdGFza3NDYXJkc0NvbnRhaW5lciwgKCkgPT4gdGFza3NDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eUJvYXJkVGlwKCdPb3BzISBObyB0YXNrcyBoZXJlJywgY2hvb3NlQUJvYXJkSW1hZ2UpKSlcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Qm9hcmQgPSBib2FyZElkXHJcbiAgICAgICAgICAgIH0pKVxyXG5cclxuICAgICAgICAgICAgYm9hcmRzLnB1c2goeyBuYW1lOiBib2FyZE5hbWUsIGlkOiBib2FyZElkIH0pXHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuYm9hcmRzID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRzKVxyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG59KVxyXG5cclxuLy8gQWRkIFRhc2tcclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50Qm9hcmQgIT0gMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwoJ0NyZWF0ZSBUYXNrJywgW3sgdGl0bGU6ICdOYW1lJywgdHlwZTogJ3RleHQnLCBpZDogJ3Rhc2stbmFtZScgfSwgeyB0aXRsZTogJ0Rlc2NyaXB0aW9uJywgdHlwZTogJ3RleHQnLCBpZDogJ3Rhc2stZGVzY3JpcHRpb24nIH0sIHsgdGl0bGU6ICdEdWUgRGF0ZSAnLCB0eXBlOiAnZGF0ZScsIGlkOiAndGFzay1kdWVEYXRlJyB9LCB7IHRpdGxlOiAnUHJpb3JpdHkgJywgdHlwZTogJ251bWJlcicsIGlkOiAndGFzay1wcmlvcml0eScgfV0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpLnZhbHVlXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2NyaXB0aW9uJykudmFsdWVcclxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kdWVEYXRlJykudmFsdWVcclxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stcHJpb3JpdHknKS52YWx1ZVxyXG5cclxuICAgICAgICAgICAgbGV0IHRhc2tJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5KVxyXG5cclxuICAgICAgICAgICAgaWYgKHRhc2tOYW1lICE9ICcnICYmIHRhc2tOYW1lICE9ICcnICYmIHRhc2tEZXNjcmlwdGlvbiAhPSAnJyAmJiB0YXNrRHVlRGF0ZSAhPSAnJyAmJiB0YXNrUHJpb3JpdHkgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChiaW5hcnlTZWFyY2godGFza3MsICdpZCcsIHRhc2tJZCkgPT0gbnVsbCkgdGFza0lkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTkpXHJcbiAgICAgICAgICAgICAgICB0YXNrc0NhcmRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tJZCkpXHJcblxyXG4gICAgICAgICAgICAgICAgdGFza3MucHVzaCh7IHRpdGxlOiB0YXNrTmFtZSwgYm9hcmRJZDogY3VycmVudEJvYXJkLCBpZDogdGFza0lkLCBkZXNjcmlwdGlvbjogdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZTogdGFza0R1ZURhdGUsIHRhc2tQcmlvcml0eTogdGFza1ByaW9yaXR5LCB0YXNrRG9uZTogZmFsc2UgfSlcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFza3MpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH1cclxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=