var button = document.getElementById('choice')
//
button.addEventListener('click', function () {
  var theme = window.localStorage.getItem('savedTheme')
  if (theme === 'day') {
    theme = 'night'
  } else {
    theme = 'day'
  }
  document.body.setAttribute('class', theme)
  window.localStorage.setItem('savedTheme', theme)
}
)

var pagehits = window.localStorage.getItem('count')

if (pagehits === null) {
  pagehits = 0
}

pagehits++

window.localStorage.setItem('count', pagehits)

document.getElementById('count').innerHTML = pagehits
