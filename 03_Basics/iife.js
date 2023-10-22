// Immediately invoked function expressions

(function one() {
    console.log(`CONNECTED`);
})();  //SEMICOLON IS REQUIRED

( () => {
    console.log(`CONNECTED TWO`);
}) ()

// function which executes immediately is iife.  
// problem due to global scope variables and declarations  soln => iife 