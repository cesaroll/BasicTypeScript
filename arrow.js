var Greeter = (function () {
    function Greeter(fname) {
        this.firstName = fname;
    }
    Greeter.prototype.sayHello = function () {
        setTimeout(function () {
            console.log("Hello " + this.firstName);
        }, 3000);
    };
    Greeter.prototype.sayHelloArrow = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello " + _this.firstName);
        }, 1500);
    };
    return Greeter;
}());
var g = new Greeter("Cesar");
g.sayHello();
g.sayHelloArrow();
