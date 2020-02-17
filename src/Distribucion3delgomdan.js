import React, { Component } from "react";
import './css/styleDelgomdan.css';
import Image from 'react-image';

class Distribucion3delgomdan extends Component{
    render(){
        return(
            <div class="delgomdan__Ej3">

                <a href="./img/Paisaje1.jpg" target="_blank"><Image src={require('./img/Paisaje1.jpg')} alt="paisaje1.jpg" title="Paisaje 1" /></a>
                <a href="./img/Paisaje2.jpg" target="_blank"><Image src={require('./img/Paisaje2.jpg')} alt="paisaje2.jpg" title="Paisaje 2" /></a>
                <a href="./img/Paisaje3.jpg" target="_blank"><Image src={require('./img/Paisaje3.jpg')} alt="paisaje3.jpg" title="Paisaje 3" /></a>
                <a href="./img/Paisaje4.jpg" target="_blank"><Image src={require('./img/Paisaje4.jpg')} alt="paisaje4.jpg" title="Paisaje 4" /></a>
                <a href="./img/Paisaje5.jpg" target="_blank"><Image src={require('./img/Paisaje5.jpg')} alt="paisaje5.jpg" title="Paisaje 5" /></a>
                <a href="./img/Paisaje6.jpg" target="_blank"><Image src={require('./img/Paisaje6.jpg')} alt="paisaje6.jpg" title="Paisaje 6" /></a>
                <a href="./img/Paisaje7.jpg" target="_blank"><Image src={require('./img/Paisaje7.jpg')} alt="paisaje7.jpg" title="Paisaje 7" /></a>
                <a href="./img/Paisaje8.jpg" target="_blank"><Image src={require('./img/Paisaje8.jpg')} alt="paisaje8.jpg" title="Paisaje 8" /></a>

            </div>
        )
    }
}

export default Distribucion3delgomdan;