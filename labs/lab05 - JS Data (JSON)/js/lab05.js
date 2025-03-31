/*
    Advanced Javascript - Lab 05
    17th Feb. 2025
    @author kkindrai
*/

/*
    ==============================================================================================
                            Init Function
    ==============================================================================================
*/
const init = () => {
    "use strict";

    // Creating a collection of student objects
    let students = [
        {
            "id": 1,
            "name": "Maria Kindrai",
            "email": "mkindrai@cabana.edu"
        },
        {
            "id": 2,
            "name": "Kendra Kindrai",
            "email": "kkindrai@cabana.edu"
        },
        {
            "id": 3,
            "name": "Clara Kindrai",
            "email": "ckindrai@cabana.edu"
        },
        {
            "id": 4,
            "name": "Nicholas Kindrai",
            "email": "nkindrai@cabana.edu"
        },
        {
            "id": 5,
            "name": "Catherine Kindrai",
            "email": "ckindrai2@cabana.edu"
        }
    ];

    // For each student, create a display element
    let outputDisplay = "<ul>";
    for(let i = 0; i < students.length; i++) {
        outputDisplay += `<li><code><strong>ID #${students[i].id}</strong></code></li>`
            + `<ul><li><code>Email: ${students[i].email}</code></li></ul>`;
    }
    outputDisplay += "</ul>";

    // Create Output Reference & display results
    let outputArea = document.querySelector("#outputArea");
    outputArea.innerHTML = outputDisplay;
}


// window.onload init call
window.onload = init;