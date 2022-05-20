let pai = document.getElementById('pai')
let irmao= document.createElement('section')
irmao.id='irmao'
pai.appendChild(irmao)

let elementoOndeVoceEsta= document.getElementById('elementoOndeVoceEsta')
let filho1= document.createElement('section')
filho1.id='filho1'
elementoOndeVoceEsta.appendChild(filho1)

let primeiroFilhoDoFilho=document.getElementById('primeiroFilhoDoFilho')
let filho2= document.createElement('section')
filho2.id='filho2'
primeiroFilhoDoFilho.appendChild(filho2)

let terceirofilho=filho2.parentElement.parentElement.previousElementSibling
console.log(terceirofilho)