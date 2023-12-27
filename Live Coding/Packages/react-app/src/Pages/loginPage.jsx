import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import client from "../Utils/client"
import { sessionId, sessionName, sessionToken } from "../Constant/localStorage"
import { routeDashboard } from "../Constant/routeName"

export default function LoginPage() {

    const inputUsername = useRef()
    const inputPassword = useRef()
    const nav = useNavigate()

    const submit = (ev) => {
        ev.preventDefault()

        let body = {
            'username': inputUsername.current.value,
            'password': inputPassword.current.value
        }

        client.post('signin', body).then(({ data }) => {
            localStorage.setItem(sessionId, data.data.id)
            localStorage.setItem(sessionName, data.data.nama)
            localStorage.setItem(sessionToken, data.data.token)

            nav(routeDashboard)
        })
    }

    return (
        <main>
            <header className="jumbotron">
                <div className="container text-center">
                    <h1 className="display-4">Job Seekers Platform</h1>
                </div>
            </header>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form className="card card-default">
                            <div className="card-header">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">Username</div>
                                    <div className="col-8"><input ref={inputUsername} type="text" className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">Password</div>
                                    <div className="col-8"><input ref={inputPassword} type="password" className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center mt-4">
                                    <div className="col-4"></div>
                                    <div className="col-8"><button onClick={submit} className="btn btn-primary">Login</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </main>
    )
}