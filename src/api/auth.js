import axios from "./axios";

export const registrarRequest = (user) => axios.post(`/registrar`, user);
export const iniciarRequest = (user) => axios.post(`/login`, user);
export const verificarToken = () => axios.get("/verificar");

export const consultaPreguntas = () => axios.get("/preguntasM");

//calificacion
export const consultaCalificacion = () => axios.get("/calificaciones");
export const creaCalififcacion = (calificacion) =>
  axios.post("/newCalificacion", calificacion);

export const actualizaCalificacion = (datatos) =>
  axios.put(`/updateCalificacion/${datatos.id}`, datatos);

//consultar si existe registro mobileye
export const registroMobileye = () => axios.get("/calificacionesMobileye");

//consultar si existe registro mobileye
export const registroCipia = () => axios.get("/calificacionesCipia");
