class Animal {

    protected name: string; // Default is public. It can be private/protected/public.

    constructor (name: string) {
        this.name = name;
    }

    walk (distance: number) {
        console.log(`Hi my name is ${this.name} and I am walking ${distance} meters.`);
    }
}

let myAnimal = new Animal("Rocky");

myAnimal.walk(10);

class Snake extends Animal {

    walk (distance: number) {
        console.log(`Hi my name is ${this.name}. Snakes don't really walk.`);
    }

}

let mySnake = new Snake("Culebrita");
mySnake.walk(5);