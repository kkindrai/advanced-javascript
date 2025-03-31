const init = () => {

    /*
        Desired HTML to Generate
        
        <form>
            <div class="form-group">
                <input class="form-control" type="text" id="username">
                <button type="button">Click Me</button>
            </div>
        </form>
    */

    // Creating the Form Element
    let form = document.createElement("form");

    // Creating the Div Element
    let formDiv = document.createElement("div");
    formDiv.setAttribute("class", "form-group");
    
    // Creating the Input Element
    let usernameInput = document.createElement("input");
    usernameInput.setAttribute("class", "form-control");
    usernameInput.setAttribute("type", "text");
    usernameInput.setAttribute("id", "username");

    // Creating the Button Element
    let formButton = document.createElement("button");
    formButton.setAttribute("type", "button");
    formButton.setAttribute("onclick", "formSubmit();");
    formButton.innerHTML = "Click Me";


    // Append the form elements to the form element
    form.appendChild(formDiv);
    form.appendChild(usernameInput);
    form.appendChild(formButton);
    // Append the form element to the body
    document.body.appendChild(form);

}

// formSubmit() Function
const formSubmit = () => {
    "use strict";

    // Getting the data from within the text field
    let data = document.getElementById("username").value;
    
    // Creating an output message & div for it
    let outputContainer = document.createElement("div");
    let outputMessage   = document.createElement("p")
    outputMessage.setAttribute("class", "form-output");

    if (data) {
        // If there is something entered, create this message
        outputMessage.innerHTML = "Your input was <code>" 
            + data
            + "</code>";
    } else {
        // If nothing inputted
        outputMessage.innerHTML = "No input provided."
    }

    // Append the outputMessage to the container
    outputContainer.appendChild(outputMessage);

    // Send the container to the body
    document.body.appendChild(outputContainer);

    
}

window.onload = init;