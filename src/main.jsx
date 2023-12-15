import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvide } from './context/AuthContext'
import { Suspense, lazy } from 'react'
import './index.css'
import { BrowserRouter, createBrowserRouter, Routes, Route, RouterProvider, HashRouter as Router } from 'react-router-dom';
import Inicio from './inicio';


import Consulta from './pages/cuestionarios/cuestionarioM';
import RutaProtegida from './pages/rutaProtegida';
import Seccion1 from './seccion1/Seccion1';
import VideoM from '../src/paginaVideo/mobileye';
import VideoC from './paginaVideo/cipia';
import Resultado from './pages/resultado/Resultados';
import CuestionarioM from './pages/cuestionarios/cuestionarioM';
import CuestionarioC from './pages/cuestionarios/cuestionarioC';






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<h1>Estoy cargando</h1>}>
      <AuthProvide>
        <Router>

          <Seccion1 />
          <Routes>


            <Route Route element={<RutaProtegida />}>
              <Route path="/resultados" element={<Resultado />} />
              <Route path="/consulta" element={<Consulta />} />
              <Route path="/videoM" element={<VideoM />} />
              <Route path="/videoC" element={<VideoC />} />
              <Route path="/cuestionarioM" element={<CuestionarioM />} />
              <Route path="/cuestionarioC" element={<CuestionarioC />} />

            </Route>
            <Route path='/' element={<Inicio />} />
          </Routes>

        </Router>
      </AuthProvide>
    </Suspense>
  </React.StrictMode >,
)
