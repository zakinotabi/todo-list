import "./styles.css";

// Import UI handlers
import { TaskUI } from "./ui/taskUI";

import { CategoryUI } from "./ui/categoryUI";
// Initialize modal event listeners
document.addEventListener("DOMContentLoaded", () => {
  TaskUI.initializeButtonEvent();

  CategoryUI.initializeButtonEvent();
});
