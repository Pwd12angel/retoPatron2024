import React from 'react'
import ReactDOM from 'react-dom/client'


import './index.css'
import Seccion1 from './seccion1/Seccion1'
import GaleriaImagenes from './seccion2/galeriaImagenes'
import Info from './seccion3/info'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Seccion1></Seccion1>
    <GaleriaImagenes></GaleriaImagenes>
    <Info></Info>

  </React.StrictMode>,
)
