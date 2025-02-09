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

class Category {
  constructor(categoryName, catId) {
    this.name = categoryName;
    this.id = catId;
  }
}

(function initiat() {
  let categoriesFromStorage = JSON.parse(
    window.localStorage.getItem("categories")
  );
  if (categoriesFromStorage) {
    categoriesFromStorage.forEach((element) => {
      categories.push(element);
    });
    makeCategory();
  }
})();

function addCategoryToList(categoryName) {
  // save to local

  if (categoryName) {
    let newCat = new Category(categoryName, Date.now());
    categories.push(newCat);
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
  document.querySelectorAll(".category-item")[0]?.click();
}

function displayCategories(categoriesInStorage) {
  const categoryList = document.querySelector(".categories-list");
  categoryList.innerHTML = "";
  categoriesInStorage.forEach((category) => {
    const newCategory = document.createElement("li");
    newCategory.classList.add("category-item");
    newCategory.setAttribute("cat-id", category.id);
    newCategory.innerHTML = `<div>${category.name}</div>`;

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
function deleteCategoryFromStorage(categoryHolder) {
  let data = JSON.parse(window.localStorage.getItem("categories"));
  let categoryId = categoryHolder.getAttribute("cat-id");
  data = data.filter((category) => category.id != categoryId);
  console.log(data);
  window.localStorage.setItem("categories", JSON.stringify(data));
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
    deleteCategoryFromStorage(category);
  });
}
