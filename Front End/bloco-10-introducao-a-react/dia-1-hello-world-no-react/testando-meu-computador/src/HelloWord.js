import './App.css';
import React from 'react'

class HelloWord extends React.Component {
  render(){
    return (
      <div>
    <span className="Hello">Olá, Mundo!</span>
    <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}</h2>
    
    </div>
    )
    
  } 
}


export default HelloWord;