import './footer.css'
const Footer = () => {
    return (
        <div className='FcontenedorPrincipal'>

            <div className='logoF'>
                <img className='LogoFter' src="https://humanopuntocero.s3.amazonaws.com/retoPatron2024/logoPatron.png" alt="" />
                <div >
                    <h4>Links</h4>
                    <div className='FLink'>
                        <svg width="46" height="46" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.545 8.52H6.72a3.6 3.6 0 0 0 0 7.2h3.6a3.6 3.6 0 0 0 3.396-4.8h-.996c-.103 0-.204.011-.3.037a2.4 2.4 0 0 1-2.1 3.563h-3.6a2.4 2.4 0 1 1 0-4.8h1.842c.262-.452.593-.857.983-1.2Z"></path>
                            <path d="M12.72 8.52a3.6 3.6 0 0 0-3.396 4.8h1.318a2.4 2.4 0 0 1 2.078-3.6h3.6a2.4 2.4 0 0 1 0 4.8h-1.842c-.261.45-.593.855-.984 1.2h2.826a3.6 3.6 0 1 0 0-7.2h-3.6Z"></path>
                        </svg>
                        <h4>Te invitamos a conocer</h4>
                        <a href="https://www.guiatusemociones.com/">Guia tus emociones</a>
                    </div>
                </div>
            </div>
            <div className="copi">
                Copyright © KAVSAM 2023
                <a href="https://kavsam.mx/">  Visita </a>
            </div>
        </div>
    )
}

export default Footer