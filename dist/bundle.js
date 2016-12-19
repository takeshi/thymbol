/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

exports.app = {};
thymol.ready(function () {
    thymol.configurePreExecution(function () {
        thymol.sessionContext.createVariable("a", "Some text");
        thymol.sessionContext.createVariable("b", 123);
        thymol.sessionContext.createVariable("c", "Hello");
        console.log('configurePreExecution');
    });
    thymol.configurePostExecution(function () {
        thymol.sessionContext = [];
        console.log('configurePostExecution');
        for (var _i = 0, inits_1 = inits; _i < inits_1.length; _i++) {
            var fn = inits_1[_i];
            fn();
        }
    });
});
// document ready の実行を遅らせる
var jq = window.$;
var inits = [];
window.$ = function () {
    if (arguments.length === 1) {
        if (typeof arguments[0] === 'function') {
            inits.push(arguments[0]);
            return;
        }
        console.log(typeof arguments[0]);
    }
    jq.apply(this, arguments);
};
$(function () {
    console.log('document#ready');
    var element = $("\n<div>\n    <h2 th:text=\"#{welcome}\">Welcome!</h2>\n</div>\n");
    console.log(element.html());
    var result = thymol.render(element[0]);
    console.log($(result).html());
});


/***/ }
/******/ ]);