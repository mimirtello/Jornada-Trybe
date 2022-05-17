let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let pessoa in names){
    console.log("Ola, " + names[pessoa])
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let carros in car){
  console.log (car[carros])
}