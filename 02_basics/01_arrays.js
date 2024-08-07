//arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myheroes = ["Iron Man", "Batman"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);


// Array methods

// myArr.push(6) // add at last 6
// myArr.push(7) //add at last 7
// myArr.pop() // pop last element

// myArr.unshift(0) // add 0 to first
// myArr.shift() // remove first element 

// console.log(myArr.includes(9)); //check if element is present or not give indexNo
// console.log(myArr.indexOf(9)); // check if given index element is present or not - give value
 // Note : if index is out of length ans is : -1

// console.log(myArr);

const newArr = myArr.join() // convert into string

// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr); //string

// slice, splice --Important!

console.log("A ", myArr); //[0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3) // includes 1 , 2 but not 3

console.log(myn1); // [1,2]
console.log("B ", myArr);// [0, 1, 2, 3, 4, 5,] does not change the array


const myn2 = myArr.splice(1, 3) // includes 1, 2 and 3 also
console.log(myn2); //[1,2,3]
console.log("C ", myArr); // [0,4,5] remove spliced elements and modify the array