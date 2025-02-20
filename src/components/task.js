export class Task {
  constructor(title, desc, date, priority, id, categoryId) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.categoryId = categoryId;
    this.completed = false;
    this.id = id || Date.now();
  }
}
