import axios from "axios"

const client = axios.create({
    baseURL: '',
    params: {
        token: '123'
    }
})

client.interceptors.request

export default client