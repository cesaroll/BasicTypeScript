function greet(firstName, lastName) {
    var msg = "Hello " + firstName;
    if (lastName) {
        msg = msg + " " + lastName;
    }
    console.log(msg);
}
greet("Cesar");
