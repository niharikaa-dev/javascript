// Object.create  singleton.  constructor method

const newuser = {
    name : "niharika",
    email : "xyz@google.com",
    location : "India",
    isActive : false,
    lastactive : ["Monday","Friday"]
}

// console.log(newuser.email);   
// console.log(newuser["email"]);

// change the values
// newuser.location = "USA"
// Object.freeze(newuser)

newuser.greeting = function(){
    console.log("Hello JS user");
}
newuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(newuser.greeting());
console.log(newuser.greetingTwo());
