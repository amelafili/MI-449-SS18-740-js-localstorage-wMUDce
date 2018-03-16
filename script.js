// collecting when button is used
var button = document.getElementById('choice')

// sets the background when first opening page to day theme
document.body.setAttribute('class', 'day')

/* button is added to an event, so this function works
whenever button is clicked */
button.addEventListener('click', function () {
// collecting theme used
  var theme = window.localStorage.getItem('theme')
// if theme is day, then display night theme when pressed
  if (theme === 'day') {
    theme = 'night'
// if theme is on night, then display day when pressed
  } else {
    theme = 'day'
  }

// sets the result of theme onto the body
  document.body.setAttribute('class', theme)
// saves the last theme user was on
  window.localStorage.setItem('theme', theme)
}
)

// logs every time you hit the page
var pagehits = window.localStorage.getItem('count')

// if no visits, then is 0
if (pagehits === null) {
  pagehits = 0
}
// everytime its visited, it adds one to itself
pagehits++

// saves the amount of times the user visits
window.localStorage.setItem('count', pagehits)

// prints the number onto the page
document.getElementById('count').innerHTML = pagehits

var theme = window.localStorage.getItem('theme')
document.body.setAttribute('class', theme)
window.localStorage.setItem('theme', theme)
