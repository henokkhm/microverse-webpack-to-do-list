/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* Custom Properties */
:root {
  /* Colors */
  --primary-100: rgb(220, 232, 249);
  --primary-200: rgb(169, 203, 253);
  --primary-400: rgb(14, 102, 234);
  --page-bg: #f6f6f6;
  --black: #000;
  --white: #fff;
  --gray-200: #eaeaea;
  --gray-400: #00000073;
}

/* General Styles */
body {
  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;
  background: var(--page-bg);
}

.container {
  min-width: 23.4375rem;
  max-width: 60rem;
  margin: 3rem auto;
  background: var(--white);
  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);
}

/* To Do List Styles */
.to-do-list-title {
  padding: 0.75rem;
  border: 1px solid var(--gray-200);
}

.add-to-do-form {
  width: 100%;
}

.new-to-do-item-input {
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 2px solid var(--gray-200);
  border-right: 2px solid var(--gray-200);
  outline: none;
  padding: 1rem 0.75rem;
  width: 100%;
}

.new-to-do-item-input:focus {
  border: 2px solid var(--primary-200);
}

.to-do-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: 1px solid var(--gray-200);
}

.to-do-item {
  display: flex;
  gap: 1rem;
  min-width: min-content;
  justify-content: space-between;
  padding: 0.75rem;
  border: 1px solid var(--gray-200);
}

.to-do-item__description {
  margin-right: auto;
  width: 100%;
  border: none;
  outline: none;
}

.to-do-item__description.completed {
  text-decoration: line-through;
  color: var(--gray-400);
}

.to-do-item__description:focus {
  border: none;
  outline: none;
}

.to-do-item.focused .to-do-item__description {
  background-color: var(--primary-100);
}

.to-do-item.focused {
  border: 1px solid var(--primary-200);
  background-color: var(--primary-100);
}

.to-do-item__delete-btn,
.to-do-item__drag-btn {
  border: none;
  outline: none;
  background: none;
  transition: transform 250ms ease-in;
  cursor: pointer;
}

.to-do-item__delete-btn {
  visibility: hidden;
}

.to-do-item__delete-btn:hover,
.to-do-item__drag-btn:hover {
  transform: scale(1.1);
}

.to-do-item__delete-btn:active,
.to-do-item__drag-btn:active {
  transform: translateY(4px) scale(1.1);
}

.to-do-item.focused .to-do-item__delete-btn {
  visibility: visible;
}

.clear-completed-btn {
  height: 4rem;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid var(--gray-200);
  transition: background-color 300ms ease-in-out;
}

.clear-completed-btn:hover {
  background-color: var(--primary-400);
  color: var(--white);
  font-size: 1.25rem;
}

.clear-completed-btn:active {
  transform: translateY(3px);
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA,sBAAsB;AACtB;EACE,WAAW;EACX,iCAAiC;EACjC,iCAAiC;EACjC,gCAAgC;EAChC,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,mBAAmB;AACnB;EACE,6EAA6E;EAC7E,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,iBAAiB;EACjB,wBAAwB;EACxB,sCAAsC;AACxC;;AAEA,sBAAsB;AACtB;EACE,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,oCAAoC;EACpC,sCAAsC;EACtC,uCAAuC;EACvC,aAAa;EACb,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,SAAS;EACT,sBAAsB;EACtB,8BAA8B;EAC9B,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,sBAAsB;AACxB;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,oCAAoC;AACtC;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,mCAAmC;EACnC,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,gBAAgB;EAChB,iCAAiC;EACjC,8CAA8C;AAChD;;AAEA;EACE,oCAAoC;EACpC,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;AAC5B","sourcesContent":["/* Custom Properties */\n:root {\n  /* Colors */\n  --primary-100: rgb(220, 232, 249);\n  --primary-200: rgb(169, 203, 253);\n  --primary-400: rgb(14, 102, 234);\n  --page-bg: #f6f6f6;\n  --black: #000;\n  --white: #fff;\n  --gray-200: #eaeaea;\n  --gray-400: #00000073;\n}\n\n/* General Styles */\nbody {\n  font-family: 'Open Sans', 'Lucida Grande', tahoma, verdana, arial, sans-serif;\n  background: var(--page-bg);\n}\n\n.container {\n  min-width: 23.4375rem;\n  max-width: 60rem;\n  margin: 3rem auto;\n  background: var(--white);\n  box-shadow: 0 2px 8px rgb(0 0 0 / 15%);\n}\n\n/* To Do List Styles */\n.to-do-list-title {\n  padding: 0.75rem;\n  border: 1px solid var(--gray-200);\n}\n\n.add-to-do-form {\n  width: 100%;\n}\n\n.new-to-do-item-input {\n  border-top: 2px solid transparent;\n  border-bottom: 2px solid transparent;\n  border-left: 2px solid var(--gray-200);\n  border-right: 2px solid var(--gray-200);\n  outline: none;\n  padding: 1rem 0.75rem;\n  width: 100%;\n}\n\n.new-to-do-item-input:focus {\n  border: 2px solid var(--primary-200);\n}\n\n.to-do-list {\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 0;\n  border: 1px solid var(--gray-200);\n}\n\n.to-do-item {\n  display: flex;\n  gap: 1rem;\n  min-width: min-content;\n  justify-content: space-between;\n  padding: 0.75rem;\n  border: 1px solid var(--gray-200);\n}\n\n.to-do-item__description {\n  margin-right: auto;\n  width: 100%;\n  border: none;\n  outline: none;\n}\n\n.to-do-item__description.completed {\n  text-decoration: line-through;\n  color: var(--gray-400);\n}\n\n.to-do-item__description:focus {\n  border: none;\n  outline: none;\n}\n\n.to-do-item.focused .to-do-item__description {\n  background-color: var(--primary-100);\n}\n\n.to-do-item.focused {\n  border: 1px solid var(--primary-200);\n  background-color: var(--primary-100);\n}\n\n.to-do-item__delete-btn,\n.to-do-item__drag-btn {\n  border: none;\n  outline: none;\n  background: none;\n  transition: transform 250ms ease-in;\n  cursor: pointer;\n}\n\n.to-do-item__delete-btn {\n  visibility: hidden;\n}\n\n.to-do-item__delete-btn:hover,\n.to-do-item__drag-btn:hover {\n  transform: scale(1.1);\n}\n\n.to-do-item__delete-btn:active,\n.to-do-item__drag-btn:active {\n  transform: translateY(4px) scale(1.1);\n}\n\n.to-do-item.focused .to-do-item__delete-btn {\n  visibility: visible;\n}\n\n.clear-completed-btn {\n  height: 4rem;\n  width: 100%;\n  text-align: center;\n  font-size: 1.2rem;\n  font-weight: 600;\n  border: 1px solid var(--gray-200);\n  transition: background-color 300ms ease-in-out;\n}\n\n.clear-completed-btn:hover {\n  background-color: var(--primary-400);\n  color: var(--white);\n  font-size: 1.25rem;\n}\n\n.clear-completed-btn:active {\n  transform: translateY(3px);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* https://piccalil.li/blog/a-modern-css-reset */

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  /* border: 1px solid red; */
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
`, "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,gDAAgD;;AAEhD,qBAAqB;AACrB;;;EAGE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF","sourcesContent":["/* https://piccalil.li/blog/a-modern-css-reset */\n\n/* Box sizing rules */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  /* border: 1px solid red; */\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\np,\nfigure,\nblockquote,\ndl,\ndd {\n  margin: 0;\n}\n\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\nul[role='list'],\nol[role='list'] {\n  list-style: none;\n}\n\n/* Set core root defaults */\nhtml:focus-within {\n  scroll-behavior: smooth;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* A elements that don't have a class get default styles */\na:not([class]) {\n  text-decoration-skip-ink: auto;\n}\n\n/* Make images easier to work with */\nimg,\npicture {\n  max-width: 100%;\n  display: block;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  html:focus-within {\n    scroll-behavior: auto;\n  }\n\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/ToDoList.js":
/*!*********************************!*\
  !*** ./src/modules/ToDoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ToDoList {
  #toDoList;

  constructor() {
    const storedToDos = localStorage.getItem('to-do-list');
    this.#toDoList = storedToDos ? JSON.parse(storedToDos) : [];
  }

  get toDoList() {
    return this.#toDoList;
  }

  saveToLocalstorage() {
    localStorage.setItem('to-do-list', JSON.stringify(this.#toDoList));
  }

  createToDoItem(description) {
    const newToDo = {
      index: this.#toDoList.length + 1,
      description,
      completed: false,
    };

    this.#toDoList.push(newToDo);
    this.saveToLocalstorage();
    return newToDo;
  }

  updateIndices() {
    this.#toDoList.sort((toDo1, toDo2) => {
      if (toDo1.index > toDo2.index) {
        return 1;
      }
      return -1;
    });

    this.#toDoList.forEach((toDoItem, index) => {
      toDoItem.index = index + 1;
    });
  }

  deleteToDoItem(index) {
    const idx = parseInt(index, 10);
    this.#toDoList = this.#toDoList.filter(
      (toDoItem) => toDoItem.index !== idx,
    );

    this.updateIndices();
    this.saveToLocalstorage();
  }

  updateToDoDescription(index, newDescription) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, description: newDescription };
      }
      return toDoItem;
    });

    this.saveToLocalstorage();
  }

  toggleToDoCompleted(index) {
    this.#toDoList = this.#toDoList.map((toDoItem) => {
      if (toDoItem.index === index) {
        return { ...toDoItem, completed: !toDoItem.completed };
      }
      return toDoItem;
    });

    this.saveToLocalstorage();
  }

  removeCompleted() {
    this.#toDoList = this.#toDoList.filter((toDoItem) => !toDoItem.completed);
    this.updateIndices();
    this.saveToLocalstorage();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDoList);


/***/ }),

/***/ "./src/modules/initialize-add-to-do-form.js":
/*!**************************************************!*\
  !*** ./src/modules/initialize-add-to-do-form.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-to-dos.js */ "./src/modules/render-to-dos.js");
/* harmony import */ var _initialize_edit_todo_inputs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize-edit-todo-inputs.js */ "./src/modules/initialize-edit-todo-inputs.js");



const form = document.getElementById('add-to-do-form');

const initializeAddToDoFormEventHandlers = (myToDoList) => {
  form.addEventListener('click', _initialize_edit_todo_inputs_js__WEBPACK_IMPORTED_MODULE_1__.blurAllTodos);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const description = e.target.elements.description.value;
    myToDoList.createToDoItem(description);
    (0,_render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(myToDoList.toDoList);
    e.target.reset();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeAddToDoFormEventHandlers);


/***/ }),

/***/ "./src/modules/initialize-checkbox-event-handlers.js":
/*!***********************************************************!*\
  !*** ./src/modules/initialize-checkbox-event-handlers.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-to-dos.js */ "./src/modules/render-to-dos.js");


const toDoListTarget = document.querySelector('#to-do-list-target');

const initializeCheckboxEventHandlers = (toDoList) => {
  toDoListTarget.addEventListener('click', (e) => {
    if (e.target.classList.contains('to-do-item__checkbox')) {
      const indexStr = e.target.dataset.toDoIndex;
      const index = parseInt(indexStr, 10);
      toDoList.toggleToDoCompleted(index);
      (0,_render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoList.toDoList);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeCheckboxEventHandlers);


/***/ }),

/***/ "./src/modules/initialize-clear-completed-event-handlers.js":
/*!******************************************************************!*\
  !*** ./src/modules/initialize-clear-completed-event-handlers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-to-dos.js */ "./src/modules/render-to-dos.js");


const initializeClearCompletedEventHandlers = (toDoList) => {
  const clearCompletedBtn = document.querySelector('#clear-completed-btn');
  clearCompletedBtn.addEventListener('click', () => {
    toDoList.removeCompleted();
    (0,_render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoList.toDoList);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeClearCompletedEventHandlers);


/***/ }),

/***/ "./src/modules/initialize-delete-btn-event-handlers.js":
/*!*************************************************************!*\
  !*** ./src/modules/initialize-delete-btn-event-handlers.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-to-dos.js */ "./src/modules/render-to-dos.js");


const toDoListTarget = document.querySelector('#to-do-list-target');

const initializeDeleteBtnEventHandlers = (toDoList) => {
  toDoListTarget.addEventListener('click', (e) => {
    if (e.target.classList.contains('to-do-item__trash-icon')) {
      const index = e.target.dataset.toDoIndex;
      toDoList.deleteToDoItem(index);
      (0,_render_to_dos_js__WEBPACK_IMPORTED_MODULE_0__["default"])(toDoList.toDoList);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeDeleteBtnEventHandlers);


/***/ }),

/***/ "./src/modules/initialize-edit-todo-inputs.js":
/*!****************************************************!*\
  !*** ./src/modules/initialize-edit-todo-inputs.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blurAllTodos: () => (/* binding */ blurAllTodos),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const blurAllTodos = () => {
  const allTodoItems = document.querySelectorAll('.to-do-item');

  allTodoItems.forEach((toDoItem) => {
    toDoItem.classList.remove('focused');
    toDoItem.getElementsByClassName('to-do-item__description')[0].blur();
  });
};

const initializeEditToDoInputs = (toDoList) => {
  const toDoItemsContainer = document.querySelector('#to-do-list-target');
  toDoItemsContainer.addEventListener('click', (e) => {
    blurAllTodos();
    if (e.target.classList.contains('to-do-item__description')) {
      const currentToDoItem = e.target.parentNode;
      currentToDoItem.classList.add('focused');
      currentToDoItem
        .getElementsByClassName('to-do-item__description')[0]
        .focus();
    }
  });

  toDoItemsContainer.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('to-do-item__description')) {
      const newDescription = e.target.value;
      const indexStr = e.target.dataset.toDoIndex;
      const index = parseInt(indexStr, 10);
      toDoList.updateToDoDescription(index, newDescription);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeEditToDoInputs);


/***/ }),

/***/ "./src/modules/render-to-dos.js":
/*!**************************************!*\
  !*** ./src/modules/render-to-dos.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/dots.svg */ "./src/assets/icons/dots.svg");



const generateToDoItemHTML = (toDoItem) => {
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  const description = document.createElement('input');
  const deleteBtn = document.createElement('button');
  const trashIcon = document.createElement('img');
  const dragBtn = document.createElement('button');
  const dragIcon = document.createElement('img');

  li.classList.add('to-do-item');
  checkbox.classList.add('to-do-item__checkbox');
  description.classList.add('to-do-item__description');
  deleteBtn.classList.add('to-do-item__delete-btn');
  trashIcon.classList.add('to-do-item__trash-icon');
  dragBtn.classList.add('to-do-item__drag-btn');
  dragIcon.classList.add('to-do-item__drag-icon');

  description.value = `${toDoItem.description}`;
  trashIcon.src = _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_0__;
  deleteBtn.appendChild(trashIcon);
  dragIcon.src = _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_1__;
  dragBtn.appendChild(dragIcon);

  if (toDoItem.completed) {
    description.classList.add('completed');
    checkbox.checked = true;
  } else {
    description.classList.remove('completed');
    checkbox.checked = false;
  }

  checkbox.setAttribute('data-to-do-index', toDoItem.index);
  description.setAttribute('data-to-do-index', toDoItem.index);
  trashIcon.setAttribute('data-to-do-index', toDoItem.index);
  dragBtn.setAttribute('data-to-do-index', toDoItem.index);

  li.appendChild(checkbox);
  li.appendChild(description);
  li.appendChild(deleteBtn);
  li.appendChild(dragBtn);
  return li;
};

const renderToDos = (toDoArr) => {
  const toDoListTarget = document.getElementById('to-do-list-target');
  toDoListTarget.innerHTML = '';

  toDoArr.forEach((toDoItem) => {
    const html = generateToDoItemHTML(toDoItem);
    toDoListTarget.appendChild(html);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToDos);


/***/ }),

/***/ "./src/assets/icons/dots.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/dots.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dots.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trash.svg";

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ToDoList.js */ "./src/modules/ToDoList.js");
/* harmony import */ var _modules_render_to_dos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/render-to-dos.js */ "./src/modules/render-to-dos.js");
/* harmony import */ var _modules_initialize_add_to_do_form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initialize-add-to-do-form.js */ "./src/modules/initialize-add-to-do-form.js");
/* harmony import */ var _modules_initialize_delete_btn_event_handlers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/initialize-delete-btn-event-handlers.js */ "./src/modules/initialize-delete-btn-event-handlers.js");
/* harmony import */ var _modules_initialize_edit_todo_inputs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/initialize-edit-todo-inputs.js */ "./src/modules/initialize-edit-todo-inputs.js");
/* harmony import */ var _modules_initialize_checkbox_event_handlers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/initialize-checkbox-event-handlers.js */ "./src/modules/initialize-checkbox-event-handlers.js");
/* harmony import */ var _modules_initialize_clear_completed_event_handlers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/initialize-clear-completed-event-handlers.js */ "./src/modules/initialize-clear-completed-event-handlers.js");
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");










const myToDoList = new _modules_ToDoList_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

(0,_modules_render_to_dos_js__WEBPACK_IMPORTED_MODULE_1__["default"])(myToDoList.toDoList);
(0,_modules_initialize_delete_btn_event_handlers_js__WEBPACK_IMPORTED_MODULE_3__["default"])(myToDoList);
(0,_modules_initialize_add_to_do_form_js__WEBPACK_IMPORTED_MODULE_2__["default"])(myToDoList);
(0,_modules_initialize_edit_todo_inputs_js__WEBPACK_IMPORTED_MODULE_4__["default"])(myToDoList);
(0,_modules_initialize_checkbox_event_handlers_js__WEBPACK_IMPORTED_MODULE_5__["default"])(myToDoList);
(0,_modules_initialize_clear_completed_event_handlers_js__WEBPACK_IMPORTED_MODULE_6__["default"])(myToDoList);
})();

/******/ })()
;
//# sourceMappingURL=main.js.map