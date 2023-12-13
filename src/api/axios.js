// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "https://35.168.86.243/api",
  withCredentials: true,
});

export default intance;
