/* eslint-disable */

window.onload = function onLoad() {
  const key = 'tutalentooculto-terms-and-conditions'
  const isAgreed = localStorage.getItem(key)
  const modal = document.querySelector('#modal')
  const close = document.querySelector('.modal-close')

  if (!isAgreed) {
    modal.style.display = 'block'
  }

  close.onclick = function onClick() {
    localStorage.setItem(key, true)
    modal.style.display = 'none'
  }
}
