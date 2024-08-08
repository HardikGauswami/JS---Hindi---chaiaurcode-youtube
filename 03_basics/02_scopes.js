// var c = 300 //global scope
let a = 300
{} //scope

if (true) {
    let a = 10
    const b = 20
     c = 30
    //  console.log(a);
     
} //block scope

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Hardik"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    } // function two can access all variables and methods of function one
    // console.log(website);
    
    two()
} // function one can not access inside elements of function two

// one()

if(true){
    const user = "hardik"
    if(user === "hardik"){
      const website =  " youtube"
    //   console.log(user + website);
      
    }
    // console.log(website);
    
}
//  console.log(user);
 
//+++++++++++++++++++++++++ interesting +++++++++++++++

console.log(addone(5)) // 6

function addone(num){
     return num + 1
} // normal function

 
console.log(addTwo(5)) //error can not access before intiallizing

const addTwo  = function(num){
    return num + 2
} //function (expression) 



