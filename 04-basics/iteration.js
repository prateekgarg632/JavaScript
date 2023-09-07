const map=new Map();
map.set("IN","India")
map.set("USA","United states of America")
map.set("AS","Australia")

for (const key of map) {
    // console.log(key);   // way to print whole map
}

for (const [key,value] of map) {
    // console.log("Key is "+key+" & value is "+value); // to print key and value in seperately
}


const myobject={
    game1:'SNF',
    game2:'mini militia',
    game3:'pubg'
}


// for (const game of games) {
    // console.log(game); //  Object(game) is not iterable by forof loop
// }

for (const key in myobject) {
// console.log("Key is "+key+" & value is "+myobject[key]); Objects can be iterated through forin loop.    
}


const arr=['Cpp','Java','js','Python','C']

// arr.forEach(function (item){
// console.log(item);
// })

// arr.forEach((value)=>{
// console.log(value);
// })

// function print(item){
//     console.log(item);
// }
// arr.forEach(print);

// arr.forEach(function (item,index){
//     console.log(item,index);
//     })


const myobjects=[
    {
        Language:"Java",
        file:".java"
    },
    {
        Language:"JavaScript",
        file:".js"
    },
    {
        Language:"Python",
        file:".py"
    }
]

myobjects.forEach((objects,index)=>{
    console.log(objects.file,index);
})



