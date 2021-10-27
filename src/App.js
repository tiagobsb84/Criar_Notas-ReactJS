import React, { Component } from 'react';

import './App.css';
import './index.css';

import CadastroNotas from './components/cadastroNotas/CadastroNotas';
import ListaNotas from './components/criarNotas/ListaNotas';


class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <CadastroNotas />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
