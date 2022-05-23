function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

//Exercicio 01
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


function criarDiasDoMes(){
  let ul= document.querySelector('#days')
  for(let index=0; index < dezDaysList.length; index +=1){
    const dias = dezDaysList[index]
    const diasListItem= document.createElement('li')

    if(dias===24 | dias===31){
      diasListItem.className='day holiday'
      diasListItem.innerHTML=dias
      ul.appendChild(diasListItem)
    }else if (dias===4 | dias===11 | dias===18){
      diasListItem.className='day friday'
      diasListItem.innerHTML=dias
      ul.appendChild(diasListItem)
    }else if (dias===25){
      diasListItem.className='day holiday friday'
      diasListItem.innerHTML=dias
      ul.appendChild(diasListItem)
    }else{
      diasListItem.className='day'
      diasListItem.innerHTML=dias
      ul.appendChild(diasListItem)
    }

  }
}
criarDiasDoMes();

//Exercicio 02
let botaoContainer=document.querySelector(".buttons-container")
function criaBotao(nomeBotao){
  let botao=document.createElement('button')
   botao.id="btn-holiday"
   botao.innerText=nomeBotao
   botaoContainer.appendChild(botao)

}
criaBotao("Feriados")
botaoFeriado= document.querySelector("#btn-holiday")

botaoFeriado.addEventListener('click', mudaCor)

//Exercicio 03

let diasListItemHolyday= document.querySelectorAll('.holiday')
function mudaCor(){
  for (let index=0; index <diasListItemHolyday.length; index+=1) {
    if(diasListItemHolyday[index].style.backgroundColor==='red'){
     diasListItemHolyday[index].style.backgroundColor='rgb(238,238,238)'
    }else{
      diasListItemHolyday[index].style.backgroundColor='red'
    } 
  }   
}

//Exercicio 04

function criaBotaoNome(string){
  let botao= document.createElement('button')
  botao.id="btn-friday"
  divPai= document.querySelector('.buttons-container')
  divPai.appendChild(botao)
  botao.innerText=string

}

criaBotaoNome("Sexta-Feira")

//Exercicio 05
let botao= document.querySelector("#btn-friday")
botao.addEventListener('click', sextaFeira)


function sextaFeira(){
 
 let sextas= document.querySelectorAll('.friday')
 let arraySextas = [ '4', '11', '18', '25' ];
  let texto="Sexta!"
    for(let index=0; index < sextas.length; index+=1){
     
    if (sextas[index].innerHTML!=texto){
        sextas[index].innerHTML=texto
    }else{
      sextas[index].innerHTML=arraySextas[index]
    }
  }
}

//Exercicio 06
let dia=document.querySelector('#days')
dia.addEventListener('mouseover', zoomIn)
dia.addEventListener('mouseout', zoomOut)

function zoomIn(event){

  event.target.style.fontSize="30px"
}

function zoomOut(event){

 event.target.style.fontSize="20px"
}

// Exercicio 07

function tarefaPersonalizada(string){
    let tarefas= document.querySelector(".my-tasks")
  
    let tarefaNome=document.createElement('span')
    tarefaNome.innerText=string

    tarefas.appendChild(tarefaNome)
}
tarefaPersonalizada("Projeto:")

//Exercicio 08

function legendaCor(cor){
  let elementoCor= document.querySelector(".my-tasks")
  let elemento=document.createElement('div')
  elemento.className='task'
  elemento.style.backgroundColor=cor
  elementoCor.appendChild(elemento)

}

legendaCor('green')

//Exercicio 09 (gabarito)

function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

setTaskClass();

//Exercicio 10 (gabarito)
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor('green');

//Bonus

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};

addNewTask();



