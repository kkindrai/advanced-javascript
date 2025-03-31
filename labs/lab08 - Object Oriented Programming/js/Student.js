// #######
// The Student Class
//
class Student {

    // -----------------
    // Constructor
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.courses = [];
    }

    // -----------------
    // Get studentData Object
    get studentData() {
        return {
            "first_name":this.firstName,
            "last_name":this.lastName,
            "email":this.email,
            "courses":this.courses
        };
    }

    // -----------------
    // printDetails Method
    printDetails() {
        console.log(this.studentData);
    }


    // -----------------
    // Static Register Method
    register(course) {
        this.courses.push({"course_title":course});
        console.log(`${this.firstName} ${this.lastName} has been successfully registered for ${course}.`);
    }

}