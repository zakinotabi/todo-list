import { DOMUtils } from "./DOMUtils";
import { CategoryStorage } from "../storage/categoryStorage";
import { Category } from "../components/category";
import { CategoryHandler } from "../handlers/categoryHandler";

export class CategoryUI {
  static initializeButtonEvent() {
    const newCategoryBtn = document.getElementById("new-category-btn");
    newCategoryBtn.addEventListener("click", () => this.showCategoryNewInput());
    this.displayCategories(CategoryStorage.getCategories());
  }

  static showCategoryNewInput() {
    const categoryArea = document.querySelector(".categories-section");
    const newCategoryBtn = document.getElementById("new-category-btn");

    const categoryInput = DOMUtils.createInput("text", "category-input");
    const addInputBtn = DOMUtils.createButton(
      "Save",
      "add-category-confirm",
      () => this.addCategoryToList(categoryInput.value)
    );
    const cancelInputBtn = DOMUtils.createButton(
      "Cancel",
      "cancel-category-confirm",
      () => {
        this.removeCategoryInput(
          categoryInput,
          addInputBtn,
          cancelInputBtn,
          newCategoryBtn
        );
      }
    );

    newCategoryBtn.style.display = "none";
    categoryArea.append(categoryInput, addInputBtn, cancelInputBtn);
  }

  static addCategoryToList(categoryName) {
    if (categoryName) {
      let newCat = new Category(categoryName, Date.now());
      CategoryStorage.saveCategory(newCat);
      this.displayCategories(CategoryStorage.getCategories());
    } else {
      alert("Please enter a category name!");
    }
  }

  static displayCategories(categoriesInStorage) {
    const categoryList = document.querySelector(".categories-list");
    if (!categoryList) return;

    categoryList.innerHTML = "";
    categoriesInStorage.forEach((category) => {
      const newCategory = document.createElement("li");
      newCategory.classList.add("category-item");
      newCategory.setAttribute("cat-id", category.id);
      newCategory.innerHTML = `<div>${category.name}</div>`;

      categoryList.append(newCategory);

      const deleteBtn = DOMUtils.createButton("Delete", "inside-category-btn");
      const editBtn = DOMUtils.createButton("Edit", "inside-category-btn");
      newCategory.append(editBtn, deleteBtn);

      CategoryHandler.addEventsToCategory(newCategory, deleteBtn, editBtn);

      document.querySelector(".cancel-category-confirm")?.click();
      newCategory.click();
    });
  }

  static removeCategoryInput(input, addBtn, cancelBtn, newCategoryBtn) {
    input.remove();
    addBtn.remove();
    cancelBtn.remove();
    newCategoryBtn.style.display = "block";
  }
}
