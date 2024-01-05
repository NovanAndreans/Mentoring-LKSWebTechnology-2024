import { Navigate, Outlet } from "react-router-dom";
import { sessionToken } from "../Constants/LocalStorage";
import { routeSignin } from "../Constants/RouteName";
import client from "../Utils/Client";

export default function GuardedSkin() {
    if (localStorage.getItem(sessionToken) == null) {
        return <Navigate to={routeSignin} />
    }

    const logout = () => {
        client.post('logout').then(() => {
            localStorage.clear()
            window.location.reload()
        })
    }

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div class="container">
                    <a class="navbar-brand" href="#">Job Seekers Platform</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a onClick={logout} class="nav-link" href="#">Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />

            <footer>
                <div class="container">
                    <div class="text-center py-4 text-muted">
                        Copyright &copy; 2023 - Web Tech ID
                    </div>
                </div>
            </footer>
        </div>
    )
}