//Immediately Invoked Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();

// ({function}) () //iife

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})("Hardik")

