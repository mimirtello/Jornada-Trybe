const span= document.getElementById("span");
const btn= document.getElementById("btn");

btn.addEventListener("click", clique)
let clickCount=0
function clique(){
  
  span.innerText=clickCount+=1;
  
}