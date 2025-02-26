import { TaskHandler } from "../handlers/taskHandler";
import { ModalUI } from "./modal";
import { Task } from "../components/task";
import { TaskStorage } from "../storage/taskStorage";
import { DOMUtils } from "./DOMUtils";
import { CategoryHandler } from "../handlers/categoryHandler";

export class TaskUI {
  static initializeButtonEvent() {
    const newTaskBtn = document.getElementById("new-task-btn");
    newTaskBtn.addEventListener("click", () => {
      TaskHandler.editMode = false;
      ModalUI.initializeModalEvents();
    });

    const saveButton = document.getElementById("add-task-confirm");
    saveButton.addEventListener("click", () => {
      TaskUI.saveButton();
    });
  }

  static saveButton() {
    if (TaskHandler.editMode) {
      TaskHandler.updateTask();
    } else {
      TaskUI.makeNewObject();
    }
  }

  static makeNewObject() {
    // Get values directly from the form
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    const categoryId = CategoryHandler.selectedCategoryId;

    // Validate inputs
    if (!title || !description || !date || !priority) {
      alert("Please fill out all fields.");
      return;
    }

    // Create new task and save
    const taskObj = new Task(
      title,
      description,
      date,
      priority,
      Date.now(),
      categoryId
    );

    TaskStorage.saveTask(taskObj);
    TaskUI.makeTaskDivAndShowIt(taskObj);
    ModalUI.clearModal();
    ModalUI.closeModal();
  }

  static makeTaskDivAndShowIt(task) {
    const tasksContainer = document.getElementById("tasks-container");
    const taskElement = document.createElement("li");
    taskElement.classList = `task-item ${task.priority}`;
    taskElement.setAttribute("data-id", task.id);
    taskElement.innerHTML = `
      <div>
        <h3>${task.title}</h3>
        <p> ${task.date}</p>
        <p>Priority: ${task.priority}</p>
      </div>
      <div>
        <p>${task.description}</p>
      </div>
    `;

    const checkbox = DOMUtils.createInput("checkbox", "checkbox-task");
    checkbox.addEventListener("change", () => {
      checkbox.parentElement.classList.toggle("checked");
    });

    const editBtn = DOMUtils.createButton(
      "Edit",
      "inside-task-btn",
      (event) => {
        TaskHandler.fillModal(event);
      }
    );

    const deleteBtn = DOMUtils.createButton(
      "Delete",
      "inside-task-btn",
      (event) => {
        event.target.closest("li").remove();
        TaskStorage.deleteTask(task.id);
      }
    );

    taskElement.firstElementChild.append(editBtn, deleteBtn);
    taskElement.firstElementChild.prepend(checkbox);
    tasksContainer.appendChild(taskElement);
  }

  static showAllTasksBasedOnCategory(categoryId) {
    const tasksContainer = document.getElementById("tasks-container");
    let tasks = TaskStorage.getTasksByCategory(categoryId);
    tasksContainer.innerHTML = "";
    tasks.forEach((task) => {
      this.makeTaskDivAndShowIt(task);
    });
  }
}
