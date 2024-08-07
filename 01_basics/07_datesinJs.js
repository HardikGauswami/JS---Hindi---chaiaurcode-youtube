// //Dates

// let myDate = new Date()

// console.log(myDate.toString()); //Wed Aug 07 2024 07:15:34 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Wed Aug 7 2024
// console.log(myDate.toLocaleString()); //8/7/2024, 7:15:34 AM Universal time
// console.log(myDate.toLocaleDateString()); //8/7/2024
// console.log(myDate.toISOString());
// console.log(myDate.toJSON()); //  like 2024-08-08T07:15:34.419Z

// console.log(myDate.toLocaleTimeString()); //7:15:34 AM Universal time


// console.log(typeof myDate);

// let mycretedDate = new Date(2025, 0 , 23)
// let mycretedDate = new Date(2024, 2 , 29, 5, 3)
// let mycretedDate = new Date("2024-01-14")
let mycretedDate = new Date("01-14-2020")
// console.log(mycretedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(mycretedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()

// console.log(newDate.getMonth());
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday : "long",
    
})
console.log(newDate.toDateString());
