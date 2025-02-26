export class TaskStorage {
  static saveAllTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  static getTasks() {
    return JSON.parse(localStorage.getItem("tasks") || "[]");
  }

  static saveTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    this.saveAllTasks(tasks);
  }

  static getTasksByCategory(categoryId) {
    return this.getTasks().filter((task) => task.categoryId === categoryId);
  }

  static getTaskById(taskId) {
    return this.getTasks().filter((task) => task.id === taskId)[0];
  }

  static updateTask(updatedTask) {
    let tasks = this.getTasks();
    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    this.saveAllTasks(tasks);
  }

  static deleteTask(taskId) {
    const tasks = this.getTasks().filter((task) => task.id !== taskId);
    this.saveAllTasks(tasks);
  }
}
