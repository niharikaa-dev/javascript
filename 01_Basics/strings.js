let name = "nihaarika"
let count = 67
// console.log(name  + count + "Value");  not recommended
console.log(`my name is ${name} and count is ${count}`);

const names = new String("Niharika")
console.log(names);
console.log(names.length);
console.log(names.toUpperCase());
console.log(names.charAt(3));
console.log(names.indexOf('r'));
console.log(names.substring(0,4));
console.log(names.slice(-8 , 8));

const stringOne = "    Nikki     "
console.log(stringOne);
console.log(stringOne.trim());

const url = "https://niharika@gmail/nik%3456niharika"
console.log(url.replace('%3456', '+'));

const stringTwo = "niharika np com xyz"
console.log(stringTwo.split(' '));