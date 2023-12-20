import { useRef } from "react"
import client from "../Utils/router"
import { useNavigate } from "react-router-dom"

export const LoginPage = () => {
    const idCardSocieties = useRef()
    const password = useRef()
    const nav = useNavigate()

    const login = (ev) => {
        ev.preventDefault()

        const data = {
            username: idCardSocieties.current.value,
            password: password.current.value
        }

        client.post('signin', data).then(({ data }) => {
            localStorage.setItem('nama', data.data.nama)
            localStorage.setItem('token', data.data.token)

            nav('/dashboard')
        })
    }

    return (
        <div>
            <header class="jumbotron">
                <div class="container text-center">
                    <h1 class="display-4">Job Seekers Platform</h1>
                </div>
            </header>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6">
                        <form class="card card-default">
                            <div class="card-header">
                                <h4 class="mb-0">Login</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-group row align-items-center">
                                    <div class="col-4 text-right">ID Card Number</div>
                                    <div class="col-8"><input type="text" class="form-control" ref={idCardSocieties} /></div>
                                </div>
                                <div class="form-group row align-items-center">
                                    <div class="col-4 text-right">Password</div>
                                    <div class="col-8"><input type="password" class="form-control" ref={password} /></div>
                                </div>
                                <div class="form-group row align-items-center mt-4">
                                    <div class="col-4"></div>
                                    <div class="col-8"><button onClick={login} class="btn btn-primary">Login</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}