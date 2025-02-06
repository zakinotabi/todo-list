import { handleAddCategory } from "./handleAddCategory.js";
import { handleCancelCategory } from "./handleCancelCategory.js";
import { handleCategoryItems } from "./handleCategoryItems.js";

export function addCategory() {
  // variables
  const categoryArea = document.querySelector(".categories-section");
  const categoryItems = document.querySelectorAll(".category-item");
  const newCategoryBtn = document.getElementById("new-category-btn");
  const categoryInput = document.createElement("input");
  const addInputBtn = document.createElement("button");
  const cancelInputBtn = document.createElement("button");

  // Set up buttons
  addInputBtn.classList.add("add-category-confirm");
  cancelInputBtn.classList.add("cancel-category-confirm");
  addInputBtn.innerHTML = "Add";
  cancelInputBtn.innerHTML = "Cancel";

  // Hide the "New Category" button and show input/buttons
  newCategoryBtn.style.display = "none";
  categoryArea.append(categoryInput, addInputBtn, cancelInputBtn);

  // Add event listeners
  addInputBtn.addEventListener("click", () =>
    handleAddCategory(categoryInput, newCategoryBtn, cancelInputBtn)
  );
  cancelInputBtn.addEventListener("click", () =>
    handleCancelCategory(
      categoryInput,
      newCategoryBtn,
      cancelInputBtn,
      addInputBtn
    )
  );

  categoryItems.forEach((item) => {
    item.addEventListener("click", () => {
      handleCategoryItems();
    });
  });
}
