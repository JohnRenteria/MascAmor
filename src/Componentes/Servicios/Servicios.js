import './Servicios.css';
import React from 'react';
import ImgVeterinaria from '../Servicios/Imagenes/Veterinaria.jpg';
import ImgPeluqueria from '../Servicios/Imagenes/Peluqueria.jpg';
import ImgAdopcion from '../Servicios/Imagenes/Adopcion.jpeg';

function Servicios(){
    return(
        <div className="Servicios">
            <div className="Veterinaria">
                <h2>Veterinaria</h2>
                <img src={ImgVeterinaria} className="Imagen4" alt='Veterinaria'/>
                <div className="Button">
                    <button>Agendar Cita</button>
                    <button>Ubicación</button>
                </div>
            </div>
           
            <div className="Peluqueria">
                <h2>Peluqueria</h2>
                <img src={ImgPeluqueria} class="Imagen4" alt='Peluqueria'/>
                <div className="Button">
                    <button>Agendar Cita</button>
                    <button>Ubicación</button>
                </div>
            </div>

            <div className="Adopcion">
                <h2>Adopcion</h2>
                <img src={ImgAdopcion} className="Imagen4" alt='Adopción'/>
                <button>Lista de Adopción</button>
            </div>
        </div>
    );
}

export default Servicios;