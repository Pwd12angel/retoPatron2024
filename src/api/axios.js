// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "https://setylsaback.guiatusemociones.com/api",
  withCredentials: true,
});

export default intance;
