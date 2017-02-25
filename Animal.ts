class Animal {

    private name: string; // Default is public. It can also be protected and private.

    constructor (name: string) {
        this.name = name;
    }

    walk (distance: number) {
        console.log(`Hi my name is ${this.name} and I am walking ${distance} meters.`);
    }
}

let myAnimal = new Animal("Rocky");

myAnimal.walk(10);