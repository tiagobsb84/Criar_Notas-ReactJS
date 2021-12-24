import { Component } from "react";

import "./styleLista.css";

import CardSection from "../cardNota/CardsSection";

export default class ListaNotas extends Component{
    render(){
        return(
            <ul className="lista-notas">
               {this.props.notas.map((nota, index) => {
                   return  (
                    <li className="lista-notas_item" key={index}>
                        <CardSection 
                            indice = {index}
                            apagaNotas={this.props.apagaNotas}
                            titulo={nota.titulo} 
                            texto={nota.texto}
                        />
                    </li>
                   );
               })}        
            </ul>
        );
    }
}