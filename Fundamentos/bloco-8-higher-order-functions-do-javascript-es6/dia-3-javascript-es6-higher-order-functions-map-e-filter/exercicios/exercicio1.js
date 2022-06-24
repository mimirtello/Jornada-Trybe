const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// // Exercicio 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

function formatedBookNames() {
  return books.map((elemento)=>`${elemento.name} - ${elemento.genre} - ${elemento.author.name}`)
}
console.log(formatedBookNames(books))

// //Exercicio 2 -  Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge() {
 const novoObjeto= books.map((elemento)=>{
      
    const objeto={}
    const nascimento=elemento.author.birthYear
    const idadeLancamento= elemento.releaseYear
    objeto.age= idadeLancamento - nascimento 
    objeto.author=elemento.author.name
    return objeto
  })
  return novoObjeto.sort ((a,b)=> a.age - b.age)
 
    
}

console.log(nameAndAge())

// //Exercicio 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction() {
  return books.filter((elemento)=>elemento.genre==='Fantasia' || elemento.genre==='Ficção Científica')
}

console.log(fantasyOrScienceFiction())


// //Exercicio 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

function oldBooksOrdered() {
  
  return books.filter((elemento)=>(
  elemento.releaseYear < 2022-60
  ))
  .sort((a,b)=> a.releaseYear - b.releaseYear)
}
console.log(oldBooksOrdered())

//Exercicio 5 -  Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors() {
  const wantedGenres = ['Fantasia', 'Ficção Científica'];
  return books
    .filter((book) => wantedGenres.includes(book.genre))
    .map((book) => book.author.name).sort();
}

console.log(fantasyOrScienceFictionAuthors())


//Exercicio 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// const currentYear = new Date().getFullYear();
function oldBooks(){
  return books
  .filter((book)=>book.releaseYear < 2022-60)
  .map((book) => book.name)
}

console.log(oldBooks())

//Exercicio 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName() {

    return books.find((book) => (
      book.author.name.split(' ')
        .filter((word) => word.endsWith('.')).length === 3
    )).name;
}

console.log(authorWith3DotsOnName())