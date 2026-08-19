//Lexical Scope
let fname = "Bhagyesh";

function sayName() {
    let lname = "Pansuriya";
    console.log("In SayName", fname, lname);
}

console.log("Value of Fname is", fname);

sayName();

//Closure

function outer() {
    let name = "Bhagyesh";

    function inner() {
        console.log(name);
    }

    return inner;
}

let myFunction = outer();

myFunction();