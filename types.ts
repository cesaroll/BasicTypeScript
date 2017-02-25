// Boolean
let IsThisDone: boolean = false;

// Numbers
let myNumber: number = 4;

// Text, string
let myName: string = "Cesar";

// Template strings
let greeting: string = "Hello, " + myName;
let greeting2: string = `Hello, ${myName}`;

//Arrays
let count: number[] = [1,2,3,4];
let count2: Array<number> = [1,2,3,4];

// Infered like var in C#
let something = 4;
something = "Hi";

// Any, can be anything like javaScript var
var anything: any = 4;
anything = "Hi";

// Returning nothing
function greeter(name: string) : void{
    console.log(`Hello, ${name}`);
}

// Enums
enum Directions{Up, Down, Left, Right};

let joystickStatus: number = 1;

if(joystickStatus === Directions.Left) {
    // move player to left
}
