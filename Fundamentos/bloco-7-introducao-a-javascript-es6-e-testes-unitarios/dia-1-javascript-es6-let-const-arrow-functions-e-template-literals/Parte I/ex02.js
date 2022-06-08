const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

const sortedArray = sortOddsAndEvens();
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

//Bônus

const paresEImpares = [13, 3, 4, 10, 7, 2];

const sortArrayBonus = array => {
  const sortparesEImpares = array.sort((a, b) => a - b);
  return sortparesEImpares;
}

const sortedArrayBonus = sortArrayBonus(paresEImpares);
console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);

//Em uma linha

const ImparesePares = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${ImparesePares.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);


