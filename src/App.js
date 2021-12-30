import React, { Component } from 'react';

import './App.css';
import './index.css';

import CadastroNotas from './components/cadastroNotas/CadastroNotas';
import ListaNotas from './components/criarNotas/ListaNotas';
import ListaDeCategorias from './components/ListaCategorias';

class App extends Component {

  constructor() {
    super();
    this.state = {
      notas: [],
      categorias: ["Música", "Games"]
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novaArrayLista = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novaArrayLista
    }
    this.setState(novoEstado);
  }

  adicionarCategoria(nomeCategoria){
    const novoArrayCategoria = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias: novoArrayCategoria};
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
        <CadastroNotas 
          categorias={this.state.categorias}
          criarNota={this.criarNota.bind(this)} 
        />
        <main className='conteudo-principal'>
          <ListaDeCategorias 
            adicionarCategoria={this.adicionarCategoria.bind(this)}
            categorias={this.state.categorias} 
          />
          <ListaNotas
            apagaNotas={this.deletarNotas.bind(this)} 
            notas={this.state.notas} 
          />
        </main>
      </section>
    );
  }
}

export default App;
