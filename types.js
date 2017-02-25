// Boolean
var IsThisDone = false;
// Numbers
var myNumber = 4;
// Text, string
var myName = "Cesar";
// Template strings
var greeting = "Hello, " + myName;
var greeting2 = "Hello, " + myName;
//Arrays
var count = [1, 2, 3, 4];
var count2 = [1, 2, 3, 4];
// Infered like var in C#
var something = 4;
something = "Hi";
// Any, can be anything like javaScript var
var anything = 4;
anything = "Hi";
// Returning nothing
function greeter(name) {
    console.log("Hello, " + name);
}
// Enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));
;
var joystickStatus = 1;
if (joystickStatus === Directions.Left) {
    // move player to left
}
