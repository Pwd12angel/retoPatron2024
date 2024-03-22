import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import './consultaC.css'
import { useNavigate } from 'react-router-dom';
import Footer from '../../footer/footer';
import Swal from 'sweetalert';

const CuestionarioC = () => {


    const { preguntas,
        pregunta,
        caliG,
        existeCalificacionUsuario,
        consultaCipia,
        caliFiCipia,
        actualizarCali } = useAuth();

    const navigate = useNavigate();

    // Estados
    const [preguntaActual, setPreguntaActual] = useState(0)
    const [puntuacion, setPuntuacion] = useState(0)
    const [terminado, setTerminado] = useState(false)





    useEffect(() => {
        preguntas();
        consultaCipia()
    }, [])

    // funcion para pasar pregunta
    function siguientePregunta(valor, e) {


        //cambiar a la siguente pregunta 
        // puntaje si es correcto aunmenta el estado
        if (valor == true) {
            document.getElementById('palomitaPre').style.display = "block"
        } else if (valor == false) {
            document.getElementById('equisPre').style.display = "block"
        }

        if (valor) setPuntuacion(puntuacion + 1);

        setTimeout(() => {
            if (preguntaActual === pregunta[2].preguntas.length - 1) {
                setTerminado(true);
            } else {
                // sumamos uno al estado para que cambie en el map
                setPreguntaActual(preguntaActual + 1);
                document.getElementById('equisPre').style.display = "none"
                document.getElementById('palomitaPre').style.display = "none"
            }
        }, 1000)



    }
    const cali = (puntuacion * 100) / 26;

    if (terminado) return (
        <div className="Pre2Contenedor">
            <div className="Per2Calificacion">
                <h1 className='Pre2Titulo' >Resultado del cuestionario</h1>
                <div className="Pre2ContenedorInterno">
                    <h2>Tu calificacion es {cali.toFixed() + "%"} de 100% </h2>
                    {
                        (cali.toFixed() < 70) ?
                            <>
                                <h3 className="Pre2Reprobado">Calificación Reprobatoria</h3>
                                <svg width="67" height="67" fill="#c70000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM8.693 7.808a.626.626 0 1 0-.885.885L11.116 12l-3.308 3.307a.626.626 0 1 0 .885.885L12 12.884l3.307 3.308a.627.627 0 0 0 .885-.885L12.884 12l3.308-3.307a.627.627 0 0 0-.885-.885L12 11.116 8.693 7.808Z"></path>
                                </svg>
                            </>
                            :
                            <>
                                <h3 className="Pre2Aprobado">Calificación Aprobatoria</h3>
                                <svg width="67" height="67" fill="#42b710" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v15A2.5 2.5 0 0 0 4.5 22h15a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 19.5 2h-15Zm12.538 6.213a.938.938 0 0 1 .013 1.312l-4.99 6.237a.937.937 0 0 1-1.35.025L7.405 12.48a.937.937 0 1 1 1.325-1.325l2.617 2.616L15.69 8.24a.936.936 0 0 1 1.35-.027h-.002Z"></path>
                                </svg>
                            </>
                    }
                    <h3  >Numero de respuestas correctas {puntuacion} de 26</h3>
                    <button onClick={() => dataCuestionarioC(cali.toFixed())}>Finalizar</button>
                </div>

            </div>
        </div>
    )



    function dataCuestionarioC(calificacion) {

        const entero = parseInt(calificacion);

        console.log(existeCalificacionUsuario);

        if (existeCalificacionUsuario == true) {
            const intento = caliFiCipia[0].intento + 1;
            const dataCal = {
                id: caliFiCipia[0]._id,
                calificacion: entero,
                intento: intento

            }

            Swal({
                title: "Cuestionario enviado",
                text: "Gracias por contestar",
                icon: "success",
                button: false,
                timer: 1900
            }).then(() => {
                actualizarCali(dataCal).then(() => {
                    navigate('/resultados');
                })
            })



        } else {

            const intento = 1;
            const data = {
                "titulo": "Cipia",
                "calificacion": entero,
                "intento": intento
            }

            Swal({
                title: "Cuestionario enviado",
                text: "Gracias por contestar",
                icon: "success",
                button: false,
                timer: 1900
            }).then(() => {
                caliG(data).then(() => {
                    navigate('/resultados')
                })
            })


        }




    }
    var cont = 0;
    return (
        <>
            <div className="Pre2Contenedor">
                <h1>Cuestionario Cipia</h1>

                <div className="Pre2Pregunta">
                    {pregunta.length != 0 && pregunta[2].preguntas != undefined ?
                        <div className='Pre2PreguntaSub'>

                            <div className='Pre2Contenedor1'>
                                <div className='Pre2Verifica'>
                                    <h2>{pregunta[2].preguntas[preguntaActual].titulo}</h2>
                                    <div>

                                        <svg id='equisPre' display="none" width="40px" height="67" fill="none" stroke="red" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"></path>
                                            <path d="m16.5 7.5-9 9"></path>
                                            <path d="m7.5 7.5 9 9"></path>
                                        </svg>
                                        <svg id='palomitaPre' display="none" width="40px" height="67" fill="none" stroke="green" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22a9.97 9.97 0 0 0 7.071-2.929A9.97 9.97 0 0 0 22 12a9.969 9.969 0 0 0-2.929-7.071A9.969 9.969 0 0 0 12 2a9.969 9.969 0 0 0-7.071 2.929A9.969 9.969 0 0 0 2 12a9.969 9.969 0 0 0 2.929 7.071A9.969 9.969 0 0 0 12 22Z"></path>
                                            <path d="m8 12 3 3 6-6"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="Pre2Respuestas">

                                    {

                                        pregunta[2].preguntas[preguntaActual].respuestas.map((resP) => (
                                            <button className='Pre2ButtonRespuesta' onClick={(e) => siguientePregunta(resP.valor, e)} key={resP.resp}>{resP.resp}</button>
                                        )


                                        )
                                    }

                                </div>

                            </div>
                            <img className='Pre2Img' src={pregunta[2].preguntas[preguntaActual].img} alt="" />


                        </div>

                        : null}

                </div>
                <div className="Pre2Contedor">
                    <span>Pregunta {preguntaActual + 1} de 26 </span>
                </div>

                {
                    console.log(puntuacion)
                }
            </div>
            <Footer />
        </>
    )
}

export default CuestionarioC;