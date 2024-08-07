const Name = "Hardik"
const repoCount = 50

console.log(Name + repoCount + "value");//do not use this syntax

//use of backtic
console.log(`Hello my name is ${Name} and my repo count is ${repoCount}`);


const gameName = new String('Temple-Run-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase()); // convert to uppercase
console.log(gameName.charAt(5)); // give character of no of index
console.log(gameName.indexOf('p')); // give index no of character

const newString = gameName.substring(-8, 4)
console.log(newString); // if negative always start with 0 index

const anotherString = gameName.slice(-0, -5) // negative value also used
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove whitespaces

const url = "https://Hardik.com/hardik%04Goswami"

console.log(url.replace('%04', '-')) // replace

console.log(url.includes('hitesh')) // check if sub-string present or not


console.log(gameName.split('-'));




