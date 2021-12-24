import { Component } from "react";

import './styleCard.css';

import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";


class CardSection extends Component {

    apagar() {
        const indice = this.props.indice;
        this.props.apagaNotas(indice);
    }

    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <DeleteSVG onClick={this.apagar.bind(this)}/>
                </header>
                <p className="card-nota_texto">{this.props.texto}</p>
            </section>
        );
    };
}

export default CardSection;