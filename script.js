var button = document.getElementById('choice')
button.addEventListener('click', function () {
  var dayTheme = document.body.setAttribute('class', 'day')
  dayTheme = window.localStorage.getItem('dayTheme')

  if (dayTheme === null) {
       // Set the first name to "mysterious stranger"
    dayTheme = 'nope'
     // Otherwise, if the user provided a first name...
  } else {
       // Permanently store the user's first name
    window.localStorage.setItem('dayTheme')
  }
}
)

var pagehits = window.localStorage.getItem('count')

if (pagehits === null) {
  pagehits = 0
}

pagehits++

window.localStorage.setItem('count', pagehits)

document.getElementById('count').innerHTML = pagehits
