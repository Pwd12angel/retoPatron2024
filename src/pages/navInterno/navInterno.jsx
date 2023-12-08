import BarraNavI from '../barraNavegacionInterna/barraNavI'
import './navInterno.css'
const NavInterno = () => {
    return (
        <>

            <div className='navIPublicidad' >

                <div className='navISombra2'>

                </div>
                <div className=' navISombra'>
                    <BarraNavI />
                    <div className="navILogos">
                        <div className='navImg1'>

                        </div>
                        <div className='navIImg2'>

                        </div>
                        <div className='navIImg3'>

                        </div>
                        <div className='navIImg4'>

                        </div>

                    </div>
                    <div className="navITitulos">
                        <div>
                            <h1>RETO PATRON DEL CAMINO 2024</h1>
                            <h3>PARTICIPA Y GANA UN VIAJE A MAZATLAN</h3>
                        </div>
                        <div className="navITituloAv">
                            <svg width="120px" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.25 15H18l4-4H5.5a1.5 1.5 0 0 0-.9.3L2 13.25l3.138 1.588a1.5 1.5 0 0 0 .678.162H6.5"></path>
                                <path d="M13.5 15.5c0 .828-1.79 1.5-4 1.5v-3c2.21 0 4 .671 4 1.5Z"></path>
                                <path d="M15.5 9 11 11h7.5L20 6h-1.5l-3 3Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavInterno