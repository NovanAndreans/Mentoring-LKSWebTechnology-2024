import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { sessionSuccess } from "../constants/Constants"
import client from "../Utils/router"

export const GuardSkin = () => {
    if (localStorage.getItem('token') == null) {
        return <Navigate to={'/'} />
    }

    const logout = () => {
        localStorage.clear()
        window.location.reload()
        localStorage.setItem(sessionSuccess, 'Berhasil Logout')
    }

    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
                <div class="container">

                    <a class="navbar-brand" href="#">Job Seekers Platform - {"  "}
                        {localStorage.getItem('nama')}</a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => logout()}>Logout</a>
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