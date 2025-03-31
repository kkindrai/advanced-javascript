// Global Variables
let labTitle = "Programming for Designers - Lab 2"


// Automatic Script
const init = () => {
    // Local Variables
    let id              = 10,
        name            = "Kendra Kindrai",
        bornInMadison   = false;

    
    // Print First Three Variables
    console.log("ID: " + id);
    console.log("Name: " + name);
    console.log("Born in Madison? " + bornInMadison);

    // Call printLabTitle
    printLabTitle();

    toDocument(id, name, bornInMadison);



}

// print Lab Title to Console Function
const printLabTitle = () => {
    console.log("Lab Title: " + labTitle);
}


// toDocument Function
//      Outputs data to the page
const toDocument = (id, name, bornInMadison) => {
    // Create Output Reference
    let output = document.querySelector("#output");

    // Create the output string
    let outputString = "<ul>"
        + "<li>ID: "
        + id
        + "</li><li>Name: "
        + name
        + "</li><li>Born In Madison? "
        + bornInMadison
        + "</li><li>Lab Title: "
        + labTitle
        + "</li></ul>";

    // Send the Output String to the Page
    output.innerHTML = outputString;
}