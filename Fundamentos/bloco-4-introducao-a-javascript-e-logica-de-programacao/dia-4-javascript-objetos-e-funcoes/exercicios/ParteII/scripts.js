//Exercicio 1

// function verificaPalindrome(string){
//   let reverso = string.split('').reverse().join('')
//   if (reverso=== string){
//       return true
//     }else{
//       return false
//     }
// }

// console.log(verificaPalindrome("arara"))
// console.log(verificaPalindrome('desenvolvimento'))

// Exercicio2

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4


//Eexrcicio 3

// function indiceMenor(numeros){
//   let indiceMenor=0
//   for (let indice in numeros){
//     if(numeros[indiceMenor] > numeros[indice]){
//       indiceMenor=indice
//     }
//   }
//   return indiceMenor
// }

// console.log (indiceMenor([2, 4, 6, 7, 10, 0, -3]))


//Exercicio 4

// function maiorQuantidadeCaracteres (caracteres){
//   let maiorQuantidade=caracteres[0]
//   for(let indice in caracteres){
//     if(maiorQuantidade.length < caracteres[indice].length)
//     maiorQuantidade=caracteres[indice]
//   }
//   return maiorQuantidade
// }

// console.log(maiorQuantidadeCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//Exercicio 5
//Minha Resolução:

// function numeroQueRepete(numero){



//   for(let indice in numero){
//     // console.log(numero[indice])
//     let repetido=numero[indice]
//     let primiroNumero=numero[0]
//     if(primiroNumero===numero[indice]){
//         repetido=numero[indice]
//         return console.log(repetido)
//     }
   
//   }
  
// }

// numeroQueRepete([2, 3, 2, 5, 8, 2, 3])
// numeroQueRepete([3, 3, 3, 5, 8, 3, 3])
//

//Outrasformas de resolver o exercício
// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// }
// //Terceira forma:

// function maisRepetido(numeros) {
//   let num = {};

//   for (let index = 0; index < numeros.length; index += 1) {
//     let valor = numeros[index];
//     if (num[valor] === undefined) {
//       num[valor] = 1;
//     } else {
//       num[valor] = num[valor] + 1;
//     }
//   }

//   let contRepetido = 0;
//   let contNumero = 0;

//   for (let prop in num) {
//     if (contRepetido < num[prop]) {
//       contRepetido = num[prop];
//       contNumero = prop;
//     }
//   }

//   return contNumero;
// }

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

//Exercicio 6 

// function somatorio(numero){
//   let total=0
//   for(let i=0; i <= numero ; i+=1){
//     total=total+i
//   }
//   return total
// }

// console.log(somatorio(5))

//Exercicio 7

//Duas formas de resolver o exercício
function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for (let index = 0; index < fimPalavra.length; index += 1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
}

//Outra forma

function verificaFimPalavra(palavra, fimPalavra) {
  let inversoPalavra = palavra.split('').reverse().join('');
  let inversoFimPalavra = fimPalavra.split('').reverse().join('');
  let result;

  for (let index = 0; index < inversoFimPalavra.length; index += 1) {
    if (inversoPalavra[index] !== inversoFimPalavra[index]) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  
  return result;
}

console.log(verificaFimPalavra('trybe', 'be')); //true
console.log(verificaFimPalavra('joaofernando', 'fernan')); //false
