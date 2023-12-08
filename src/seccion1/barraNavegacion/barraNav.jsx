import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import './barraNav.css'

const BarraNav = () => {

    const { isAutenticado, cerrar, user } = useAuth();

    return (
        <>
            <div className="navGeneral">
                <div className="navContenedorDiv">
                    <img src="src\assets\image_Nav\logoPatron.png" alt="Logo patron" />
                </div>
                {isAutenticado ? (
                    <h3> Bienvenido {user.nombre}</h3>
                ) :
                    (
                        <h3> </h3>
                    )
                }


                <div className="navLista">


                    {isAutenticado ? (
                        <>

                            <li> <Link to="/" onClick={() => { cerrar(); }} >Salir <svg width="25px" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.996 3H3v18h9"></path>
                                <path d="M16.5 16.5 21 12l-4.5-4.5"></path>
                                <path d="M8 11.996h13"></path>
                            </svg>
                            </Link>

                            </li>
                        </>
                    ) : (
                        <>
                            {/* <li>Requisitos</li>
                            <li>Registro</li>
                            <li>Fechas</li> */}
                            <h3>!No te pierdas esta gran oportunidad!</h3>

                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default BarraNav;