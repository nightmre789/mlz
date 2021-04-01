import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.mlzsecurity.com/api"
});

export default instance;