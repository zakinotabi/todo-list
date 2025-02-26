export class Task {
  constructor(title, description, date, priority, id, categoryId) {
    this.title = title;
    this.description = description;
    this.date = date;
    this.priority = priority;
    this.categoryId = categoryId;
    this.completed = false;
    this.id = id || Date.now();
  }
}
