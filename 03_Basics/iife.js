// Immediately invoked function expressions

(function one() {
    console.log(`CONNECTED`);
})();  //SEMICOLON IS REQUIRED

( () => {
    console.log(`CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`CONNECTED To ${name}`);
}) ('user')
// function which executes immediately is iife.  
// problem due to global scope variables and declarations  soln => iife 