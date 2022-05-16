// // Fatorial de 10
let fatorial=1
for(let i=10;i>0;i-=1){
  fatorial*=i
}

console.log(fatorial)

//inverter palavra

let palavra='tryber'
let reverso=''

for(let i=0;i < palavra.length;i+=1){
  reverso +=palavra[palavra.length-1-i]
}

console.log(reverso)

//outra solução

reverso= palavra.split('').reverse().join('')

console.log(reverso)

//Maior e menor palavra do array

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra=array[0]
let menorPalavra=array[0]

for(let i=0; i<array.length;i+=1){
  if(array[i].length>maiorPalavra.length){
    maiorPalavra = array[i]
  }
}

for(let i=0; i<array.length;i+=1){
  if(array[i].length<menorPalavra.length){
    menorPalavra = array[i]
  }
}

console.log(maiorPalavra)
console.log(menorPalavra)

// Maior numero primo entre 0 e 50

let biggestPrimeNumber = 0;

for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);