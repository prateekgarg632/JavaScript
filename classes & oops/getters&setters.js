class User{
    constructor(mail,password){
        this.mail=mail;
        this.password=password;
    }

    get password(){
        return this.pass.toUpperCase();
    }

    set password(pass){
        this.pass=pass;
    }
}
const user1=new User("p@googlle.com","abc")
console.log(user1.password);