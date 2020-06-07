webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Hobby.js":
/*!*****************************!*\
  !*** ./components/Hobby.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Hobby; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\nvar _jsxFileName = \"/home/dean/github/deanlol-ssg/components/Hobby.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Hobby = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Hobby, _Component);\n\n  var _super = _createSuper(Hobby);\n\n  function Hobby(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Hobby);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"between\", function (x, min, max) {\n      // console.log(x, min, max, (x - min) * (x - max) <= 0);\n      return (x - min) * (x - max) <= 0;\n    });\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"process\", {\n      backgroundColor: function backgroundColor() {\n        return \"#F5E795\";\n      },\n      backgroundIMG: function backgroundIMG() {\n        if (!_this.props.data.imageurl) {\n          return \"#\";\n        }\n\n        return _this.props.data.imageurl;\n      },\n      textColor: function textColor() {\n        if (_this.props.data.textcolor) {\n          return _this.props.data.textcolor;\n        } else {\n          return \"inherit\";\n        }\n      },\n      textShad: function textShad() {\n        if (_this.props.data.textcolor) {\n          return \"2px 2px 0.2em #363636\";\n        }\n      },\n      url: function url() {\n        if (_this.props.data.url) {\n          return _this.props.data.url;\n        } else {\n          return \"/\";\n        }\n      }\n    });\n\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Hobby, [{\n    key: \"render\",\n    value: function render() {\n      var styles = {\n        backgroundURL: {\n          backgroundImage: \"url(\\\"\".concat(this.process.backgroundIMG(), \"\\\")\"),\n          color: this.process.textColor(),\n          backgroundColor: this.process.backgroundColor(),\n          textShadow: this.process.textShad()\n        }\n      };\n      return __jsx(react__WEBPACK_IMPORTED_MODULE_8__[\"Fragment\"], {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 7\n        }\n      }, __jsx(\"div\", {\n        style: styles.backgroundURL,\n        className: \"jsx-2573940429\" + \" \" + \"hobby\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 9\n        }\n      }, __jsx(\"h3\", {\n        className: \"jsx-2573940429\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 11\n        }\n      }, __jsx(\"a\", {\n        href: this.process.url(),\n        className: \"jsx-2573940429\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 13\n        }\n      }, this.props.data.title)), __jsx(\"span\", {\n        className: \"jsx-2573940429\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 11\n        }\n      }, this.props.data.message)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {\n        id: \"2573940429\",\n        __self: this\n      }, \".hobby.jsx-2573940429{box-shadow:5px 10px #888888;}h3.jsx-2573940429{font-size:1.5em;font-family:\\\"Abril Fatface\\\";padding-bottom:0.5em;}a.jsx-2573940429{-webkit-text-decoration:none;text-decoration:none;color:inherit;opacity:0.8 transition:text-shadow 0.25s ease-in-out;-moz-transition:text-shadow 0.25s ease-in-out;-webkit-transition:text-shadow 0.25s ease-in-out;}a.jsx-2573940429:hover{opacity:1;text-shadow:5px 5px #e7cc98;}.hobby.jsx-2573940429{background-color:#75c9c8;color:#363636;padding:2em;border-radius:0.3em;background-size:cover;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RlYW4vZ2l0aHViL2RlYW5sb2wtc3NnL2NvbXBvbmVudHMvSG9iYnkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUd5QyxBQUlaLEFBTUssQUFTWCxBQUtlLFVBSkcsTUFmQSxTQW9CZCxHQXhCaEIsVUFvQkEsQ0FLYyxLQXBCUyxNQUtQLENBZ0JNLGFBZHFCLENBTjNDLE1BcUJ3QixzQkFDRCx3QkFmeUIsOENBQ0csTUFlbkQsMkNBZEEiLCJmaWxlIjoiL2hvbWUvZGVhbi9naXRodWIvZGVhbmxvbC1zc2cvY29tcG9uZW50cy9Ib2JieS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvYmJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuICBiZXR3ZWVuID0gKHgsIG1pbiwgbWF4KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coeCwgbWluLCBtYXgsICh4IC0gbWluKSAqICh4IC0gbWF4KSA8PSAwKTtcbiAgICByZXR1cm4gKHggLSBtaW4pICogKHggLSBtYXgpIDw9IDA7XG4gIH07XG5cbiAgcHJvY2VzcyA9IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICgpID0+IHtcbiAgICAgIHJldHVybiBcIiNGNUU3OTVcIjtcbiAgICB9LFxuICAgIGJhY2tncm91bmRJTUc6ICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5kYXRhLmltYWdldXJsKSB7XG4gICAgICAgIHJldHVybiBcIiNcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEuaW1hZ2V1cmw7XG4gICAgfSxcbiAgICB0ZXh0Q29sb3I6ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEudGV4dGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRhdGEudGV4dGNvbG9yO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiaW5oZXJpdFwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgdGV4dFNoYWQ6ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLnByb3BzLmRhdGEudGV4dGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBcIjJweCAycHggMC4yZW0gIzM2MzYzNlwiO1xuICAgICAgfVxuICAgIH0sXG4gICAgdXJsOiAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLnVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLnVybDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIi9cIjtcbiAgICAgIH1cbiAgICB9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB7XG4gICAgICBiYWNrZ3JvdW5kVVJMOiB7XG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7dGhpcy5wcm9jZXNzLmJhY2tncm91bmRJTUcoKX1cIilgLFxuICAgICAgICBjb2xvcjogdGhpcy5wcm9jZXNzLnRleHRDb2xvcigpLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMucHJvY2Vzcy5iYWNrZ3JvdW5kQ29sb3IoKSxcbiAgICAgICAgdGV4dFNoYWRvdzogdGhpcy5wcm9jZXNzLnRleHRTaGFkKCksXG4gICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob2JieVwiIHN0eWxlPXtzdHlsZXMuYmFja2dyb3VuZFVSTH0+XG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPGEgaHJlZj17dGhpcy5wcm9jZXNzLnVybCgpfT57dGhpcy5wcm9wcy5kYXRhLnRpdGxlfTwvYT5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRhdGEubWVzc2FnZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuaG9iYnkge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogNXB4IDEwcHggIzg4ODg4ODtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQWJyaWwgRmF0ZmFjZVwiO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjhcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDVweCA1cHggI2U3Y2M5ODtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaG9iYnkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1YzljODtcbiAgICAgICAgICAgIGNvbG9yOiAjMzYzNjM2O1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0= */\\n/*@ sourceURL=/home/dean/github/deanlol-ssg/components/Hobby.js */\"));\n    }\n  }]);\n\n  return Hobby;\n}(react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hvYmJ5LmpzPzRhMTciXSwibmFtZXMiOlsiSG9iYnkiLCJwcm9wcyIsIngiLCJtaW4iLCJtYXgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSU1HIiwiZGF0YSIsImltYWdldXJsIiwidGV4dENvbG9yIiwidGV4dGNvbG9yIiwidGV4dFNoYWQiLCJ1cmwiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kVVJMIiwiYmFja2dyb3VuZEltYWdlIiwicHJvY2VzcyIsImNvbG9yIiwidGV4dFNoYWRvdyIsInRpdGxlIiwibWVzc2FnZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsSzs7Ozs7QUFDbkIsaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDakIsOEJBQU1BLEtBQU47O0FBRGlCLGtOQUlULFVBQUNDLENBQUQsRUFBSUMsR0FBSixFQUFTQyxHQUFULEVBQWlCO0FBQ3pCO0FBQ0EsYUFBTyxDQUFDRixDQUFDLEdBQUdDLEdBQUwsS0FBYUQsQ0FBQyxHQUFHRSxHQUFqQixLQUF5QixDQUFoQztBQUNELEtBUGtCOztBQUFBLGtOQVNUO0FBQ1JDLHFCQUFlLEVBQUUsMkJBQU07QUFDckIsZUFBTyxTQUFQO0FBQ0QsT0FITztBQUlSQyxtQkFBYSxFQUFFLHlCQUFNO0FBQ25CLFlBQUksQ0FBQyxNQUFLTCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JDLFFBQXJCLEVBQStCO0FBQzdCLGlCQUFPLEdBQVA7QUFDRDs7QUFDRCxlQUFPLE1BQUtQLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkMsUUFBdkI7QUFDRCxPQVRPO0FBVVJDLGVBQVMsRUFBRSxxQkFBTTtBQUNmLFlBQUksTUFBS1IsS0FBTCxDQUFXTSxJQUFYLENBQWdCRyxTQUFwQixFQUErQjtBQUM3QixpQkFBTyxNQUFLVCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JHLFNBQXZCO0FBQ0QsU0FGRCxNQUVPO0FBQ0wsaUJBQU8sU0FBUDtBQUNEO0FBQ0YsT0FoQk87QUFpQlJDLGNBQVEsRUFBRSxvQkFBTTtBQUNkLFlBQUksTUFBS1YsS0FBTCxDQUFXTSxJQUFYLENBQWdCRyxTQUFwQixFQUErQjtBQUM3QixpQkFBTyx1QkFBUDtBQUNEO0FBQ0YsT0FyQk87QUFzQlJFLFNBQUcsRUFBRSxlQUFNO0FBQ1QsWUFBSSxNQUFLWCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JLLEdBQXBCLEVBQXlCO0FBQ3ZCLGlCQUFPLE1BQUtYLEtBQUwsQ0FBV00sSUFBWCxDQUFnQkssR0FBdkI7QUFDRCxTQUZELE1BRU87QUFDTCxpQkFBTyxHQUFQO0FBQ0Q7QUFDRjtBQTVCTyxLQVRTOztBQUFBO0FBRWxCOzs7OzZCQXNDUTtBQUNQLFVBQU1DLE1BQU0sR0FBRztBQUNiQyxxQkFBYSxFQUFFO0FBQ2JDLHlCQUFlLGtCQUFVLEtBQUtDLE9BQUwsQ0FBYVYsYUFBYixFQUFWLFFBREY7QUFFYlcsZUFBSyxFQUFFLEtBQUtELE9BQUwsQ0FBYVAsU0FBYixFQUZNO0FBR2JKLHlCQUFlLEVBQUUsS0FBS1csT0FBTCxDQUFhWCxlQUFiLEVBSEo7QUFJYmEsb0JBQVUsRUFBRSxLQUFLRixPQUFMLENBQWFMLFFBQWI7QUFKQztBQURGLE9BQWY7QUFRQSxhQUNFLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQXVCLGFBQUssRUFBRUUsTUFBTSxDQUFDQyxhQUFyQztBQUFBLDRDQUFlLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFLEtBQUtFLE9BQUwsQ0FBYUosR0FBYixFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QixLQUFLWCxLQUFMLENBQVdNLElBQVgsQ0FBZ0JZLEtBQTlDLENBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFPLEtBQUtsQixLQUFMLENBQVdNLElBQVgsQ0FBZ0JhLE9BQXZCLENBSkYsQ0FERjtBQUFBO0FBQUE7QUFBQSwyNElBREY7QUE2Q0Q7Ozs7RUEvRmdDQywrQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvSG9iYnkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb2JieSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICB9XG5cbiAgYmV0d2VlbiA9ICh4LCBtaW4sIG1heCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKHgsIG1pbiwgbWF4LCAoeCAtIG1pbikgKiAoeCAtIG1heCkgPD0gMCk7XG4gICAgcmV0dXJuICh4IC0gbWluKSAqICh4IC0gbWF4KSA8PSAwO1xuICB9O1xuXG4gIHByb2Nlc3MgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAoKSA9PiB7XG4gICAgICByZXR1cm4gXCIjRjVFNzk1XCI7XG4gICAgfSxcbiAgICBiYWNrZ3JvdW5kSU1HOiAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMucHJvcHMuZGF0YS5pbWFnZXVybCkge1xuICAgICAgICByZXR1cm4gXCIjXCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLmltYWdldXJsO1xuICAgIH0sXG4gICAgdGV4dENvbG9yOiAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLnRleHRjb2xvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kYXRhLnRleHRjb2xvcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcImluaGVyaXRcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHRleHRTaGFkOiAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kYXRhLnRleHRjb2xvcikge1xuICAgICAgICByZXR1cm4gXCIycHggMnB4IDAuMmVtICMzNjM2MzZcIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVybDogKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGF0YS51cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGF0YS51cmw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCIvXCI7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qgc3R5bGVzID0ge1xuICAgICAgYmFja2dyb3VuZFVSTDoge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3RoaXMucHJvY2Vzcy5iYWNrZ3JvdW5kSU1HKCl9XCIpYCxcbiAgICAgICAgY29sb3I6IHRoaXMucHJvY2Vzcy50ZXh0Q29sb3IoKSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLnByb2Nlc3MuYmFja2dyb3VuZENvbG9yKCksXG4gICAgICAgIHRleHRTaGFkb3c6IHRoaXMucHJvY2Vzcy50ZXh0U2hhZCgpLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9iYnlcIiBzdHlsZT17c3R5bGVzLmJhY2tncm91bmRVUkx9PlxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIDxhIGhyZWY9e3RoaXMucHJvY2Vzcy51cmwoKX0+e3RoaXMucHJvcHMuZGF0YS50aXRsZX08L2E+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8c3Bhbj57dGhpcy5wcm9wcy5kYXRhLm1lc3NhZ2V9PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmhvYmJ5IHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFicmlsIEZhdGZhY2VcIjtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC44XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0ZXh0LXNoYWRvdyAwLjI1cyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogdGV4dC1zaGFkb3cgMC4yNXMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRleHQtc2hhZG93IDAuMjVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiA1cHggNXB4ICNlN2NjOTg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhvYmJ5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NWM5Yzg7XG4gICAgICAgICAgICBjb2xvcjogIzM2MzYzNjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuM2VtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Hobby.js\n");

/***/ })

})