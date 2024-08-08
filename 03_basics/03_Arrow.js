const user = {
    username : "hardik",
    price : 999,

    welcomeMsg : function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);
        
        
    }

}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this); //{} empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); //undefined
    
// }

// chai()

// const chai = function () {
//      let username = "hardik"
//      console.log(this.username);
     
// }

// chai()

//Arrow function

const chai =  () => {
     let username = "hardik"
    //  console.log(this);
     
}

// chai()

// () => {} //basic syntax  of arrow function

// const addTwo = (num1, num2) =>{
//        return num1 + num2
// } basic arrow function //explicit

// const addTwo = (num1, num2) => (num1 + num2) // implicit method


// console.log(addTwo(3,4))

const addtwo = (num1, num2) => ({username :"Hardik"}) //you have to wrap object in () to use

console.log(addtwo());

const myArr = [2, 5, 3, 7, 8]

// myArr.forEach(() => ({})) // right syntax
