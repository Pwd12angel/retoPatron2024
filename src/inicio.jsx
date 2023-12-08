import Footer from './footer/footer'
import Seccion1 from './seccion1/Seccion1'
import GaleriaImagenes from './seccion2/galeriaImagenes'
import Info from './seccion3/info'
import Registro from './seccion4/registro'
import Sesion from './seccion4/sesion'


const Inicio = () => {
    return (
        <>
            {/* <Seccion1></Seccion1> */}
            <GaleriaImagenes></GaleriaImagenes>
            <Info></Info>
            <div className="PFormularios">
                <Registro />
                <Sesion />
            </div>
            <Footer />
        </>
    )
}

export default Inicio