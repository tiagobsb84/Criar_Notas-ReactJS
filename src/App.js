import React, { Component } from 'react';

import './App.css';
import './index.css';

import CadastroNotas from './components/cadastroNotas/CadastroNotas';
import ListaNotas from './components/criarNotas/ListaNotas';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novaArrayLista = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novaArrayLista
    }
    this.setState(novoEstado);
  }

  deletarNotas(index){
    //pega o estado do array de notas.
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    //esse vai setar um novo array de notas.
    this.setState({notas:arrayNotas})
  }

  render() {
    return (
      <section className="conteudo">
        <CadastroNotas criarNota={this.criarNota.bind(this)} />
        <ListaNotas
          apagaNotas={this.deletarNotas.bind(this)} 
          notas={this.state.notas} 
        />
      </section>
    );
  }
}

export default App;
