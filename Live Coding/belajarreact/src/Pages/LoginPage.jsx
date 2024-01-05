import { useRef } from "react"
import client from "../Utils/Client";
import { sessionToken } from "../Constants/LocalStorage";
import { useNavigate } from "react-router-dom";
import { routeDashboard } from "../Constants/RouteName";

export default function LoginPage() {
    const inputRef = useRef();
    const inputPassword = useRef();
    const nav = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        const [nim, password] = [inputRef.current.value, inputPassword.current.value]

        client.post('login', { nim, password }).then(({ data }) => {
            alert(data.message)
            localStorage.setItem(sessionToken, data.data.token)
            nav(routeDashboard)
        }).catch(({ response }) => {
            alert(response.data.message);
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
                        <form onSubmit={submit} className="card card-default">
                            <div className="card-header">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">NIM</div>
                                    <div className="col-8"><input ref={inputRef} type="text" className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center">
                                    <div className="col-4 text-right">Password</div>
                                    <div className="col-8"><input ref={inputPassword} type="password" className="form-control" /></div>
                                </div>
                                <div className="form-group row align-items-center mt-4">
                                    <div className="col-4"></div>
                                    <div className="col-8"><button type="submit" className="btn btn-primary">Login</button></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}