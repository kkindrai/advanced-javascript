// Global Data
const url = "http://localhost:3000/api/data";


const init = () => {

    // Add Task when this Event Listener is Triggered
    const addTask = document.querySelector("#create-task");
    addTask.addEventListener("click", createTask);

    // Remove Task when this is triggered
    const deleteButtons = document.querySelectorAll(".delete-task");

    document.getElementById("task-list").addEventListener("click", event => {
        if (event.target.classList.contains("delete-task")) {
          const taskData = {
            StudentId: event.target.dataset.studentid,
            Description: event.target.dataset.description
          };
          removeTask(taskData);
        }
      });



    showTasks();
}



// Create New Task Function
const createTask = async () => {
    const newTask = document.getElementById("new-todo").value;
    
    // If something is in newTask
    if (newTask != "" && newTask) {
        
        // Assemble the JSON
        const taskData = {
            "description": newTask,
          };
          
        // Send that 
          await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(taskData),
          })
            .then(response => response.json())
            .catch(err => console.error(err));
    }

    showTasks();
    
      
}


// Remove Task Function
const removeTask = async taskData => {


    await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(taskData),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));

    showTasks();
}


// Show Tasks Function
const showTasks = async () => {
    // Local Variables
    let currentTasks,
        taskId,
        taskDescription,
        pageOutput,
        taskList;
        
    // Create Page Reference
    pageOutput = document.getElementById("task-list");
    pageOutput.innerHTML = "";

    // Get Tasks
    currentTasks = await getTasks();
     
    // Create the TaskList
    taskList = document.createElement("ul");

    // Throw that stuff onto the page
    currentTasks.forEach(task => {
        console.log(task);

        taskId          = task.id
        taskDescription   = task.description;

        // Create a list item for this task
        let newItem = document.createElement("li");
        
        // Delete Button
        let deleteButton = document.createElement("button"); 
        deleteButton.setAttribute("data-id", taskId);
        deleteButton.setAttribute("data-Description", taskDescription);
        deleteButton.setAttribute("type", "button");
        deleteButton.classList.add("delete-task");
        deleteButton.innerHTML = "🗑️";

        // Add Attributes
        newItem.setAttribute("id", taskId);
        newItem.setAttribute("description", taskDescription);
        newItem.innerHTML = taskDescription;
        newItem.appendChild(deleteButton);

        taskList.appendChild(newItem);

    });

    pageOutput.appendChild(taskList);
}


const getTasks = async () => {
    try {
        const response = await fetch(`${url}`, {
          method: "GET",
        });
    
        const data = await response.json(); // Convert to JSON
        console.log(data); 
        return data; // Send that data back
    
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
}


window.onload = init;