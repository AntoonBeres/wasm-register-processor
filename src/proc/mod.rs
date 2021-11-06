#[allow(warnings)]
pub mod processor;
pub mod instruction_set;
pub mod parser;

pub const DATA_REGISTERS: usize = 8;
pub const MEMORY_REGISTERS: usize = 8;
pub const MEMORY_SIZE: usize = 10000; //amount of words of data
pub const TEXT_SIZE: usize = 10000;