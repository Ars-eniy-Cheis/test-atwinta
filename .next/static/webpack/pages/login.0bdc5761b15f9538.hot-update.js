"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/login",{

/***/ "./src/components/StandardComponents/Inputs/TextInputs/LoginInput/index.tsx":
/*!**********************************************************************************!*\
  !*** ./src/components/StandardComponents/Inputs/TextInputs/LoginInput/index.tsx ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst LoginTextInput = (param)=>{\n    let { type , label , placeholder  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"before:content-['*'] before:text-red-500form-label inline-block mb-2 text-gray-700\",\n                children: label\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\test-atwinta\\\\src\\\\components\\\\StandardComponents\\\\Inputs\\\\TextInputs\\\\LoginInput\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                placeholder: placeholder,\n                type: type,\n                className: \" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-6 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none \"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\test-atwinta\\\\src\\\\components\\\\StandardComponents\\\\Inputs\\\\TextInputs\\\\LoginInput\\\\index.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-2 invisible peer-invalid:visible text-pink-600 text-sm\",\n                children: \"Please provide a valid email address.\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\test-atwinta\\\\src\\\\components\\\\StandardComponents\\\\Inputs\\\\TextInputs\\\\LoginInput\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = LoginTextInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginTextInput);\nvar _c;\n$RefreshReg$(_c, \"LoginTextInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdGFuZGFyZENvbXBvbmVudHMvSW5wdXRzL1RleHRJbnB1dHMvTG9naW5JbnB1dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE1BQU1BLGlCQUFpQixTQUlMO1FBSk0sRUFDcEJDLEtBQUksRUFDSkMsTUFBSyxFQUNMQyxZQUFXLEVBQ0Y7SUFDVCxxQkFDSTs7MEJBQ0ksOERBQUNEO2dCQUFNRSxXQUFVOzBCQUNmRjs7Ozs7OzBCQUNGLDhEQUFDRztnQkFDR0YsYUFBYUE7Z0JBQ2JGLE1BQU1BO2dCQUNORyxXQUFVOzs7Ozs7MEJBa0JkLDhEQUFDRTtnQkFBRUYsV0FBVTswQkFBNEQ7Ozs7Ozs7O0FBS3JGO0tBbkNNSjtBQXFDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TdGFuZGFyZENvbXBvbmVudHMvSW5wdXRzL1RleHRJbnB1dHMvTG9naW5JbnB1dC9pbmRleC50c3g/OWVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbnB1dFByb3BzIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uL3R5cGVzXCI7XHJcblxyXG5jb25zdCBMb2dpblRleHRJbnB1dCA9ICh7XHJcbiAgICB0eXBlLFxyXG4gICAgbGFiZWwsXHJcbiAgICBwbGFjZWhvbGRlclxyXG59OiBJbnB1dFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJiZWZvcmU6Y29udGVudC1bJyonXSBiZWZvcmU6dGV4dC1yZWQtNTAwZm9ybS1sYWJlbCBpbmxpbmUtYmxvY2sgbWItMiB0ZXh0LWdyYXktNzAwXCJcclxuICAgICAgICAgICAgPntsYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICBmb3JtLWNvbnRyb2xcclxuICAgICAgICBibG9ja1xyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHB4LTNcclxuICAgICAgICBweS0xLjVcclxuICAgICAgICB0ZXh0LWJhc2VcclxuICAgICAgICBmb250LW5vcm1hbFxyXG4gICAgICAgIHRleHQtZ3JheS03MDBcclxuICAgICAgICBiZy13aGl0ZSBiZy1jbGlwLXBhZGRpbmdcclxuICAgICAgICBib3JkZXIgYm9yZGVyLXNvbGlkIGJvcmRlci1ncmF5LTMwMFxyXG4gICAgICAgIHJvdW5kZWRcclxuICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgZWFzZS1pbi1vdXRcclxuICAgICAgICBtYi02XHJcbiAgICAgICAgZm9jdXM6dGV4dC1ncmF5LTcwMCBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItYmx1ZS02MDAgZm9jdXM6b3V0bGluZS1ub25lXHJcbiAgICAgIFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgaW52aXNpYmxlIHBlZXItaW52YWxpZDp2aXNpYmxlIHRleHQtcGluay02MDAgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgICAgICAgUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luVGV4dElucHV0OyJdLCJuYW1lcyI6WyJMb2dpblRleHRJbnB1dCIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/StandardComponents/Inputs/TextInputs/LoginInput/index.tsx\n"));

/***/ })

});