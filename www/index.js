import init, {greet, Proc} from "./pkg/wasm_processor_reg.js";

init().then(() => {
    greet("wasm yeet");

    var loaded_file;
    var new_file_loaded = false;

    const pre = document.getElementById("wasm-proc");
    const universe = Proc.build();




    pre.textContent = universe.render();

});