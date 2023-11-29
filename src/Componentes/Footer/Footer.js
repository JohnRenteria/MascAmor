import './Footer.css';
import React,{ReactDOM} from 'react';
import RedesSociales from '../Redes Sociales/RedesSociales';

function Footer() {
    return(
        <footer className="Pie-de-Pagina">
            <div className="Informacion">
                <h1>Contactenos al:</h1>
                <p>Dirección: Calle 30 Avenida Aeropuerto</p>
                <p>Ciudad: Quibdó, Chocó</p>
                <p>Correo Electronico: MascAmorQuibdo@gmail.com</p>
                <p>Telefono: 352 515 54 52 - (604) 624 15 45</p>
            </div>
            <RedesSociales id="redes-sociales"/>
        </footer>
    );
}

export default Footer;