

class Sample{
    sampleHello(){
        console.log("This is sample hello");
    }
}


class Hello extends Sample  {
    constructor(num1,num2){
        super();
        this.num1 = num1;
        this.num2 = num2
    }

    hello(){
        console.log("Hello Friends");
        console.log(this.num1+this.num2);
    }
}

let Hey = new Hello(10,20)
Hey.hello();
Hey.sampleHello();