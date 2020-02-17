import React, { Component } from "react";
import './css/styleDelgomdan.css';
import Image from 'react-image';

class Pruebas extends Component{
    render(){
        return(
            <div className="delgomdan__Ej5">

                <Image src={require('./img/Prueba1.jpg')} alt="prueba1.jpg" title="Prueba 1" />
                <Image src={require('./img/Prueba2.jpg')} alt="prueba2.jpg" title="Prueba 2" />
                
            </div>
        )
    }
}

export default Pruebas;