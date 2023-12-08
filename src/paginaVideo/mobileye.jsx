import './mobileye.css'
import { Link } from 'react-router-dom';
const VideoM = () => {
    return (
        <>
            <div className="ViContenedor">
                <h1>Video Mobileye</h1>
                <div className="ViContenedorVideo">
                    <video controls={true} src="https://humanopuntocero.s3.amazonaws.com/ELearning/Espa%C3%B1ol/MASTER_Mobileye_V5_22.12.18.mp4"></video>
                    <div className='ViContenedorButton'>
                        <Link to='/cuestionarioM'  >Comenzar Cuestionario </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoM;