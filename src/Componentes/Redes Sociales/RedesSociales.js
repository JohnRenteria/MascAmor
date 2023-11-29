import './RedesSociales.css';
import React from 'react';
import ImgFacebook from '../Redes Sociales/Imagenes/Facebook.png';
import ImgInstagram from'../Redes Sociales/Imagenes/Intagram.jpg';
import ImgTwitter from '../Redes Sociales/Imagenes/Twitter.jpeg';
import ImgWhatsapp from '../Redes Sociales/Imagenes/Whatsapp.png';

function RedesSociales(){
    return(
        <div className="Redes-Sociales" id="redes-sociales">
            <div className="Titulo-Redes-Sociales">
                <h2>Redes Sociales</h2>
            </div>
            <div className="Logo-Redes-Sociales">
                <img src={ImgFacebook} className="Imagen5" alt='Facebook'/>
                <img src={ImgInstagram} className="Imagen5" alt='Instagram'/>
                <img src={ImgTwitter} className="Imagen5" alt='Twitter'/>
                <img src={ImgWhatsapp} className="Imagen5" alt='Whatsapp'/>  
            </div>
        </div>
    );
}

export default RedesSociales;