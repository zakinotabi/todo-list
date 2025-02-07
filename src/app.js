import "./styles.css";
import { showCategoryNewInput } from "./categoryHandler/addCategory";
import { addTask } from "./tasksHandler/addTask";
// variables
const newCategoryBtn = document.getElementById("new-category-btn");
const newTaskBtn = document.getElementById("new-task-btn");

//  hanldlers
newCategoryBtn.addEventListener("click", () => {
  showCategoryNewInput();
});

newTaskBtn.addEventListener("click", () => {
  addTask();
});
