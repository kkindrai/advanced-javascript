const init = () => {

    // Getting the email field and validating that its unique/disponsible
    let emailField = document.querySelector("#email");
    emailField.addEventListener("blur", validateEmail);
}

// Validate Email function (pass in event)
const validateEmail = event => {

    let emailField = event.currentTarget;
    // checking value is sent
    console.log(emailField.value);


    // Creating the XHR Request, connecting server, and parsing our email to search
    let xhr = new XMLHttpRequest();
    let url = "server.php";
    let params = `?email=${emailField.value}&college=matc`; // &college makes this multi-parametered

    xhr.open("get", url + params);

    // Defining Callback (to validate returned data)
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {

            console.log(xhr.responseText);
            // If the response is invalid (Response Code: 0)
            if(xhr.responseText == 0) {
                emailField.style.borderColor = "red";
            } else {
                // valid response
                emailField.style.borderColor = "green";
            }
        }
    }


    xhr.send(null);


}

window.onload = init;