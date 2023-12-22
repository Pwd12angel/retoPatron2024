import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import './registro.css'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Registro = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    // propiedades de nuestro contexto
    const { signup, isAutenticado, errors: errorNumeroCliente } = useAuth();

    const navigate = useNavigate()

    // podemos redireccionar cuando es true la autenticacio
    // useEffect(() => {
    //     console.log("entro al use efect")
    //     if (isAutenticado) navigate('/cuestionarios')
    // }, [])

    const onSubmit = handleSubmit(async (values) => {


        Swal.fire({
            title: "Confirma tus datos de registro",
            icon: "warning",
            html: `<div class="ReDatos">
            <p> <strong>Nombre:</strong> ${values.nombre}</p>
            <p><strong>Base:</strong> ${values.base}</p>
            <p><strong>Numero de empleado:</strong> ${values.Nempleado}</p>
            </div/>`,

            confirmButtonText: "Confirmar",
            showCancelButton: true,
        }).then((resultado) => {

            if (resultado.isConfirmed) {

                if (errors) {
                    Swal.fire({
                        title: "Error de Registro",
                        text: "Algo Salio mal verfica los datos",
                        icon: "error",
                        showConfirmButton: false,
                        timer: 1900
                    })

                } else {
                    signup(values);
                    Swal.fire({
                        title: "Registro Exitoso",
                        text: "Gracias por participar",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1900
                    })
                    if (isAutenticado) navigate('/resultados')
                }
            } else {

            }

        })


    });

    return (
        <>
            <div className="ReContendor">
                <strong></strong>
                <h3>REGISTRATE Y PARTICIPA</h3>
                {
                    errorNumeroCliente.map((error, i) => (
                        <div key={error} className='ReAlertaError'>{error}</div>
                    ))
                }
                <form className='ReFormulario' onSubmit={onSubmit} >
                    <div className='RePrimerInput'>

                        <div className='ReContenedorNombre'>
                            <label htmlFor="">Nombre</label>

                            <input placeholder='Nombre' type="text" {...register("nombre", {
                                required: true
                            })} />

                            {
                                errors.nombre && (
                                    <p className='ReError'>Nombre requerido</p>
                                )
                            }
                        </div>

                        <div className='ReContenedorSelect' >
                            <label htmlFor="">Base</label>

                            <select placeholder='Base' type="text" {...register("base", {
                                required: true
                            })} >

                                <option ></option>
                                <option value="Complejo DER">Complejo DER</option>
                                <option value="Irapuato UHT">Irapuato UHT</option>
                                <option value="Complejo UHT">Complejo UHT</option>
                                <option value="Aguascalientes">Aguascalientes</option>
                                <option value="Autotanques">Autotanques</option>
                                <option value="Monterrey">Monterrey</option>
                                <option value="Tecate">Tecate</option>
                                <option value="Irapuato">Irapuato</option>
                                <option value="Mexico">Mexico</option>

                            </select>
                            {
                                errors.base && (
                                    <p className='ReError'>Base requerida</p>
                                )

                            }


                        </div>
                    </div>

                    <div className='ReSegundoInput'>
                        <label htmlFor="">Número de empleado</label>
                        <input placeholder='Número Empleado' type="text" {...register("Nempleado", {
                            required: true
                        })} />
                        {
                            errors.Nempleado && (
                                <p className='ReError'>Número de empleado requerido</p>
                            )
                        }

                    </div>
                    <button className='ReButton' type='submit' >Registrar</button>

                </form>
            </div>
        </>
    )
}

export default Registro