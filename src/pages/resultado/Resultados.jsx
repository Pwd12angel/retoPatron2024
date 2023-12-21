import { useEffect, useState } from "react"
import Calificacion from "../../calificaciones/Calificacion"
import './cuestionario.css'
import { useAuth } from "../../context/AuthContext"
import Footer from "../../footer/footer"


const Resultado = () => {


    const { consultaCipia, caliFiCipia, consultaMobileye, caliFi } = useAuth();


    // useEffect(() => {
    //     consultaCipia();
    //     consultaMobileye();
    // }, [])

    consultaCipia();
    consultaMobileye();

    console.log(caliFi.data);

    return (
        <>

            <div className="CuesTitulo">

                <div className="CuestContenedorGeneral">

                    <div className="CuesContenedorIntentos">
                        <div className="TituloResultados">
                            <h1 className="CuesTituloInterno">Tus Resultados</h1>
                            <svg width="67" height="67" fill="#000000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.12 15.12a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v3.6a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2v-3.6Zm6-4.8a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v8.4a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2v-8.4Zm6-6a1.2 1.2 0 0 1 1.2-1.2h2.4a1.2 1.2 0 0 1 1.2 1.2v14.4a1.2 1.2 0 0 1-1.2 1.2h-2.4a1.2 1.2 0 0 1-1.2-1.2V4.32Z"></path>
                            </svg>
                        </div>
                        <h2>Visualiza el número de intentos por tecnología</h2>
                        <div className="CuesIntentos">
                            <div className="CuesIntentoM">
                                <h4> Tecnologia Mobileye ADAS  </h4>
                                <p>Intentos {caliFi.length != 0 && caliFi[0].calificacion != "undefined" ? caliFi[0].intento : 0}</p>

                            </div>
                            <div className="CuesIntentoC">
                                <h4> Tecnologia Cipia DMS </h4>
                                <p>Intentos {caliFiCipia.length != 0 && caliFiCipia[0].calificacion != "undefined" ? caliFiCipia[0].intento : 0}</p>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="CuesContenedor">


                    {
                        (caliFi.data === "No encontrado") ? (

                            <Calificacion titulo="Mobileye" numero={0} />

                        ) :
                            (
                                <Calificacion
                                    titulo={caliFi.length != 0 && caliFi[0].titulo != "undefined" ? caliFi[0].titulo : "Mobileye"}
                                    numero={caliFi.length != 0 && caliFi[0].calificacion != "undefined" ? caliFi[0].calificacion : 0}
                                />

                            )
                    }



                    {
                        (caliFiCipia.data === "No encontrado") ? (

                            <Calificacion titulo="Cipia" numero={0} />
                        ) :
                            (
                                <Calificacion
                                    titulo={caliFiCipia.length != 0 && caliFiCipia[0].titulo != "undefined" ? caliFiCipia[0].titulo : "Cipia"}
                                    numero={caliFiCipia.length != 0 && caliFiCipia[0].calificacion != "undefined" ? caliFiCipia[0].calificacion : 0}
                                />
                            )
                    }


                </div>
            </div>
            <Footer />
        </>
    )
}

export default Resultado