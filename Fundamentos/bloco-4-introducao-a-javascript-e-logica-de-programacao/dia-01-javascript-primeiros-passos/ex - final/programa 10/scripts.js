const custoDoProduto=60
const valorDeVenda=100

if(custoDoProduto>=0 && valorDeVenda>=0){
let imposto= (custoDoProduto*20)/100 
let valorCustoTotal= custoDoProduto + imposto
let lucro = (valorDeVenda - valorCustoTotal )* 1000

console.log(lucro)
}else{
  console.log("Valores nao podem ser negativos")
}

