//import * as wasm from "wasm-processor";
import * as wasm from "./node_modules/wasm-processor-reg";


var loaded_file;
var new_file_loaded = false;

const pre = document.getElementById("wasm-proc");
const universe = wasm.Proc.build();




pre.textContent = universe.render();
/*const renderLoop = () => {
    pre.textContent = universe.render();
    if(new_file_loaded){
        console.log("afaf");
        universe.load_program(loaded_file);
    }

    requestAnimationFrame(renderLoop);
};
  
requestAnimationFrame(renderLoop);*/

document.getElementById('upload').addEventListener('change', readFileAsString);
function readFileAsString() {
    var files = this.files;
    if (files.length === 0) {
        console.log('No file is selected');
        return;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        //console.log('File content:', event.target.result);
        loaded_file = event.target.result;
        
        universe.load_program(loaded_file);

        new_file_loaded = true;
        console.log('File content:', loaded_file);
    };
    reader.readAsText(files[0]);
    
    
    
}

document.getElementById('stepProc').addEventListener('click', stepProc)

function stepProc() {
    universe.step();
    pre.textContent = universe.render();
}

//wasm.greet();
