// Creating a global variable (fuera de cualquier function)
let age = 23;

window.onload = function() {
    // this variable is only accessible within THIS function.
    let age = 70; // 'local variable'

    // Functions
    console.log(age);


    // This will not allow the age to be displayed (uncaught reference error)
    displayAge();
}

function displayAge() {
    "use strict";
    console.log(age);
}