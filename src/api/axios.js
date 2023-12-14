// configuraremos axios
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.headers.crossDomain = true;
// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "https://setylsaback.guiatusemociones.com/api",
});

export default intance;
