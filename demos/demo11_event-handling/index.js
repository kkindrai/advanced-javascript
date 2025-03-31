
// a dot notation init function
const init = () => {
    "use strict";
    // Getting a reference to the button3 in the doc
    let btn = document.querySelector("#dotNotation");
    
    // THE EVENT HANDLER *in the init)
    btn.onclick = dotNotationEventHandler; // a reference to a function of this name

    // Event Listener Button
    let btnEventListener = document.querySelector("#eventListener");

    // when click, call method of this name
    btnEventListener.addEventListener("click", addEventListenerEvent); 


}

// event listener function
const addEventListenerEvent = event => {
    "use strict";

    console.log(event.currentTarget.getAttribute('data-unique-id'));
}

// The function
const dotNotationEventHandler = event => {
    "use strict";
    console.log("hi from a true blue event handler");

    // While using Event Handling, 'this' is broken
    console.log(this); // this doesn't work, bc it is hijacked
    
    // Instead, we parse the 'event' and .currentTarget it
    console.log(event.currentTarget);
    
    // And now pull the attribute!
    console.log(event.currentTarget.getAttribute('data-unique-id'));
}



// An Inline Event Function (old, boring, lame, washed up)
const inlineEvent = control => {
    "use strict";

    console.log(control.getAttribute("data-unique-id"));
}