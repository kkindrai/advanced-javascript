// ================================================================================================
//          What is a promise?
const demo01 = () => {
    // #01 Creating the Promise (takes two arguments)
    let p = new Promise((resolve, reject) => {
        resolve("¡hola!");
    });

    // #02 What happens when we immediately resolve the promise?
    //      -- immediately sends the resolve
    p.then(data=> {
        console.log(data);
    })
}


// ================================================================================================
//          using setTimeout (tutorial)
const demo02 = () => {
    // #01 call your promise
    demo01();

    // #02 after specified amount of miliseconds, run this if still no response
    setTimeout(() => {
        console.log("after waiting...");
    }, 2000); // 2000 == miliseconds (2 seconds)

}

// ================================================================================================
//      Promise x setTimeout (BETTER TOGETHER)
const demo03 = () => {
    // #01 Create the promise
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡hola! - demo03 (5 second delay)") // resolve
        }, 5000) // tick timeout (5s)
    });

    // #02 Call that frickin' guy
    p.then(data=> {
        console.log(data);
    })
}

// ================================================================================================
//      Rejecting and Logging Errors
const demo04 = () => {
    // #01 Create the promise
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(Error("Houston, we have a problem - demo04 (7s delay)")) // #02 reject w/ error
        }, 7000) // tick timeout (7s)
    });

    // #03 Call that frickin' guy
    p.then(data=> {
        console.log(data);
    }).catch(error => { // #04 catching the error and console.error'ing it
        console.error(error);
    })
}



// ================================================================================================
//      Students Example (Part 01)
const demo05 = () => {
    // #01 Create a Students Array
    const students = [
        {"name":"Kendra Jade", "id":1},
        {"name":"Maria Rae", "id":2},
        {"name":"Clara Jo", "id":3},
        {"name":"Nicholas Theodore", "id":4},
        {"name":"Catherine Maryanne", "id":5},
    ];

    // // #02 getStudentsById subfunction
    // const getStudentById = id => {
    //     return students.find(student => student.id == id);
    // }    

    // // #03 testing
    // console.log(getStudentById(1));

    // #04 How we would do this in a promise?
    const getStudentById = id => {
        // #04.a create the promise
        return new Promise((resolve, reject) => {
            // #04.b if student matching ID is found, create
            let foundStudent = students.find(student => student.id == id);

            // #04.c si hay data, resolve
            if(foundStudent) {
                resolve(foundStudent);
            } else {
                // #04.d si no, reject
                reject(Error("No student data found"));
            }
        })

    }

    // #04.e How to call from a promise?
    getStudentById(2).then(student => {
        console.log(student);
    }) // works

    getStudentById(8).then(student => {
        console.log(student);
    }) // doesn't work


}






// ================================================================================================
//      Polished Completed Students / Courses Example
const studentsCourses = () => {
    // -----------------------------------------------
    //      Create our Datasets
    // 
    const students = [
        {"name":"Kendra Jade", "id":1},
        {"name":"Maria Rae", "id":2},
        {"name":"Clara Jo", "id":3},
        {"name":"Nicholas Theodore", "id":4},
        {"name":"Catherine Maryanne", "id":5}
    ];

    const courses = [
        {"title": "C#", "id":1},
        {"title": "English & Jobs", "id":2},
        {"title": "React", "id":3}
    ]

    const registrations = [
        {"student_id":1, "course_id":2},
        {"student_id":2, "course_id":1},
        {"student_id":3, "course_id":3},
        {"student_id":1, "course_id":3},
    ]

    
    // -----------------------------------------------
    //      getStudentById Subfunction
    // 
    const getStudentById = id => {
        return new Promise((resolve, reject) => {
            let foundStudent = students.find(student => student.id == id);

            // #si hay data, resolve
            if(foundStudent) {
                resolve(foundStudent);
            } else {
                // #si no, reject
                reject(Error("No student data found"));
            }
        })
    }

    // -----------------------------------------------
    //      getCourseById Subfunction
    // 
    const getCourseById = id => {
        return new Promise((resolve, reject) => {
            let foundCourse = courses.find(course => course.id == id);

            // #si hay data, resolve
            if(foundCourse) {
                resolve(foundCourse);
            } else {
                // #si no, reject
                reject(Error("No course data found"));
            }
        })
    }




    // -----------------------------------------------
    //      Map Registration Details to Data
    // 
    const registrationDetails = registrations.map(registration => {
        
        let activeRecord = {};

        // set things by associated data
        getStudentById(registration.student_id).then(student => {
            activeRecord.student = student;
        })

        getCourseById(registration.course_id).then(course => {
            activeRecord.course = course;
        })
        
        // Return this registration record
        return activeRecord;
        
    })

    console.log(registrationDetails);







    // Test Calling from Promises
    getStudentById(2).then(student => {
        console.log(`called from studentCourses(); -`);
        console.log(student);
    }) 

    getCourseById(2).then(course => {
        console.log(`called from studentCourses(); -`);
        console.log(course);
    }) 


}


















const init = () => {
    studentsCourses();
    
    // //Demo Info
    // demo01();
    // demo02();
    // demo03();
    // demo04();
    // demo05();

}

window.onload = init;