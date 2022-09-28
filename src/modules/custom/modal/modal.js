import { LightningElement, api } from "lwc";
export default class Modal extends LightningElement {
  display = false;
  disableSend = true;
  email = {};
  mailToLink;

  handleFormInputChange(event) {
    this.email[event.target.name] = event.target.value;
    if (
      typeof this.email.subject != "undefined" &&
      typeof this.email.message != "undefined"
    ) {
      this.disableSend = false;
      this.mailToLink =
        "mailto:max@goldfarb.dev?subject=Sent%20from%20goldfarb.dev%3A%20" +
        this.email.subject +
        "&body=" +
        this.email.message;
    }
  }

  @api toggleModal() {
    this.display = !this.display;
    this.disableSend = true;
    if (this.display === false) {
      this.callbackToParent();
    }
  }

  sendEmail() {
    window.open(this.mailToLink);
    this.toggleModal();
  }

  callbackToParent() {
    this.dispatchEvent(new CustomEvent("callbacktoparent"));
  }
}
