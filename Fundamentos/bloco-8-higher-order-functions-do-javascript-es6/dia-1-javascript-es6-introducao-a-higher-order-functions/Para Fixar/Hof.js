const acordando = () =>'Acordando!!'
const tomarCafe = () => 'Bora tomar café!!'
const dormir = () => 'Partiu dormir!!'

const doingThings =(func)=>{
  const result = func();
  console.log(result)
}

doingThings(acordando);
doingThings(tomarCafe);
doingThings(dormir);