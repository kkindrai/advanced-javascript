// Init Method
const init = () => {
    "use strict";

    /* 
        JSON 4 Basic Syntax Rules
            [] = Collection
            {} = Object
            "key":value | ex. "firstName":"kendra"
            , = seperator character
    */

    let numbers = [1, 3, 5, 7, 9];
    let names = ["Kendra", "Clara", "Nicholas", "Catherine"];

    // Creating an Object
    let person = {
        "firstName": "Kendra", 
        "lastName": "Kindrai", 
        "email": "kkindrai@madisoncollege.edu", 
        "age": 23
    };

    // Accessing the Person Attributes
    console.log(`firstName: ${person.firstName}\nlastName: ${person.lastName}`);


    // Cities Example (Collection of multiple objects)
    let cities = [
        {
            "name": "New York",
            "population": 1250000
        }, 
        {
            "name": "San José",
            "population": 3500000
        }, 
        {
            "name": "Madison",
            "population": 2500000
        }];

    // Displaying the City Data
    for(let i = 0; i < cities.length; i++) {
        console.log(`city: ${cities[i].name} \n population: ${cities[i].population}`);
    }

    
}

// Triggering the Init Method (NEW)
window.onload = init;