import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../Utils/Client";
import { routeDashboard } from "../Constants/RouteName";

export default function FormPage() {
    const { id } = useParams()
    const inputNim = useRef();
    const inputNama = useRef();
    const inputPassword = useRef();
    const nav = useNavigate()

    const render = () => {
        client.get('mahasiswa/' + id).then(({ data }) => {
            inputNim.current.value = data.data.nim
            inputNama.current.value = data.data.nama
        })
    }

    useEffect(() => {
        render()
    }, [])

    const submit = (e) => {
        e.preventDefault()
        const [nim, nama, password] = [inputNim.current.value, inputNama.current.value, inputPassword.current.value]

        if (id) {
            client.put('mahasiswa/' + id, { nim, nama, password }).then(({ data }) => {
                alert(data.message)
                nav(routeDashboard)
            }).catch(({ response }) => {
                alert(response.data.message);
            })
        } else {
            client.post('mahasiswa', { nim, nama, password }).then(({ data }) => {
                alert(data.message)
                nav(routeDashboard)
            }).catch(({ response }) => {
                alert(response.data.message);
            })
        }
    }

    return (
        <main>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Request Data Validation</h1>
                </div>
            </header>

            <div className="container">

                <form action="">
                    <div className="form-group">
                        <label className="form-label">NIM</label>
                        <input type="text" ref={inputNim} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">NAMA</label>
                        <input type="text" ref={inputNama} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input type="password" ref={inputPassword} className="form-control" />
                    </div>

                    <button onClick={submit} className="btn btn-primary">Send Request</button>
                </form>

            </div>

        </main>
    )
}