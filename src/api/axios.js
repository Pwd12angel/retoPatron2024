// configuraremos axios
import axios from "axios";

// dominio base al que simpre va a consultar
const intance = axios.create({
  baseURL: "http://35.168.86.243:3000/api",
  withCredentials: true,
});

export default intance;
