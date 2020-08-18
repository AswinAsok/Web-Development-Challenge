var read = require("readline-sync");

var val1 = read.question("Enter a Number : ");
var val2 = read.question("Enter a Number : ");

if(val1>val2){
    console.log(`${val1} is bigger than ${val2}`);
}
else if(val1===val2){
    console.log("Both are Equal");
}
else{
    console.log(`${val2} is bigger than ${val1}`);
}

num1 = '123'
num2 = 123

console.log(num1==num2);
console.log(num1===num2);