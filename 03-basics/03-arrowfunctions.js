    const user = {
        username: "prateek",
        price: 999,
    
        welcomeMessage: function() {
            console.log(`${this.username} , welcome to website`);
            console.log(this);
        }
    }
// console.log(user.welcomeMessage());
    user.username="Sunil"
    // console.log(user);


// const user1=() =>{
//     let username="salman"
//     console.log(this);
// }    
// user1();

let user1={
name:"Prateek",
age:20,
print:function(){
 console.log(`${this.name} welcome to GFG`);   
},
print1:()=>{
console.log(`${this.name} welcome to youtube`) // arrow function doesn't have scope to the this keyword
}
}
user1.print();
user1.print1();


const addtwo=(num1,num2)=>{
return num1+num2; // excplicit return in arrow function
}

const addtwonumber=(num1,num2)=> (num1+num2); // Implicit return in arrow function

console.log(addtwonumber(5,6));
