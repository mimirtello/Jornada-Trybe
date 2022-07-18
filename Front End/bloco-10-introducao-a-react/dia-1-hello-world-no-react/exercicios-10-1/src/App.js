import React from 'react';
import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import Exercicio from './Exercicio';



class App extends React.Component {
  render() {
    return (
      <div> 
      <Header></Header>
      <Exercicio></Exercicio>
      <Content></Content>
      <Footer></Footer>
      </div>
     
     
    );
  }
}

export default App;
