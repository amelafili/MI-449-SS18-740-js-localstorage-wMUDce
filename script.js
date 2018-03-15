var button = document.getElementById('choice')

/* button is added to an event, so this function works
whenever button is clicked */
button.addEventListener('click', function () {
  // collecting theme used
  var theme = window.localStorage.getItem('savedTheme')
// if theme is day, then display night theme when pressed
  if (theme === 'day') {
    theme = 'night'
// if theme is on night, then display day when pressed
  } else {
    theme = 'day'
  }
  document.body.setAttribute('class', theme)
// saves the last theme user was on
  window.localStorage.setItem('savedTheme', theme)
}
)

// logs every time you hit the page
var pagehits = window.localStorage.getItem('count')

// if no visits, then is 0
if (pagehits === null) {
  pagehits = 0
}
// everytime its visited, it adds one
pagehits++

// saves the amount of times the user visits
window.localStorage.setItem('count', pagehits)

// prints the number onto the page
document.getElementById('count').innerHTML = pagehits
