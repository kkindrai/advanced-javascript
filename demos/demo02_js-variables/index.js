window.onload = function() {
    let firstName = "Kendra";                   // string
    let studentAge = 23;                        // number
    let isStudent = true;                       // boolean
    let studentCourses = ["HTML", "CSS", "JS"]; // Array (object)
    let car = {
        "make": "Hyundai",
        "model": "Elantra",
        "year": 2010,
        "colour": "white"
    }                                           // object

    console.log("firstName = " + typeof(firstName));
    console.log("studentAge = " + typeof(studentAge));
    console.log("isStudent = " + typeof(isStudent));
    console.log("Student Courses = " + typeof(studentCourses)); 
    console.log("Car Object = " + typeof(car));
}