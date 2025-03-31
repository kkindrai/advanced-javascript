// NOTE:
//      This file uses the NEW FUNCTION FORMAT (Functions as Gloabl Variables *kinda*)
//      This enables them to be called anywhere within the document
//      
//      OLD FORMAT:
//      function myFunction(parsedVariable){}
//
//      NEW FORMAT:
//      const myFunction = function(parsedVariable){}

window.onload = function() {
    // this variable is only accessible within THIS function.
    let age = 20; // 'local variable'
    console.log(age);

    // Call displayAge()
    displayAge();
}

const displayAge = function(age) {
    "use strict";
    console.log(age);
}


const displayBirthYear = function(birthYear) {
    "use strict";
    console.log(birthYear);
}

const calculateBirthYear= function() {
    "use strict";
    
    // Local Variables
    let age = retrieveAge();

    let birthYear = 2020 - age;


    // Display Items to Console
    displayAge(age);
    displayBirthYear(birthYear);
}


const retrieveAge = function() {
    "use strict";

    // Local Variables
    let age = document.getElementById("age").value;


    // Return
    return age;
}