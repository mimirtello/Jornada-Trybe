const span= document.getElementById("span");
const btn= document.getElementById("btn");

btn.addEventListener("click", clique)
let clickCount=0
function clique(){
  
  span.innerText=clickCount+=1;
  
}
//Gabarito
// let clickCount = 0;
//   let textToDisplay = document.getElementById("text");

//   document.getElementById("button_test")
//           .addEventListener("click", () => textToDisplay.innerHTML = clickCount += 1);