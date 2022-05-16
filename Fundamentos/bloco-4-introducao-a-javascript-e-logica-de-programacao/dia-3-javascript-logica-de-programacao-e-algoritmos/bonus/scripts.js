//Exercicio 01

let n=5
let linha=''
let asterisco="*"
let posicao= n

// for (let i=0;i<n; i+=1){
//   linha=(linha + asterisco)
// }
// for (let i=0;i < n ;i+=1){
//  console.log(linha)
// }

//Exercicio 2 

// for(let i=0;i<n;i+=1){
//   linha = linha + asterisco
//   console.log(linha)

// }

//Exercicio 3

// for(let i=0; i< n; i+=1){
//   for(let coluna=0;coluna<=n; coluna+=1){
//     if (coluna < posicao){
//       linha = linha +' '
//     }else{
//       linha = linha + asterisco
//     }

//   }
//   console.log(linha)
//   linha=''
//   posicao-=1
// }

//Exercicio 4---------------------------------------------------

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };

//Exercicio 5

// n = 7;
// let middle = (n + 1) / 2;
// let controlLeft = middle;
// let controlRight = middle;
// let symbol = '*';

// for (let line = 1; line <= middle; line += 1) {
//   let outputLine = '';
//   for (let col = 1; col <= n; col += 1) {
//     if (col == controlLeft || col == controlRight || line == middle) {
//       outputLine += symbol;
//     } else {
//       outputLine += ' ';
//     }
//   }
//   controlLeft -= 1;
//   controlRight += 1;
//   console.log(outputLine);
// }

// Eexrcicio 6


// let divisors = 1;
// let numberToCheck = 31;

// for (let number = 2; number <= numberToCheck; number += 1) {
//   if (numberToCheck % number === 0) divisors += 1;
// }

// if (divisors === 2) console.log(numberToCheck + ' é primo');
// else console.log(numberToCheck + ' não é primo');
  