function Myname() {
    console.log("Hello");
    console.log("World");
}
// here Myname is reference and when we apply parentheses then it becomes execution
// Myname -> reference , () -> execution
Myname()

// function addTwoNum(num1 , num2){  //(num1,num2) -> parameters
//     console.log(num1 + num2);
// }
// addTwoNum(3,4) //(3,4) -> arguements

function addTwoNum(num1,num2) {
    let result = num1 + num2
    return result
}

const result = addTwoNum(2,7)
console.log("Result:",result);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
// console.log((loginUserMessage("Niharika")));

function loginUserMessage(username = "user"){ //if we don't want undefined  as o/p
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}
console.log((loginUserMessage()));
