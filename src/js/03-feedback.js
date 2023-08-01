import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

const feedbackFormState = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || { email: '', message: '' };

refreshPage(feedbackFormState);

function onInput(e) {
  feedbackFormState[e.target.name] = e.target.value;

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(feedbackFormState));
}

function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)));

  e.target.elements.email.value = '';
  e.target.elements.message.value = '';

  localStorage.removeItem(LOCAL_STORAGE_KEY);
}

function refreshPage({ email, message }) {
  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
}
