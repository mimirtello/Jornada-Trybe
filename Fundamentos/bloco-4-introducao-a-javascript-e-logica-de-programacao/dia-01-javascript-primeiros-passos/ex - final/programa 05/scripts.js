const valor01=80
const valor02=900
const valor03=10

let somaDosAngulos= valor01 +valor02 + valor03

let angulosPositivos= valor01>0 && valor02>0 && valor03 >0

if (somaDosAngulos ===180 && angulosPositivos === true){
  console.log("true")
}else if (somaDosAngulos<180 || somaDosAngulos>180){
  console.log("false")
}else if (angulosPositivos===false){
  console.log("erro: angulo invalido")
}
 
   