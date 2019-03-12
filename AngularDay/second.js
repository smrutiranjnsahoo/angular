/*
* High order functions , functios returning a function
*/

function greeting(msg) {
    return function(name) {
        return msg + " " + name + " !!!";
    };
}

greeting("Good Morning")("Smith");

var morningGreet = greeting("Good Morning");
console.log(morningGreet("Smith"));
console.log(morningGreet("Peter"));