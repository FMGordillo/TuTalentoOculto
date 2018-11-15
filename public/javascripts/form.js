/* eslint-disable */
const button = document.querySelector('#btn-submit')
const form = document.getElementById('form')

form.addEventListener('submit', onSubmit)

async function onSubmit(e) {
  isButtonDisabled(true)
  return true // ?
}

const isButtonDisabled = bool => (button.disabled = bool)
