import { getdatafromlocalAndShowIt } from "../tasksHandler/addTask2";

let selectedCategoryId = "Example"; // Global variable to store the selected category

export function handleCategoryItems(categoryDiv) {
  selectedCategoryId = categoryDiv.getAttribute("cat-id"); // Store category text
  console.log("Selected Category:", selectedCategoryId);
  getdatafromlocalAndShowIt(selectedCategoryId);
}

export function getSelectedCategory() {
  return selectedCategoryId; // Provide access to the selected category
}
