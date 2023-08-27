// Objects Literals

let mysym=Symbol("symbol");

let JsUser={
name:"Prateek",
lastName:"Garg",
[mysym]:"sym", // way to declare symbol in objects
age:16,
email:"prateek.gmail.com",
isActive:false,
lastLogin:["monday","friday"]
}
// console.log(JsUser.age);
// console.log(JsUser["name"]); // different way to access the key of an object


// console.log(JsUser[mysym]);

JsUser.email="prateek.garg@gmail.com";  // way to change value of an object in JS
// console.log(JsUser["email"]);
// Object.freeze(JsUser);


JsUser.email="prateek.garg@gmail.com";  // value will not change
// console.log(JsUser["email"]);

console.log(JsUser);

JsUser.Greetings=function(){
    console.log("Hello Js user");
}

JsUser.greetingsTwo=function(){
    console.log(`Hello, Welcome to Js tutorials, ${this.name}`);
}
console.log(JsUser.Greetings());
console.log(JsUser.greetingsTwo());