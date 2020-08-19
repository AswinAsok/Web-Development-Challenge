function Person(name,age,place){
    this.name = name;
    this.age = age;
    this.place = place;
    this.display=function(){
        console.log("\n");
        console.log(`Name  : ${this.name}\nAge   : ${this.age}\nPlace : ${this.place}`);
    }
}

var Aswin = new Person("Aswin", 17, "Trivandrum");
var Nikhil  = new Person("Nikhil",35,"Malapurram");

Aswin.display();
Nikhil.display();