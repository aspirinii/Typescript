"use strict";
// console.log("hello!!! start from here");
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "First earth",
    age: 6000,
    gender: "male"
};
const name = "Second earth", age = 5000, gender = "male";
//arguemnet : return type
const sayHi = (name, age, gender) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return "what the hehe!!!";
};
const sayHo = (person) => {
    console.log(`Say Ho Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    return "what the hehe!!!";
};
sayHo(person);
const haha = sayHi(name, 444, "neutral");
console.log(haha);
//# sourceMappingURL=second.js.map