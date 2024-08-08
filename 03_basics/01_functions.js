//functions


function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("d");
    console.log("i");
    console.log("k");
}

// sayMyName // reference
// sayMyName() // value

function addTwoNum(num1, num2) {
   return num1 + num2

}

// addTwoNum() // NaN
// addTwoNum(2,7) // 2+7 = 9
// addTwoNum(3, "4") // 34 string
// addTwoNum(3, "ab34") //3ab34 string
// addTwoNum(4, null) //4 + 0 (null) = 4
// addTwoNum(5, undefined) //NaN

// const result = addTwoNum(3, 5)
// console.log(result);

function loginUserMsg(username = "sam"){
    if(username === undefined){  // !username also used 
        console.log("please! enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Hardik")) // Hardik just logged in
// console.log(loginUserMsg()) //undefined just logged in

function calculateCartPrice(...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500));//[200, 400, 500]

const user = {
    username : "Hardik",
    price : 199
}
// how to take object as parameter in function
function handObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handObject(user) // username is Hardik and price is 199

handObject({
    username : "sam",
    price : 399
}) // another method

const myNewArr = [100, 200, 300, 400]

function returnSecondValue(getArray) {
     return getArray[1]
}

console.log(returnSecondValue(myNewArr)); // 200

console.log(returnSecondValue([200,400,1200,1000])); // 400 another method
