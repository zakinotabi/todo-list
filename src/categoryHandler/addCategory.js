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

    const deleteBtn = createButton("Delete", "inside-category-btn");
    const editBtn = createButton("Edit", "inside-category-btn");
    newCategory.append(editBtn, deleteBtn);

    addEventsToCategory(newCategory, deleteBtn, editBtn);

    document.querySelector(".cancel-category-confirm")?.click();
    newCategory.click();
  });
}
function deleteCategoryFromStorage(categoryHolder) {
  let data = JSON.parse(window.localStorage.getItem("categories"));
  let categoryId = categoryHolder.getAttribute("cat-id");
  data = data.filter((category) => category.id != categoryId);
  window.localStorage.setItem("categories", JSON.stringify(data));
}

function deleteTasksOfThisCategoryFromStorage(categoryHolder) {
  let data = JSON.parse(window.localStorage.getItem("tasks"));
  let categoryId = categoryHolder.getAttribute("cat-id");
  data = data.filter((task) => task.categoryId != categoryId);
  window.localStorage.setItem("tasks", JSON.stringify(data));
}

function updateCategoryNameInStorage(categoryHolder, newName) {
  let data = JSON.parse(window.localStorage.getItem("categories"));
  let categoryId = categoryHolder.getAttribute("cat-id");

  data.forEach((category) => {
    if (category.id === parseInt(categoryId)) {
      category.name = newName;
    }
  });
  window.localStorage.setItem("categories", JSON.stringify(data));
}

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

function addEventsToCategory(category, deleteCategoryBtn, editCategoryBtn) {
  //
  categoryButtonsAnimation(category, deleteCategoryBtn);
  categoryButtonsAnimation(category, editCategoryBtn);
  category.addEventListener("click", () => {
    handleCategoryItems(category);
  });

  deleteCategoryBtn.addEventListener("click", () => {
    category.remove();
    deleteCategoryFromStorage(category);
    deleteTasksOfThisCategoryFromStorage(category);
  });

  editCategoryBtn.addEventListener("click", () => {
    const input = createInput();
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
        updateCategoryNameInStorage(category, input.value);
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
