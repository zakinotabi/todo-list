import { HandleAddTask } from "../tasksHandler/addTask";
import { CategoryStorage } from "../storage/categoryStorage";
import { DOMUtils } from "../ui/DOMUtils";
function categoryButtonsAnimation(category, button) {
  category.addEventListener("mouseover", () => {
    if (category.children.length <= 3) {
      button.style.display = "block";
    }
  });

  category.addEventListener("mouseout", () => {
    button.style.display = "none";
  });
}

export function addEventsToCategory(
  category,
  deleteCategoryBtn,
  editCategoryBtn
) {
  //
  categoryButtonsAnimation(category, deleteCategoryBtn);
  categoryButtonsAnimation(category, editCategoryBtn);
  category.addEventListener("click", () => {
    handleCategoryItems(category);
  });

  deleteCategoryBtn.addEventListener("click", () => {
    category.remove();
    CategoryStorage.deleteCategory(category);
    CategoryStorage.deleteTasksForCategory(category);
  });

  editCategoryBtn.addEventListener("click", () => {
    const input = DOMUtils.createInput();
    input.value = category.firstElementChild.innerHTML;

    category.firstElementChild.style.display = "none";
    deleteCategoryBtn.style.display = "none";
    editCategoryBtn.style.display = "none";

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") input.blur();
    });
    input.addEventListener("blur", () => {
      if (category.firstElementChild.innerHTML !== input.value) {
        category.firstElementChild.innerHTML = input.value;
        //update in localdtorage
        CategoryStorage.updateCategoryName(category, input.value);
      }
      category.firstElementChild.style.display = "";
      categoryButtonsAnimation(category, deleteCategoryBtn);
      categoryButtonsAnimation(category, editCategoryBtn);
      input.remove();
    });
    category.append(input);
    input.focus();
  });
}

//handle category click and save it and send it
let selectedCategoryId = "";

export function handleCategoryItems(categoryDiv) {
  selectedCategoryId = categoryDiv.getAttribute("cat-id"); // Store category text
  console.log("Selected Category:", selectedCategoryId);
  HandleAddTask.showTasksFromStorageBasedOnCategory(selectedCategoryId);
}

export function getSelectedCategory() {
  return selectedCategoryId; // Provide access to the selected category
}
