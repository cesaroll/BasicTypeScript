function greet(firstName : string, lastName? : string) : void {
    let msg = `Hello ${firstName}`;
    if(lastName) {
        msg = `${msg} ${lastName}`;
    }
    console.log(msg);
}

greet("Cesar");