import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import './sesion.css'
import { useNavigate } from 'react-router-dom';

const Sesion = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signin, errorsInicio: errorNumeroIngreso, isAutenticado } = useAuth();

    const onSubmit = handleSubmit((data) => {
        signin(data);
        console.log(data);
    })

    const navigate = useNavigate();
    useEffect(() => {
        if (isAutenticado) navigate('/resultados')
    }, [isAutenticado])


    return (
        <>
            <div className="SeContendor">
                <h3>CONSULTA TUS RESULTADOS</h3>
                {
                    errorNumeroIngreso.map((error, i) => (
                        <div className='SeAlertaError'>{error}</div>
                    ))
                }
                <form onSubmit={onSubmit} className='SeFormulario' >
                    <label htmlFor="">Ingresa tu número de empleado</label>
                    <input type="text" placeholder='Ej: 2312ASA'{...register("Nempleado", {
                        required: true
                    })} />
                    {
                        errors.Nempleado && (
                            <p className='SeError'>Número de empleado requerido</p>
                        )
                    }
                    <button className='SeButton'>Consultar</button>
                </form>
            </div>
        </>
    )
}

export default Sesion