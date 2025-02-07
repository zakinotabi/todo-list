import "./styles.css";
import { showCategoryNewInput } from "./categoryHandler/addCategory";
import { addTask2 } from "./tasksHandler/addTask2";
// variables
const newCategoryBtn = document.getElementById("new-category-btn");
const newTaskBtn = document.getElementById("new-task-btn");

//  hanldlers
newCategoryBtn.addEventListener("click", () => {
  showCategoryNewInput();
});

newTaskBtn.addEventListener("click", () => {
  // show-close modal

  const modalWidnow = document.getElementById("todo-modal");
  modalWidnow.showModal();
  const closebutton = document.getElementById("close-modal");
  closebutton.addEventListener("click", () => modalWidnow.close());
});
