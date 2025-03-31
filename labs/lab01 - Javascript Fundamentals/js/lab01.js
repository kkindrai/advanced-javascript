// Controller Function
const logUsername = function() {
    // Create Local Variables
    let username = document.getElementById("username").value;

    // Verify by logging to console
    console.log(username);

    // Display Username on the Document
    displayUsername(username);

    // ALWAYS RETURN FALSE
    return false;
}



// Display Username Function
const displayUsername = function(username) {
    // Create Local Variables
    const output = document.getElementById('output');
    let message = '<p>Current Username: <code>' 
        + username 
        + '</code>.</p>';

    // Place message in the document
    output.innerHTML = message;
}