import axios from "axios";

const client = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

client.interceptors.request.use((response) => {
    response.params = {
        token: localStorage.getItem('token')
    }
    return response
})

export default client