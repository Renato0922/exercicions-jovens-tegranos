var segundosHTML = document.getElementById('segundos')

function calcular() {
  var segundos = segundosHTML.value
  var minutos
  var horas
  horas = Math.floor(segundos / 3600)
  minutos = Math.floor((segundos - horas * 3600) / 60)
  seconds = segundos - horas * 3600 - minutos * 60

  tempo = horas.toString() + ':' + minutos.toString() + ':' + seconds.toString()

  document.getElementById('tempo').innerHTML = tempo
}
