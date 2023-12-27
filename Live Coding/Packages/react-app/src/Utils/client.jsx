import axios from "axios";
import { sessionToken } from "../Constant/localStorage";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    params: {
        token: localStorage.getItem(sessionToken)
    }
})

export default client