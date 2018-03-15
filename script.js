var button = document.getElementById('choice')

button.addEventListener('click', function () {
  var theme = document.body.setAttribute('class', 'day')
  theme = window.localStorage.getItem('dayTheme')
  if (theme === 'day') {
    theme = 'night'
  } else {
    theme = 'day'
  }
  document.body.setAttribute('class', theme)
  window.localStorage.setItem('dayTheme', theme)
}
)

var pagehits = window.localStorage.getItem('count')

if (pagehits === null) {
  pagehits = 0
}

pagehits++

window.localStorage.setItem('count', pagehits)

document.getElementById('count').innerHTML = pagehits
