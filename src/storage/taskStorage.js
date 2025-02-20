export function saveTaskToStorage(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTasksByCategory(categoryId) {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  return tasks.filter((task) => task.categoryId === categoryId);
}
