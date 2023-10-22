const user = {
    username : "niharika" ,
    age : 22 ,
//this is refered to current context
    message : function() {
        console.log(`${this.username} welcome`);
        console.log(this);
    }
}

user.message()

const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,5))