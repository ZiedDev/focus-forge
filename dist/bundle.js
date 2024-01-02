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
    board.id = boardId

    let name = document.createElement('h2')
    name.textContent = boardName
    board.appendChild(name)

    board.addEventListener('click', () => boardOnClickEvent(), console.log('l'))

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
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   readFromTasks: () => (/* binding */ readFromTasks),
/* harmony export */   updateTasks: () => (/* binding */ updateTasks)
/* harmony export */ });
/* harmony import */ var _binarySearch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binarySearch.js */ "./src/js/binarySearch.js");
/* harmony import */ var _media_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media.js */ "./src/js/media.js");



function createTask(taskName, taskId) {
    const task = document.createElement('div')
    task.classList.add('task-card')
    task.id = taskId

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

function loadTasks(boardId, tasksCardsContainer) {
    tasksCardsContainer.innerHTML = ''

    const tasks = JSON.parse(localStorage.tasks).filter((task) => task.boardId == boardId)

    for (let i = 0; i < tasks.length; i++) {
        tasksCardsContainer.appendChild(createTask(tasks[i].title, tasks[i].id))
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
document.getElementById('chooseABoard').appendChild(_media_js__WEBPACK_IMPORTED_MODULE_3__.chooseABoardImage)

const imageDescription = document.createElement('h2')
imageDescription.textContent = 'Choose a board'
document.getElementById('chooseABoard').appendChild(imageDescription)

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.boards == undefined) localStorage.setItem('boards', '[]')
    if (localStorage.tasks == undefined) localStorage.setItem('tasks', '[]')

    const boards = JSON.parse(localStorage.boards)

    for (let i = 0; i < boards.length; i++) {
        boardCardsContainer.appendChild((0,_boards_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(boards[i].name, boards[i].id, () =>
            (0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.loadTasks)(boards[i].id, tasksCardsContainer, currentBoard = boards[i].id)))
    }

})

addBoardButton.addEventListener('click', () => {
    document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.createModal)('Create Board', [{ title: 'Name', type: 'text', id: 'board-name' }], () => {
        const boards = JSON.parse(localStorage.boards)

        const boardName = document.getElementById('board-name').value
        let boardId = Math.floor(Math.random() * 99999)

        if (boardName != '') {
            while ((0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_2__.binarySearch)(boards, 'id', boardId) == null) boardId = Math.floor(Math.random() * 99999)
            boardCardsContainer.appendChild((0,_boards_js__WEBPACK_IMPORTED_MODULE_4__.createBoard)(boardName, boardId, () => (0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.loadTasks)(boardId, tasksCardsContainer), currentBoard = boardId))

            boards.push({ name: boardName, id: boardId })

            localStorage.boards = JSON.stringify(boards)
        }
    }))
})

addTaskButton.addEventListener('click', () => {
    if (currentBoard != 0) {
        document.body.appendChild((0,_modal_js__WEBPACK_IMPORTED_MODULE_1__.createModal)('Create Task', [{ title: 'Name', type: 'text', id: 'task-name' }, { title: 'Description', type: 'text', id: 'task-description' }, { title: 'Due Date ', type: 'date', id: 'task-dueDate' }, { title: 'Priority ', type: 'number', id: 'task-priority' }], () => {
            const tasks = JSON.parse(localStorage.tasks)

            const taskName = document.getElementById('task-name').value
            let taskId = Math.floor(Math.random() * 99999)

            if (taskName != '') {
                while ((0,_binarySearch_js__WEBPACK_IMPORTED_MODULE_2__.binarySearch)(tasks, 'id', taskId) == null) taskId = Math.floor(Math.random() * 99999)
                tasksCardsContainer.appendChild((0,_tasks_js__WEBPACK_IMPORTED_MODULE_5__.createTask)(taskName, taskId))

                tasks.push({ title: taskName, boardId: currentBoard, id: taskId })

                console.log(tasks)

                localStorage.tasks = JSON.stringify(tasks)
            }
        }))
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUNBQW1DO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FB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InNvdXJjZXMiOlsid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbW9kYWxzLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbmF2QmFyLmNzcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9jc3MvbW9kYWxzLmNzcz9iOTkxIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2Nzcy9uYXZCYXIuY3NzP2M2NTciLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2UvLi9zcmMvanMvYmluYXJ5U2VhcmNoLmpzIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2JvYXJkcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9tZWRpYS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy90YXNrcy5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS8uL3NyYy9qcy90aGVtZS5qcyIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9mb2N1cy1mb3JnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZvY3VzLWZvcmdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZm9jdXMtZm9yZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2ZvY3VzLWZvcmdlLy4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBtYWluIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1cmVtKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5ib2FyZHMtc2VjdGlvbiB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xMDApO1xyXG59XHJcblxyXG4uYm9hcmRzLXNlY3Rpb24+LnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAtIDNwdCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuICAgIGJvcmRlci1ib3R0b206IDNwdCBzb2xpZCB2YXIoLS1hY2NlbnQtNDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDA7XHJcbn1cclxuXHJcbi5hZGQtYm9hcmQtYnV0dG9uIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYWRkLWJvYXJkLWJ1dHRvbj5wYXRoIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtNDAwKTtcclxufVxyXG5cclxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMC41cmVtO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZHMtY29udGFpbmVyOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG59XHJcblxyXG4uYm9hcmQtY2FyZCB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5ib2FyZC1jYXJkOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYihmcm9tIHZhcigtLXByaW1hcnktNTAwKSByIGcgYiAvIDUwJSk7XHJcbn1cclxuXHJcbi50YXNrcy1zZWN0aW9uIHtcclxuICAgIGZsZXg6IDM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcclxufVxyXG5cclxuLnRhc2tzLXNlY3Rpb24+LnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAtIDNwdCk7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgYm9yZGVyLWxlZnQ6IDEuNXB0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDAgMXJlbTtcclxufVxyXG5cclxuLmFkZC10YXNrLWJ1dHRvbiB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmFkZC10YXNrLWJ1dHRvbj5wYXRoIHtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtNDAwKTtcclxufVxyXG5cclxuLnRhc2tzLWNhcmRzLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDA7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDZyZW0pO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLnRhc2stY2FyZCB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMnJlbSk7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGN1cnNvcjogZ3JhYjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMjAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcblxyXG4gICAgZ2FwOiAwLjVyZW07XHJcbn1cclxuXHJcbi50YXNrLWNhcmQ+ZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jaG9vc2VBQm9hcmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEuNXJlbTtcclxufVxyXG5cclxuLmNob29zZUFCb2FyZD5pbWcge1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QiwyQ0FBMkM7SUFDM0MsMENBQTBDO0lBQzFDLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLHdCQUF3Qjs7SUFFeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksT0FBTztJQUNQLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUIsMENBQTBDO0lBQzFDLDBDQUEwQztJQUMxQyx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qix3QkFBd0I7O0lBRXhCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLG1CQUFtQjs7SUFFbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wibWFpbiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDVyZW0pO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmRzLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTEwMCk7XFxyXFxufVxcclxcblxcclxcbi5ib2FyZHMtc2VjdGlvbj4udGl0bGUge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoM3JlbSAtIDNwdCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5hZGQtYm9hcmQtYnV0dG9uIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1ib2FyZC1idXR0b24+cGF0aCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtNDAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lciB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuXFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkcy1jb250YWluZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkLWNhcmRzLWNvbnRhaW5lcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTUwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkIHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC1jYXJkOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKGZyb20gdmFyKC0tcHJpbWFyeS01MDApIHIgZyBiIC8gNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLXNlY3Rpb24ge1xcclxcbiAgICBmbGV4OiAzO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLTUwKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLXNlY3Rpb24+LnRpdGxlIHtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDNyZW0gLSAzcHQpO1xcclxcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDEuNXB0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHQgc29saWQgdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDFyZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtdGFzay1idXR0b24ge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkLXRhc2stYnV0dG9uPnBhdGgge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LTQwMCk7XFxyXFxufVxcclxcblxcclxcbi50YXNrcy1jYXJkcy1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2cmVtKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQge1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbTtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktMjAwKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG5cXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNhcmQ+ZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2hvb3NlQUJvYXJkIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNob29zZUFCb2FyZD5pbWcge1xcclxcbiAgICBoZWlnaHQ6IDUwJTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubW9kYWwtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbGVmdDogMDtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtNTApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAxMDBtcyBlYXNlLW91dDtcclxufVxyXG5cclxuLm1vZGFsPmRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubW9kYWwgaW5wdXQsXHJcbi5tb2RhbD5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgdmFyKC0tYWNjZW50LTMwMCk7XHJcblxyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWwgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICAgIGhlaWdodDogMnJlbTtcclxuICAgIHdpZHRoOiAycmVtO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgdmFyKC0tYWNjZW50LTMwMCk7XHJcblxyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuXHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4ubW9kYWw+YnV0dG9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJhY2tkcm9wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDk1O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG5cclxuICAgIGFuaW1hdGlvbjogZmFkZUlkIGZvcndhcmRzIDEwMG1zO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGVJZCB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBzY2FsZTogMDtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgc2NhbGU6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NXB4KSB7XHJcblxyXG4gICAgLm1vZGFsPmRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb2RhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBQ1QsUUFBUTtJQUNSLE9BQU87O0lBRVAsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsbUJBQW1COztJQUVuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUzs7SUFFVCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBOztJQUVJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUNBQW1DOztJQUVuQyxnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsbUNBQW1DOztJQUVuQyxnQkFBZ0I7O0lBRWhCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1Asb0NBQW9DOztJQUVwQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtNTApO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcblxcclxcbiAgICBhbmltYXRpb246IHpvb21JbiBmb3J3YXJkcyAxMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsPmRpdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0LFxcclxcbi5tb2RhbD5idXR0b24ge1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAzcHQgdmFyKC0tYWNjZW50LTMwMCk7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuXFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJvcmRlcjogc29saWQgM3B0IHZhcigtLWFjY2VudC0zMDApO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcblxcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWw+YnV0dG9uIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFja2Ryb3Age1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDk1O1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG5cXHJcXG4gICAgYW5pbWF0aW9uOiBmYWRlSWQgZm9yd2FyZHMgMTAwbXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgZmFkZUlkIHtcXHJcXG4gICAgZnJvbSB7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyB6b29tSW4ge1xcclxcbiAgICBmcm9tIHtcXHJcXG4gICAgICAgIHNjYWxlOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHRvIHtcXHJcXG4gICAgICAgIHNjYWxlOiAxO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ3NXB4KSB7XFxyXFxuXFxyXFxuICAgIC5tb2RhbD5kaXYge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBuYXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgaGVpZ2h0OiBjYWxjKDVyZW0gLSAzcHQpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktNDAwKTtcclxufVxyXG5cclxubmF2Pi50aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxubmF2Pi50aXRsZT5oMSB7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4udGhlbWUtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB3aWR0aDogNXJlbTtcclxuICAgIGhlaWdodDogNXJlbTtcclxufVxyXG5cclxuLnRoZW1lLXN3aXRjaCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRoZW1lLXN3aXRjaDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1wcmltYXJ5LTQwMCkgciBnIGIgLyAzMCUpO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdkJhci5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjs7SUFFbkIsd0JBQXdCO0lBQ3hCLDBDQUEwQzs7SUFFMUMsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsU0FBUztBQUNiOzs7QUFHQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjs7SUFFbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCOztJQUVsQixXQUFXO0lBQ1gsWUFBWTs7SUFFWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDBEQUEwRDtBQUM5RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJuYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogY2FsYyg1cmVtIC0gM3B0KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B0IHNvbGlkIHZhcigtLWFjY2VudC00MDApO1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LTQwMCk7XFxyXFxufVxcclxcblxcclxcbm5hdj4udGl0bGUge1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5uYXY+LnRpdGxlPmgxIHtcXHJcXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRoZW1lLWJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgaGVpZ2h0OiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGhlbWUtc3dpdGNoIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcblxcclxcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1zd2l0Y2g6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoZnJvbSB2YXIoLS1wcmltYXJ5LTQwMCkgciBnIGIgLyAzMCUpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLVZhcmlhYmxlRm9udF93Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL21lZGlhL2ZvbnRzL3J1YmlrL1J1YmlrLUl0YWxpYy1WYXJpYWJsZUZvbnRfd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdFtkYXRhLXRoZW1lPVwibGlnaHRcIl0ge1xyXG4gICAgLS10ZXh0LTUwOiByZ2IoMjM3LCAyMzcsIDI0OCk7XHJcbiAgICAtLXRleHQtMTAwOiByZ2IoMjIwLCAyMTgsIDI0MSk7XHJcbiAgICAtLXRleHQtMjAwOiByZ2IoMTg1LCAxODIsIDIyNik7XHJcbiAgICAtLXRleHQtMzAwOiByZ2IoMTQ5LCAxNDUsIDIxMik7XHJcbiAgICAtLXRleHQtNDAwOiByZ2IoMTE0LCAxMDgsIDE5OCk7XHJcbiAgICAtLXRleHQtNTAwOiByZ2IoNzksIDcxLCAxODQpO1xyXG4gICAgLS10ZXh0LTYwMDogcmdiKDYzLCA1NywgMTQ3KTtcclxuICAgIC0tdGV4dC03MDA6IHJnYig0NywgNDMsIDExMCk7XHJcbiAgICAtLXRleHQtODAwOiByZ2IoMzIsIDI5LCA3Myk7XHJcbiAgICAtLXRleHQtOTAwOiByZ2IoMTYsIDE0LCAzNyk7XHJcbiAgICAtLXRleHQtOTUwOiByZ2IoOCwgNywgMTgpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC01MDogcmdiKDIzNiwgMjM2LCAyNDkpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTEwMDogcmdiKDIxOCwgMjE2LCAyNDMpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTIwMDogcmdiKDE4MSwgMTc4LCAyMzApO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTMwMDogcmdiKDE0MywgMTM5LCAyMTgpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTQwMDogcmdiKDEwNiwgMTAxLCAyMDUpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTUwMDogcmdiKDY5LCA2MiwgMTkzKTtcclxuICAgIC0tYmFja2dyb3VuZC02MDA6IHJnYig1NSwgNTAsIDE1NCk7XHJcbiAgICAtLWJhY2tncm91bmQtNzAwOiByZ2IoNDEsIDM3LCAxMTYpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTgwMDogcmdiKDI4LCAyNSwgNzcpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTkwMDogcmdiKDE0LCAxMiwgMzkpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTk1MDogcmdiKDcsIDYsIDE5KTtcclxuXHJcbiAgICAtLXByaW1hcnktNTA6IHJnYigyMzcsIDIzNiwgMjQ4KTtcclxuICAgIC0tcHJpbWFyeS0xMDA6IHJnYigyMTksIDIxOCwgMjQxKTtcclxuICAgIC0tcHJpbWFyeS0yMDA6IHJnYigxODMsIDE4MCwgMjI4KTtcclxuICAgIC0tcHJpbWFyeS0zMDA6IHJnYigxNDcsIDE0MywgMjE0KTtcclxuICAgIC0tcHJpbWFyeS00MDA6IHJnYigxMTEsIDEwNSwgMjAxKTtcclxuICAgIC0tcHJpbWFyeS01MDA6IHJnYig3NiwgNjgsIDE4Nyk7XHJcbiAgICAtLXByaW1hcnktNjAwOiByZ2IoNjAsIDU0LCAxNTApO1xyXG4gICAgLS1wcmltYXJ5LTcwMDogcmdiKDQ1LCA0MSwgMTEyKTtcclxuICAgIC0tcHJpbWFyeS04MDA6IHJnYigzMCwgMjcsIDc1KTtcclxuICAgIC0tcHJpbWFyeS05MDA6IHJnYigxNSwgMTQsIDM3KTtcclxuICAgIC0tcHJpbWFyeS05NTA6IHJnYig4LCA3LCAxOSk7XHJcblxyXG4gICAgLS1zZWNvbmRhcnktNTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTEwMDogcmdiKDIxNCwgMjEyLCAyNDcpO1xyXG4gICAgLS1zZWNvbmRhcnktMjAwOiByZ2IoMTc0LCAxNjksIDIzOSk7XHJcbiAgICAtLXNlY29uZGFyeS0zMDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTQwMDogcmdiKDkzLCA4NCwgMjIyKTtcclxuICAgIC0tc2Vjb25kYXJ5LTUwMDogcmdiKDUyLCA0MSwgMjE0KTtcclxuICAgIC0tc2Vjb25kYXJ5LTYwMDogcmdiKDQyLCAzMywgMTcxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTcwMDogcmdiKDMxLCAyNCwgMTI5KTtcclxuICAgIC0tc2Vjb25kYXJ5LTgwMDogcmdiKDIxLCAxNiwgODYpO1xyXG4gICAgLS1zZWNvbmRhcnktOTAwOiByZ2IoMTAsIDgsIDQzKTtcclxuICAgIC0tc2Vjb25kYXJ5LTk1MDogcmdiKDUsIDQsIDIxKTtcclxuXHJcbiAgICAtLWFjY2VudC01MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xyXG4gICAgLS1hY2NlbnQtMTAwOiByZ2IoMjEwLCAyMDcsIDI1Mik7XHJcbiAgICAtLWFjY2VudC0yMDA6IHJnYigxNjQsIDE1OCwgMjUwKTtcclxuICAgIC0tYWNjZW50LTMwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xyXG4gICAgLS1hY2NlbnQtNDAwOiByZ2IoNzMsIDYxLCAyNDUpO1xyXG4gICAgLS1hY2NlbnQtNTAwOiByZ2IoMjgsIDEzLCAyNDIpO1xyXG4gICAgLS1hY2NlbnQtNjAwOiByZ2IoMjIsIDEwLCAxOTQpO1xyXG4gICAgLS1hY2NlbnQtNzAwOiByZ2IoMTcsIDgsIDE0NSk7XHJcbiAgICAtLWFjY2VudC04MDA6IHJnYigxMSwgNSwgOTcpO1xyXG4gICAgLS1hY2NlbnQtOTAwOiByZ2IoNiwgMywgNDgpO1xyXG4gICAgLS1hY2NlbnQtOTUwOiByZ2IoMywgMSwgMjQpO1xyXG5cclxufVxyXG5cclxuOnJvb3RbZGF0YS10aGVtZT1cImRhcmtcIl0ge1xyXG4gICAgLS10ZXh0LTUwOiByZ2IoOCwgNywgMTgpO1xyXG4gICAgLS10ZXh0LTEwMDogcmdiKDE2LCAxNCwgMzcpO1xyXG4gICAgLS10ZXh0LTIwMDogcmdiKDMyLCAyOSwgNzMpO1xyXG4gICAgLS10ZXh0LTMwMDogcmdiKDQ3LCA0MywgMTEwKTtcclxuICAgIC0tdGV4dC00MDA6IHJnYig2MywgNTcsIDE0Nyk7XHJcbiAgICAtLXRleHQtNTAwOiByZ2IoNzksIDcxLCAxODQpO1xyXG4gICAgLS10ZXh0LTYwMDogcmdiKDExNCwgMTA4LCAxOTgpO1xyXG4gICAgLS10ZXh0LTcwMDogcmdiKDE0OSwgMTQ1LCAyMTIpO1xyXG4gICAgLS10ZXh0LTgwMDogcmdiKDE4NSwgMTgyLCAyMjYpO1xyXG4gICAgLS10ZXh0LTkwMDogcmdiKDIyMCwgMjE4LCAyNDEpO1xyXG4gICAgLS10ZXh0LTk1MDogcmdiKDIzNywgMjM3LCAyNDgpO1xyXG5cclxuICAgIC0tYmFja2dyb3VuZC01MDogcmdiKDcsIDYsIDE5KTtcclxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigxNCwgMTIsIDM5KTtcclxuICAgIC0tYmFja2dyb3VuZC0yMDA6IHJnYigyOCwgMjUsIDc3KTtcclxuICAgIC0tYmFja2dyb3VuZC0zMDA6IHJnYig0MSwgMzcsIDExNik7XHJcbiAgICAtLWJhY2tncm91bmQtNDAwOiByZ2IoNTUsIDUwLCAxNTQpO1xyXG4gICAgLS1iYWNrZ3JvdW5kLTUwMDogcmdiKDY5LCA2MiwgMTkzKTtcclxuICAgIC0tYmFja2dyb3VuZC02MDA6IHJnYigxMDYsIDEwMSwgMjA1KTtcclxuICAgIC0tYmFja2dyb3VuZC03MDA6IHJnYigxNDMsIDEzOSwgMjE4KTtcclxuICAgIC0tYmFja2dyb3VuZC04MDA6IHJnYigxODEsIDE3OCwgMjMwKTtcclxuICAgIC0tYmFja2dyb3VuZC05MDA6IHJnYigyMTgsIDIxNiwgMjQzKTtcclxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYigyMzYsIDIzNiwgMjQ5KTtcclxuXHJcbiAgICAtLXByaW1hcnktNTA6IHJnYig4LCA3LCAxOSk7XHJcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMTUsIDE0LCAzNyk7XHJcbiAgICAtLXByaW1hcnktMjAwOiByZ2IoMzAsIDI3LCA3NSk7XHJcbiAgICAtLXByaW1hcnktMzAwOiByZ2IoNDUsIDQxLCAxMTIpO1xyXG4gICAgLS1wcmltYXJ5LTQwMDogcmdiKDYwLCA1NCwgMTUwKTtcclxuICAgIC0tcHJpbWFyeS01MDA6IHJnYig3NiwgNjgsIDE4Nyk7XHJcbiAgICAtLXByaW1hcnktNjAwOiByZ2IoMTExLCAxMDUsIDIwMSk7XHJcbiAgICAtLXByaW1hcnktNzAwOiByZ2IoMTQ3LCAxNDMsIDIxNCk7XHJcbiAgICAtLXByaW1hcnktODAwOiByZ2IoMTgzLCAxODAsIDIyOCk7XHJcbiAgICAtLXByaW1hcnktOTAwOiByZ2IoMjE5LCAyMTgsIDI0MSk7XHJcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoMjM3LCAyMzYsIDI0OCk7XHJcblxyXG4gICAgLS1zZWNvbmRhcnktNTA6IHJnYig1LCA0LCAyMSk7XHJcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigxMCwgOCwgNDMpO1xyXG4gICAgLS1zZWNvbmRhcnktMjAwOiByZ2IoMjEsIDE2LCA4Nik7XHJcbiAgICAtLXNlY29uZGFyeS0zMDA6IHJnYigzMSwgMjQsIDEyOSk7XHJcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig0MiwgMzMsIDE3MSk7XHJcbiAgICAtLXNlY29uZGFyeS01MDA6IHJnYig1MiwgNDEsIDIxNCk7XHJcbiAgICAtLXNlY29uZGFyeS02MDA6IHJnYig5MywgODQsIDIyMik7XHJcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigxMzMsIDEyNiwgMjMxKTtcclxuICAgIC0tc2Vjb25kYXJ5LTgwMDogcmdiKDE3NCwgMTY5LCAyMzkpO1xyXG4gICAgLS1zZWNvbmRhcnktOTAwOiByZ2IoMjE0LCAyMTIsIDI0Nyk7XHJcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYigyMzUsIDIzNCwgMjUxKTtcclxuXHJcbiAgICAtLWFjY2VudC01MDogcmdiKDMsIDEsIDI0KTtcclxuICAgIC0tYWNjZW50LTEwMDogcmdiKDYsIDMsIDQ4KTtcclxuICAgIC0tYWNjZW50LTIwMDogcmdiKDExLCA1LCA5Nyk7XHJcbiAgICAtLWFjY2VudC0zMDA6IHJnYigxNywgOCwgMTQ1KTtcclxuICAgIC0tYWNjZW50LTQwMDogcmdiKDIyLCAxMCwgMTk0KTtcclxuICAgIC0tYWNjZW50LTUwMDogcmdiKDI4LCAxMywgMjQyKTtcclxuICAgIC0tYWNjZW50LTYwMDogcmdiKDczLCA2MSwgMjQ1KTtcclxuICAgIC0tYWNjZW50LTcwMDogcmdiKDExOSwgMTEwLCAyNDcpO1xyXG4gICAgLS1hY2NlbnQtODAwOiByZ2IoMTY0LCAxNTgsIDI1MCk7XHJcbiAgICAtLWFjY2VudC05MDA6IHJnYigyMTAsIDIwNywgMjUyKTtcclxuICAgIC0tYWNjZW50LTk1MDogcmdiKDIzMiwgMjMxLCAyNTQpO1xyXG5cclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgSXRhbGljJztcclxuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGhlaWdodDogMTAwZHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xMDApO1xyXG59XHJcblxyXG5ib2R5LFxyXG5ib2R5ICoge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSdWJpaycsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAwKTtcclxuXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLHlCQUF5Qjs7SUFFekIsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLCtCQUErQjs7SUFFL0IsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDRCQUE0Qjs7SUFFNUIsa0NBQWtDO0lBQ2xDLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLDhCQUE4Qjs7SUFFOUIsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDO0lBQ2hDLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1Qiw4QkFBOEI7SUFDOUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsOEJBQThCOztJQUU5Qiw4QkFBOEI7SUFDOUIsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsb0NBQW9DOztJQUVwQywyQkFBMkI7SUFDM0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsaUNBQWlDOztJQUVqQyw2QkFBNkI7SUFDN0IsK0JBQStCO0lBQy9CLGdDQUFnQztJQUNoQyxpQ0FBaUM7SUFDakMsaUNBQWlDO0lBQ2pDLGlDQUFpQztJQUNqQyxpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLG1DQUFtQztJQUNuQyxtQ0FBbUM7SUFDbkMsbUNBQW1DOztJQUVuQywwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5Qiw4QkFBOEI7SUFDOUIsZ0NBQWdDO0lBQ2hDLGdDQUFnQztJQUNoQyxnQ0FBZ0M7SUFDaEMsZ0NBQWdDOztBQUVwQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBMEQ7QUFDOUQ7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQWlFO0FBQ3JFOztBQUVBO0lBQ0ksY0FBYztJQUNkLHVDQUF1QztBQUMzQzs7QUFFQTs7SUFFSSw0SkFBNEo7SUFDNUosc0JBQXNCOztJQUV0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290W2RhdGEtdGhlbWU9XFxcImxpZ2h0XFxcIl0ge1xcclxcbiAgICAtLXRleHQtNTA6IHJnYigyMzcsIDIzNywgMjQ4KTtcXHJcXG4gICAgLS10ZXh0LTEwMDogcmdiKDIyMCwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXRleHQtMjAwOiByZ2IoMTg1LCAxODIsIDIyNik7XFxyXFxuICAgIC0tdGV4dC0zMDA6IHJnYigxNDksIDE0NSwgMjEyKTtcXHJcXG4gICAgLS10ZXh0LTQwMDogcmdiKDExNCwgMTA4LCAxOTgpO1xcclxcbiAgICAtLXRleHQtNTAwOiByZ2IoNzksIDcxLCAxODQpO1xcclxcbiAgICAtLXRleHQtNjAwOiByZ2IoNjMsIDU3LCAxNDcpO1xcclxcbiAgICAtLXRleHQtNzAwOiByZ2IoNDcsIDQzLCAxMTApO1xcclxcbiAgICAtLXRleHQtODAwOiByZ2IoMzIsIDI5LCA3Myk7XFxyXFxuICAgIC0tdGV4dC05MDA6IHJnYigxNiwgMTQsIDM3KTtcXHJcXG4gICAgLS10ZXh0LTk1MDogcmdiKDgsIDcsIDE4KTtcXHJcXG5cXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTUwOiByZ2IoMjM2LCAyMzYsIDI0OSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0xMDA6IHJnYigyMTgsIDIxNiwgMjQzKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTIwMDogcmdiKDE4MSwgMTc4LCAyMzApO1xcclxcbiAgICAtLWJhY2tncm91bmQtMzAwOiByZ2IoMTQzLCAxMzksIDIxOCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC00MDA6IHJnYigxMDYsIDEwMSwgMjA1KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTUwMDogcmdiKDY5LCA2MiwgMTkzKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTYwMDogcmdiKDU1LCA1MCwgMTU0KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTcwMDogcmdiKDQxLCAzNywgMTE2KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTgwMDogcmdiKDI4LCAyNSwgNzcpO1xcclxcbiAgICAtLWJhY2tncm91bmQtOTAwOiByZ2IoMTQsIDEyLCAzOSk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC05NTA6IHJnYig3LCA2LCAxOSk7XFxyXFxuXFxyXFxuICAgIC0tcHJpbWFyeS01MDogcmdiKDIzNywgMjM2LCAyNDgpO1xcclxcbiAgICAtLXByaW1hcnktMTAwOiByZ2IoMjE5LCAyMTgsIDI0MSk7XFxyXFxuICAgIC0tcHJpbWFyeS0yMDA6IHJnYigxODMsIDE4MCwgMjI4KTtcXHJcXG4gICAgLS1wcmltYXJ5LTMwMDogcmdiKDE0NywgMTQzLCAyMTQpO1xcclxcbiAgICAtLXByaW1hcnktNDAwOiByZ2IoMTExLCAxMDUsIDIwMSk7XFxyXFxuICAgIC0tcHJpbWFyeS01MDA6IHJnYig3NiwgNjgsIDE4Nyk7XFxyXFxuICAgIC0tcHJpbWFyeS02MDA6IHJnYig2MCwgNTQsIDE1MCk7XFxyXFxuICAgIC0tcHJpbWFyeS03MDA6IHJnYig0NSwgNDEsIDExMik7XFxyXFxuICAgIC0tcHJpbWFyeS04MDA6IHJnYigzMCwgMjcsIDc1KTtcXHJcXG4gICAgLS1wcmltYXJ5LTkwMDogcmdiKDE1LCAxNCwgMzcpO1xcclxcbiAgICAtLXByaW1hcnktOTUwOiByZ2IoOCwgNywgMTkpO1xcclxcblxcclxcbiAgICAtLXNlY29uZGFyeS01MDogcmdiKDIzNSwgMjM0LCAyNTEpO1xcclxcbiAgICAtLXNlY29uZGFyeS0xMDA6IHJnYigyMTQsIDIxMiwgMjQ3KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktMjAwOiByZ2IoMTc0LCAxNjksIDIzOSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTMwMDogcmdiKDEzMywgMTI2LCAyMzEpO1xcclxcbiAgICAtLXNlY29uZGFyeS00MDA6IHJnYig5MywgODQsIDIyMik7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTUwMDogcmdiKDUyLCA0MSwgMjE0KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNjAwOiByZ2IoNDIsIDMzLCAxNzEpO1xcclxcbiAgICAtLXNlY29uZGFyeS03MDA6IHJnYigzMSwgMjQsIDEyOSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTgwMDogcmdiKDIxLCAxNiwgODYpO1xcclxcbiAgICAtLXNlY29uZGFyeS05MDA6IHJnYigxMCwgOCwgNDMpO1xcclxcbiAgICAtLXNlY29uZGFyeS05NTA6IHJnYig1LCA0LCAyMSk7XFxyXFxuXFxyXFxuICAgIC0tYWNjZW50LTUwOiByZ2IoMjMyLCAyMzEsIDI1NCk7XFxyXFxuICAgIC0tYWNjZW50LTEwMDogcmdiKDIxMCwgMjA3LCAyNTIpO1xcclxcbiAgICAtLWFjY2VudC0yMDA6IHJnYigxNjQsIDE1OCwgMjUwKTtcXHJcXG4gICAgLS1hY2NlbnQtMzAwOiByZ2IoMTE5LCAxMTAsIDI0Nyk7XFxyXFxuICAgIC0tYWNjZW50LTQwMDogcmdiKDczLCA2MSwgMjQ1KTtcXHJcXG4gICAgLS1hY2NlbnQtNTAwOiByZ2IoMjgsIDEzLCAyNDIpO1xcclxcbiAgICAtLWFjY2VudC02MDA6IHJnYigyMiwgMTAsIDE5NCk7XFxyXFxuICAgIC0tYWNjZW50LTcwMDogcmdiKDE3LCA4LCAxNDUpO1xcclxcbiAgICAtLWFjY2VudC04MDA6IHJnYigxMSwgNSwgOTcpO1xcclxcbiAgICAtLWFjY2VudC05MDA6IHJnYig2LCAzLCA0OCk7XFxyXFxuICAgIC0tYWNjZW50LTk1MDogcmdiKDMsIDEsIDI0KTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuOnJvb3RbZGF0YS10aGVtZT1cXFwiZGFya1xcXCJdIHtcXHJcXG4gICAgLS10ZXh0LTUwOiByZ2IoOCwgNywgMTgpO1xcclxcbiAgICAtLXRleHQtMTAwOiByZ2IoMTYsIDE0LCAzNyk7XFxyXFxuICAgIC0tdGV4dC0yMDA6IHJnYigzMiwgMjksIDczKTtcXHJcXG4gICAgLS10ZXh0LTMwMDogcmdiKDQ3LCA0MywgMTEwKTtcXHJcXG4gICAgLS10ZXh0LTQwMDogcmdiKDYzLCA1NywgMTQ3KTtcXHJcXG4gICAgLS10ZXh0LTUwMDogcmdiKDc5LCA3MSwgMTg0KTtcXHJcXG4gICAgLS10ZXh0LTYwMDogcmdiKDExNCwgMTA4LCAxOTgpO1xcclxcbiAgICAtLXRleHQtNzAwOiByZ2IoMTQ5LCAxNDUsIDIxMik7XFxyXFxuICAgIC0tdGV4dC04MDA6IHJnYigxODUsIDE4MiwgMjI2KTtcXHJcXG4gICAgLS10ZXh0LTkwMDogcmdiKDIyMCwgMjE4LCAyNDEpO1xcclxcbiAgICAtLXRleHQtOTUwOiByZ2IoMjM3LCAyMzcsIDI0OCk7XFxyXFxuXFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDogcmdiKDcsIDYsIDE5KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTEwMDogcmdiKDE0LCAxMiwgMzkpO1xcclxcbiAgICAtLWJhY2tncm91bmQtMjAwOiByZ2IoMjgsIDI1LCA3Nyk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC0zMDA6IHJnYig0MSwgMzcsIDExNik7XFxyXFxuICAgIC0tYmFja2dyb3VuZC00MDA6IHJnYig1NSwgNTAsIDE1NCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC01MDA6IHJnYig2OSwgNjIsIDE5Myk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC02MDA6IHJnYigxMDYsIDEwMSwgMjA1KTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTcwMDogcmdiKDE0MywgMTM5LCAyMTgpO1xcclxcbiAgICAtLWJhY2tncm91bmQtODAwOiByZ2IoMTgxLCAxNzgsIDIzMCk7XFxyXFxuICAgIC0tYmFja2dyb3VuZC05MDA6IHJnYigyMTgsIDIxNiwgMjQzKTtcXHJcXG4gICAgLS1iYWNrZ3JvdW5kLTk1MDogcmdiKDIzNiwgMjM2LCAyNDkpO1xcclxcblxcclxcbiAgICAtLXByaW1hcnktNTA6IHJnYig4LCA3LCAxOSk7XFxyXFxuICAgIC0tcHJpbWFyeS0xMDA6IHJnYigxNSwgMTQsIDM3KTtcXHJcXG4gICAgLS1wcmltYXJ5LTIwMDogcmdiKDMwLCAyNywgNzUpO1xcclxcbiAgICAtLXByaW1hcnktMzAwOiByZ2IoNDUsIDQxLCAxMTIpO1xcclxcbiAgICAtLXByaW1hcnktNDAwOiByZ2IoNjAsIDU0LCAxNTApO1xcclxcbiAgICAtLXByaW1hcnktNTAwOiByZ2IoNzYsIDY4LCAxODcpO1xcclxcbiAgICAtLXByaW1hcnktNjAwOiByZ2IoMTExLCAxMDUsIDIwMSk7XFxyXFxuICAgIC0tcHJpbWFyeS03MDA6IHJnYigxNDcsIDE0MywgMjE0KTtcXHJcXG4gICAgLS1wcmltYXJ5LTgwMDogcmdiKDE4MywgMTgwLCAyMjgpO1xcclxcbiAgICAtLXByaW1hcnktOTAwOiByZ2IoMjE5LCAyMTgsIDI0MSk7XFxyXFxuICAgIC0tcHJpbWFyeS05NTA6IHJnYigyMzcsIDIzNiwgMjQ4KTtcXHJcXG5cXHJcXG4gICAgLS1zZWNvbmRhcnktNTA6IHJnYig1LCA0LCAyMSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTEwMDogcmdiKDEwLCA4LCA0Myk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTIwMDogcmdiKDIxLCAxNiwgODYpO1xcclxcbiAgICAtLXNlY29uZGFyeS0zMDA6IHJnYigzMSwgMjQsIDEyOSk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTQwMDogcmdiKDQyLCAzMywgMTcxKTtcXHJcXG4gICAgLS1zZWNvbmRhcnktNTAwOiByZ2IoNTIsIDQxLCAyMTQpO1xcclxcbiAgICAtLXNlY29uZGFyeS02MDA6IHJnYig5MywgODQsIDIyMik7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTcwMDogcmdiKDEzMywgMTI2LCAyMzEpO1xcclxcbiAgICAtLXNlY29uZGFyeS04MDA6IHJnYigxNzQsIDE2OSwgMjM5KTtcXHJcXG4gICAgLS1zZWNvbmRhcnktOTAwOiByZ2IoMjE0LCAyMTIsIDI0Nyk7XFxyXFxuICAgIC0tc2Vjb25kYXJ5LTk1MDogcmdiKDIzNSwgMjM0LCAyNTEpO1xcclxcblxcclxcbiAgICAtLWFjY2VudC01MDogcmdiKDMsIDEsIDI0KTtcXHJcXG4gICAgLS1hY2NlbnQtMTAwOiByZ2IoNiwgMywgNDgpO1xcclxcbiAgICAtLWFjY2VudC0yMDA6IHJnYigxMSwgNSwgOTcpO1xcclxcbiAgICAtLWFjY2VudC0zMDA6IHJnYigxNywgOCwgMTQ1KTtcXHJcXG4gICAgLS1hY2NlbnQtNDAwOiByZ2IoMjIsIDEwLCAxOTQpO1xcclxcbiAgICAtLWFjY2VudC01MDA6IHJnYigyOCwgMTMsIDI0Mik7XFxyXFxuICAgIC0tYWNjZW50LTYwMDogcmdiKDczLCA2MSwgMjQ1KTtcXHJcXG4gICAgLS1hY2NlbnQtNzAwOiByZ2IoMTE5LCAxMTAsIDI0Nyk7XFxyXFxuICAgIC0tYWNjZW50LTgwMDogcmdiKDE2NCwgMTU4LCAyNTApO1xcclxcbiAgICAtLWFjY2VudC05MDA6IHJnYigyMTAsIDIwNywgMjUyKTtcXHJcXG4gICAgLS1hY2NlbnQtOTUwOiByZ2IoMjMyLCAyMzEsIDI1NCk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJztcXHJcXG4gICAgc3JjOiB1cmwoLi4vbWVkaWEvZm9udHMvcnViaWsvUnViaWstVmFyaWFibGVGb250X3dnaHQudHRmKTtcXHJcXG59XFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsgSXRhbGljJztcXHJcXG4gICAgc3JjOiB1cmwoLi4vbWVkaWEvZm9udHMvcnViaWsvUnViaWstSXRhbGljLVZhcmlhYmxlRm9udF93Z2h0LnR0Zik7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMGR2aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC0xMDApO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmJvZHkgKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtOTAwKTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tb2RhbHMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdkJhci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGJpbmFyeVNlYXJjaChhcnIgPSBbXSwgcGFybTEsIGlkMSwgcGFybTIsIGlkMiA9IG51bGwpIHtcclxuICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICBsZXQgZW5kID0gYXJyLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgYXJyLnNvcnQoKGEsIGIpID0+IGFbcGFybTFdIC0gYltwYXJtMV0pXHJcbiAgICBhcnIuc29ydCgoYSwgYikgPT4gYVtwYXJtMl0gLSBiW3Bhcm0yXSlcclxuXHJcbiAgICB3aGlsZSAoc3RhcnQgPCBlbmQpIHtcclxuICAgICAgICBsZXQgbWlkID0gcGFyc2VJbnQoTWF0aC5mbG9vcigoc3RhcnQgKyBlbmQpIC8gMikpO1xyXG4gICAgICAgIGlmIChpZDIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoYXJyW21pZF1bcGFybTFdIDwgaWQxKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydCA9IG1pZCArIDFcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZCA9IG1pZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFyclttaWRdW3Bhcm0yXSA8IGlkMikge1xyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSBtaWQgKyAxXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJyW21pZF1bcGFybTJdID4gaWQyKSB7XHJcbiAgICAgICAgICAgICAgICBlbmQgPSBtaWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcnJbbWlkXVtwYXJtMV0gPCBpZDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydCA9IG1pZCArIDFcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gbWlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IHJldHVybiBbZW5kLCBhcnJbZW5kXV1cclxufVxyXG5cclxuZXhwb3J0IHsgYmluYXJ5U2VhcmNoIH0iLCJpbXBvcnQgeyBiaW5hcnlTZWFyY2ggfSBmcm9tICcuL2JpbmFyeVNlYXJjaC5qcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGJvYXJkTmFtZSwgYm9hcmRJZCwgYm9hcmRPbkNsaWNrRXZlbnQpIHtcclxuICAgIGxldCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKCdib2FyZC1jYXJkJylcclxuICAgIGJvYXJkLmlkID0gYm9hcmRJZFxyXG5cclxuICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IGJvYXJkTmFtZVxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICBib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJvYXJkT25DbGlja0V2ZW50KCksIGNvbnNvbGUubG9nKCdsJykpXHJcblxyXG4gICAgcmV0dXJuIGJvYXJkO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWFkRnJvbUJvYXJkcyhpZCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5ib2FyZHMgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9hcmRzJywgJ1tdJylcclxuXHJcbiAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgcmV0dXJuIGJpbmFyeVNlYXJjaChib2FyZHMsICdpZCcsIGlkKVsxXVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVCb2FyZHMoaWQsIGtleSwgbmV3VmFsdWUpIHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuYm9hcmRzID09IHVuZGVmaW5lZCkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2JvYXJkcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgYm9hcmRzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYm9hcmRzKVxyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gYmluYXJ5U2VhcmNoKGJvYXJkcywgJ2lkJywgaWQpWzBdXHJcblxyXG4gICAgYm9hcmRzW2luZGV4XVtrZXldID0gbmV3VmFsdWVcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2UuYm9hcmRzID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRzKVxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcyB9IiwiaW1wb3J0IGJsb2JfYm9hcmQgZnJvbSAnLi4vbWVkaWEvaW1hZ2VzL2Jsb2JfYm9hcmQucG5nJ1xyXG5cclxuZnVuY3Rpb24gcGFyc2VyKERPTVN0cmluZywgbWltZVR5cGUpIHtcclxuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKVxyXG4gICAgbGV0IGRvYyA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoRE9NU3RyaW5nLCBtaW1lVHlwZSlcclxuICAgIHJldHVybiBkb2MuZG9jdW1lbnRFbGVtZW50XHJcbn1cclxuXHJcbmNvbnN0IGNoZWNrU1ZHID0gcGFyc2VyKCc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjMyXCIgaGVpZ2h0PVwiMzJcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIj48cGF0aCBmaWxsPVwiY3VycmVudENvbG9yXCIgZD1cIk0xNzYuNDkgOTUuNTFhMTIgMTIgMCAwIDEgMCAxN2wtNTYgNTZhMTIgMTIgMCAwIDEtMTcgMGwtMjQtMjRhMTIgMTIgMCAxIDEgMTctMTdMMTEyIDE0M2w0Ny41MS00Ny41MmExMiAxMiAwIDAgMSAxNi45OC4wM00yMzYgMTI4QTEwOCAxMDggMCAxIDEgMTI4IDIwYTEwOC4xMiAxMDguMTIgMCAwIDEgMTA4IDEwOG0tMjQgMGE4NCA4NCAwIDEgMC04NCA4NGE4NC4wOSA4NC4wOSAwIDAgMCA4NC04NFwiLz48L3N2Zz4nLCAnaW1hZ2Uvc3ZnK3htbCcpXHJcbmNvbnN0IGRvdHRlZENpcmNsZVNWRyA9IHBhcnNlcignPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIzMlwiIGhlaWdodD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNTYgMjU2XCI+PHBhdGggZmlsbD1cImN1cnJlbnRDb2xvclwiIGQ9XCJNOTIuMzggMzguMDVBMTIgMTIgMCAwIDEgMTAxIDIzLjQyYTEwOCAxMDggMCAwIDEgNTQgMGExMiAxMiAwIDEgMS02IDIzLjIzYTg0LjExIDg0LjExIDAgMCAwLTQyIDBhMTIgMTIgMCAwIDEtMTQuNjItOC42TTUwLjk0IDUyLjM0YTEwOC4xIDEwOC4xIDAgMCAwLTI3IDQ2Ljc2YTEyIDEyIDAgMCAwIDguMzcgMTQuNzdhMTIuMiAxMi4yIDAgMCAwIDMuMi40M2ExMiAxMiAwIDAgMCAxMS41Ni04LjhhODQgODQgMCAwIDEgMjEtMzYuMzVhMTIgMTIgMCAxIDAtMTcuMTMtMTYuODFtLTMuODggOTguMTRhMTIgMTIgMCAwIDAtMjMuMTIgNi40MmExMDggMTA4IDAgMCAwIDI3IDQ2Ljc4QTEyIDEyIDAgMCAwIDY4IDE4Ni44NWE4NCA4NCAwIDAgMS0yMC45NC0zNi4zN00xNDkgMjA5LjM1YTg0IDg0IDAgMCAxLTQyIDBhMTIgMTIgMCAxIDAtNiAyMy4yM2ExMDggMTA4IDAgMCAwIDU0IDBhMTIgMTIgMCAxIDAtNi0yMy4yM203NC43Mi02Ny4yMkExMiAxMiAwIDAgMCAyMDkgMTUwLjVhODQgODQgMCAwIDEtMjEgMzYuMzVhMTIgMTIgMCAwIDAgMTcuMTIgMTYuODJhMTA4LjE5IDEwOC4xOSAwIDAgMCAyNy00Ni43N2ExMiAxMiAwIDAgMC04LjQxLTE0Ljc3Wm0tMTQuNzctMzYuNjFhMTIgMTIgMCAwIDAgMjMuMTItNi40MmExMDggMTA4IDAgMCAwLTI3LTQ2Ljc4QTEyIDEyIDAgMSAwIDE4OCA2OS4xNWE4NCA4NCAwIDAgMSAyMC45NCAzNi4zN1pcIi8+PC9zdmc+JywgJ2ltYWdlL3N2Zyt4bWwnKVxyXG5cclxuY29uc3QgY2hvb3NlQUJvYXJkSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG5jaG9vc2VBQm9hcmRJbWFnZS5zcmMgPSBibG9iX2JvYXJkXHJcblxyXG5leHBvcnQgeyBjaGVja1NWRywgZG90dGVkQ2lyY2xlU1ZHLCBjaG9vc2VBQm9hcmRJbWFnZSB9IiwiZnVuY3Rpb24gY3JlYXRlTW9kYWwodGl0bGUsIGlucHV0cywgc3VibWl0QnV0dG9uQmVoYXZpb3IpIHtcclxuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG1vZGFsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgbW9kYWxUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlXHJcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnc3VibWl0J1xyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKVxyXG4gICAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoYmFja2Ryb3ApXHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbFRpdGxlKVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGlucHV0VGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dHNbaV0udGl0bGVcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0c1tpXS50eXBlXHJcbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dHNbaV0uaWRcclxuXHJcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSlcclxuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dClcclxuXHJcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpXHJcbiAgICB9XHJcblxyXG4gICAgbW9kYWwuYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKVxyXG5cclxuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWNvbnRhaW5lcicpXHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXHJcbiAgICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdiYWNrZHJvcCcpXHJcblxyXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtb2RhbENvbnRhaW5lcilcclxuICAgIH0pXHJcblxyXG4gICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHN1Ym1pdEJ1dHRvbkJlaGF2aW9yKClcclxuICAgICAgICBtb2RhbENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1vZGFsQ29udGFpbmVyKVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gbW9kYWxDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTW9kYWwgfSIsImltcG9ydCB7IGJpbmFyeVNlYXJjaCB9IGZyb20gJy4vYmluYXJ5U2VhcmNoLmpzJ1xyXG5pbXBvcnQgeyBjaGVja1NWRywgZG90dGVkQ2lyY2xlU1ZHIH0gZnJvbSAnLi9tZWRpYS5qcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGFza05hbWUsIHRhc2tJZCkge1xyXG4gICAgY29uc3QgdGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZCcpXHJcbiAgICB0YXNrLmlkID0gdGFza0lkXHJcblxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIG5hbWUudGV4dENvbnRlbnQgPSB0YXNrTmFtZVxyXG5cclxuICAgIGNvbnN0IGNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHVuY2hlY2tlZFNWRyA9IGRvdHRlZENpcmNsZVNWRy5jbG9uZU5vZGUodHJ1ZSlcclxuICAgIGNvbnN0IGNoZWNrZWRTVkcgPSBjaGVja1NWRy5jbG9uZU5vZGUodHJ1ZSlcclxuXHJcbiAgICBjaGVja2VkU1ZHLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG5cclxuICAgIGNoZWNrLmFwcGVuZENoaWxkKHVuY2hlY2tlZFNWRylcclxuICAgIGNoZWNrLmFwcGVuZENoaWxkKGNoZWNrZWRTVkcpXHJcblxyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQoY2hlY2spXHJcblxyXG4gICAgY2hlY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YXNrRG9uZSh1bmNoZWNrZWRTVkcsIGNoZWNrZWRTVkcpKVxyXG5cclxuICAgIHRhc2suYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVhZEZyb21UYXNrcyhpZCwgYm9hcmRJZCkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcyA9PSB1bmRlZmluZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcclxuXHJcbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoKHRhc2tzLCAnaWQnLCBpZCwgJ2JvYXJkSWQnLCBib2FyZElkKVsxXVxyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrcyhpZCwgYm9hcmRJZCwga2V5LCBuZXdWYWx1ZSkge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS50YXNrcyA9PSB1bmRlZmluZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsICdbXScpXHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IGJpbmFyeVNlYXJjaCh0YXNrcywgJ2lkJywgaWQsICdib2FyZElkJywgYm9hcmRJZClbMF1cclxuXHJcbiAgICB0YXNrc1tpbmRleF1ba2V5XSA9IG5ld1ZhbHVlXHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnRhc2tzID0gSlNPTi5zdHJpbmdpZnkodGFza3MpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRUYXNrcyhib2FyZElkLCB0YXNrc0NhcmRzQ29udGFpbmVyKSB7XHJcbiAgICB0YXNrc0NhcmRzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXHJcblxyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcykuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmJvYXJkSWQgPT0gYm9hcmRJZClcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFza3NDYXJkc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUYXNrKHRhc2tzW2ldLnRpdGxlLCB0YXNrc1tpXS5pZCkpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRhc2tEb25lKHVuY2hlY2tlZCwgY2hlY2tlZCkge1xyXG4gICAgaWYgKHVuY2hlY2tlZC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xyXG4gICAgICAgIHVuY2hlY2tlZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgICAgICBjaGVja2VkLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB1bmNoZWNrZWQuY2xhc3NMaXN0LmFkZCgnaGlkZScpXHJcbiAgICAgICAgY2hlY2tlZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJylcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlVGFzaywgcmVhZEZyb21UYXNrcywgdXBkYXRlVGFza3MsIGxvYWRUYXNrcyB9IiwiZnVuY3Rpb24gc2V0VGhlbWUodGhlbWVCdXR0b24sIHN1biwgbW9vbikge1xyXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0aGVtZVwiKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIikgOiBcImxpZ2h0XCI7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRUaGVtZSkge1xyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lXCIsIGN1cnJlbnRUaGVtZSk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50VGhlbWUgPT09IFwiZGFya1wiKSB7XHJcbiAgICAgICAgICAgIHRoZW1lQnV0dG9uLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHN1bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN3aXRjaFRoZW1lKHRoZW1lQnV0dG9uLCBzdW4sIG1vb24pIHtcclxuICAgIGlmICh0aGVtZUJ1dHRvbi5jaGVja2VkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xyXG4gICAgICAgIHN1bi5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcclxuICAgICAgICBtb29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWVcIiwgXCJsaWdodFwiKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIFwibGlnaHRcIik7XHJcbiAgICAgICAgc3VuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xyXG4gICAgICAgIG1vb24uY2xhc3NMaXN0LmFkZChcImhpZGVcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHNldFRoZW1lLCBzd2l0Y2hUaGVtZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBzZXRUaGVtZSwgc3dpdGNoVGhlbWUgfSBmcm9tICcuL3RoZW1lLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVNb2RhbCB9IGZyb20gJy4vbW9kYWwuanMnXHJcbmltcG9ydCB7IGJpbmFyeVNlYXJjaCB9IGZyb20gJy4vYmluYXJ5U2VhcmNoLmpzJ1xyXG5pbXBvcnQgeyBjaG9vc2VBQm9hcmRJbWFnZSB9IGZyb20gJy4vbWVkaWEuanMnXHJcblxyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgcmVhZEZyb21Cb2FyZHMsIHVwZGF0ZUJvYXJkcyB9IGZyb20gJy4vYm9hcmRzLmpzJ1xyXG5pbXBvcnQgeyBjcmVhdGVUYXNrLCByZWFkRnJvbVRhc2tzLCB1cGRhdGVUYXNrcywgbG9hZFRhc2tzIH0gZnJvbSAnLi90YXNrcy5qcyc7XHJcblxyXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL25hdkJhci5jc3MnXHJcbmltcG9ydCAnLi4vY3NzL21haW4uY3NzJ1xyXG5pbXBvcnQgJy4uL2Nzcy9tb2RhbHMuY3NzJ1xyXG5cclxuLy8gVGhlbWUgQ2hhbmdlclxyXG5jb25zdCB0aGVtZVN3aXRjaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aGVtZS1zd2l0Y2gnKVxyXG5zZXRUaGVtZSh0aGVtZVN3aXRjaCwgc3VuLCBtb29uKVxyXG50aGVtZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4geyBzd2l0Y2hUaGVtZShlLnRhcmdldCwgc3VuLCBtb29uKSB9KVxyXG5cclxuY29uc3QgYWRkQm9hcmRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLWJvYXJkLWJ1dHRvbicpXHJcbmNvbnN0IGJvYXJkQ2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQtY2FyZHMtY29udGFpbmVyJylcclxuXHJcbmNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2stYnV0dG9uJylcclxuY29uc3QgdGFza3NDYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcy1jYXJkcy1jb250YWluZXInKVxyXG5cclxubGV0IGN1cnJlbnRCb2FyZCA9IDA7XHJcblxyXG4vLyBJbWFnZXNcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZUFCb2FyZCcpLmFwcGVuZENoaWxkKGNob29zZUFCb2FyZEltYWdlKVxyXG5cclxuY29uc3QgaW1hZ2VEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuaW1hZ2VEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBib2FyZCdcclxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nob29zZUFCb2FyZCcpLmFwcGVuZENoaWxkKGltYWdlRGVzY3JpcHRpb24pXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5ib2FyZHMgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYm9hcmRzJywgJ1tdJylcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UudGFza3MgPT0gdW5kZWZpbmVkKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCAnW10nKVxyXG5cclxuICAgIGNvbnN0IGJvYXJkcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmJvYXJkcylcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGJvYXJkQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoYm9hcmRzW2ldLm5hbWUsIGJvYXJkc1tpXS5pZCwgKCkgPT5cclxuICAgICAgICAgICAgbG9hZFRhc2tzKGJvYXJkc1tpXS5pZCwgdGFza3NDYXJkc0NvbnRhaW5lciwgY3VycmVudEJvYXJkID0gYm9hcmRzW2ldLmlkKSkpXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuYWRkQm9hcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1vZGFsKCdDcmVhdGUgQm9hcmQnLCBbeyB0aXRsZTogJ05hbWUnLCB0eXBlOiAndGV4dCcsIGlkOiAnYm9hcmQtbmFtZScgfV0sICgpID0+IHtcclxuICAgICAgICBjb25zdCBib2FyZHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5ib2FyZHMpXHJcblxyXG4gICAgICAgIGNvbnN0IGJvYXJkTmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZC1uYW1lJykudmFsdWVcclxuICAgICAgICBsZXQgYm9hcmRJZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTk5KVxyXG5cclxuICAgICAgICBpZiAoYm9hcmROYW1lICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChiaW5hcnlTZWFyY2goYm9hcmRzLCAnaWQnLCBib2FyZElkKSA9PSBudWxsKSBib2FyZElkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OTkpXHJcbiAgICAgICAgICAgIGJvYXJkQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQm9hcmQoYm9hcmROYW1lLCBib2FyZElkLCAoKSA9PiBsb2FkVGFza3MoYm9hcmRJZCwgdGFza3NDYXJkc0NvbnRhaW5lciksIGN1cnJlbnRCb2FyZCA9IGJvYXJkSWQpKVxyXG5cclxuICAgICAgICAgICAgYm9hcmRzLnB1c2goeyBuYW1lOiBib2FyZE5hbWUsIGlkOiBib2FyZElkIH0pXHJcblxyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UuYm9hcmRzID0gSlNPTi5zdHJpbmdpZnkoYm9hcmRzKVxyXG4gICAgICAgIH1cclxuICAgIH0pKVxyXG59KVxyXG5cclxuYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGlmIChjdXJyZW50Qm9hcmQgIT0gMCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTW9kYWwoJ0NyZWF0ZSBUYXNrJywgW3sgdGl0bGU6ICdOYW1lJywgdHlwZTogJ3RleHQnLCBpZDogJ3Rhc2stbmFtZScgfSwgeyB0aXRsZTogJ0Rlc2NyaXB0aW9uJywgdHlwZTogJ3RleHQnLCBpZDogJ3Rhc2stZGVzY3JpcHRpb24nIH0sIHsgdGl0bGU6ICdEdWUgRGF0ZSAnLCB0eXBlOiAnZGF0ZScsIGlkOiAndGFzay1kdWVEYXRlJyB9LCB7IHRpdGxlOiAnUHJpb3JpdHkgJywgdHlwZTogJ251bWJlcicsIGlkOiAndGFzay1wcmlvcml0eScgfV0sICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50YXNrcylcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpLnZhbHVlXHJcbiAgICAgICAgICAgIGxldCB0YXNrSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OSlcclxuXHJcbiAgICAgICAgICAgIGlmICh0YXNrTmFtZSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGJpbmFyeVNlYXJjaCh0YXNrcywgJ2lkJywgdGFza0lkKSA9PSBudWxsKSB0YXNrSWQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5OTk5OSlcclxuICAgICAgICAgICAgICAgIHRhc2tzQ2FyZHNDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlVGFzayh0YXNrTmFtZSwgdGFza0lkKSlcclxuXHJcbiAgICAgICAgICAgICAgICB0YXNrcy5wdXNoKHsgdGl0bGU6IHRhc2tOYW1lLCBib2FyZElkOiBjdXJyZW50Qm9hcmQsIGlkOiB0YXNrSWQgfSlcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0YXNrcylcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UudGFza3MgPSBKU09OLnN0cmluZ2lmeSh0YXNrcylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==