// const instaUser = new Object() //singleton obj
const instaUser = {} //non singleton obj

instaUser.id = "1",
instaUser.name = "nick"
instaUser.isActive = true

// console.log(instaUser);

const regularUser = {
    email : "xyz@gmail.com",
    fullname : {
        userfullname : {
            firstname : "nikki",
            lastname : "micci"
        }
    }
}
// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 ={...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename : "Javascript",
    price : "999",
    location : "Bloomington"
}

const {location} = course
console.log(location);


