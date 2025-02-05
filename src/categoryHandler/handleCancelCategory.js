export function handleCancelCategory(
  categoryInput,
  newCategoryBtn,
  cancelInputBtn,
  addInputBtn
) {
  categoryInput.remove();
  addInputBtn.remove();
  cancelInputBtn.remove();

  // Show the "New Category" button again
  newCategoryBtn.style.display = "block";
}
