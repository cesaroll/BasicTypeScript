var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi my name is " + this.name);
    };
    return Animal;
}());
//let myAnimal = new Animal("Rocky"); Abstract class cannot be instantiated
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Snake.prototype.walk = function (distance) {
        _super.prototype.walk.call(this, distance);
        console.log("Snakes don't really walk.");
    };
    return Snake;
}(Animal));
var mySnake = new Snake("Culebrita");
mySnake.walk(5);
