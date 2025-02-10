import { getdatafromlocalAndShowIt } from "../tasksHandler/addTask2";

let selectedCategoryId = ""; // Global variable to store the selected category
// if (selectedCategoryId === "") {
//   const newTaskBtn = document.getElementById("new-task-btn");
//   newTaskBtn.removeEventListener;
// }
export function handleCategoryItems(categoryDiv) {
  selectedCategoryId = categoryDiv.getAttribute("cat-id"); // Store category text
  console.log("Selected Category:", selectedCategoryId);
  getdatafromlocalAndShowIt(selectedCategoryId);
}

export function getSelectedCategory() {
  return selectedCategoryId; // Provide access to the selected category
}
