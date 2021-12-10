import * as CryptoJS from "crypto-js";
import { createSemanticDiagnosticsBuilderProgram } from "typescript";


class Block {
    // static method : I can use method wihout making Block

    // sayHello = ():string => "hellog"
    static calculateBlockHash = (index: number, previousHash: string, data: string, timestamp: number): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block): boolean => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number,
        hash: string,
        previousHash: string,
        data: string,
        timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}


const genesisBlock: Block = new Block(0, "2020202020", "","Hello", 123456);

var blockchain: [Block] = [genesisBlock];
// console.log(blockchain);


const getBlockchain = (): Block[] => blockchain;
const getlatestBlcok = (): Block => blockchain[blockchain.length - 1];

//getTime()
//주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환합니다.
const getNewTimesStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
    const previousBlock: Block = getlatestBlcok();
    const newIndex: number = previousBlock.index + 1;
    const newTimestamp: number = getNewTimesStamp();
    const newHash: string = Block.calculateBlockHash(newIndex,
        previousBlock.hash, data, newTimestamp);
    const newBlock: Block = new Block(newIndex, newHash,
        previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};

// console.log(genesisBlock.sayHello());
// console.log(sayHello());
// console.log(createNewBlock("hey"), createNewBlock("bye"));

const getHashforBlock = (aBlock : Block) : string => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestamp);

const isBlockValid = (candidateBlock: Block, previousBlock: Block): Boolean => {
    if(!Block.validateStructure(candidateBlock)){
        console.log("invalid")
        return false;
    } else if (previousBlock.index + 1 !== candidateBlock.index){
        console.log("invalid")
        return false;
    } else if (previousBlock.hash !== candidateBlock.previousHash){
        console.log("invalid hash")
        return false;
    }else if (getHashforBlock(candidateBlock)!== candidateBlock.hash){
        return false;
    }
    else{return true;}
};


const addBlock = (candidateBlock :Block ) : void => {
    if (isBlockValid(candidateBlock, getlatestBlcok())){
        blockchain.push(candidateBlock);
    }
}

const list = ["hey", "bye", "now"]

for (const i of list ){
    createNewBlock(i) ;
}

createNewBlock("second");
createNewBlock("third");

console.log(blockchain);
// console.log("what")



export {};