// "use strict"

function User(email,pass){
    this._email = email;
    this._pass = pass;

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email;
        },
        set: function(value){
            this._email = value + "1234";
        },
    });

    Object.defineProperty(this, 'pass', {
        get:  function(){
            return this._pass ;
        },
        set: function(pass){
            this._pass = pass + "1234";
        },
    });
}

const User1 = new User("sm@gmail.com","12345678");
console.log(User1); 
console.log(User1.email); 
console.log(User1.pass); 