import { Component } from "react";
import CardSection from "./CardsSection";

export default class ListaNotas extends Component{
    render(){
        return(
            <ul>
               {Array.of("Trabalho", "Trabalho", "Estudos").map(categoria => {
                   return  <li>
                       <div>{categoria}</div>
                   <CardSection />
               </li>
               })}
               
            </ul>
        );
    }
}