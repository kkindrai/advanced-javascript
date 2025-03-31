/*
// 01. The Basics
// Creating a Class
function Animal(weight, mph) {
    this.weight  = weight;
    this.speed  = mph;
}

// Creating a description for when an animal is called
Animal.prototype.description = function() {
    return `my weight is ${this.weight} and my speed is ${this.speed} mph.`;
}
*/

// 02. How to ACTUALLY make a class (Modern ESX Syntax)
class Animal {

    // 04. Keep track of all the animals
    static animalCount = 0;



    // 02.a. the constructor
    constructor(weight, speed) {
        this.weight = weight;
        this.speed = speed; 

        // 04.a. increment animalCount
        Animal.animalCount++;
    }

    // 02.b. the definition (as a get)
    get description() {
        return `my weight is ${this.weight} and my speed is ${this.speed} mph.`;
    }
}

// 03. How to extend a class
class Penguin extends Animal {
    constructor(weight, speed, feathers) {
        // 03.a. call parent constructor
        super(weight, speed);

        // 03.b. set the this instance stuff
        this.feathers = feathers
    }
}


// 06. Creating a Zoo Class to store Animals 
class Zoo extends Array {
    constructor(name, ...animals) {
        // 06.a Storing the Animals as the Array
        super(...animals);
        
        // Set the Name
        this.name = name;

        
    }

    get description() {
        return this;
    }

    // 06.d.i SORT (ing) from a class
    heaviest(limit = 10) { // 06.e.i limit for splice (default = 10)
        
        // 06.e.ii splice the array based on limit
        return this.sort((animal1, animal2) => animal1.weight < animal2.weight ? 1 : -1).splice(0, limit);
         
    }
}







const init = () => {
    // Creating the Animals
    let giraffe   = new Animal(1800, 40);
    let dog     = new Animal(50, 35);
    let kowalski = new Penguin(15, 15, false);

    // Log their descriptions
    console.log(giraffe.description);
    console.log(dog.description);
    console.log(kowalski.description);

    // Log how many animals exist
    console.log(`Animal Count: ${Animal.animalCount}`);


    // 05. Creating an instance of a Static Method (Array)
    let groceryList = Array.of("Candy", "Chips", "Soda");
    console.log(groceryList);


    // 06.b Creating a new Zoo
    let vilasZoo = new Zoo("Vilas Zoo", giraffe, dog, kowalski);
    console.log(vilasZoo);

    // 06.c for each animal in my array
    for (animal of vilasZoo) {
        console.log("06.c: " + animal.description);
    }

    // 06.d.ii : Get the heaviest animal
    console.log("Heaviest animal in zoo: ");
    console.table(vilasZoo.heaviest(2)); // 06.e.iii parse how many you want
}


window.onload = init;