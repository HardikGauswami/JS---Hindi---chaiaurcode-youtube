const marvel_heroes = ["Thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes); // it push dc_heroes as an last element and creates like two dimensional array
// console.log(marvel_heroes[3][1]); //batman

// merge two array with concat method

// const newHeroes = marvel_heroes.concat(dc_heroes) // concat adds both array elements into new array

// console.log(newHeroes); 

//spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // it also combine array elements with multiple arrays 

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realarray = another_array.flat(Infinity) // it flats all elements of array inside another arrays on a single array [1,2,3,4,5,6,7,6,7,4,5]

// console.log(realarray);

// console.log(Array.isArray("Hardik")) // check whether array or not
// console.log(Array.from("Hardik")) //convert into array

console.log(Array.from( {name : "Hardik"}));
//it gives empty array [] because it doesn't know if it makes key as element or value as element

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
