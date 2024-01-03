import { Outlet } from "react-router-dom"
import { sessionSuccess } from "../constants/Constants"

export const AlertSkin = () => {
    setInterval(() => {
        if (localStorage.getItem(sessionSuccess)) {
            alert(localStorage.getItem(sessionSuccess))
            localStorage.removeItem(sessionSuccess)
        }
    }, 100)
    return (
        <Outlet />
    )
}