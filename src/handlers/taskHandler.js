import { TaskStorage } from "../storage/taskStorage.js";
import { TaskUI } from "../ui/taskUI.js";
import { ModalUI } from "../ui/modal.js";
export class TaskHandler {
  static editMode = false;
  static taskSelected = null;

  static fillModal(task) {
    // event.preventDefault();
    ModalUI.initializeModalEvents();
    //save mode and task
    this.editMode = true;
    this.taskSelected = task;
    // fill the modal inputs with the task's current data
    document.getElementById("title").value = task.title;
    document.getElementById("description").value = task.description;
    document.getElementById("due-date").valueAsDate = new Date(task.date);
    document.getElementById("priority").value = task.priority;
  }

  static updateTask() {
    // current values of the modal inputs
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;
    // Update the selected task with new values
    this.taskSelected.title = title;
    this.taskSelected.description = description;
    this.taskSelected.date = date;
    this.taskSelected.priority = priority;
    // Update the selected task in storage and DOM
    TaskUI.updateTaskUI(this.taskSelected);
    TaskStorage.updateTask(this.taskSelected);
    ModalUI.closeModal();
  }

  static taskCompletion(task) {
    task.completed = !task.completed;
    TaskStorage.updateTask(task);
  }

  static expandTask(event) {
    const taskItem = event.target.closest(".task");
    const taskDescription = taskItem.querySelector(".task-description-container");
    const button = event.target.closest(".expand-task-btn");
    button.classList.toggle("rotate-svg");
    taskDescription.classList.toggle("expand-description");
  }
}
