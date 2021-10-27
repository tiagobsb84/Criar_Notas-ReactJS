import { Component } from "react";

import "./styleLista.css";

import CardSection from "../cardNota/CardsSection";

export default class ListaNotas extends Component{
    render(){
        return(
            <ul className="lista-notas">
               {Array.of("Trabalho", "Trabalho", "Estudos").map((index) => {
                   return  <li key={index} className="lista-notas_item">
                   <CardSection />
               </li>
               })}
               
            </ul>
        );
    }
}