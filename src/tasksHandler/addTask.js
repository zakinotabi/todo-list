import { handleAddTask } from "./handleAddTask";

export function addTask() {
  const modalWidnow = document.getElementById("todo-modal");
  const addbutton = document.getElementById("add-task-confirm");
  const closebutton = document.getElementById("close-modal");

  modalWidnow.showModal();

  addbutton.addEventListener("click", () => handleAddTask());

  closebutton.addEventListener("click", () => modalWidnow.close());
}
