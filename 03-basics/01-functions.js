function printwelcome(){
    console.log("w");
    console.log("e");
    console.log("l");
    console.log("c");
    console.log("o");
    console.log("m");
    console.log("e");
}
// printwelcome();

function addNumber(number1,number2){
return number1+number2;
}
let res=addNumber(10,30);
// console.log(res);



function addprices(...num1){ // rest operator to hold multiple values in functions.
    return num1[2];
}

// console.log(addprices(100,200,300));


let user={
    name:"Prtaeek",
    price:500
}

function display(object){                   //  passsing objects in functions.
// console.log(`User name is ${object.name} & price is ${object.price}`);
}
display({
    name:"sunil",
    price:5000
});


let array=[10,20,30,40]

function printarray(array){
for(i=0;i<array.length;i++)
console.log(array[i]);
}
printarray(array);