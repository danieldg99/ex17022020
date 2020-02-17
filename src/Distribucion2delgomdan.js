import React, { Component } from "react";
import './css/styleDelgomdan.css';
import Image from 'react-image';

class Distribucion2delgomdan extends Component{
    render(){
        return(
            <div className="delgomdan__Ej3">

                <header className="delgomdan__Ej3header">Cabecera</header>

                <main className="delgomdan__Ej3main"> 
                    <section className="delgomdan__Ej3section">
                        <p>Sección principal</p>
                        <Image src={require('./img/Paisaje1.jpg')} alt="paisaje1.jpg" title="Paisaje 1" />
                        <Image src={require('./img/Paisaje2.jpg')} alt="paisaje2.jpg" title="Paisaje 2" />
                        <Image src={require('./img/Paisaje3.jpg')} alt="paisaje3.jpg" title="Paisaje 3" />
                        <Image src={require('./img/Paisaje4.jpg')} alt="paisaje4.jpg" title="Paisaje 4" />
                        </section>
                    <aside className="delgomdan__Ej3aside">Barra Lateral</aside>
                </main>

                <footer className="delgomdan__Ej3footer">Pie</footer>
            </div>
        )
    }
}

export default Distribucion2delgomdan;