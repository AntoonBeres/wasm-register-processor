/*pub const DATA_REGISTERS: usize = 8;
pub const MEMORY_REGISTERS: usize = 8;
pub const MEMORY_SIZE: usize = 10000; //amount of words of data
pub const TEXT_SIZE: usize = 10000;*/


use crate::proc::DATA_REGISTERS;
use crate::proc::MEMORY_REGISTERS;
use crate::proc::MEMORY_SIZE;
use crate::proc::TEXT_SIZE;
use std::fmt;
use wasm_bindgen::prelude::*;

const PC: usize = 15;

const I32MAX: i64 = std::u32::MAX as i64;
const I32MIN: i64 = std::u32::MIN as i64;
use crate::proc::instruction_set;
use crate::proc::instruction_set::AluOp;
use crate::proc::parser;

struct CC {
    Z: bool,
    N: bool,
    V: bool,
}

impl CC {
    pub fn new() -> CC {
        CC {
            Z: false,
            N: false,
            V: false,
        }
    }
}

#[wasm_bindgen]
pub struct Proc {
    parser: parser::Parser,
    cc: CC,
    d: [i64; DATA_REGISTERS + MEMORY_REGISTERS],
    memory: Box<Memory32bit>,
    text_memory: Vec<instruction_set::Instruction>,
}

pub struct Memory32bit {
    content: [i64; MEMORY_SIZE],
}

impl Memory32bit {
    pub fn new() -> Memory32bit {
        Memory32bit {
            content: [0; MEMORY_SIZE],
        }
    }
    pub fn get(&self, location: i64) -> i64 {
        return self.content[location as usize];
    }
    pub fn set(&mut self, location: i64, value: i64) {
        self.content[location as usize] = value;
    }
}

fn add_32(int1: i64, int2: i64) -> i64 {
    let result64: i64 = int1 + int2;

    let underflow: bool = (result64 < I32MIN);
    let overflow: bool = (result64 > I32MAX);

    if (!(underflow || overflow)) {
        return result64;
    } else if (underflow) {
        let result = I32MAX - (I32MIN - result64);
        return result;
    } else {
        let result = I32MIN + (result64 - I32MAX);
        return result;
    }
}

fn sub_32(int1: i64, int2: i64) -> i64 {
    let result64: i64 = int1 - int2;

    let underflow: bool = (result64 < I32MIN);
    let overflow: bool = (result64 > I32MAX);

    if (!(underflow || overflow)) {
        return result64;
    } else if (underflow) {
        let result = I32MAX - (I32MIN - result64);
        return result;
    } else {
        let result = I32MIN + (result64 - I32MAX);
        return result;
    }
}
fn mul_32(int1: i64, int2: i64) -> i64 {
    let result64: i64 = int1 * int2;

    let underflow: bool = (result64 < I32MIN);
    let overflow: bool = (result64 > I32MAX);

    if (!(underflow || overflow)) {
        return result64;
    } else if (underflow) {
        let result = I32MAX - (I32MIN - result64);
        return result;
    } else {
        let result = I32MIN + (result64 - I32MAX);
        return result;
    }
}

fn cmp_32(int1: i64, int2: i64) -> CC {
    let result64 = int1 - int2;
    let underflow: bool = (result64 < I32MIN);
    let overflow: bool = (result64 > I32MAX);
    let Z: bool = (int1 == int2);
    let N: bool = (int2 > int1);
    let V: bool = (overflow || underflow);
    return CC { Z, N, V };
}

#[wasm_bindgen]
impl Proc {
    pub fn build() -> Proc {
        Proc {
            parser: parser::Parser::new(),
            cc: CC::new(),
            d: [0; DATA_REGISTERS + MEMORY_REGISTERS],
            memory: Box::new(Memory32bit::new()),
            text_memory: Vec::new(),
        }
    }
    pub fn render(&self) -> String{
        self.to_string()
    }
    pub fn load_program(&mut self, src: String) {
        self.text_memory = self.parser.parse(src);
    }
    pub fn step(&mut self) {
        let instruction = self.text_memory[self.d[PC] as usize];
        self.aluOp(&instruction);
        self.d[PC] += 1;
    }
}



impl fmt::Display for Proc {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        for i in 0..DATA_REGISTERS{
            write!(f, "D{}: {} \n", i, self.d[i as usize]);
        }
        for i in 0..MEMORY_REGISTERS{
            write!(f, "A{}: {} \n", i, self.d[(DATA_REGISTERS+i) as usize ]);
        }
        write!(f,"CC: \n");
        write!(f,"V: {}\n", self.cc.V);
        write!(f,"N: {}\n", self.cc.N);
        write!(f,"Z: {}\n", self.cc.Z);
        Ok(())
    }
}

impl Proc {
    

    

    pub fn print_state(&self){
        for i in 0..DATA_REGISTERS{
            println!("D{}: {}", i, self.d[i as usize]);
        }
        for i in 0..MEMORY_REGISTERS{
            println!("A{}: {}", i, self.d[(DATA_REGISTERS+i) as usize ]);
        }
        println!("CC: ");
        println!("V: {}", self.cc.V);
        println!("N: {}", self.cc.N);
        println!("Z: {}", self.cc.Z);
    }

    pub fn aluOp(&mut self, instruction: &instruction_set::Instruction) {
        match instruction.op {
            AluOp::ADD => {
                let r2 = match instruction.r2 {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                let r1 = instruction.r1.unwrap();
                if r1 >= DATA_REGISTERS || (r2 >= DATA_REGISTERS) {
                    panic!("invalid register for data-operation!");
                }
                self.d[r1] = add_32(self.d[r1], self.d[r2])
            }
            AluOp::SUB => {
                let r1 = instruction.r1.unwrap();
                let r2 = match instruction.r2 {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                if r1 >= DATA_REGISTERS || (r2 >= DATA_REGISTERS) {
                    panic!("invalid register for data-operation!");
                }

                self.d[r1] = sub_32(self.d[r1], self.d[r2])
            }
            AluOp::MUL => {
                let r1 = instruction.r1.unwrap();
                let r2 = match instruction.r2 {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                if r1 >= DATA_REGISTERS || (r2 >= DATA_REGISTERS) {
                    panic!("invalid register for data-operation!");
                }

                self.d[r1] = mul_32(self.d[r1], self.d[r2])
            }
            AluOp::DIV => {
                let r1 = instruction.r1.unwrap();
                let r2 = match instruction.r2 {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                if r1 >= DATA_REGISTERS || (r2 >= DATA_REGISTERS) {
                    panic!("invalid register for data-operation!");
                }

                self.d[r1] /= self.d[r2]
            }
            AluOp::CMP => {
                let r1 = instruction.r1.unwrap();
                let r2 = match instruction.r2 {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                if r1 >= DATA_REGISTERS || (r2 >= DATA_REGISTERS) {
                    panic!("invalid register for data-operation!");
                }
                let result = cmp_32(self.d[r1], self.d[r2]);
                self.cc = result;
            }
            AluOp::ADI => {
                let r1 = instruction.r1.unwrap();
                let immediate = match instruction.immediate {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                self.d[r1] += immediate;
            }
            AluOp::LDI => {
                let r1 = instruction.r1.unwrap();
                let immediate = match instruction.immediate {
                    None => panic!("invalid operation-usage"),
                    Some(x) => x,
                };
                self.d[r1] = immediate;
            }
            AluOp::LOD => {
                let r1 = instruction.r1.unwrap();
                if instruction.r2.is_some() && instruction.immediate.is_none() {
                    let r2 = instruction.r2.unwrap();
                    self.d[r1] = self.d[r2];
                } else if instruction.r2.is_none() && instruction.immediate.is_some() {
                    let imm = instruction.immediate.unwrap();
                    self.d[r1] = self.memory.get(imm);
                } else if instruction.r2.is_some() && instruction.immediate.is_some() {
                    let r2: usize = instruction.r2.unwrap();
                    let imm = instruction.immediate.unwrap();
                    let adress = self.d[r2] + imm;
                    self.d[r1] = self.memory.get(adress);
                } else {
                    panic!("invalid usage of LOD")
                }
            }
            AluOp::STO => {
                let r1 = instruction.r1.unwrap();
                if instruction.r2.is_none() {
                    self.memory.set(instruction.immediate.unwrap(), self.d[r1]);
                } else {
                    let base = self.d[instruction.r2.unwrap()];
                    let offset = instruction.immediate.unwrap();
                    let adress = base + offset;
                    self.memory.set(adress, self.d[r1]);
                }
            }
            AluOp::JMP => {
                self.d[PC] = instruction.immediate.unwrap();
            }
            AluOp::JPZ => {
                if self.cc.Z {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
            AluOp::JNZ => {
                if !self.cc.Z {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
            AluOp::JPN => {
                if self.cc.N {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
            AluOp::JNN => {
                if !self.cc.N {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
            AluOp::JPV => {
                if self.cc.V {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
            AluOp::JNV => {
                if !self.cc.V {
                    self.d[PC] = instruction.immediate.unwrap();
                }
            }
        }
    }
}
