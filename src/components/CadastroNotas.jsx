import { Component } from "react";

class CadastroNotas extends Component{
    render(){
        return(
            <form>
                <input type="text" placeholder="Titulo" />
                <textarea placeholder="Digite sua nota" />
                <button>Adicionar</button>
          </form>
        );
    };
};

export default CadastroNotas;