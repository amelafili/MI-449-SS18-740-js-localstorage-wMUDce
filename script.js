var button = document.getElementById('choice')
button.addEventListener('click', function () {
  var dayTheme = document.body.setAttribute('class', 'day')
  dayTheme = window.localStorage.getItem('dayTheme')
}
)

var pagehits = window.localStorage.getItem('count')

if (pagehits === null) {
  pagehits = 0
}

pagehits++

window.localStorage.setItem('count', pagehits)

document.getElementById('count').innerHTML = pagehits
