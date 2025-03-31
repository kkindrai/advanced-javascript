const init = () => {
    "use strict";

    /*
        1. What we want!
        We want to create the following HTML Code:

        <div class="inputForm">
            <label for="email">Email: </label>
            <input type="text" id="email" />
        </div>
    */

    // Local Variables (used various times)
    let email = "email";

    // 2. Creating the div container
    let divContainer = document.createElement("div");   // <div></div>
    divContainer.setAttribute("class", "inputForm");    // <div class="inputForm"></div>


    // 3. Creating the label element
    let emailLabel = document.createElement("label");   // <label></label>
    emailLabel.setAttribute("for", email);              // <label for="email"></label>
    emailLabel.innerHTML = "Email: ";                   // <label for="email">Email: </label>


    // 4. Creating the input element
    let emailInput = document.createElement("input");   // <input />
    emailInput.setAttribute("type", "text");            // <input type="text" />
    emailInput.setAttribute("id", email);               // <input type="text" id="email" />


    // 5. Ya tenemos todo pero en sus propias formas. So we want to assemble them:

    // ORDER IS IMPORTANT:
    //      Appending each element as a child of the div container
    divContainer.appendChild(emailLabel);
    divContainer.appendChild(emailInput);

    // Adding the div to the page (all as one element)
    document.body.appendChild(divContainer);


}