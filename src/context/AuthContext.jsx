// guardaremos los datos del usuario
import { createContext, useState, useContext, useEffect } from "react";
import { registroCipia, actualizaCalificacion, registroMobileye, consultaCalificacion, creaCalififcacion, registrarRequest, iniciarRequest, verificarToken, consultaPreguntas } from "../api/auth";//axios peticion a la api 
import Cookies from "js-cookie";


export const AuthContext = createContext();

// importamos solo useAuth sin necesidad de importar los demas 
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Necesita AutoContext")
    }
    return context;
}

export const AuthProvide = ({ children }) => {
    //usuario que va a ser leido en toda la app
    const [user, setUser] = useState(null);
    //cambiamos el estado si estamos autenticados
    const [isAutenticado, setAutenticado] = useState(false);
    //guarda los errores
    const [errors, setErrors] = useState([]);
    const [errorsInicio, setErrorsInicio] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pregunta, setPregunta] = useState([]);
    const [calificaciones, setCalificaciones] = useState([])

    const [caliFi, setCaliFi] = useState([]);
    const [caliFiCipia, setCaliFiCipia] = useState([]);

    const [existeCalificacionUsuario, setExisteCalificacionUsuario] = useState(false);
    const [existeCalificacionUsuarioCipia, setExisteCalificacionUsuarioCipia] = useState(false);

    const [resultados, setResultados] = useState([])



    // fucnicon para registrar
    const signup = async (user) => {
        try {
            const res = await registrarRequest(user);
            console.log(res);
            // se lo asiganamos al estado
            setUser(res.data);
            setAutenticado(true);
        } catch (error) {
            console.log(error.response);
            setErrors(error.response.data)

        }
    };

    const signin = async (user) => {
        try {
            const res = await iniciarRequest(user)
            console.log(res);
            setAutenticado(true);
            console.log(isAutenticado);
            setUser(res.data);

        } catch (error) {
            console.log(error);
            setErrorsInicio(error.response.data)
        }
    }

    //funcion para consultar preguntas
    const preguntas = async () => {
        try {
            const preguntasBack = await consultaPreguntas();
            setPregunta(preguntasBack.data);
        } catch (error) {
            console.error(error)
        }
    }

    //funcion para guardar la calificacion
    const caliG = async (calificacion) => {
        const res = await creaCalififcacion(calificacion);
        console.log(res);

    }

    //fucnion para consultar calificaciones
    const consultaCal = async () => {
        try {
            const calificacionesAll = await consultaCalificacion();
            console.log(calificacionesAll.data);

            setResultados(calificacionesAll.data);

            // console.log(calificacionesAll);
        } catch (error) {
            console.error(error);
        }
    }

    //funcion para consultar si existe un registro de calificacion en mobileye 
    const consultaMobileye = async () => {
        try {
            const existe = await registroMobileye();
            console.log(existe);
            if (existe.data === "No encontrado") {

                console.log("No Existe confirmacion ")
                setCaliFi([]);
                setExisteCalificacionUsuario(false);

            } else {
                console.log("Existe")
                console.log("DATAAA " + existe.data);

                setCaliFi(existe.data);
                setExisteCalificacionUsuario(true);

            }

        } catch (error) {
            console.error(error);
        }
    }


    //funcion para consultar si existe un registro de calificacion en mobileye 
    const consultaCipia = async () => {

        try {
            const existeC = await registroCipia();

            if (existeC.data === "No encontrado") {

                console.log("No Existe");
                setCaliFiCipia([]);
                setExisteCalificacionUsuario(false);

            } else {
                console.log("Existe")
                console.log(existeC.data)
                setCaliFiCipia(existeC.data);
                setExisteCalificacionUsuario(true);

            }


        } catch (error) {
            console.error(error);
        }
    }

    //funcion para actializar la calificacion 
    const actualizarCali = async (datatos) => {
        try {
            console.log(datatos);
            await actualizaCalificacion(datatos);
        } catch (error) {
            console.error(error);
        }
    }


    //funcion para cerrar sesion 
    const cerrar = () => {
        Cookies.remove("token");
        setAutenticado(false);
        setUser(false);
    }

    //efecto para destruir el mensaje de error
    useEffect(() => {

        const time = 3000;


        // error de registro 
        if (errors.length > 0) {
            setTimeout(() => {
                setErrors([]);
            }, time);

            //destruimos el timer 
            return () => clearTimeout(time)
        }

        // error de registro 
        if (errorsInicio.length > 0) {
            setTimeout(() => {
                setErrorsInicio([]);
            }, time);

            //destruimos el timer 
            return () => clearTimeout(time)
        }

    }, [errors, errorsInicio]);


    useEffect(() => {

        // cuncion que se ejecutara cuando se carge la pagina
        async function checarLogin() {

            // optienemos todos los valores de la cookie
            const cookieC = Cookies.get();

            if (!cookieC.token) {
                setAutenticado(false);
                setLoading(false);
                return setUser(null);
            }

            try {
                const res = await verificarToken(cookieC.token);
                console.log(res);
                // si fue satisafactoria la respuesta
                if (!res.data) {
                    setAutenticado(false);
                    setLoading(false);
                    return;
                }

                setAutenticado(true)
                setUser(res.data);
                setLoading(false);

            } catch (error) {
                console.log(error);
                // si no se autentico en el back
                setAutenticado(false);
                setUser(null);
                setLoading(false);

            }

        }
        checarLogin()


    }, [])
    return (
        <AuthContext.Provider value={{ consultaCipia, existeCalificacionUsuarioCipia, resultados, actualizarCali, existeCalificacionUsuario, caliFi, caliFiCipia, consultaCipia, consultaMobileye, calificaciones, consultaCal, caliG, preguntas, pregunta, cerrar, loading, signup, signin, user, isAutenticado, errors, errorsInicio }}>
            {children}
        </AuthContext.Provider>
    )
}