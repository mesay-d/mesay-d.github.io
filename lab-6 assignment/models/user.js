class user{
    constructor(username,password,role){
        this.username=username;
        this.password=password;
        this.role=role;
    }
    login(){
        return users.find(u=>u.username===this.username&&u.password===this.password)
    }
}
const users=[new user("john","admin123",null),new user("edward","admin567",null),new user("mesay","honey",null)]

module.exports=user;