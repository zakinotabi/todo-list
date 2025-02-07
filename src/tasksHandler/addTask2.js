let dataArray = [];

getdatafromlocalAndShowIt();

// set event
const addButton = document.getElementById("add-task-confirm");
addButton.addEventListener("click", (event) => handleAddTask(event));
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
  const categoryItems = document.querySelectorAll(".category-item");

  // make/push new object
  makeNewObject(title, description, date, priority, id);

  // add array to localstorage
  saveToLocal();
  // show tasks in the DOM
  getdatafromlocalAndShowIt();
  // Clear the form
  clearForm();
  // Close the modal
  const modalWindow = document.getElementById("todo-modal");
  modalWindow.close();
}

function makeNewObject(title, description, date, priority, id) {
  if (!title || !description || !date || !priority) {
    alert("Please fill out all fields.");
    return;
  } else {
    const taskObj = new Task(title, description, date, priority, id);
    dataArray.push(taskObj);
  }
}

class Task {
  constructor(title, desc, date, priority, category, id) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.category = category;
    this.completed = false;
    this.id = id;
  }
}

function saveToLocal() {
  window.localStorage.setItem("tasks", JSON.stringify(dataArray));
}

function getdatafromlocalAndShowIt() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    displayTasks(tasks);
  }
}

// // Function to display tasks in the DOM
function displayTasks(tasks) {
  const tasksContainer = document.getElementById("tasks-container");
  tasksContainer.innerHTML = ""; // Clear the list before appending tasks

  tasks.forEach((task) => {
    // Create a new task element
    const taskElement = document.createElement("li");
    taskElement.className = "task-item";
    taskElement.setAttribute("data-id", task.id);
    taskElement.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.desc}</p>
      <p> ${task.date}</p>
      <p>Priority: ${task.priority}</p>
      <button class="delete-btn">delete</button>
    `;

    tasksContainer.appendChild(taskElement);
  });
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "";
}

const taskElement = document.getElementById("tasks-container");
taskElement.addEventListener("click", (element) => {
  if (element.target.classList.contains("delete-btn")) {
    element.target.parentElement.remove();
    let data = JSON.parse(window.localStorage.getItem("tasks"));
    let elementId = element.target.parentElement.getAttribute("data-id");
    data = data.filter((task) => task.id != elementId);
    getdatafromlocalAndShowIt();
    // displayTasks();
  }
});
