"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        // static method : I can use method wihout making Block
        this.sayHello = () => "hellog";
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "2020202020", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
const getBlockchain = () => blockchain;
const getlatestBlcok = () => blockchain[blockchain.length - 1];
const getNewTimesStamp = () => Math.round(new Date().getTime() / 1000);
console.log(genesisBlock.sayHello());
// console.log(sayHello());
console.log("second2");
//# sourceMappingURL=index.js.map