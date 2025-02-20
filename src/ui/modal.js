export class ModalUI {
  static modalWindow = document.getElementById("todo-modal");
  static closeButton = document.getElementById("close-modal");

  static initializeModalEvents() {
    this.closeButton.addEventListener("click", () => this.modalWindow.close());
    this.modalWindow.showModal();
  }

  static closeModal() {
    this.modalWindow.close();
  }
}

// // Initialize event listeners when the script loads
// document.addEventListener("DOMContentLoaded", () => {
//   ModalUI.initializeModalEvents();
// });
