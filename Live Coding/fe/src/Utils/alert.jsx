import { sessionSuccess } from "../constants/Constants"

export const checkAlert = () => {
    return localStorage.getItem(sessionSuccess)
}