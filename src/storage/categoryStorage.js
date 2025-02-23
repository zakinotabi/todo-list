export class CategoryStorage {
  static saveCategory(categories) {
    window.localStorage.setItem("categories", JSON.stringify(categories));
  }

  static getCategories() {
    let categories = JSON.parse(localStorage.getItem("categories") || "[]");
    if (categories.length) {
      return categories;
    }
    document.querySelectorAll(".category-item")[0]?.click();
    return [];
  }

  static deleteCategory(categoryHolder) {
    let data = JSON.parse(window.localStorage.getItem("categories")) || [];
    let categoryId = categoryHolder.getAttribute("cat-id");
    data = data.filter((category) => category.id != categoryId);
    window.localStorage.setItem("categories", JSON.stringify(data));
  }

  static deleteTasksForCategory(categoryHolder) {
    let data = JSON.parse(window.localStorage.getItem("tasks")) || [];
    let categoryId = categoryHolder.getAttribute("cat-id");
    data = data.filter((task) => task.categoryId != categoryId);
    window.localStorage.setItem("tasks", JSON.stringify(data));
  }

  static updateCategoryName(categoryHolder, newName) {
    let data = JSON.parse(window.localStorage.getItem("categories")) || [];
    let categoryId = categoryHolder.getAttribute("cat-id");

    data.forEach((category) => {
      if (category.id === parseInt(categoryId)) {
        category.name = newName;
      }
    });
    window.localStorage.setItem("categories", JSON.stringify(data));
  }
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
