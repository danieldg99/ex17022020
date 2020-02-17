import React, { Component } from "react";
import './css/styleDelgomdan.css';
import Image from 'react-image';

class Pruebas extends Component{
    render(){
        return(
            <div class="delgomdan__Ej3">

                <Image src={require('./img/Paisaje1.jpg')} alt="prueba1.jpg" title="Prueba 1" />
                <Image src={require('./img/Paisaje2.jpg')} alt="prueba2.jpg" title="Prueba 2" />
                
            </div>
        )
    }
}

export default Pruebas;