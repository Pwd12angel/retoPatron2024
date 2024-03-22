// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "https://setylsaback.guiatusemociones.com/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default intance;
