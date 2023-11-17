const nameField = document.querySelector(".contact-container #ContactForm1_contact-form-name");
const emailField = document.querySelector(".contact-container #ContactForm1_contact-form-email");
const messageField = document.querySelector(".contact-container #ContactForm1_contact-form-email-message");
const sendBtn = document.querySelector(".contact-container #ContactForm1_contact-form-submit");
const errorMessage = document.querySelector(
  ".contact-container .error-message"
);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

sendBtn.addEventListener("click", (e) => {
  if (
    nameField.value.trim() === "" ||
    emailField.value.trim() === "" ||
    messageField.value.trim() === ""
  ) {
    e.preventDefault();
    errorMessage.textContent = "All fields are necessary";
  } else if (!emailRegex.test(emailField.value)) {
    e.preventDefault();
    errorMessage.textContent = "Please enter a valid email";
  } else {
    errorMessage.textContent = "";
  }
});

nameField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});

emailField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});

messageField.addEventListener("focus", () => {
  errorMessage.textContent = "";
});

function sendMail(){
    $(document).ready(function(){
        $("#ContactForm1_contact-form-submit").trigger("click");
    });
}