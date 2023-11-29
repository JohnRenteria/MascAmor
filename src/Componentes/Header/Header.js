import './Header.css';
import React, {useState} from 'react';
import ImgLogo from './Imagenes/Logo.png'
import LoginForm from '../Login/Login';
import ImgLogin from './Imagenes/Login.jpg';

function Header() {
    const [estadoModal1, cambiarModal1] = useState(false);

    return (
        <header className="Encabezado">
            <div className="Imagen-Logo">
                <img src={ImgLogo} className="Imagen1" alt='Logo'/>
            </div>
            <div className="Titulo">
                <h1>MascAmor</h1>
                 <p>Tu Mascota, Tu Hogar</p>
            </div>
            <div className='Login'>
                <img src={ImgLogin} className="Imagen2" alt="Login" />
                <h2 className='h2' onClick={()=> cambiarModal1(!estadoModal1)}>Iniciar Sesión</h2>
                <LoginForm 
                    estado={estadoModal1}
                    cambiarEstado={cambiarModal1}
                    id="login-form"
                >
                    <div className='Contenido'>
                        <h1>Iniciar Sección</h1>
                        <h2><button >Registrarse</button></h2> 
                    </div>
                </LoginForm>  
            </div>
        </header> 
    );
}

export default Header;