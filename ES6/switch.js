console.log(`1).Monday\n2).Tuesday\n3).Wednesday\n4).Thrusday\n5).Friday\n6).Saturday\n7).Sunday`);
var read = require("readline-sync")
var choice = parseInt(read.question("Enter Your Choice : "));
var day

console.log(`Datatype of Choice is "${typeof choice}"`);

switch (choice) {
    case 1 :
        day = "Monday"
        break;
    case 2:
        day = "Tuesday"
        break;
    case 3:
        day = "Wednesday"
        break
    case 4:
        day = "Thursday"
        break
    case 5:
        day = "Friday"
        break
    case 6:
        day = "Satuday"
        break
    case 7:
        day = "Sunday"
        break
    default:
        console.log("Invalid");
        break;
}
console.log(day);