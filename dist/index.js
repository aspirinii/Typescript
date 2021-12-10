"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
// static method : I can use method wihout making Block
// sayHello = ():string => "hellog"
Block.calculateBlockHash = (index, previousHash, data, timestamp) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "2020202020", "", "Hello", 123456);
var blockchain = [genesisBlock];
// console.log(blockchain);
const getBlockchain = () => blockchain;
const getlatestBlcok = () => blockchain[blockchain.length - 1];
//getTime()
//주어진 일시와 1970년 1월 1일 00시 00분 00초 사이의 간격(밀리초 단위)인 타임스탬프를 반환합니다.
const getNewTimesStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getlatestBlcok();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimesStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, data, newTimestamp);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
// console.log(genesisBlock.sayHello());
// console.log(sayHello());
// console.log(createNewBlock("hey"), createNewBlock("bye"));
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.data, aBlock.timestamp);
const isBlockValid = (candidateBlock, previousBlock) => {
    if (!Block.validateStructure(candidateBlock)) {
        console.log("invalid");
        return false;
    }
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        console.log("invalid");
        return false;
    }
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        console.log("invalid hash");
        return false;
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getlatestBlcok())) {
        blockchain.push(candidateBlock);
    }
};
const list = ["hey", "bye", "now"];
for (const i of list) {
    createNewBlock(i);
}
createNewBlock("second");
createNewBlock("third");
console.log(blockchain);
//# sourceMappingURL=index.js.map