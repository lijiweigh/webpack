(function(modules) { // webpackBootstrap
    // The module cache 
    // 缓存加载过的模块
	var installedModules = {};

	// The require function
	function __webpack_require__(moduleId) {

        // Check if module is in cache 
        // 如果模块已经缓存过，那么直接返回
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
        // Create a new module (and put it into the cache)
        // 如果没缓存过，创建一个模块并缓存他
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};

        // Execute the module function
        // 执行模块
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // Flag the module as loaded
        // 标记这个模块已经被加载了
		module.l = true;

        // Return the exports of the module
        // 返回exports
		return module.exports;
	}


    // expose the modules object (__webpack_modules__)
    // 暴露模块对象
	__webpack_require__.m = modules;

    // expose the module cache
    // 暴露模块的缓存
	__webpack_require__.c = installedModules;

    // define getter function for harmony exports
    // 为exports定义getter
	__webpack_require__.d = function(exports, name, getter) {
        // 判断是否有原生属性，没有的话，就定义
		if(!__webpack_require__.o(exports, name)) {
			Object.defineProperty(exports, name, { enumerable: true, get: getter });
		}
	};

    // define __esModule on exports
    // 定义 __esModule
	__webpack_require__.r = function(exports) {
        // Symbol.toStringTag： Object.prototype.toString() 方法会去读取这个标签并把它包含在自己的返回值
		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
		}
		Object.defineProperty(exports, '__esModule', { value: true });
	};

	// create a fake namespace object
	// mode & 1: value is a module id, require it
	// mode & 2: merge all properties of value into the ns
	// mode & 4: return value when already ns object
	// mode & 8|1: behave like require
	__webpack_require__.t = function(value, mode) {
		if(mode & 1) value = __webpack_require__(value);
		if(mode & 8) return value;
		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
		var ns = Object.create(null);
		__webpack_require__.r(ns);
		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};

    // getDefaultExport function for compatibility with non-harmony modules
    // 工具函数：创建一个获取模块返回值的函数
	__webpack_require__.n = function(module) {
		var getter = module && module.__esModule ?
			function getDefault() { return module['default']; } :
			function getModuleExports() { return module; };
		__webpack_require__.d(getter, 'a', getter);
		return getter;
	};

    // Object.prototype.hasOwnProperty.call
    // 判断是否有某个属性
	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

	// __webpack_public_path__
	__webpack_require__.p = "";


	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = 0);
})

([
/* 0 */
(function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
// import _ from 'lodash';
// import printMe from './print.js';
// import "./style.css"


  function component() {
    var element = document.createElement('pre');   
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = ["hello", "5 cubed equals" + Object(_math__WEBPACK_IMPORTED_MODULE_0__["cube"])(5)].join("\n\n")

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    // console.log("bbbbb")
    // element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());

//   if(module.hot) {
//       module.hot.accept()
//   }

}),
/* 1 */
(function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cube", function() { return cube; });
function square(x) {
    return x * x;
  }
  
  function cube(x) {
    return x * x * x;
  }

})
]);