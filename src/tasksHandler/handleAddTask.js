import { makwNewtask } from "../dataHandler/localstorage";

export function handleAddTask(event) {
  event.preventDefault();
  // Get form inputs
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;
  const categoryItems = document.querySelectorAll(".category-item");

  makwNewtask(title, description, dueDate, priority);

  const tasksContainer = document.getElementById("tasks-container");

  // Create a new task element
  const taskElement = document.createElement("li");
  taskElement.className = "task-item";
  taskElement.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <p><strong>Due Date:</strong> ${dueDate}</p>
      <p><strong>Priority:</strong> ${priority}</p>


    `;

  // Append the task to the tasks container
  tasksContainer.appendChild(taskElement);

  // Close the modal
  const modalWindow = document.getElementById("todo-modal");
  modalWindow.close();

  // Clear the form
  clearForm();
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("due-date").value = "";
  document.getElementById("priority").value = "high"; // Reset to default
}

// Optional: Add functions to handle task completion and deletion
function toggleTaskCompletion(button) {
  const taskElement = button.closest(".task-item");
  taskElement.classList.toggle("completed");
  button.textContent = taskElement.classList.contains("completed")
    ? "Undo"
    : "Complete";
}

function deleteTask(button) {
  const taskElement = button.closest(".task-item");
  taskElement.remove();
}
