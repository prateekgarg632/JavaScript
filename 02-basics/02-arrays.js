const arr1=["prateek","Salman","Ram"];
const arr2=["Garg","Khan","kishan"];
// arr1.push(arr2);
// console.log(arr1);


//concat doesn't modify the existing array
// const newarr=arr1.concat(arr2);
// console.log(newarr);

let another_array=[1,2,3,[4,5,6],7,[8,9,[4,89]]];
let real_array=another_array.flat(Infinity);
// console.log(real_array);

// console.log(Array.isArray("prateek"));
// console.log(Array.from("prateek"));

// console.log(Array.from({name:"prateek"})); // from method not bale to recognise which attribute needs to be converted into array.


let a=10;
let b=20;
let c=30;
console.log(Array.of(a,b,c));