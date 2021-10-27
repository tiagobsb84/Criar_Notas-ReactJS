import { Component } from "react";

import "./Style.css";

class CadastroNotas extends Component{
    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    _handleMudancaTexto(evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
    }


    _handleMudancaTitulo(evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
    }

    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo, this.texto);
    }

    render(){
        return(
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    className="form-cadastro-input" 
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                    rows={15} 
                    placeholder="Digite sua nota..." 
                    className="form-cadastro_input form-cadastro_textarea" 
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_btn form-cadastro_submit">Criar Nota</button>
          </form>
        );
    };
};

export default CadastroNotas;