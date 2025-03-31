// onclick Functionality
const printMessage = function() {
    console.log("Hey look, a message being printed");
    alert("Event triggered by activation of `onclick`");
}

// onchange Functionality
const valueChanged = function() {
    console.log("Hey, the value has been changed");
    alert("Value Changed due to `onchange` being triggered.");
}


// onblur functionality
const leftField = function() {
    console.log("Focus has been changed due to `onblur` trigger.");
    alert("`onblur` triggered due to change in focus.");
}

// onblur with (this)
const parseValue = function(formValue) {
    // Declare Local Variables
    let message;
    
    // Check if there is a value available, then if so message, else nothing
    requiredField(formValue) ? message = "Value is " + formValue.value : message = "No veo nada";


    // Display the message
    alert(message);
    console.log(message);
}

// Required Field Javascript Demo
const requiredField = function(textboxData) {
    if (textboxData.value.length > 0) {
        return true;
    } else {
        return false;
    }
}