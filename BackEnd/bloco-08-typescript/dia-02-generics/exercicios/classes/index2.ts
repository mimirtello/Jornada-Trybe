// ./index.ts

import PizzaVegetarian from "./PizzaVegetarian";
import PizzaCommon from "./PizzaCommon";
import PizzaSugar from "./PizzaSugar";

const calabresa: PizzaCommon = {
  flavor: "Calabresa",
  slices: 6
}

console.log(calabresa);

const frango: PizzaCommon = {
  flavor: "Frango",
  slices: 8
}

console.log(frango);

const pepperoni: PizzaCommon = {
  flavor: "Pepperoni",
  slices: 6
}

console.log(pepperoni);

const marguerita: PizzaVegetarian = {
  flavor: "Marguerita",
  slices: 8
}

console.log(marguerita);

const palmito: PizzaVegetarian = {
  flavor: "Palmito",
  slices: 8
}

console.log(palmito);

const goiabadaEQueijo: PizzaSugar = {
  flavor: "Goiabada com Queijo",
  slices: 4
}

console.log(goiabadaEQueijo);

// ./index.ts

// import Pizza from "./Pizza";

// const calabresa: Pizza = {
//   flavor: "Calabresa",
//   slices: 8
// }

// console.log(calabresa);

// const marguerita: Pizza = {
//   flavor: "Marguerita",
//   slices: 6
// }

// console.log(marguerita);


// const nutela: Pizza = {
//   flavor: "Nutela",
//   slices: 4
// }

// console.log(nutela);