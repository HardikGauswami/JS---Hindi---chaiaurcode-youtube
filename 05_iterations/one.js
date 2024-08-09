//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        // console.log("5 is best number");
        
    }
    // console.log(element);
    
}

// console.log(element); // error

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop : ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`Inner loop : ${j} and Inner loop ${i} `);
        // console.log(i + '*' + j + ' = '+ i*j);
        
        
    }
    
}

let myArray = ["Batman", "Ironman", "Spiderman"
]
// console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);

    
}

//break and  continue

for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`detected 5`);
        break;
    }

    console.log(`value of i is ${index}`);   
}


for (let index = 1; index <= 20; index++) {

    if(index == 5){
        console.log(`detected 5`);
       continue;
    }

    console.log(`value of i is ${index}`);   
}