class Greeter {
    protected firstName : string;

    constructor(fname : string) {
        this.firstName = fname;
    }

    sayHello() {
        setTimeout(function () {
            console.log(`Hello ${this.firstName}`);
        }, 3000);
    }

    sayHelloArrow() {
        setTimeout( () => {
            console.log(`Hello ${this.firstName}`);
        }, 1500);
    }
}

let g = new Greeter("Cesar");
g.sayHello();
g.sayHelloArrow();

