var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi my name is " + this.name + " and I am walking " + distance + " meters.");
    };
    return Animal;
}());
var myAnimal = new Animal("Rocky");
myAnimal.walk(10);
