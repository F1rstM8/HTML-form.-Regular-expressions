const form = document.querySelector(".contact-form");
const firstNameInput = document.querySelector(
  'input[placeholder="first name"]',
);
const lastNameInput = document.querySelector('input[placeholder="last name"]');
const emailInput = document.querySelector('input[type="email"]');
const subjectSelect = document.querySelector("select");
const messageTextarea = document.querySelector("textarea");
const phoneInputs = document.querySelectorAll('#phone-inputs-wrapper input');
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fullName = `${firstNameInput.value.trim()} ${lastNameInput.value.trim()}`;
  const cleanMessage = messageTextarea.value.trim().replace(/\s+/g, " ");
  const formData = {
    name: fullName,
    email: emailInput.value.trim(),
    phone: fullPhone,
    subject: subjectSelect.value,
    message: cleanMessage,
  };
  console.log("Дані готові до відправки:", formData);
  form.reset();
});
