var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function Chutar() {
  var resultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    resultado.innerHTML = "Você acertou! Agora um novo número foi sorteado!";
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  }
  if (chute > 10 || chute < 0) {
    resultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else if (tentativas == 0) {
    resultado.innerHTML =
      "Que pena, suas chances acabaram! O número secreto era " +
      numeroSecreto +
      " O jogo será reiniciado.";
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
  } else {
    tentativas--;
    resultado.innerHTML =
      "Errou! Agora só restam " + tentativas + " tentativas.";
  }
}
