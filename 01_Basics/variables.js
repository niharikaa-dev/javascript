/* 
const = can't be re-assigned a value and can't be declared again  (block scope)
let = can be re-assigned a value but can't be declared again (block scope)
var = it can be re-assigned a value and it can also be declared again  (Global scope)

=> Never use var in your code instead of let because of block and functional scope issues.
# console.table([group of variables you want to show in tabular form])
*/

const accId = 123123
let accEmail = "abc@gmail.com"
var accname = "Niketan"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accEmail = "xyz@google.com"
let accstate;

console.log(accEmail);
console.table([accId, accEmail, accname, accstate]);