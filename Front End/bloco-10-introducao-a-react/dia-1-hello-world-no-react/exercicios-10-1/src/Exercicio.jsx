import React from 'react'
const Task=(value)=>{
    return (
      <li key={value}>{value}</li>
    );
  }
  const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

  class Exercicio extends React.Component{
    render(){
    return(
        <ul className='card'>{tarefas.map(tarefa => Task(tarefa))}</ul>
    )
 }
}

export default Exercicio