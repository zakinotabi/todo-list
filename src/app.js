import "./styles.css";

// Import UI handlers
import { newTaskButton } from "./ui/taskUI";
import { newCategoryButton } from "./ui/categoryUI";
// Initialize modal event listeners
document.addEventListener("DOMContentLoaded", () => {
  newTaskButton.initializeButtonEvent();
  newCategoryButton.initializeButtonEvent();
});
