import throttle from "lodash.throttle";

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector('input[name="email"]'),
  textarea: document.querySelector('textarea[name="message"]'),
};

const FEEDBACK_KEY = "feedback-form-state";
const formData = {};

refs.form.addEventListener("input", throttle(onFormInput, 500));
refs.form.addEventListener("submit", onFormSubmite);

getLocalStorage();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function getLocalStorage() {
  let savedMessage = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  if (savedMessage) {
    refs.input.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}

function onFormSubmite(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);

  console.log(formData);
}
