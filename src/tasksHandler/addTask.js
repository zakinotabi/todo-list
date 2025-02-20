import { createButton } from "../categoryHandler/addCategory";
import { getSelectedCategory } from "../categoryHandler/handleCategoryItems";
import { Task } from "../components/task";
// Set event listener for Add/Update button

const modalWidnow = document.getElementById("todo-modal");
const closebutton = document.getElementById("close-modal");
const addbtnn = document.getElementById("add-task-confirm");

closebutton.addEventListener("click", () => modalWidnow.close());

addbtnn.addEventListener("click", () => {
  if (!HandleAddTask.editMode) {
    handleAddTaskFlow();
  } else {
    HandleAddTask.updateTask();
    HandleAddTask.editMode = false;
    HandleAddTask.currentEditId = null; // Reset after update
  }
});

function handleAddTaskFlow() {
  // 1. Create handler instance with current form values
  const taskHandler = new HandleAddTask();

  // 2. Create and save new task
  taskHandler.makeNewObject();

  // 3. Refresh the task list for the current category
  HandleAddTask.showTasksFromStorageBasedOnCategory(taskHandler.categoryId);
}

export class HandleAddTask {
  static editMode = false;
  static currentEditId = null;

  constructor() {
    // Get form values when instance is created
    this.title = document.getElementById("title").value;
    this.description = document.getElementById("description").value;
    this.date = document.getElementById("due-date").value;
    this.priority = document.getElementById("priority").value;
    this.id = Date.now();
    this.categoryId = getSelectedCategory();
  }

  makeNewObject() {
    // Validate inputs
    if (!this.title || !this.description || !this.date || !this.priority) {
      alert("Please fill out all fields.");
      return;
    } else {
      // Create new task and save
      const taskObj = new Task(
        this.title,
        this.description,
        this.date,
        this.priority,
        this.id,
        this.categoryId
      );

      // Get existing tasks from localStorage
      const existingTasks = JSON.parse(
        window.localStorage.getItem("tasks") || "[]"
      );
      existingTasks.push(taskObj);
      window.localStorage.setItem("tasks", JSON.stringify(existingTasks));

      HandleAddTask.clearForm();
      modalWidnow.close();
    }
  }

  static showTasksFromStorageBasedOnCategory(categoryId) {
    const data = window.localStorage.getItem("tasks");
    if (data) {
      const tasks = JSON.parse(data);
      const TasksOfCategorySelected = tasks.filter(
        (task) => task.categoryId === categoryId
      );
      HandleAddTask.appendTasksToDOM(TasksOfCategorySelected);
    }
  }

  static appendTasksToDOM(tasks) {
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
        HandleAddTask.editTask(event);
      });
      const deleteBtn = createButton("Delete", "inside-task-btn", (event) => {
        HandleAddTask.deleteTask(event, task.id);
      });

      taskElement.append(editBtn, deleteBtn);
      tasksContainer.appendChild(taskElement);
    });
  }

  static updateTaskInStorage(updatedTask) {
    const tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    const index = tasks.findIndex((t) => t.id === updatedTask.id);
    if (index !== -1) {
      tasks[index] = updatedTask;
      window.localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  static editTask(event) {
    event.preventDefault();
    HandleAddTask.editMode = true;
    let data = JSON.parse(window.localStorage.getItem("tasks"));
    let elementId = event.target.parentElement.getAttribute("data-id");
    const addButton = document.getElementById("add-task-confirm");
    data.forEach((task) => {
      if (task.id === parseInt(elementId)) {
        document.getElementById("title").value = task.title;
        document.getElementById("description").value = task.desc;
        document.getElementById("due-date").valueAsDate = new Date(task.date);
        document.getElementById("priority").value = task.priority;
        HandleAddTask.currentEditId = elementId;
      }
    });

    modalWidnow.showModal();
  }

  static updateTask() {
    let data = JSON.parse(window.localStorage.getItem("tasks"));
    data.forEach((task) => {
      if (task.id === parseInt(HandleAddTask.currentEditId)) {
        task.title = document.getElementById("title").value;
        task.desc = document.getElementById("description").value;
        task.date = document.getElementById("due-date").value;
        task.priority = document.getElementById("priority").value;
      }
    });
    document.getElementById("close-modal").click();
    window.localStorage.setItem("tasks", JSON.stringify(data));
    HandleAddTask.showTasksFromStorageBasedOnCategory(getSelectedCategory());
    HandleAddTask.editMode = false;
    HandleAddTask.clearForm();
  }

  static deleteTask(event, taskId) {
    // Remove from DOM
    event.target.closest("li").remove();

    // Remove from storage
    const tasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    window.localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  static clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("priority").value = "low";
  }
}
