import './cipia.css'
import { Link } from 'react-router-dom';

const VideoC = () => {
    return (
        <>
            <div className="ViContenedor">
                <h1>Video Cipia</h1>
                <div className="ViContenedorVideo">
                    <video controls={true} src="https://humanopuntocero.s3.amazonaws.com/ELearning/Espa%C3%B1ol/Video+CIPIA+-+APV.mp4"></video>
                    <div className='ViContenedorButton'>
                        <Link to='/cuestionarioC'  >Comenzar Cuestionario </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoC;