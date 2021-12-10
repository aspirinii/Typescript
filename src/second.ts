// console.log("hello!!! start from here");

interface Human {
    name :string;
    age : number;
    gender : string;
} // class로 대체하면 JS 코드에도 보인다.. 더 엄격한 구조 강의 #6 참고

const person ={
    name : "First earth",
    age : 6000,
    gender : "male"
}

const name = "Second earth",
    age = 5000,
    gender = "male";
//arguemnet : return type
const sayHi = (name:string, age:number, gender:string):string => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
    return "what the hehe!!!"
};
const sayHo = (person:Human):string => {
    console.log(`Say Ho Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
    return "what the hehe!!!"
};
sayHo(person);


const haha  = sayHi(name, 444, "neutral");
console.log(haha);



export{};
