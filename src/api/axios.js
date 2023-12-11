// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "http://3.144.118.24:3000/api",
  withCredentials: true,
});

export default intance;
