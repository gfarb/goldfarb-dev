import { LightningElement } from "lwc";

export default class MainApp extends LightningElement {
  display = true;

  handleClick() {
    this.display = false;
    this.template.querySelector("custom-modal").toggleModal();
  }

  toggleDisplay() {
    this.display = !this.display;
  }
}
