let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log("Bem vinda," + info.personagem)

for(key in info){
  console.log(key)
}

for(key in info){
  console.log(info[key])
}

let info2 = {
  personagem: 'Margarida e Tio Patinhas',
  origem: "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas",
  recorrente: 'Sim'
};

for(key in info2){
  console.log(info2[key])
}

for (let properties in info) {
  if (
    properties === 'recorrente' &&
    info[properties] === 'Sim' &&
    info2[properties] === 'Sim'
  ) {
    console.log('Ambos recorrentes');
  } else {
    console.log(info[properties] + ' e ' + info2[properties]);
  }
}

//Eexrcicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    }
  ],
};

console.log("O livro favorito de "+ leitor.nome + ' ' +  leitor.sobrenome +" se chama " + leitor['livrosFavoritos'][0]['titulo'] +".")

console.log("julia tem " + leitor.livrosFavoritos.length + " livros favoritos")

