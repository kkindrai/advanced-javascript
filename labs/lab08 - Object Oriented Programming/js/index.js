const init = () => {

    let students = createStudents();

    // Create our HTML Output
    let html = "";

    students.forEach(student => {
        let data = student.studentData;
        console.log(data);
        
        html += `
            <div class="card">
                <div class="card-header">
                    Student Data
                </div>
                <div class="card-body">
                    <h5 class="card-title">${data.last_name}, ${data.first_name}</h5>
                    <p class="card-text">${data.email}</p>
                    
                    <h5 class="card-title">Registered Courses:</h5>
                    <ul class="list-group list-group-flush">
                        ${data.courses
                            .map(course => `<li class="list-group-item">${course.course_title}</li>`)
                            .join('')} 
                    </ul>
                </div>
            </div>
            <br>`;
    });

    // Create output link
    let output = document.getElementById("output");
    output.innerHTML = html;
}


// Create Students Function
const createStudents = () => {
    // Create the Students
    let student01 = new Student("Kendra", "Kindrai", "kkindrai@student.com");
    let student02 = new Student("Yanissa", "Rivera", "yrivera@student.com");

    // Register them for some courses
    student01.register("React for Developers");
    student01.register("C# Programming");
    student01.register("Advanced Javascript");

    student02.register("Clinical Biochemistry");
    student02.register("Cell Biology");

    console.log(student01.printDetails());
    console.log(student02.printDetails());

    let students = [student01, student02];

    return students;

}

window.onload = init;