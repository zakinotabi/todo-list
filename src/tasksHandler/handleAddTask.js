export function handleAddTask() {
  // Get form inputs
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const categoryItems = document.querySelectorAll(".category-item");

  //   // Validate required fields
  //   if (!title || !dueDate) {
  //     alert("Title and Due Date are required!");
  //     return;
  //   }

  //   // Create a task object
  //   const task = {
  //     title,
  //     description,
  //     dueDate,
  //     priority,
  //     completed: false, // Default to not completed
  //   };

  // Save the task to local storage or a global state (optional)
  //  saveTask(task);

  //   // Render the task in the tasks container

  const tasksContainer = document.getElementById("tasks-container");

  // Create a new task element
  const taskElement = document.createElement("li");
  taskElement.className = "task-item";
  taskElement.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Due Date:</strong> ${dueDate}</p>
      <p><strong>Priority:</strong> ${priority}</p>


    `;

  // Append the task to the tasks container
  tasksContainer.appendChild(taskElement);

  //   // Close the modal
  //   const modalWindow = document.getElementById("todo-modal");
  //   modalWindow.close();

  //   // Clear the form
  //   clearForm();
}

// function saveTask(task) {
//   // Retrieve existing tasks from local storage or initialize an empty array
//   const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

//   // Add the new task to the array
//   tasks.push(task);

//   // Save the updated tasks array back to local storage
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function clearForm() {
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
//   document.getElementById("due-date").value = "";
//   document.getElementById("priority").value = "high"; // Reset to default
// }

// // Optional: Add functions to handle task completion and deletion
// function toggleTaskCompletion(button) {
//   const taskElement = button.closest(".task-item");
//   taskElement.classList.toggle("completed");
//   button.textContent = taskElement.classList.contains("completed")
//     ? "Undo"
//     : "Complete";
// }

// function deleteTask(button) {
//   const taskElement = button.closest(".task-item");
//   taskElement.remove();
// }

// <button onclick="toggleTaskCompletion(this)">${
//     task.completed ? "Undo" : "Complete"
//   }</button>
//   <button onclick="deleteTask(this)">Delete</button>
