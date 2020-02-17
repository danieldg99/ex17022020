import React, { Component } from "react";
import './css/styleDelgomdan.css';
import Image from 'react-image';

class Distribucion2delgomdan extends Component{
    render(){
        return(
            <div class="delgomdan__Ej2">

                <header class="delgomdan__Ej2header">Cabecera</header>

                <main class="delgomdan__Ej2main"> 
                    <section class="delgomdan__Ej2section">
                        <p>Sección principal</p>
                        <Image src={require('./img/Paisaje1.jpg')} alt="paisaje1.jpg" title="Paisaje 1" />
                        <Image src={require('./img/Paisaje2.jpg')} alt="paisaje2.jpg" title="Paisaje 2" />
                        <Image src={require('./img/Paisaje3.jpg')} alt="paisaje3.jpg" title="Paisaje 3" />
                        <Image src={require('./img/Paisaje4.jpg')} alt="paisaje4.jpg" title="Paisaje 4" />
                        </section>
                    <aside class="delgomdan__Ej2aside">Barra Lateral</aside>
                </main>

                <footer class="delgomdan__Ej2footer">Pie</footer>
            </div>
        )
    }
}

export default Distribucion2delgomdan;