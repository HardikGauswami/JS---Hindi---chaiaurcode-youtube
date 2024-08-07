// // singleton

// // object literals

// // object.create() using constrctor

const mySym = Symbol("key1")

const Jsuser = {
    Name : "Hardik",
    "full name" : "Hardik Gauswami",
    [mySym] : "mykey1", // if we want to add symbol in key syntax : [Symbol] : value
    age : 20,
    email : "hardik@google.com",
    isLogin : true,
    lastLoginDays : ["Monday", "Friday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]); // Access methods

// //console.log(Jsuser.full name); // can't done

// console.log(Jsuser["full name"]); // Hardik Gauswami

// console.log(Jsuser[mySym])

// Jsuser.email = "hardik4304@gmail.com" // change value
// console.log(Jsuser["email"]);


// Object.freeze(Jsuser) // freeze object now we can't change values


// Jsuser.email = "hardikgoswami@gmail.com" 

// console.log(Jsuser["email"]); // no changes

// console.log(Jsuser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
    
}

Jsuser.greeting2  = function(){
    console.log(`Hello JS user, ${this.Name}`);
    
}

// console.log(Jsuser.greeting); // reference 
// console.log(Jsuser.greeting()); // value

console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

