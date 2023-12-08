

import './barraNavI.css'
const BarraNavI = () => {



    return (
        <>

            <div className="navSIGeneral">
                <div className="navSIContenedorDiv">
                    <img src="src\assets\image_Nav\logoPatron.png" alt="Logo patron" />
                </div>
                <div className="navSILista">
                    <li>Salir
                        <svg width="20px" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.996 3H3v18h9"></path>
                            <path d="M16.5 16.5 21 12l-4.5-4.5"></path>
                            <path d="M8 11.996h13"></path>
                        </svg>
                    </li>

                </div>
            </div>
        </>
    )
}

export default BarraNavI