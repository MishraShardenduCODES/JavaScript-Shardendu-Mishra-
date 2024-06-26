// "use strict";

class User {
    constructor(name, pass, age) {
        this.name = name;
        this.pass = pass; 
        this.age = age;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name + "1234";
    }

    get pass(){
        return this._pass;
    }

    set pass(value){
        this._pass = value + "1234";
    }
}

const User1 = new User("Shardendu Mishra","123",20);
console.log(User1.name);
console.log(User1.pass);
console.log(User1.age);