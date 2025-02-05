import "./styles.css";
import { addCategory } from "./categoryHandler/addCategory";

// variables
const newCategoryBtn = document.getElementById("new-category-btn");
const newTaskBtn = document.getElementById("new-task-btn");

//  hanldlers
newCategoryBtn.addEventListener("click", () => {
  addCategory();
});

newTaskBtn.addEventListener("click", () => {});
