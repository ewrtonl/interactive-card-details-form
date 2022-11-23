const name = document.querySelector('#name')
const nameOnScreen = document.querySelector('#nameOnScreen')
const card = document.querySelector('#card-number')
const cardOnScreen = document.querySelector('#cardOnScreen')
const date = document.querySelector('#month')
const dateOnScreen = document.querySelector('#monthOnScreen')
const year = document.querySelector('#year')
const yearOnScreen = document.querySelector('#yearOnScreen')
const cvc = document.querySelector('#cvc')
const cvcOnScreen = document.querySelector('#cvcOnScreen')
const btnConfirm = document.querySelector('#buttonConfirm')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const form = document.querySelector('form')
const inputs = document.querySelectorAll('input')
const btnContinue = document.querySelector('#continue')


for (let element of inputs) {
  element.addEventListener('blur', function () {
    this.dataset.blur = true
  })
}

name.addEventListener('keyup', event => {
  name.value = event.target.value

  nameOnScreen.innerHTML = name.value
})

card.addEventListener('keyup', () => {
  let value = card.value
    .replace(/[^0-9]/g, '')
    .replace(/^([\d]{4})([\d]{4})?([\d]{4})?([\d]{4})?/, '$1 $2 $3 $4')

  card.value = value
  cardOnScreen.innerHTML = card.value
})

month.addEventListener('keyup', event => {
  month.value = event.target.value

  monthOnScreen.innerHTML = month.value
})

year.addEventListener('keyup', event => {
  year.value = event.target.value

  yearOnScreen.innerHTML = year.value
})

cvc.addEventListener('keyup', event => {
  cvc.value = event.target.value

  cvcOnScreen.innerHTML = cvc.value
})

form.onsubmit = function (event) {
  event.preventDefault()

  screen1.classList.add('hide')
  screen2.classList.remove('hide')
}

btnContinue.addEventListener('click', function() {
  window.location.reload(true);
})
