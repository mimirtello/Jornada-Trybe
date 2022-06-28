// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Uva', 'Morango', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Creme de Leite', 'Leite condensado', 'Mel'];

const fruitSalad = (fruit, additional) => {
  return [...fruit,...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));