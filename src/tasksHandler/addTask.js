import { handleAddTask } from "./handleAddTask";

export function addTask() {
  const modalWidnow = document.getElementById("todo-modal");
  const addButton = document.getElementById("add-task-confirm");
  const closebutton = document.getElementById("close-modal");

  modalWidnow.showModal();

  addButton.addEventListener("click", () => handleAddTask());

  closebutton.addEventListener("click", () => modalWidnow.close());
}
