var produtoHTML = document.getElementById('produto')
var unitarioHTML = document.getElementById('unitario')
var quaprodutoHTML = document.getElementById('quaproduto')
var dinheiroHTML = document.getElementById('dinheiro')

function pagar() {
  var produto = produtoHTML.value
  var unitario = parseInt(unitarioHTML.value)
  var quaproduto = quaprodutoHTML.value
  var dinheiro = parseInt(dinheiroHTML.value)

  if (produto != null && quaproduto && unitario > 0) {
    var total = unitario * quaproduto
    if (dinheiro >= total) {
      var troco = dinheiro - total

      alert('Pago com sucesso!')
      document.getElementById('nomeproduto').innerHTML = produto
      document.getElementById('quantidade').innerHTML = quaproduto
      document.getElementById('precounitario').innerHTML = unitario.toFixed(2)
      document.getElementById('dinheirorecebido').innerHTML =
        dinheiro.toFixed(2)
      document.getElementById('total').innerHTML = total.toFixed(2)
      document.getElementById('troco').innerHTML = troco.toFixed(2)
    } else {
      alert('Dinheiro não suficiente.')
    }
  } else {
    alert('Digite os dados corretamente.')
  }
}
