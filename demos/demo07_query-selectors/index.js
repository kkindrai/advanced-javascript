const init = () => {
    // Pulling the h1 Tag (id="header")
    let h1 = document.querySelector("#heading");
    // We can view the reference to this tag in the console
    console.log("h1 tag reference from javascript: " + h1);

    // Setting h1's class name (via js)
    h1.className = "myHeading";

    // Using . notation to get info from this item
    console.log(h1.id + h1.value + h1.className);







    // The List Items (class="person")
    let names = document.querySelectorAll(".person");
    console.log(names);
    console.log(...names);


    // Textbox Example (email) (getting value from box)
    console.log(document.querySelector("#email").value);
}   


// For Printing the value held in the email element
const printEmailValue = () => {
    // Local Variables
    let emailField = document.querySelector("#email");
    let value = emailField.value;

    // Log this value to the console
    console.log(value);

    // Clear the Value
    emailField.value = "";
}