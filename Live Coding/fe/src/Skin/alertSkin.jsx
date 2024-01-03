import { Outlet } from "react-router-dom"
import { sessionError, sessionSuccess } from "../constants/Constants"

export const AlertSkin = () => {
    setInterval(() => {
        if (localStorage.getItem(sessionSuccess)) {
            alert(localStorage.getItem(sessionSuccess))
            localStorage.removeItem(sessionSuccess)
        }
        if (localStorage.getItem(sessionError)) {
            alert(localStorage.getItem(sessionError))
            localStorage.removeItem(sessionError)
        }
    }, 100)
    return (
        <Outlet />
    )
}