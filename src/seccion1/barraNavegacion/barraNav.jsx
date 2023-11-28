import './barraNav.css'

const BarraNav = () => {
    return (
        <>
            <div className="navGeneral">
                <div className="navContenedorDiv">
                    <img src="src\assets\image_Nav\logoPatron.png" alt="Logo patron" />
                </div>
                <div className="navLista">
                    <li>Requisitos</li>
                    <li>Registro</li>
                    <li>Fechas</li>
                </div>
            </div>
        </>
    )
}

export default BarraNav;