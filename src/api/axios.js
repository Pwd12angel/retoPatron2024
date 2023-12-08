// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "http://18.225.55.108/api",
  withCredentials: true,
});

export default intance;
