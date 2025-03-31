
const init = () => {
    ajaxRequest("server.txt", "get", loadUsers, null, "JSON");

    // using ajaxRequest to load a MOTD
    ajaxRequest("server_motd.txt", "get", loadMessage, null);
    
}


// loadMessage Funciton
const loadMessage = message => {
    document.querySelector("#motd").innerHTML = message;
}


// loadUsers Function
const loadUsers = (users) => {
    
    // load users objects from server side code
    // skip this step as it is parsed
    // let users = JSON.parse(xhr.responseText);
            
    // Create a list item
    let list = document.createElement("ul");
    
    // for each
    for(let i = 0; i < users.length; i++) {
        
        // Create a new list item
        let item = document.createElement("li");
        item.innerHTML = users[i].name;
        item.setAttribute("data-user-id", users[i].id);

        // Creating a remove user button
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete User";
        deleteButton.setAttribute("type", "button");
        deleteButton.addEventListener("click", removeUser);

        // Add item(s) to list
        item.appendChild(deleteButton);

        list.appendChild(item);

    }

    document.body.appendChild(list);
}


// the RemoveUser Function
const removeUser = event => {
    // Get the button clicked, the list item, and the user's ID
    let button = event.currentTarget;
    let listItem = button.parentNode;
    let idToRemove = listItem.getAttribute("data-user-id");
    let params = `id=${idToRemove}`;
    

    // Creating an AJAX Request to remove that user
    ajaxRequest("deleteUser.php", "post", removeUserConfirmation, params);
}

const removeUserConfirmation = response => {
    console.log(response)
}



// The ajaxRequest Function
const ajaxRequest = (url, method, callback, params, responseType) => {
    let xhr = new XMLHttpRequest();

    // if there are params
    if (params && method == "get") {
        url += "?" + params;
    }


    xhr.open(method, url);

    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {

            // callback code

            if(responseType == "JSON") {
                // json 
                callback(JSON.parse(xhr.responseText));
            } else if(responseType == "XML") {

                // XML
                callback(xhr.responseXML);
            } else {
                // plaintext
                callback(xhr.responseText);
            }
            
        }
    }

    if (method == "post") {
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    } else {
        xhr.send(null);
    }
}


// Window on Load
window.onload = init;