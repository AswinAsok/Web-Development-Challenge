var Person = {

    name : "Aswin",
    age : 17,
    place : "Trivandum",

    display: function(){
        console.log(this.name);
    }

}

//Person implies a Object which has three keys

for (key in Person){
    console.log(Person[key]);
}

Person.dob = "21/11/2002"

Person.displayAge = function(){
    console.log(this.age);
}

console.log(Person.displayAge());