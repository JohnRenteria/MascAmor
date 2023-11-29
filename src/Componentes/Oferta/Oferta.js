import './Oferta.css';
import React from 'react';
import ImgOferta from '../Oferta/Imagenes/Oferta.jpg';

function Oferta(){
    return(
        <div className="Promocion">
            <div className="Publicidad">
                <h2>Gran Promoción Navideña</h2>
                <p>Atendemos Tus Mascotas Como En Su Hogar Y Los Cuidamos Como En Tu Hogar </p>
                <div className="Boton-Oferta">
                    <h1>Aplicar Oferta</h1>
                </div>
            </div>
            <div className="Imagen-Oferta">
                <img src={ImgOferta} className="Imagen3" alt='Oferta'/>
            </div>
        </div>
    );
}

export default Oferta;