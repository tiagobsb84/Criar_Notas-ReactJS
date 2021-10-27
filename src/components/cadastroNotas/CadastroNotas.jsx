import { Component } from "react";

import "./Style.css";

class CadastroNotas extends Component{
    render(){
        return(
            <form className="form-cadastro">
                <input type="text" placeholder="Titulo" className="form-cadastro-input"/>
                <textarea rows={15} placeholder="Digite sua nota..." className="form-cadastro_input form-cadastro_textarea" />
                <button className="form-cadastro_btn form-cadastro_submit">Criar Nota</button>
          </form>
        );
    };
};

export default CadastroNotas;