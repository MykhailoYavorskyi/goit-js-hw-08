import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

const object = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
refreshPage(object);

const feedbackFormState = {};

function onInput(e) {
  feedbackFormState[e.target.name] = e.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackFormState));
}

function onSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  e.target.elements.email.value = '';
  e.target.elements.message.value = '';

  localStorage.removeItem('feedback-form-state');
}

function refreshPage({ email = '', message = '' }) {
  formRef.elements.email.value = email;
  formRef.elements.message.value = message;
}
