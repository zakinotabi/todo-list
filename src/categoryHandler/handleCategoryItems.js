let selectedCategory = ""; // Global variable to store the selected category

export function handleCategoryItems(categoryDiv) {
  selectedCategory = categoryDiv.textContent; // Store category text
  console.log("Selected Category:", selectedCategory);
}

export function getSelectedCategory() {
  return selectedCategory; // Provide access to the selected category
}
