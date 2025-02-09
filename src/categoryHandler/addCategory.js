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
let categories = [];
makeCategory();
// (function initiat() {
//   categories.push(JSON.parse(window.localStorage.getItem("categories")));

// })();
function addCategoryToList(categoryName) {
  // save to local

  if (categoryName) {
    categories.push(categoryName);
    console.log(categories);
    saveCategoryInStorage();
    makeCategory();
  } else {
    alert("Please enter a category name!");
  }
}

function saveCategoryInStorage() {
  window.localStorage.setItem("categories", JSON.stringify(categories));
}
function makeCategory() {
  let data = window.localStorage.getItem("categories");
  if (data) {
    let categoriesInStorage = JSON.parse(data);
    displayCategories(categoriesInStorage);
  }
}

function displayCategories(categoriesInStorage) {
  const categoryList = document.querySelector(".categories-list");
  categoryList.innerHTML = "";
  categoriesInStorage.forEach((categoryName) => {
    const newCategory = document.createElement("li");
    newCategory.classList.add("category-item");
    newCategory.setAttribute("cat-id", Date.now());
    newCategory.innerHTML = `<div>${categoryName}</div>`;

    categoryList.append(newCategory);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-category-btn");
    deleteBtn.textContent = "Delete";
    newCategory.append(deleteBtn);

    addEventsToCategory(newCategory, deleteBtn);

    document.querySelector(".cancel-category-confirm")?.click();
    newCategory.click();
  });
}

function addEventsToCategory(category, deleteCategoryBtn) {
  category.addEventListener("mouseover", () => {
    deleteCategoryBtn.style.display = "block";
  });

  category.addEventListener("mouseout", () => {
    deleteCategoryBtn.style.display = "none";
  });

  category.addEventListener("click", () => {
    handleCategoryItems(category);
  });

  deleteCategoryBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    category.remove();
  });
}
