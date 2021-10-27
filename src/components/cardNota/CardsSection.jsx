import { Component } from "react";

import './styleCard.css';

class CardSection extends Component {
    render(){
        return(
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">Titulo</h3>
                </header>
                <p className="card-nota_texto">Digite sua nota</p>
            </section>
        );
    };
}

export default CardSection;