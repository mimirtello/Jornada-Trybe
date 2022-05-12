const pecaDeXadrez="Bispo"

//var pecaDeXadrez = prompt("Digite o nome de uma peça de xadrez")


switch (pecaDeXadrez.toLowerCase()){
  case "bispo":
  console.log("diagonal")
  break

  case "cavalo":
  console.log("em L")
  break

  case "peao":
  console.log ("pra frente")
  break

  case "torre":
  console.log ("em linha reta")
  break

  case "rainha":
  console.log ("todos os lados")
  break

  case "rei":
  console.log ("uma casa")
  break

  default:
  console.log("isso não é uma peça de xadrez")
  break
}

