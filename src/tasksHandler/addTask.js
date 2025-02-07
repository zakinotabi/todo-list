// // import { makeNewTask } from "../dataHandler/localstorage";
// // import { getTasks } from "../dataHandler/localstorage";
// // import { displayTasks } from "../dataHandler/localstorage";
// import { getSelectedCategory } from "../categoryHandler/handleCategoryItems";

// export class Task {
//   constructor(title, desc, date, priority, category) {
//     this.title = title;
//     this.desc = desc;
//     this.date = date;
//     this.priority = priority;
//     this.category = category;
//   }
// }

// // Default example tasks to store if nothing is found in localStorage
// const defaultTasks = [
//   new Task(
//     "Buy groceries",
//     "Get milk, eggs, and bread",
//     "2025-02-10",
//     "High",
//     "Shopping"
//   ),
//   new Task(
//     "Meeting with team",
//     "Discuss project milestones",
//     "2025-02-12",
//     "Medium",
//     "Work"
//   ),
//   new Task(
//     "Dentist appointment",
//     "Get a dental checkup",
//     "2025-02-15",
//     "Low",
//     "Personal"
//   ),
// ];

// // Function to initialize tasks in localStorage with default tasks if none exist
// function initializeDefaultTasks() {
//   const tasks = JSON.parse(localStorage.getItem("tasks"));
//   if (!tasks || tasks.length === 0) {
//     // Set default tasks if none exist
//     localStorage.setItem("tasks", JSON.stringify(defaultTasks));
//   }
// }

// // Function to create a new task and store it in localStorage
// export function makeNewTask(title, desc, date, priority) {
//   const category = getSelectedCategory(); // Get the last selected category
//   let newtask = new Task(title, desc, date, priority, category);

//   // Retrieve existing tasks from localStorage
//   let tasks = JSON.parse(localStorage.getItem("tasks"));

//   // Add new task to the array
//   tasks.push(newtask);

//   // Save updated tasks array back to localStorage
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   console.log("New Task Added:", newtask);

//   // Update the task list display after adding a new task
//   displayTasks(); // Calls displayTasks to update the DOM
// }

// // Function to get all stored tasks from localStorage
// export function getTasks() {
//   return JSON.parse(localStorage.getItem("tasks"));
// }

// // Function to display tasks in the DOM
// export function displayTasks() {
//   const tasksContainer = document.getElementById("tasks-container");
//   tasksContainer.innerHTML = ""; // Clear the list before appending tasks

//   const tasks = getTasks(); // Retrieve stored tasks

//   tasks.forEach((task) => {
//     // Create a new task element
//     const taskElement = document.createElement("li");
//     taskElement.className = "task-item";
//     taskElement.innerHTML = `
//       <h3>${task.title}</h3>
//       <p>${task.desc}</p>
//       <p><strong>Due Date:</strong> ${task.date}</p>
//       <p><strong>Priority:</strong> ${task.priority}</p>
//       <button class="delete-btn">delete</button>
//     `;

//     tasksContainer.appendChild(taskElement);
//   });
// }

// // Initialize default tasks if needed when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   initializeDefaultTasks(); // Ensure default tasks are set if not in storage
//   displayTasks(); // Display the tasks
// });

// export function addTask() {
//   const modalWidnow = document.getElementById("todo-modal");
//   const addButton = document.getElementById("add-task-confirm");
//   const closebutton = document.getElementById("close-modal");

//   modalWidnow.showModal();

//   addButton.addEventListener("click", (event) => handleAddTask(event));

//   closebutton.addEventListener("click", () => modalWidnow.close());
// }

// export function handleAddTask(event) {
//   event.preventDefault();
//   // Get form inputs
//   const title = document.getElementById("title").value;
//   const description = document.getElementById("description").value;
//   const dueDate = document.getElementById("due-date").value;
//   const priority = document.getElementById("priority").value;
//   const categoryItems = document.querySelectorAll(".category-item");

//   makeNewTask(title, description, dueDate, priority);

//   // Append the task to the tasks container

//   // Close the modal
//   const modalWindow = document.getElementById("todo-modal");
//   modalWindow.close();

//   // Clear the form
//   clearForm();
// }

// function clearForm() {
//   document.getElementById("title").value = "";
//   document.getElementById("description").value = "";
//   document.getElementById("due-date").value = "";
//   document.getElementById("priority").value = ""; // Reset to default
// }

// const taskElement = document.getElementById("tasks-container");

// taskElement.addEventListener("click", (element) => {
//   if (element.target.classList.contains("delete-btn")) {
//     let tasks = JSON.parse(localStorage.getItem("tasks"));
//     // const taskIndex = element.target.getAttribute("data-index");
//     // tasks.splice(taskIndex, 1);

//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     displayTasks();
//   }
// });
