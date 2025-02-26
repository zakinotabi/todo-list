import { CategoryStorage } from "../storage/categoryStorage";
import { DOMUtils } from "../ui/DOMUtils";
import { TaskUI } from "../ui/taskUI";

export class CategoryHandler {
  static selectedCategoryId;

  static addEventsToCategory(category, deleteCategoryBtn, editCategoryBtn) {
    this.categoryButtonsAnimation(category, deleteCategoryBtn);
    this.categoryButtonsAnimation(category, editCategoryBtn);

    category.addEventListener("click", () => {
      this.handleCategoryItems(category);
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
          CategoryStorage.updateCategoryName(category, input.value);
        }
        category.firstElementChild.style.display = "";
        this.categoryButtonsAnimation(category, deleteCategoryBtn);
        this.categoryButtonsAnimation(category, editCategoryBtn);
        input.remove();
      });
      category.append(input);
      input.focus();
    });
  }
  static categoryButtonsAnimation(category, button) {
    category.addEventListener("mouseover", () => {
      if (category.children.length <= 3) {
        button.style.display = "block";
      }
    });

    category.addEventListener("mouseout", () => {
      button.style.display = "none";
    });
  }
  static handleCategoryItems(categoryDiv) {
    this.selectedCategoryId = categoryDiv.getAttribute("cat-id");

    TaskUI.showAllTasksBasedOnCategory(this.selectedCategoryId);
  }
}
