import { TaskHandler } from "../handlers/taskHandler";
import { ModalUI } from "./modal";
import { Task } from "../components/task";
import { TaskStorage } from "../storage/taskStorage";
import { DOMUtils, SvgImages } from "./DOMUtils";
import { Category } from "../components/category";
import { CategoryHandler } from "../handlers/categoryHandler";
import { CategoryStorage } from "../storage/categoryStorage";

export class TaskUI {
  static initializeButtonEvent() {
    if (CategoryStorage.getCategories().length === 0 && TaskStorage.getTasks().length === 0) {
      TaskUI.initializeDemo();
    }

    const newTaskBtn = document.getElementById("new-task-btn");
    newTaskBtn.addEventListener("click", () => {
      TaskHandler.editMode = false;
      ModalUI.initializeModalEvents();
    });

    const saveButton = document.getElementById("add-task-confirm");
    saveButton.addEventListener("click", () => {
      TaskUI.saveButton();
    });

    const allTasksBtn = document.querySelector(".show-all-tasks");
    allTasksBtn.addEventListener("click", () => {
      allTasksBtn.classList.toggle("clicked");
      TaskUI.showAllTasks(allTasksBtn);
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
    const taskObj = new Task(title, description, date, priority, Date.now(), categoryId);

    TaskStorage.saveTask(taskObj);
    TaskUI.makeTaskDivAndShowIt(taskObj);
    ModalUI.clearModal();
    ModalUI.closeModal();
  }

  static makeTaskDivAndShowIt(task) {
    const tasksContainer = document.getElementById("tasks-container");
    const taskElement = document.createElement("li");
    taskElement.classList = `task ${task.priority}`;
    taskElement.setAttribute("data-id", task.id);
    taskElement.innerHTML = `
      <div class="task-info-container">
        <div class="task-info">
          <h4 class="task-title">${task.title}</h4>
        </div>
      </div>
      <div class="task-description-container">
        <p class="task-description">${task.description}</p>
        <div class="task-date-priority">
          <p class="task-date"> ${task.date}</p>
          <p class="task-priority">Priority: ${task.priority}</p>
        </div>
      </div>
    `;

    const checkbox = DOMUtils.createInput("checkbox", "checkbox-task");
    checkbox.checked = task.completed;
    taskElement.classList.toggle("checked", checkbox.checked);
    checkbox.addEventListener("change", () => {
      taskElement.classList.toggle("checked");
      TaskHandler.taskCompletion(task);
    });

    const buttonsContainer = DOMUtils.createElement("div", "task-btns-container", "");

    const expandBtn = DOMUtils.createButton(`${SvgImages.arrow}`, "description", "expand-task-btn", (event) => {
      TaskHandler.expandTask(event);
    });

    const editBtn = DOMUtils.createButton(`${SvgImages.editSvg}`, "Edit", "edit-task-btn", () => {
      TaskHandler.fillModal(task);
    });

    const deleteBtn = DOMUtils.createButton(`${SvgImages.deleteSvg}`, "Delete", "delete-task-btn", (event) => {
      event.target.closest("li").remove();
      TaskStorage.deleteTask(task.id);
    });

    buttonsContainer.append(expandBtn, editBtn, deleteBtn);
    taskElement.firstElementChild.append(buttonsContainer);
    taskElement.firstElementChild.firstElementChild.prepend(checkbox);
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

  static showAllTasks(button) {
    if (button.classList.contains("clicked")) {
      console.log(CategoryHandler.selectedCategoryId);
      const tasksContainer = document.getElementById("tasks-container");
      let tasks = TaskStorage.getTasks();
      tasksContainer.innerHTML = "";
      tasks.forEach((task) => {
        this.makeTaskDivAndShowIt(task);
      });
    } else {
      this.showAllTasksBasedOnCategory(CategoryHandler.selectedCategoryId);
    }
  }

  static updateTaskUI(taskUpdated) {
    const taskDiv = document.querySelector(`[data-id="${taskUpdated.id}"]`);
    const taskTitle = taskDiv.querySelector(".task-title");
    const taskDate = taskDiv.querySelector(".task-date");
    const taskPriority = taskDiv.querySelector(".task-priority");
    const taskDescription = taskDiv.querySelector(".task-description");

    taskDiv.classList.remove("Low", "Medium", "High");
    taskDiv.classList.add(taskUpdated.priority);
    taskTitle.innerHTML = `${taskUpdated.title}`;
    taskDate.innerHTML = `${taskUpdated.date}`;
    taskPriority.innerHTML = `Priority: ${taskUpdated.priority}`;
    taskDescription.innerHTML = `${taskUpdated.description}`;
  }

  static initializeDemo() {
    // Create 3 example categories
    const categories = [new Category("Work", 1), new Category("Personal", 2), new Category("Shopping", 3)];

    // Create example tasks for each category
    const tasks = [
      // Tasks for Work category
      new Task("Finish report", "Complete the quarterly report", "2023-10-15", "High", 102, "1"),
      new Task("Team meeting", "Attend the weekly team meeting", "2023-10-16", "Medium", 103, "1"),
      new Task("Email client", "Send follow-up email to client", "2023-10-17", "Low", 104, "1"),

      // Tasks for Personal category
      new Task("Gym", "Go to the gym for workout", "2023-10-15", "Medium", 201, "2"),
      new Task("Read book", "Read chapter 5 of 'Clean Code'", "2023-10-16", "Low", 202, "2"),
      new Task("Call mom", "Call mom to check in", "2023-10-17", "High", 203, "2"),

      // Tasks for Shopping category
      new Task("Groceries", "Buy milk, eggs, and bread", "2023-10-15", "High", 301, "3"),
      new Task("Clothes", "Buy new jeans and shirt", "2023-10-16", "Medium", 302, "3"),
      new Task("Gifts", "Buy birthday gift for friend", "2023-10-17", "Low", 303, "3"),
    ];

    CategoryStorage.saveAllCategories(categories);
    TaskStorage.saveAllTasks(tasks);
  }
}
