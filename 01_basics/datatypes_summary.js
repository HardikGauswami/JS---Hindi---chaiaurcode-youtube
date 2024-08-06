//Primitive 
/* 7 types
1> Number
2> String
3> Boolean
4> undefined
5> null
6> Symbol
7> BigInt */

const score = 100
let scoreValue = 100.4
let  isAdmin = false
let outsideTemp = null
let user; //undefined

const id=Symbol('123') // symbol
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 45764756475745746n //bigint

console.log(typeof bigNumber);


//Reference (Non - primitive)

//Arrays
//Objects
//Functions

const heroes = ["Ironman", "thor", "deadpool"] // array

let obj1 = {
    name : "Hardik",
    age : 20
} // object

const myFunction = function(){
    console.log("Hello World");
    
}

console.log(typeof id);
