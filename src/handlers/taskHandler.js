import { HandleAddTask } from "../tasksHandler/addTask.js";

export class TaskHandler {
  static handleTaskSubmission() {
    if (!HandleAddTask.editMode) {
      TaskHandler.handleAddTaskFlow();
    } else {
      HandleAddTask.updateTask();
      HandleAddTask.editMode = false;
      HandleAddTask.currentEditId = null; // Reset after update
    }
  }

  static handleAddTaskFlow() {
    const taskHandler = new HandleAddTask();
    taskHandler.makeNewObject();
    HandleAddTask.showTasksFromStorageBasedOnCategory(taskHandler.categoryId);
  }
}
