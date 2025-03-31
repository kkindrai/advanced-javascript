// Init Method
const init = () => {
    "use strict";

    // Case One:
    let btn1 = document.querySelector("#btn1");
    
    // Attempt to add JS Functionality for onclick (Replaces HTML's onclick="inline(this)")
    //btn1.onclick = newMethod; // Does not work

    // The Solution: addEventListener
    btn1.addEventListener("click", newMethod); // Runs both



    // Case Two: Subfunction in .addEventListener
    let btn2 = document.querySelector("#subfunctionBtn");
    btn2.addEventListener("click", event => { // <- FORMAT FOR A SUbFUNCTION

        // Call other functions here
        demoFunctionOne(event);
        demoFunctionTwo(event);
        demoFunctionThree(event);
    })




}

// The inline(this) html onclick="" Method
const inline = () => {
    "use strict";

    console.log("From inline();");
}

// The newMethod mentioned in init()
const newMethod = () => {
    "use strict";

    console.log("From newMethod();");
}

// DEMO FUNCTIONS
const demoFunctionOne = event => {
    "use strict";

    console.log("Demo Function #1");
    console.log("Sent from: " + event);
}

const demoFunctionTwo = event => {
    "use strict";

    console.log("Demo Function #2");
    console.log("Sent from: " + event);
}

const demoFunctionThree = event => {
    "use strict";

    console.log("Demo Function #3");
    console.log("Sent from: " + event);
}