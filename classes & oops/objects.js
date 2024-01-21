function createUser(name,price){
this.name=name;
this.price=price;
}

createUser.prototype.increment=function(){
    this.price++;
}
const user=new createUser("Prateek",100);
console.log(user);