import { Link } from 'react-router-dom';
import './calificacion.css';

const Calificacion = ({ titulo, numero }) => {

    return (
        <>
            <div className="CalContenedor">
                {
                    (titulo === "Mobileye") ? <h3>Tecnologia Mobileye ADAS</h3> :
                        <h3>Tecnologia Cipia DMS </h3>
                }
                <div className="CalContenerdorNumero">
                    <h4>Calificacion</h4>
                    <h2>{numero}</h2>
                    {
                        (numero == 0) ?
                            <>
                                <svg width="67" height="67" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.8 11.88a.6.6 0 0 1 .6-.6h13.2a.6.6 0 1 1 0 1.2H5.4a.6.6 0 0 1-.6-.6Z" clip-rule="evenodd"></path>
                                </svg>

                            </>

                            :
                            (numero > 70) ?
                                <svg width="67" height="67" fill="none" stroke="#42b710" strokeLinecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071A9.969 9.969 0 0 0 12 2a9.969 9.969 0 0 0-7.071 2.929A9.969 9.969 0 0 0 2 12a9.969 9.969 0 0 0 2.929 7.071A9.969 9.969 0 0 0 12 22Z"></path>
                                    <path d="m8 12 3 3 6-6"></path>
                                </svg>
                                :
                                <svg width="67" height="67" fill="none" stroke="#c70000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path>
                                    <path d="m16.5 7.5-9 9"></path>
                                    <path d="m7.5 7.5 9 9"></path>
                                </svg>

                    }
                </div>
                <div className="CalContenedorBoton">
                    {titulo === "Mobileye" ?
                        (
                            <Link className='Button' to='/videoM'>Comenzar cuestionario</Link>
                        ) :
                        (
                            <Link className='Button' to='/videoC'>Comenzar cuestionario</Link>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Calificacion;
