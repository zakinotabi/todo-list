export function handleAddCategory(
  categoryInput,
  newCategoryBtn,
  cancelInputBtn
) {
  const categoryName = categoryInput.value;
  const categoryList = document.querySelector(".categories-list");

  if (categoryName) {
    // Create a new category element
    const newCategory = document.createElement("li");
    newCategory.classList.add("category-item");
    newCategory.textContent = categoryName;
    categoryList.append(newCategory);

    // Clear the input and reset the UI
    cancelInputBtn.click();

    // Show the "New Category" button again
    newCategoryBtn.style.display = "block";
  } else {
    alert("Please enter a category name!");
  }
}
