import { DOMUtils, SvgImages } from "./DOMUtils";
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

    const buttonsContainer = DOMUtils.createElement("div", "add-category-btns-container", "");
    const categoryInput = DOMUtils.createInput("text", "category-input");
    categoryInput.placeholder = "Category Name";

    const addInputBtn = DOMUtils.createButton("Save", "Save new category", "add-category-confirm", () => this.addCategoryToList(categoryInput.value));
    const cancelInputBtn = DOMUtils.createButton("Cancel", "Cancel", "cancel-category-confirm", () => {
      this.removeCategoryInput(categoryInput, addInputBtn, cancelInputBtn, newCategoryBtn);
    });

    newCategoryBtn.style.display = "none";
    buttonsContainer.append(addInputBtn, cancelInputBtn);
    categoryArea.append(categoryInput, buttonsContainer);
    categoryInput.focus();
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
      newCategory.innerHTML = `<h4>${category.name}</h4>`;
      categoryList.append(newCategory);

      const buttonsContainer = DOMUtils.createElement("div", "category-btns-container", "");
      const deleteBtn = DOMUtils.createButton(`${SvgImages.deleteSvg}`, "Delete", "delete-category-btn");
      const editBtn = DOMUtils.createButton(`${SvgImages.editSvg}`, "Edit", "edit-category-btn");
      buttonsContainer.append(editBtn, deleteBtn);
      newCategory.append(buttonsContainer);

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
