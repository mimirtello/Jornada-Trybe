const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1
console.log('Exercicio 1')

const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

//Exercicio 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('Exercicio 2')
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

//Exercicio 3 -Crie uma função para mostrar o tamanho de um objeto.
console.log('Exercicio 3')
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

//Exercicio 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
console.log('Exercicio 4')
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

//Exercicio 5 -
console.log('Exercicio 5')
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//Exercicio 6 - 
console.log('Exercicio 6')
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

//Exercicio 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
console.log('Exercicio 7')
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

//Exercicio 8 - Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log('Exercicio 8')
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));

//Bonus


console.log('Bonus')
//Exercicio 1 - Quantos estudantes assistiram aula de matematica

const getNumberOfStudentsMath = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    if(obj[array[index]].materia === 'Matemática'){
    total += obj[array[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudents(allLessons));

//Exercicio 2 - Função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (index in array) {
    if (array[index].professor === name) {
      allLessons.push(array[index].materia)
      allStudent += array[index].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara'));