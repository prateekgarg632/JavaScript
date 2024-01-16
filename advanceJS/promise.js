const pr=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("DB Connection");
        resolve()
    },1000)
})
pr.then(function(){
    console.log("DB connected");
})

const promiseone=new Promise(function(resolve,reject){

    setTimeout(function(){
            resolve({name:"JavaScript",email:"js@example.com"})      
    },1000)
})

promiseone.then(function(user){
console.log(user);
})

const promisethree=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=false;
    if(!error){
        resolve({username:"Prateek",mail:"abc@example.com"})
    }
    else{
        reject('Error occurs')
    }
  },1000)  
})

promisethree.then(function(user){
    return user.username
}).then(function(name){
console.log(name);
}).catch((error)=>{
console.log(error);
}).finally(()=>{
    console.log("Promise is either realoved or handled");
})

const promisefour=new Promise(function(resolve,reject){
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({user:"Prateek",course:"JS"})
        }
        else{
            reject('Error:Error occured')
        }
    }, 1000);
})

async function consumePromise(){
    try {
        let response=await promisefour;
        console.log(response);    
    } catch (error) {
        console.log(error);
    }
    
} 
consumePromise()



fetch('https://randomuser.me/api/')
.then((response)=>{
return response.json();
}).then((data)=>{
console.log(data);
}).catch((error)=>{
console.log(error);
})