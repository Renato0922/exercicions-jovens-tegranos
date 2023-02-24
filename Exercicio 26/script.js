var palavraHTML = document.getElementById('palavra')

function calcular() {
  var palavra = palavraHTML.value
  var vogais = 0,
    consoantes = 0

  for (var i = 0; i < palavra.length; i++) {
    var ctr = palavra[i]
    if ((ctr >= 'a' && ctr <= 'z') || (ctr >= 'A' && ctr <= 'Z')) {
      ctr = ctr.toLowerCase()
      if (ctr == 'a' || ctr == 'e' || ctr == 'i' || ctr == 'o' || ctr == 'u')
        vogais++
      else consoantes++
    }
  }
  document.getElementById('vogais').innerHTML = 'Vogais: ' + vogais
  document.getElementById('consoantes').innerHTML = 'Consoantes: ' + consoantes
}
