let score = "hardik"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber)
console.log(valueInNumber);

//Conversion of Number to ---

// "33" => 33 type number
// "44abc" => NaN  type : number
// "hardik" => NaN     Number
// true => 1 type : number
// null => 0 type : number
// undefined => NaN  Number

let isloggedIn = undefined

let booleanIsLoggedIn = Boolean(isloggedIn)

console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
// "hardik" => true
// null => false , undefined => false

let someNumber = 44

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

