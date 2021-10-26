import React, { Component } from 'react';
import CadastroNotas from './components/CadastroNotas';
import ListaNotas from './components/CriarNota';

class App extends Component {
  render() {
    return (
      <section>
        <CadastroNotas />
        <ListaNotas />
      </section>
    );
  }
}

export default App;
