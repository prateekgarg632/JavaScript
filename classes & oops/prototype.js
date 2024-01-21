const heros=["marvel","spiderman"];


const user={
    username:"Prateek",
    course:"Javascript"
}

Object.prototype.display=function(){
    console.log(`Prateek is present`);
}
// user.display();
// heros.display();

const User={
    Studentname:"Prateek",
    Course:"Java script"
}

const Teacher={
    name:'Hitesh'
}

const TeachingSupport={
    isAvailable:true
}

const TASupport={
    assignment:"java script",
    fulltime:true,
    __proto__:TeachingSupport   
}
// console.log(TASupport.isAvailable);
// Teacher.__proto__=User;
// console.log(Teacher.Studentname);

Object.setPrototypeOf(Teacher,TeachingSupport);
console.log(Teacher.isAvailable);
