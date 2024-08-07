const score = 400
// console.log(score);

const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString()); //convert to string
// console.log(balance.toFixed(1)); //give 100.0 one decimal point after integer

const otherNum = 123.8966;

// console.log(otherNum.toPrecision(4)); // give precision after 4 no like 123.9

const hundreds = 1000000 

// console.log(hundreds.toLocaleString());
// // add commas 1,000,000
// console.log(hundreds.toLocaleString('en-IN'));
// add commas in indian standards 10,00,000


// +++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4)); // negative to positive
//  console.log(Math.round(4.5)); // round number if 4.4 -> 4 & 4.6 -> 5

//  console.log(Math.ceil(4.2)); // 5 choose upper value
//  console.log(Math.floor(4.8)); // 4 //choose lower value

//  console.log(Math.sqrt(20)); //find squre root

//  console.log(Math.pow(4,5)); //4^5

//  console.log(Math.min(4, 5, 3, 6)); // 3
 
 // Math.random --Important !

console.log(Math.random()) //generate random number between 0 and 1

console.log(Math.random() * 100 ); //generate number between 0 and 100

console.log((Math.random() * 10) + 1);//generate number between 1 and 10

console.log(Math.floor((Math.random() * 10) + 1)); // give minimum fixed number between 1 to 10


 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)  
 // give exact numbers between 10 to 20

 
 