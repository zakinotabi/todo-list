import { createButton } from "../categoryHandler/addCategory";
import { getSelectedCategory } from "../categoryHandler/handleCategoryItems";

let dataArray = [];

let editMode = false;
let currentEditId;
(function initiat() {
  let tasksFromStorage = JSON.parse(window.localStorage.getItem("tasks"));
  if (tasksFromStorage) {
    tasksFromStorage.forEach((element) => {
      dataArray.push(element);
    });
    getdatafromlocalAndShowIt();
  }
})();

// set event
// Set event listener for Add/Update button
document
  .getElementById("add-task-confirm")
  .addEventListener("click", (event) => {
    if (!editMode) {
      handleAddTask(event);
    } else {
      updateTask(event);
      editMode = false;
      currentEditId = null; // Reset after update
    }
  });
// set date to today
document.getElementById("due-date").valueAsDate = new Date();

export function handleAddTask(event) {
  event.preventDefault();
  // Get information from inputs
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const date = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const id = Date.now();
  const categoryId = getSelectedCategory();

  // make/push new object
  makeNewObject(title, description, date, priority, id, categoryId);

  // add array to localstorage
  saveToLocal();
  // show tasks in the DOM
  getdatafromlocalAndShowIt(categoryId);
  // Clear the form
  clearForm();
  // Close the modal
  const modalWindow = document.getElementById("todo-modal");
  modalWindow.close();
}

function makeNewObject(title, description, date, priority, id, categoryId) {
  //check validity
  if (!title || !description || !date || !priority) {
    alert("Please fill out all fields.");
    return;
  } else {
    //prettier-ignore
    const taskObj = new Task(title, description, date, priority, id, categoryId);
    dataArray.push(taskObj);
  }
}

class Task {
  constructor(title, desc, date, priority, id, categoryId) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.categoryId = categoryId;
    this.completed = false;
    this.id = id;
  }
}

function saveToLocal() {
  window.localStorage.setItem("tasks", JSON.stringify(dataArray));
}

export function getdatafromlocalAndShowIt(categoryId) {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    let categoryTasks = tasks.filter((task) => task.categoryId === categoryId);

    displayTasks(categoryTasks);
  }
}

// // Function to display tasks in the DOM
function displayTasks(tasks) {
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = ""; // Clear the list before appending tasks

  tasks.forEach((task) => {
    // Create a new task element
    const taskElement = document.createElement("li");
    taskElement.classList = `task-item ${task.priority}`;
    taskElement.setAttribute("data-id", task.id);
    taskElement.innerHTML = `
      <input type="checkbox" name="Completed" id="checkbox-task">
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <p> ${task.date}</p>
      <p>Priority: ${task.priority}</p>
    `;

    const checkbox = taskElement.firstElementChild;
    checkbox.addEventListener("change", () => {
      checkbox.parentElement.classList.toggle("checked");
    });

    const editBtn = createButton("Edit", "inside-task-btn", (event) => {
      editTask(event);
    });
    const deleteBtn = createButton("Delete", "inside-task-btn", (event) => {
      deleteTask(event);
    });

    taskElement.append(editBtn, deleteBtn);
    tasksContainer.appendChild(taskElement);
  });
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").valueAsDate = new Date();
}

function editTask(event) {
  event.preventDefault();
  editMode = true;
  let data = JSON.parse(window.localStorage.getItem("tasks"));
  let elementId = event.target.parentElement.getAttribute("data-id");
  const addButton = document.getElementById("add-task-confirm");
  data.forEach((task) => {
    if (task.id === parseInt(elementId)) {
      document.getElementById("title").value = task.title;
      document.getElementById("description").value = task.desc;
      document.getElementById("due-date").valueAsDate = new Date(task.date);
      document.getElementById("priority").value = task.priority;
      currentEditId = elementId;
    }
  });

  const modalWidnow = document.getElementById("todo-modal");
  modalWidnow.showModal();

  const closebutton = document.getElementById("close-modal");
  closebutton.onclick = () => modalWidnow.close();
}

function updateTask(event) {
  event.preventDefault();
  let data = JSON.parse(window.localStorage.getItem("tasks"));
  data.forEach((task) => {
    if (task.id === parseInt(currentEditId)) {
      task.title = document.getElementById("title").value;
      task.desc = document.getElementById("description").value;
      task.date = document.getElementById("due-date").value;
      task.priority = document.getElementById("priority").value;
    }
  });
  document.getElementById("close-modal").click();
  window.localStorage.setItem("tasks", JSON.stringify(data));
  getdatafromlocalAndShowIt(getSelectedCategory());
  editMode = false;
  clearForm();
}

function deleteTask(event) {
  event.target.parentElement.remove();
  let data = JSON.parse(window.localStorage.getItem("tasks"));
  let elementId = event.target.parentElement.getAttribute("data-id");

  data = data.filter((task) => task.id != elementId);
  window.localStorage.setItem("tasks", JSON.stringify(data));
}
