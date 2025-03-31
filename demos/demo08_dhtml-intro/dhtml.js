const intit = () => {
    "use strict";

    // Creating the page title tag (h1)
    let h1 = document.createElement("h1"); // <h1></h1>

    // Set the text value
    h1.innerHTML = "Intro to DHTML";

    // Adding a class to the h1 tag
    // h1.className = "pageHeading"; //one method of doing so
    h1.setAttribute("class", "pageHeading secondAttribute"); //allows for multiple attributes
    h1.setAttribute("id", "pageTitle"); // Can use .setAttribute to set any attribute for the element

    h1.setAttribute("data-price", "10.50"); // including custom things! (data-___) = format


    // Get the heading div as a reference THEN Display it on the document (append to prexisiting element)
    document.querySelector("#heading").appendChild(h1);


    // Display it on the document (append to body element)
    // document.body.appendChild(h1);


}