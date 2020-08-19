// var s = ["Aswin", "Asok", "Sam", "Rohit"]

// s.pop()

// console.log(s);

// for(let i=0;i<s.length;i++){
//     console.log(s[i]);
// }

var names = [];
var read = require('readline-sync')

console.log("------Inputting------\n");
for(var i=0;i<5;i++){
    names[i] = read.question("Enter Your Name : ")
}

console.log();
console.log("------Printing------\n");
for(var i=0;i<5;i++){
    console.log(`Name ${i} is ${names[i]}`);
}


