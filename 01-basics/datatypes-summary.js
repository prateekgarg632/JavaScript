// Primitives datatypes

// 7 types -> String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Non Primitives

// Array, Objects, Function

const num=10;
const num1=10.5

let temperature;

let id=Symbol('123');
let anotherid=Symbol('123')
console.log(id===anotherid);

// non primitive data type

const weeks=["Monday","Tuesday","Wednesday"];

const user={
    name:"Prateek",
    age:23,
}

const function1=function(){
    console.log("Hello !! Inside function");
}

console.log(function1);

const temp=null;
console.log(typeof temp);
//return type of null is object