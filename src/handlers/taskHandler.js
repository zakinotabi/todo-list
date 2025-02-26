import { TaskStorage } from "../storage/taskStorage.js";
import { TaskUI } from "../ui/taskUI.js";
import { ModalUI } from "../ui/modal.js";
export class TaskHandler {
  static editMode = false;

  static fillModal(event) {
    event.preventDefault();
    ModalUI.initializeModalEvents();

    //save mode
    this.editMode = true;

    //fill
    let elementId = parseInt(
      event.target.closest("[data-id]").getAttribute("data-id")
    );

    let taskSelected = TaskStorage.getTaskById(elementId);

    document.getElementById("title").value = taskSelected.title;
    document.getElementById("description").value = taskSelected.description;
    document.getElementById("due-date").valueAsDate = new Date(
      taskSelected.date
    );
    document.getElementById("priority").value = taskSelected.priority;
  }

  //   // Remove from DOM
  //   event.target.closest("li").remove();

  // static handleTaskEdit() {
  //   if (!HandleAddTask.editMode) {
  //     TaskHandler.handleAddTaskFlow();
  //   } else {
  //     HandleAddTask.updateTask();
  //     HandleAddTask.editMode = false;
  //     HandleAddTask.currentEditId = null; // Reset after update
  //   }
  // }

  // static handleAddTaskFlow() {
  //   const taskHandler = new HandleAddTask();
  //   taskHandler.makeNewObject();
  //   HandleAddTask.showTasksFromStorageBasedOnCategory(taskHandler.categoryId);
  // }
}

// // Set event listener for Add/Update button

// const modalWidnow = document.getElementById("todo-modal");
// const closebutton = document.getElementById("close-modal");
// const addbtnn = document.getElementById("add-task-confirm");

// closebutton.addEventListener("click", () => ModalUI.closeModal());

// addbtnn.addEventListener("click", () => {
//   if (!HandleAddTask.editMode) {
//     handleAddTaskFlow();
//   } else {
//     HandleAddTask.updateTask();
//     HandleAddTask.editMode = false;
//     HandleAddTask.currentEditId = null; // Reset after update
//   }
// });

// function handleAddTaskFlow() {
//   // 1. Create handler instance with current form values
//   const taskHandler = new HandleAddTask();

//   // 2. Create and save new task
//   taskHandler.makeNewObject();

//   // 3. Refresh the task list for the current category
//   HandleAddTask.showTasksFromStorageBasedOnCategory(taskHandler.categoryId);
// }

// export class HandleAddTask {
//   static editMode = false;
//   static currentEditId = null;

//   constructor() {
//     // Get form values when instance is created
//     this.title = document.getElementById("title").value;
//     this.description = document.getElementById("description").value;
//     this.date = document.getElementById("due-date").value;
//     this.priority = document.getElementById("priority").value;
//     this.id = Date.now();
//     this.categoryId = getSelectedCategory();
//   }

//   makeNewObject() {
//     // Validate inputs
//     if (!this.title || !this.description || !this.date || !this.priority) {
//       alert("Please fill out all fields.");
//       return;
//     } else {
//       // Create new task and save
//       const taskObj = new Task(
//         this.title,
//         this.description,
//         this.date,
//         this.priority,
//         this.id,
//         this.categoryId
//       );

//       saveTaskToStorage(taskObj);

//       HandleAddTask.clearForm();
//       modalWidnow.close();
//     }
//   }

//   static showTasksFromStorageBasedOnCategory(categoryId) {
//     let TasksOfCategorySelected = getTasksByCategory(categoryId);
//     if (TasksOfCategorySelected) {
//       HandleAddTask.appendTasksToDOM(TasksOfCategorySelected);
//     }
//   }

//   static appendTasksToDOM(tasks) {
//     const tasksContainer = document.getElementById("tasks-container");
//     tasksContainer.innerHTML = ""; // Clear the list before appending tasks

//     tasks.forEach((task) => {
//       // Create a new task element
//       const taskElement = document.createElement("li");
//       taskElement.classList = `task-item ${task.priority}`;
//       taskElement.setAttribute("data-id", task.id);
//       taskElement.innerHTML = `
//         <input type="checkbox" name="Completed" id="checkbox-task">
//         <h3>${task.title}</h3>
//         <p>${task.desc}</p>
//         <p> ${task.date}</p>
//         <p>Priority: ${task.priority}</p>
//       `;

//       const checkbox = taskElement.firstElementChild;
//       checkbox.addEventListener("change", () => {
//         checkbox.parentElement.classList.toggle("checked");
//       });

//       const editBtn = DOMUtils.createButton(
//         "Edit",
//         "inside-task-btn",
//         (event) => {
//           HandleAddTask.editTask(event);
//         }
//       );
//       const deleteBtn = DOMUtils.createButton(
//         "Delete",
//         "inside-task-btn",
//         (event) => {
//           HandleAddTask.deleteTask(event, task.id);
//         }
//       );

//       taskElement.append(editBtn, deleteBtn);
//       tasksContainer.appendChild(taskElement);
//     });
//   }

// // static updateTask() {
// //   let data = JSON.parse(window.localStorage.getItem("tasks"));
// //   data.forEach((task) => {
// //     if (task.id === parseInt(HandleAddTask.currentEditId)) {
// //       task.title = document.getElementById("title").value;
// //       task.desc = document.getElementById("description").value;
// //       task.date = document.getElementById("due-date").value;
// //       task.priority = document.getElementById("priority").value;
// //     }
// //   });
// //   document.getElementById("close-modal").click();
// //   window.localStorage.setItem("tasks", JSON.stringify(data));
// //   HandleAddTask.showTasksFromStorageBasedOnCategory(getSelectedCategory());
// //   HandleAddTask.editMode = false;
// //   HandleAddTask.clearForm();
// // }
