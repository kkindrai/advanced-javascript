// Init Method
const init = () => {
    "use strict";

    // Get References for our Buttons
    let stringButton    = document.querySelector("#xmlString");
    let fileButton      = document.querySelector("#xmlFile");

    // onClick Event Managers
    stringButton.addEventListener("click", xmlStringEvent);
    fileButton.addEventListener("click", xmlFileEvent);

}

/* 
    =====================================================
            XML String Event Function
    =====================================================
*/
const xmlStringEvent = () => {
    "use strict";

    // Creating a students xml string
    const students = "<students>"
            + "<student id='1'>"
                + "<name>Kendra Kindrai</name>"
                + "<email>kkindrai@madisoncollege.edu</email>"
            + "</student>"
            + "<student id='2'>"
                + "<name>Clara Kindrai</name>"
                + "<email>ckindrai@swtc.edu</email>"
            + "</student>"
        + "</students>";

    // Loading an XML Parser
    let xmlParser = new DOMParser().parseFromString(students, "application/xml");

    // Two Methods: getElementsByTagName & childNodes
    // ------------
    

    // Calling the ProcessStudents Function & parse our parser
    processStudents(xmlParser);
}


/* 
    =====================================================
            XML File Event Function
    =====================================================
*/
const xmlFileEvent = () => {
    "use strict";
    // the same thing, just from a different source

    // Setting File Path
    const studentFilePath = "students.xml";

    // Creating an XML Parser
    let xhr = new XMLHttpRequest();

    xhr.open("get", studentFilePath); // Make the HTTP Get

    // Waiting for when it's ready (code 4)
    xhr.onreadystatechange = () => {
        if(xhr.readyState == 4) {
            console.log(xhr.responseText); // .responseText is `students.xml`
            
            // Call processStudents & parse the response
            processStudents(xhr.responseXML);

        }
    }

    xhr.send(null); // Send Nothing, handle a callback
    
}


/*
    =====================================================
            Process Students Function
    =====================================================
*/
const processStudents = xmlParser => {
    "use strict";

    // Getting all Name Nodes & print to console
    let nameNodes = xmlParser.getElementsByTagName("name");
    // --- Will return...
    /*
        nameNodes = [i]
        [0] = <name>Kendra Kindrai</name>
        [1] = <name>Clara Kindrai</name>
    */

    /*
        ----------------------------------------------------
            STUDENT NODE EXAMPLE
        ----------------------------------------------------
    */
    let studentNodes = xmlParser.getElementsByTagName("student"); // Selects by each <student> element
    for(let i = 0; i < studentNodes.length; i++) {
        // Full Object
        console.log(studentNodes[i]);

        // Getting just the values (bit of a bear)
        let currentStudent      = studentNodes[i];
        
        let currentStudentEmailNode = currentStudent.getElementsByTagName("email")[0];
        let currentStudentNameNode  = currentStudent.getElementsByTagName("name")[0];
        
        let currentEmail        = currentStudentEmailNode.childNodes[0].nodeValue;
        let currentName         = currentStudentNameNode.childNodes[0].nodeValue;

        let currentId = currentStudent.getAttribute("id");

        // Log to Console
        console.log(`id: ${currentId} \n name: ${currentName} \n email: ${currentEmail}`);

    }
}


// Automatic function on page load
window.onload = init;