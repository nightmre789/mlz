import axios from "axios";
// https://api.mlzsecurity.com/api
const instance = axios.create({
    withCredentials: true,
    baseURL: "http://localhost:8000/api"
});

export default instance;