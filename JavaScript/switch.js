// var read = require('readline-sync')

// console.log("\n\n--------MENU---------");
// console.log("1).To Print the Larger Number");

// var choice = read.question("Enter Your Choice : ");

// switch (choice) {
//     case '1':
//         var num1 = read.question("Enter 1st Number : ");
//         var num2 = read.question("Enter 2nd Number : ");
//         if(num1>num2){
//             console.log("\n Number 1 is bigger than Number 2");
//         }
//         else if(num1===num2){
//             console.log("\nBoth Numbers are Equal ");
//         }
//         else{
//             console.log("\n Number 2 is bigger than Number 1");
//         }
//         break;

//     default:
//         console.log("Invalid Choice");
// }

var num1 = 10;
var num2 = "a";

switch(num1>num2){
    case true:{
        console.log("\n Number 1 is bigger than Number 2");
    }
    case false:{
        if(num1 === num2){
            console.log("\nBoth Numbers are Equal ");
            break;
        }
        else if(num2>num1){
            console.log("\n Number 2 is bigger than Number 1");
        }
    }
    default:
        console.log("Invalid Choice");
}
