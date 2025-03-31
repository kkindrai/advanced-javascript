const init = () => {

    // 1. Select all of the course elements
    let courses = [...document.querySelectorAll("#courses li")];

    
    // 2. Map all the contents of the courses
    courses.map(course => {
        console.log(course.textContent); 
    })

    // 3. Add two new courses
    let newCourse01 = createListElement("Programming with C#");
    let newCourse02 = createListElement("Serverless Cloud with React");

    courses = [...courses, newCourse01, newCourse02];

    // 4. Output final results
    
    console.log("Lab07 Output:")
    console.log(courses);

    
        // Output New List to Document
        let output = document.getElementById("output");
        courses.forEach(course => output.appendChild(course.cloneNode(true)));    

}


// The Create List Element Method
const createListElement = text => {
    let listElement = document.createElement("li");
    listElement.innerHTML =text;

    return listElement;
}

window.onload = init;