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
