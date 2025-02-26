export class ModalUI {
  static modalWindow = document.getElementById("todo-modal");
  static closeButton = document.getElementById("close-modal");

  static initializeModalEvents() {
    this.closeButton.addEventListener("click", () => this.modalWindow.close());
    this.modalWindow.showModal();
    this.clearModal();
  }

  static closeModal() {
    this.modalWindow.close();
  }

  static clearModal() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("due-date").value = "";
    document.getElementById("priority").value = "";
  }
}

// // Initialize event listeners when the script loads
// document.addEventListener("DOMContentLoaded", () => {
//   ModalUI.initializeModalEvents();
// });
