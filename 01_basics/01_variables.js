const accountId = 57847
let accountEmail = "hardikgoswami095@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; //undefined

// accountId = 2 // not allowed

// console.log(accountId);

{
    //scope
}

accountEmail = "hc@hc.com"
accountPassword = "789"
accountCity = "banglore"

/*
prefer not to use var
because the issue in block scope and functional scope 
*/

console.table([accountEmail, accountId, accountPassword, accountCity, accountState])
