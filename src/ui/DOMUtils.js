export class DOMUtils {
  static clearElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = "";
    }
  }

  static createElement(tag, className, innerHTML) {
    const element = document.createElement(tag);
    element.className = className;
    element.innerHTML = innerHTML;
    return element;
  }

  static appendToElement(parentId, child) {
    const parent = document.getElementById(parentId);
    if (parent) {
      parent.appendChild(child);
    }
  }

  static createButton(text, className, onClick) {
    const button = document.createElement("button");
    button.classList.add(className);
    button.innerHTML = text;
    button.addEventListener("click", onClick);
    return button;
  }

  static createInput(type, className) {
    const input = document.createElement("input");
    input.type = type;
    input.classList.add(className);
    return input;
  }
}
