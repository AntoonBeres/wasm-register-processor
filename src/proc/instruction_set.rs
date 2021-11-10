use wasm_bindgen::prelude::*;


#[wasm_bindgen]
#[repr(u8)]
#[derive(Copy, Clone)]
pub enum AluOp {
    //ALU-OPS for data
    ADD,        // ADD,Dx,Dy: Dx += Dy
    SUB,        // SUB,Dx,Dy: Dx -= Dy
    MUL,        // MUL,Dx,Dy: Dx *= Dy
    DIV,        // DIV,Dx,Dy: Dx /= Dy
    CMP,        // CMP,Dx,Dy: compare Dx and Dy and set cc
    ADI,        // ADI,Rx,a: Rx += a
    //MEM-OPS
    LDI,        // LDI,Rx,a: Rx = a
    LOD,        // LOD,Rx,Ry: Rx = Ry (1)
                // LOD,Dx,a: Dx = MEM[a] (2)
                // LOD,Dx,Ay,a: Dx = MEM[Ay+a] (3)

    STO,        // STO,Dx,a: MEM[a] = Dx
                // STO,Dx,Ay,a: MEM[Ay+a] = Dx
    
    JMP, // JMP,a: Jump to a
    JPZ, // JPZ,a: if(z) jump to a
    JNZ, // JNZ,a: if(!z) jump to a
    JPN, // JPN,a: if(n) jump to a
    JNN, // JNN,a: if(!n) jump to a
    JPV, // JPV,a: if(v) jump to a
    JNV, // JNV,a: if(!v) jump to a
    //HLT, // HLT:   Halt the processor (infinite loop on self)

}

#[wasm_bindgen]
#[derive(Copy, Clone)]
pub struct Instruction {
    pub r1: Option<usize>,
    pub r2: Option<usize>,
    pub immediate: Option<i64>,
    pub op: AluOp,
}