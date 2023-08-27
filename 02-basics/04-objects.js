//Singleton objects in JS

const user=new Object();
// console.log(user);
let user1={};
// console.log(user1);
user1.id="123abc"
user1.name="prateek"
user1.isloogedin=false
// console.log(user1);
let user_1={
    email:"sk123@gmail.com",
    fullname: {
        generalfullname: {
            first:"SK",
            last:"goels"
        }
    }
};

// console.log(user_1.fullname.generalfullname.first);


let obj1={1:"a",2:"b"}
let obj2={3:"a",4:"d"}
// let obj3=Object.assign(obj1,obj2); // merge two objects with assign method
// console.log(obj3);

let obj3={...obj1,...obj2} // merge two objects with spread operator
// console.log(obj3);


// console.log(user1);
// console.log(Object.keys(user1)); // used to get keys of an object
// console.log(Object.values(user1)); // used to get values of an object
console.log(Object.entries(user1));
console.log(user1.hasOwnProperty('isloogen'));
