// protegera nuestras rutas que deben de tener acceso
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; //llamamos a nuestro contexxto 


const RutaProtegida = () => {
    const { loading, isAutenticado } = useAuth();
    console.log(loading, isAutenticado);

    if (loading) return <h1>Loading</h1>
    // si no existe lo manda al inicio
    if (!loading && !isAutenticado) return <Navigate to='/' replace />

    // si si existe continua con el componente 

    return <Outlet />
}

export default RutaProtegida