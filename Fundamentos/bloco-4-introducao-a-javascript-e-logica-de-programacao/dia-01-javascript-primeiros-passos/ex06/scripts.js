let estado="reprovada"

switch (estado) {
    case "aprovada":
        console.log("Aprovada! Parabens!")
        break;
    case "lista":
        console.log("Você está na nossa lista de espera")
        break
    case "reprovada":
        console.log("Reprovada... Não desista")
        break
    default:
        console.log("Nenhuma das opções anteriores")
        break;
}