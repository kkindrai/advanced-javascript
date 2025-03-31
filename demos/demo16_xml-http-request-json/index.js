const init = () => {

    // Creating an Event Listener for the buttonon the page
    let button = document.querySelector("#button01");
    button.addEventListener("click", jsonEvent);
    
}

// the jsonEvent Function
const jsonEvent = () => {
    
    let xhr = new XMLHttpRequest();
    let url = "data.json";

    xhr.open("get", url);
    
    // Callback Data (For when data is ready)
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            console.log(xhr.responseText);

            // Convert it into valid json
            const data = JSON.parse(xhr.responseText);

            // Creating a display for each returned person
            // Create a <ul> and populate it using .map()
            const ul = document.createElement("ul");
            ul.innerHTML = data.people
            .map(person => `<li>ID: ${person.id} &emsp; (${person.name})</li>`)
            .join("");

            // Append the <ul> to the output div
            document.body.appendChild(ul);
        }
    }

    // Send it mate
    xhr.send(null);
}

window.onload = init;