import { handleCategoryItems } from "./handleCategoryItems";

function createButton(text, className, onClick) {
  const button = document.createElement("button");
  button.classList.add(className);
  button.innerHTML = text;
  button.addEventListener("click", onClick);
  return button;
}

function createInput() {
  const input = document.createElement("input");
  input.classList.add("category-input");
  return input;
}

function removeCategoryInput(input, addBtn, cancelBtn, newCategoryBtn) {
  input.remove();
  addBtn.remove();
  cancelBtn.remove();
  newCategoryBtn.style.display = "block";
}

export function showCategoryNewInput() {
  const categoryArea = document.querySelector(".categories-section");
  const newCategoryBtn = document.getElementById("new-category-btn");

  const categoryInput = createInput();
  const addInputBtn = createButton("Add", "add-category-confirm", () =>
    addCategoryToList(categoryInput.value)
  );
  // prettier-ignore
  const cancelInputBtn = createButton("Cancel", "cancel-category-confirm", () => {
    removeCategoryInput(categoryInput, addInputBtn, cancelInputBtn, newCategoryBtn);
  });

  newCategoryBtn.style.display = "none";
  categoryArea.append(categoryInput, addInputBtn, cancelInputBtn);
}

function addCategoryToList(categoryName) {
  const categoryList = document.querySelector(".categories-list");

  if (categoryName) {
    const newCategory = document.createElement("li");
    newCategory.classList.add("category-item");
    newCategory.innerHTML = `<div>${categoryName}</div>`;

    categoryList.append(newCategory);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-category-btn");
    deleteBtn.textContent = "Delete";
    newCategory.append(deleteBtn);

    addEventsToCategory(newCategory, deleteBtn);

    document.querySelector(".cancel-category-confirm").click();
    newCategory.click();
  } else {
    alert("Please enter a category name!");
  }
}

function addEventsToCategory(category, deleteCategoryBtn) {
  category.addEventListener("mouseover", () => {
    deleteCategoryBtn.style.display = "block";
  });

  category.addEventListener("mouseout", () => {
    deleteCategoryBtn.style.display = "none";
  });

  category.addEventListener("click", () => {
    handleCategoryItems(category.firstElementChild);
  });

  deleteCategoryBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    category.remove();
  });
}
