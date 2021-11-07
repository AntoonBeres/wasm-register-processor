<div align="center">

  <h1><code>Register processor WASM</code></h1>

## About


A simulator for a fictional register-processor, losely based on the motorla 68000 and meant for teaching students in a computer-systems course

## 🚴 Dependencies
  - Make sure the latest version of the rust-toolchain is install (cargo and rustc)
  - install wasm-pack [`wasm-pack`](https://rustwasm.github.io/wasm-pack/installer/)
  
## 🚴 Usage

```
git clone https://github.com/AntoonBeres/wasm-register-processor.git
cd my-project
```

### 🛠️ Build with `wasm-pack build`

```
sh build.sh
```


### 🎁 deploy on a server

```
cd www
python3 -m http.server (or use any other web-server)
```

## 🔋 Batteries Included

* [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen) for communicating
  between WebAssembly and JavaScript.
* [`console_error_panic_hook`](https://github.com/rustwasm/console_error_panic_hook)
  for logging panic messages to the developer console.
* [`wee_alloc`](https://github.com/rustwasm/wee_alloc), an allocator optimized
  for small code size.
