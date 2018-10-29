/* eslint-disable */
// Handles the execution of the form

const form = document.querySelector('#form')
form.addEventListener('onsubmit', function onSubmit(e) {
  e.preventDefault()
  console.log('Submitted')
})
