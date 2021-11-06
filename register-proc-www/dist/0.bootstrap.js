(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm-processor'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n//import * as wasm from \"wasm-processor\";\n\n\n\nvar loaded_file;\nvar new_file_loaded = false;\n\nconst pre = document.getElementById(\"wasm-proc\");\nconst universe = !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'wasm-processor'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).build();\n\n\n\n\npre.textContent = universe.render();\n/*const renderLoop = () => {\n    pre.textContent = universe.render();\n    if(new_file_loaded){\n        console.log(\"afaf\");\n        universe.load_program(loaded_file);\n    }\n\n    requestAnimationFrame(renderLoop);\n};\n  \nrequestAnimationFrame(renderLoop);*/\n\ndocument.getElementById('upload').addEventListener('change', readFileAsString);\nfunction readFileAsString() {\n    var files = this.files;\n    if (files.length === 0) {\n        console.log('No file is selected');\n        return;\n    }\n\n    var reader = new FileReader();\n    reader.onload = function(event) {\n        //console.log('File content:', event.target.result);\n        loaded_file = event.target.result;\n        \n        universe.load_program(loaded_file);\n\n        new_file_loaded = true;\n        console.log('File content:', loaded_file);\n    };\n    reader.readAsText(files[0]);\n    \n    \n    \n}\n\ndocument.getElementById('stepProc').addEventListener('click', stepProc)\n\nfunction stepProc() {\n    universe.step();\n    pre.textContent = universe.render();\n}\n\n//wasm.greet();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);