// Init Method
const init = () => {

    // Declare Local Variables (Button References)
    let btn4   = document.querySelector("#button04");
    let btn5   = document.querySelector("#button05");
    let btn6 = document.querySelector("#button06");
    let btn7   = document.querySelector("#button07");
    let btn8   = document.querySelector("#button08");
    let btn9 = document.querySelector("#button09");

    let setThree = document.querySelectorAll(".set-three");


    // the .onclick Methods (dot Notation)
    btn4.onclick = declareWord;
    btn5.onclick = declareWord;
    btn6.onclick = declareWord;

    // the w3c standard method (event listener)
    btn7.addEventListener("click", declareHeight);
    btn8.addEventListener("click", declareHeight);
    btn9.addEventListener("click", declareHeight);
    


    
}


// declareColour Function (Inline Example)
const declareColour = control => {
    "use strict";
    // Get Local Variables
    let colour = control.getAttribute("data-colour");

    // Output to Console
    console.log(colour);
}

// declareWord Function (dot notation)
const declareWord = event => {
    "use strict";

    // Get Local Variables
    let word = event.currentTarget.getAttribute("data-word");

    // Output to Console
    console.log(word);
}

// declareHeight Function (w3c format)
const declareHeight = event => {
    "use strict";

    // Get Local Variables
    let height = event.currentTarget.getAttribute("data-height");

    // Output to Console
    console.log(height);
}

// window onload
window.onload = init;