abstract class Animal {

    protected name: string; // Default is public. It can be private/protected/public.

    constructor (name: string) {
        this.name = name;
    }

    walk (distance: number) {
        console.log(`Hi my name is ${this.name}`);
    }
}

//let myAnimal = new Animal("Rocky"); Abstract class cannot be instantiated

class Snake extends Animal { // Abstract class can be extended

    walk (distance: number) {
        super.walk(distance);
        console.log(`Snakes don't really walk.`);
    }

}

let mySnake = new Snake("Culebrita");
mySnake.walk(5);