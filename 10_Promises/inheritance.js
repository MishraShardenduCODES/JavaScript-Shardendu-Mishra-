"use strict"

class User{
    constructor(UserName,age){
        this.UserName = UserName;
        this.age = age;
    }

    LoginName(){
        return (`${this.UserName} Just Logged In !!`);
    }
}

class Teacher extends User{
    constructor(UserName,age,email){
        super(UserName,age);
        this.email = email;
    }
    
    AddCourse(){
        return (`A new course has been a added !!`);
    }
}

const Teacher1 = new Teacher("SM",20,"sm@gmail.com")

console.log(Teacher1);
console.log(Teacher1.AddCourse());
console.log(Teacher1.LoginName());


// The super keyword is used to access properties on an object 
// literal or class's [[Prototype]], or invoke a 
// superclass's constructor.


console.log(Teacher1 instanceof Teacher); // true
console.log(Teacher1 instanceof User); // true
console.log(Teacher1 instanceof Object); // true
console.log(User instanceof Teacher); // false