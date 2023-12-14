// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "http://35.168.86.243/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://setylsa.guiatusemociones.com", // Reemplaza con tu dominio React
  },
});

export default intance;
