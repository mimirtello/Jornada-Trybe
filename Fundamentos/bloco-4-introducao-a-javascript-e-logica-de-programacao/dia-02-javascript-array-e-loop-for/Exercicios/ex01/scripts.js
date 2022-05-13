let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//primeiro exercicio

// for (let number of numbers){
//   console.log(number)
// }

//Segundo Exercicio

// let resultado=0
// for (let i=0; i<numbers.length;i++){
// resultado += numbers[i]
// }

// console.log(resultado)

//Terceiro Exercicio

// soma=0
// for(let i=0;i<numbers.length;i++){
// soma+= numbers[i]
// media= soma/numbers.length
// }

// console.log(media)

//Quarto Exercicios

// soma=0
// for(let i=0;i<numbers.length;i++){
// soma+= numbers[i]
// media= soma/numbers.length
// }

// console.log(media)

// if(media>20){
//   console.log("Valor maior que 20")
// }else{
//   console.log("Valor menor ou igual a 20")
// }

//Quinto Exercicio
let maior=numbers[0]
for(let i=0;i<numbers.length;i++){
 if(numbers[i]> maior){
    maior=numbers[i]
 }
}
console.log(maior)


//Sexto Exercicio
// let numerosImpares=[]
// let numerosPares=[]
// for(let i=0;i<numbers.length;i++){
//   if(impar= numbers[i]%2===1){
//     numerosImpares.push(numbers[i])
//   }else if (par= numbers[i]%2===0){
//     numerosPares.push(numbers[i])
//   }else{
//     console.log ("erro")
//   }
// }
  
//   if(numerosImpares.length===0){
//     "nenhum valor ímpar encontrado"
//   }else{
//     console.log("Tem " + numerosImpares.length + " Numeros impares")

//     console.log("Tem " + numerosPares.length + " Numeros pares")
//   }

//Sexto exercicio gabarito

// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

//Exercicio 7
// let menor=numbers[0]
// for(let i=0; i<numbers.length;i++){
//   if(numbers[i]<menor){
//     menor=numbers[i]
//   }
// }
// console.log(menor)

//Exercicio 8


// let numeros=[]

// for(let i=0; i<=25;i++){
//     numeros.push(i)
// }

// console.log(numeros)

//Exercicio 9

// let numeros=[]

// for(let i=0; i<=25;i++){
//     numeros.push(i)
// }
// for (let i=0;i<numeros.length;i++){
//   console.log(numeros[i]/2)
// }


