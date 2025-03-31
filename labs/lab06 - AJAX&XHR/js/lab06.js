const init = () => {

    // 1. Create an XML HttpRequest Object and set the server URL
    let xhr = new XMLHttpRequest();
    let url = "server.txt";


    // 2. Open the XHR using "get" and parse the URL
    xhr.open("get", url);

    
    // 3. ASYNC Process, when the response from the server is ready,
    //      access the data and append it to our page.
    xhr.onreadystatechange = () => {
        
        if(xhr.readyState == 4) {
            
            console.log(xhr.responseText);
            let message = xhr.responseText;
            let heading = document.createElement("h3");
            heading.innerHTML = message;
            document.body.appendChild(heading);
        }
    }


    // 4. Send headers as null (outside of ASYNC)
    xhr.send(null);

    


}

window.onload = init;