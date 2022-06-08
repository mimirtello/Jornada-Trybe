//Exercicio 01

const fatorial= numero => {
  resultado=1
  for (let index=2; index <= numero; index+=1){
      resultado= resultado * index
  }
  return resultado
}

console.log(fatorial(5));

//Exercicio 02

const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"));

//Exercicio 4

const array = ["Javascript", "HTML", "CSS", ".NET", "SQL"];

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    );

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

    array.forEach((skill, index) =>
    result = `${result} - ${skill}`);

    result = `${result} #goTrybe`;

    return result;
}

console.log(buildSkillsPhrase("Mimi"));