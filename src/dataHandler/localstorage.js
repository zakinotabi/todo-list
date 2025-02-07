import { getSelectedCategory } from "../categoryHandler/handleCategoryItems";

export class Localstorage {
  constructor(title, desc, date, priority, category) {
    this.title = title;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.category = category;
  }
}

export function makwNewtask(title, desc, date, priority) {
  const category = getSelectedCategory(); // Get the last selected category
  let newtask = new Localstorage(title, desc, date, priority, category);
  console.log("New Task:", newtask);
  return newtask;
}
