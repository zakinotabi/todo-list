import { ModalUI } from "./modal";

const addButton = document.getElementById("add-task-confirm");

export const newTaskButton = {
  initializeButtonEvent: () => {
    const newTaskBtn = document.getElementById("new-task-btn");

    // Handle opening task modal
    newTaskBtn.addEventListener("click", () => {
      ModalUI.initializeModalEvents();
    });
  },
};

addButton.addEventListener("click", () => {
  // taskhandler add
});
