export function handleCategoryItems(category) {
  // const deleteCategoryBtn = category.firstElementChild;
}

let categorySelectedIndex = 0; // Declare in a higher scope

export function saveCategorySelected(index) {
  categorySelectedIndex = index; // Update the value
  return categorySelectedIndex; // Return the updated value (optional)
}
