(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-processor */ \"./pkg/wasm_processor.js\");\n//import * as wasm from \"wasm-processor\";\n\n\n\nvar loaded_file;\nvar new_file_loaded = false;\n\nconst pre = document.getElementById(\"wasm-proc\");\nconst universe = wasm_processor__WEBPACK_IMPORTED_MODULE_0__[\"Proc\"].build();\n\n\n\n\npre.textContent = universe.render();\n/*const renderLoop = () => {\n    pre.textContent = universe.render();\n    if(new_file_loaded){\n        console.log(\"afaf\");\n        universe.load_program(loaded_file);\n    }\n\n    requestAnimationFrame(renderLoop);\n};\n  \nrequestAnimationFrame(renderLoop);*/\n\ndocument.getElementById('upload').addEventListener('change', readFileAsString);\nfunction readFileAsString() {\n    var files = this.files;\n    if (files.length === 0) {\n        console.log('No file is selected');\n        return;\n    }\n\n    var reader = new FileReader();\n    reader.onload = function(event) {\n        //console.log('File content:', event.target.result);\n        loaded_file = event.target.result;\n        \n        universe.load_program(loaded_file);\n\n        new_file_loaded = true;\n        console.log('File content:', loaded_file);\n    };\n    reader.readAsText(files[0]);\n    \n    \n    \n}\n\ndocument.getElementById('stepProc').addEventListener('click', stepProc)\n\nfunction stepProc() {\n    universe.step();\n    pre.textContent = universe.render();\n}\n\n//wasm.greet();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./pkg/wasm_processor.js":
/*!*******************************!*\
  !*** ./pkg/wasm_processor.js ***!
  \*******************************/
/*! exports provided: greet, AluOp, Instruction, Parser, Proc, __wbg_alert_9ae801131f95e9f2, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_processor_bg.wasm */ \"./pkg/wasm_processor_bg.wasm\");\n/* harmony import */ var _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_processor_bg.js */ \"./pkg/wasm_processor_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AluOp\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"AluOp\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Instruction\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Instruction\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Parser\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Parser\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Proc\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Proc\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9ae801131f95e9f2\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_9ae801131f95e9f2\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_processor_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///./pkg/wasm_processor.js?");

/***/ }),

/***/ "./pkg/wasm_processor_bg.js":
/*!**********************************!*\
  !*** ./pkg/wasm_processor_bg.js ***!
  \**********************************/
/*! exports provided: greet, AluOp, Instruction, Parser, Proc, __wbg_alert_9ae801131f95e9f2, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AluOp\", function() { return AluOp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Instruction\", function() { return Instruction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Parser\", function() { return Parser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Proc\", function() { return Proc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_9ae801131f95e9f2\", function() { return __wbg_alert_9ae801131f95e9f2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_processor_bg.wasm */ \"./pkg/wasm_processor_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nconst u32CvtShim = new Uint32Array(2);\n\nconst int64CvtShim = new BigInt64Array(u32CvtShim.buffer);\n/**\n*/\nfunction greet() {\n    _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\n/**\n*/\nconst AluOp = Object.freeze({ ADD:0,\"0\":\"ADD\",SUB:1,\"1\":\"SUB\",MUL:2,\"2\":\"MUL\",DIV:3,\"3\":\"DIV\",CMP:4,\"4\":\"CMP\",ADI:5,\"5\":\"ADI\",LDI:6,\"6\":\"LDI\",LOD:7,\"7\":\"LOD\",STO:8,\"8\":\"STO\",JMP:9,\"9\":\"JMP\",JPZ:10,\"10\":\"JPZ\",JNZ:11,\"11\":\"JNZ\",JPN:12,\"12\":\"JPN\",JNN:13,\"13\":\"JNN\",JPV:14,\"14\":\"JPV\",JNV:15,\"15\":\"JNV\", });\n/**\n*/\nclass Instruction {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_instruction_free\"](ptr);\n    }\n    /**\n    */\n    get r1() {\n        try {\n            const retptr = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_instruction_r1\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        }\n    }\n    /**\n    * @param {number | undefined} arg0\n    */\n    set r1(arg0) {\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_instruction_r1\"](this.ptr, !isLikeNone(arg0), isLikeNone(arg0) ? 0 : arg0);\n    }\n    /**\n    */\n    get r2() {\n        try {\n            const retptr = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_instruction_r2\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return r0 === 0 ? undefined : r1 >>> 0;\n        } finally {\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        }\n    }\n    /**\n    * @param {number | undefined} arg0\n    */\n    set r2(arg0) {\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_instruction_r2\"](this.ptr, !isLikeNone(arg0), isLikeNone(arg0) ? 0 : arg0);\n    }\n    /**\n    */\n    get immediate() {\n        try {\n            const retptr = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_instruction_immediate\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            var r2 = getInt32Memory0()[retptr / 4 + 2];\n            u32CvtShim[0] = r1;\n            u32CvtShim[1] = r2;\n            const n0 = r0 === 0 ? undefined : int64CvtShim[0];\n            return n0;\n        } finally {\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n        }\n    }\n    /**\n    * @param {BigInt | undefined} arg0\n    */\n    set immediate(arg0) {\n        int64CvtShim[0] = isLikeNone(arg0) ? BigInt(0) : arg0;\n        const low0 = u32CvtShim[0];\n        const high0 = u32CvtShim[1];\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_instruction_immediate\"](this.ptr, !isLikeNone(arg0), low0, high0);\n    }\n    /**\n    */\n    get op() {\n        var ret = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_instruction_op\"](this.ptr);\n        return ret >>> 0;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set op(arg0) {\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_instruction_op\"](this.ptr, arg0);\n    }\n}\n/**\n*/\nclass Parser {\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_parser_free\"](ptr);\n    }\n}\n/**\n*/\nclass Proc {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Proc.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_proc_free\"](ptr);\n    }\n    /**\n    * @returns {Proc}\n    */\n    static build() {\n        var ret = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"proc_build\"]();\n        return Proc.__wrap(ret);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"proc_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n    /**\n    * @param {string} src\n    */\n    load_program(src) {\n        var ptr0 = passStringToWasm0(src, _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"proc_load_program\"](this.ptr, ptr0, len0);\n    }\n    /**\n    */\n    step() {\n        _wasm_processor_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"proc_step\"](this.ptr);\n    }\n}\n\nfunction __wbg_alert_9ae801131f95e9f2(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./pkg/wasm_processor_bg.js?");

/***/ }),

/***/ "./pkg/wasm_processor_bg.wasm":
/*!************************************!*\
  !*** ./pkg/wasm_processor_bg.wasm ***!
  \************************************/
/*! exports provided: memory, __wbg_proc_free, proc_build, proc_render, proc_load_program, proc_step, __wbg_parser_free, __wbg_instruction_free, __wbg_get_instruction_r1, __wbg_set_instruction_r1, __wbg_get_instruction_r2, __wbg_set_instruction_r2, __wbg_get_instruction_immediate, __wbg_set_instruction_immediate, __wbg_get_instruction_op, __wbg_set_instruction_op, greet, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_processor_bg.js */ \"./pkg/wasm_processor_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/wasm_processor_bg.wasm?");

/***/ })

}]);