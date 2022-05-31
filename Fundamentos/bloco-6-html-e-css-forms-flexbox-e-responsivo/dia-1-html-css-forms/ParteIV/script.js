// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', eventoLink)

function eventoLink(event){
  event.preventDefault()
}

INPUT_CHECKBOX.addEventListener('click', eventoCheckbox)

function eventoCheckbox(event){
  event.preventDefault()
}

INPUT_TEXT.addEventListener('keypress', eventoKey)

function eventoKey(event){

  const character=event.key
  
  if(character!=='a'){
    event.preventDefault()
  }

}
