use crate::proc::instruction_set::*;
use crate::proc::DATA_REGISTERS;
use crate::proc::MEMORY_REGISTERS;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Parser {
    code_content: String
}

impl Parser {
    pub fn new() -> Parser {
        Parser {
            code_content: "".to_owned()
        }
    }
    pub fn parse(&mut self, src: String) -> Vec<Instruction> {
        //println!("filename: {}", filename);
        let OP_FRAGMENT: usize = 0;
        /*
                let file = File::open(filename.to_owned()).unwrap();
                let reader = BufReader::new(file);
        */
        let mut op_list: Vec<Instruction> = Vec::new();
        for (index, line) in src.lines().enumerate() {
            //let line = line.unwrap(); // Ignore errors.
            // Show the line and its number.
            let line: String = line.split(" ").collect();
            let line: String = line.split("\t").collect();

            let code = line.split("//").take(1).collect::<Vec<_>>()[0];

            if code.is_empty(){
                continue;
            }


            let fragments: Vec<&str> = code.split(",").collect();
            let mut r1: Option<usize> = None;
            let mut r2: Option<usize> = None;
            let mut immediate: Option<i64> = None;

            let op = match fragments[OP_FRAGMENT] {
                "ADD" => AluOp::ADD,
                "SUB" => AluOp::SUB,
                "MUL" => AluOp::MUL,
                "DIV" => AluOp::DIV,
                "CMP" => AluOp::CMP,
                "ADI" => AluOp::ADI,
                "LDI" => AluOp::LDI,
                "LOD" => AluOp::LOD,
                "STO" => AluOp::STO,
                "JMP" => AluOp::JMP,
                "JPZ" => AluOp::JPZ,
                "JNZ" => AluOp::JNZ,
                "JPN" => AluOp::JPN,
                "JNN" => AluOp::JNN,
                "JPV" => AluOp::JPV,
                "JNV" => AluOp::JNV,
                "JSR" => AluOp::JSR,
                "RET" => AluOp::RET,
                "LNK" => AluOp::LNK,
                "ULK" => AluOp::ULK,
                _ => panic!("invalid command"),
            };
            match op {
                AluOp::ADD | AluOp::SUB | AluOp::MUL | AluOp::DIV | AluOp::CMP => {
                    //XXX,Dx,Dy
                    let regtype1 = fragments[OP_FRAGMENT + 1].chars().nth(0).unwrap();
                    let regtype2 = fragments[OP_FRAGMENT + 2].chars().nth(0).unwrap();
                    if (regtype1 != 'D' || regtype2 != 'D') {
                        panic!("invalid register for operation");
                    }
                    r1 = Some(
                        fragments[OP_FRAGMENT + 1][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap(),
                    );
                    r2 = Some(
                        fragments[OP_FRAGMENT + 2][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap(),
                    );
                }
                AluOp::ADI | AluOp::LDI => {
                    let regtype1 = fragments[OP_FRAGMENT + 1].chars().nth(0).unwrap();
                    let offset: usize = match regtype1 {
                        'D' => 0,
                        'A' => DATA_REGISTERS,
                        _ => panic!("invalid register type (supported D: date, A: memory"),
                    };
                    r1 = Some(
                        fragments[OP_FRAGMENT + 1][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap()
                            + offset,
                    );
                    immediate = Some(
                        fragments[OP_FRAGMENT + 2]
                            .to_owned()
                            .parse::<i64>()
                            .unwrap(),
                    );
                }
                AluOp::LOD => {
                    let regtype1 = fragments[OP_FRAGMENT + 1].chars().nth(0).unwrap();
                    let offset: usize = match regtype1 {
                        'D' => 0,
                        'A' => DATA_REGISTERS,
                        _ => panic!("invalid register type (supported D: date, A: memory"),
                    };
                    r1 = Some(
                        fragments[OP_FRAGMENT + 1][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap()
                            + offset,
                    );

                    let regtype2 = fragments[OP_FRAGMENT + 2].chars().nth(0).unwrap();
                    if (regtype2 == 'A' || regtype2 == 'D') {
                        let offset2: usize = match regtype2 {
                            'D' => 0,
                            'A' => DATA_REGISTERS,
                            _ => panic!("invalid register type (supported D: date, A: memory"),
                        };
                        r2 = Some(
                            fragments[OP_FRAGMENT + 2][1..]
                                .to_owned()
                                .parse::<usize>()
                                .unwrap()
                                + offset2,
                        );
                        if (fragments.len() > OP_FRAGMENT + 3) {
                            immediate = Some(
                                fragments[OP_FRAGMENT + 3]
                                    .to_owned()
                                    .parse::<i64>()
                                    .unwrap(),
                            );
                        }
                    } else {
                        immediate = Some(
                            fragments[OP_FRAGMENT + 2]
                                .to_owned()
                                .parse::<i64>()
                                .unwrap(),
                        );
                        r2 = None;
                    }
                }
                AluOp::STO => {
                    let regtype1 = fragments[OP_FRAGMENT + 1].chars().nth(0).unwrap();
                    let regtype2 = fragments[OP_FRAGMENT + 2].chars().nth(0).unwrap();
                    if (regtype1 != 'D') {
                        panic!("invalid register for operation");
                    }
                    r1 = Some(
                        fragments[OP_FRAGMENT + 1][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap(),
                    );

                    if (regtype2 == 'A') {
                        r2 = Some(
                            fragments[OP_FRAGMENT + 2][1..]
                                .to_owned()
                                .parse::<usize>()
                                .unwrap()
                                + DATA_REGISTERS,
                        );
                        immediate = Some(
                            fragments[OP_FRAGMENT + 3]
                                .to_owned()
                                .parse::<i64>()
                                .unwrap(),
                        );
                    } else {
                        immediate = Some(
                            fragments[OP_FRAGMENT + 2]
                                .to_owned()
                                .parse::<i64>()
                                .unwrap(),
                        );
                    }

                },
                AluOp::JMP | AluOp::JPZ | AluOp::JNZ | AluOp::JPN | AluOp::JNN | AluOp::JPV | AluOp::JNV | AluOp::JSR  => {
                    immediate = Some(
                        fragments[OP_FRAGMENT + 1]
                            .to_owned()
                            .parse::<i64>()
                            .unwrap(),
                    );
                },
                AluOp::RET => {

                }
                AluOp::LNK | AluOp::ULK => {
                    r1 = Some(
                        fragments[OP_FRAGMENT + 1][1..]
                            .to_owned()
                            .parse::<usize>()
                            .unwrap() 
                            +DATA_REGISTERS,
                    );
                }
                _ => {
                    panic!("unsupported op")
                }
            }

            let instruction = Instruction {
                r1,        // r1,
                r2,        // r2,
                immediate, // immediate,
                op,
            };
            op_list.push(instruction);

            println!("{}. {}", index + 1, line);
        }
        op_list
    }
}
