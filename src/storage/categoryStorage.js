function saveCategoryInStorage() {
  window.localStorage.setItem("categories", JSON.stringify(categories));
}

function getCategoryfromStorage() {
  let categories = JSON.parse(localStorage.getItem("categories") || "[]");
  if (categories) {
    return categories;
  }
  document.querySelectorAll(".category-item")[0]?.click();
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

// let categories = [];

// (function initiat() {
//   let categoriesFromStorage = JSON.parse(
//     window.localStorage.getItem("categories")
//   );
//   if (categoriesFromStorage) {
//     categoriesFromStorage.forEach((element) => {
//       categories.push(element);
//     });
//     makeCategory();
//   }
// })();
// //
