import React, { Component } from 'react';
import logo from './c3po.svg';
import './App.css';

class App extends Component {
	
   constructor(){
    super();
    this.state={
      data:[],
    }
  }

  random(){
    this.componentDidMount();
  }

  componentDidMount()
  { 
    URL = 'https://swapi.co/api/planets/' + (Math.floor(Math.random() * (61 - 1)) + 1);
    fetch(URL).
    then(Response=>Response.json()). 
    then(findresponse => 
    {
      console.log(findresponse)
      this.setState({
        data: findresponse,
        qtd_films: findresponse.films.length,
      });
    })
  }		
	
  render() {
    return (
    <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">C3PO!</h1> 
            
          </header>
         <p><text className="intro">
         Descubra mais sobre os planetas de Star Wars com C3PO, um dos dróides mais inteligentes da Galáxia.
         </text></p>

      <div class="container">
      <div class="box" >			
          <table>
            <tr>
              <h1 class="tituloplaneta">{this.state.data.name}</h1>
            </tr>
            <tr class="fontedados">
              <p class="espaco"><b>POPULAÇÃO:</b> {this.state.data.population}</p>
              <p class="espaco"><b>CLIMA:</b> {this.state.data.climate}</p>
              <p class="espaco"><b>TERRENO:</b> {this.state.data.terrain}</p>
            </tr>
            <tr class="fontefeatured">
              <p>Aparece em {this.state.qtd_films} filme(s)</p>
            </tr>        
          </table>
      </div>			
      </div>   

      <button class="botao" onClick={() =>  this.random()}>  
            PRÓXIMO PLANETA
      </button>

     </div>
    );
  }
}

export default App;
