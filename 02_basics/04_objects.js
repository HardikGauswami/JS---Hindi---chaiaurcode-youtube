// const tinderUser = new Object() //singleton
const tinderUser = {} // not singleton

tinderUser.id = "123abc"
tinderUser.Name = "hardik"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
               firstname : "Hardik",
               lastname : "gauswami"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1 : "a",
    2 : "b"
}
const obj2 = {
    3 : "c",
    4 : "d"
}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // assign merge multiple objects into one single object

const obj3 = {...obj1, ...obj2} // another method most used
// console.log(obj3);

// this is how database send values in real time projects
const users = [
    {
        id : 1,
        email : "h@gmail.com"
    },
    {
        id : 2,
        email : "k@gmail.com"
    }
] // An array of objects

// console.log(users[1].email)
// console.log(tinderUser)

// console.log(Object.keys(tinderUser)); //give arrays of keys
// console.log(Object.values(tinderUser)) // give arrays of values

// console.log(Object.entries(tinderUser));
// //give an array of arrays of key , value pair - 2 dimensional darray

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //check if property is present or not


const course = {
    coursename : "Js in Hindi",
    price : 1000, 
    teacher : "Hitesh"
}

//course.teacher //access method

const {teacher: t} = course //another access method very used

console.log(t);

// JSON API how it looks
// {
//     "name" : "hardik",
//     "coursename" : "Js in hindi",
//     "price" : free
// }

// [
//     {},
//     {},
//     {}
// ]