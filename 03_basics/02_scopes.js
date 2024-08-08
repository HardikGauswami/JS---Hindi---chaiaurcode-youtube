// var c = 300 //global scope
let a = 300
{} //scope

if (true) {
    let a = 10
    const b = 20
     c = 30
     console.log(a);
     
} //block scope

console.log(a);
// console.log(b);
// console.log(c);
