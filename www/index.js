import init, { greet, Proc } from "./pkg/wasm_processor_reg.js";

init().then(() => {

    let loaded_file;
    let new_file_loaded = false;

    const pre = document.getElementById("wasm-proc");

    const pre_program = document.getElementById("loaded-program-text")

    const universe = Proc.build();
    pre.textContent = universe.render();




    document.getElementById('upload').addEventListener('change', readFileAsString);
    function readFileAsString() {
        let files = this.files;
        if (files.length === 0) {
            console.log('No file is selected');
            return;
        }

        let reader = new FileReader();
        reader.onload = function (event) {
            //console.log('File content:', event.target.result);
            loaded_file = event.target.result;

            universe.load_program(loaded_file);
            pre.textContent = universe.render();
            new_file_loaded = true;
            console.log('File content:', loaded_file);
            updateProgramText();
        };
        reader.readAsText(files[0]);
    }

    document.getElementById('stepProc').addEventListener('click', stepProc);

    function stepProc() {
        try {
            universe.step();
        }
        catch(error) {
            alert(error);
            console.error(error);
        }
        pre.textContent = universe.render();
    }

    document.getElementById('resetRegisters').addEventListener('click', resetRegisters);

    function resetRegisters(){
        universe.clear_registers();
        pre.textContent = universe.render();
    }

    function updateProgramText(){
        let lines = loaded_file.split('\n');
        let result = "";
        for(let i=0; i<lines.length; i++){
            result += i;
            result += ": ";
            result += lines[i];
            result += "\n";
        }
        pre_program.textContent = result;
    }

});