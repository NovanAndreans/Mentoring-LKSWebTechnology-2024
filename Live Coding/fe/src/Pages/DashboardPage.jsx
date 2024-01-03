import { Link, useParams } from "react-router-dom"
import { formRoute } from "../constants/RouteName";
import { useEffect, useState } from "react";
import client from "../Utils/router";
import { sessionSuccess } from "../constants/Constants";

export const DashboardPage = () => {
    const [load, setLoad] = useState(true)
    const [success, setSuccess] = useState('')
    const [laporan, setLaporan] = useState([])

    useEffect(() => {
        getLaporan()
        setLoad(false)
    }, [])

    const getLaporan = () => {
        client.get('laporan').then(({ data }) => {
            setLaporan(data.data)
        })
    }

    const hapus = (id) => {
        client.delete('laporan/' + id).then(({ data }) => {

            localStorage.setItem(sessionSuccess, data.message)
            setLoad(true)
            getLaporan()
            setTimeout(() => setLoad(false), 500)
        })
    }

    return (
        <main>
            <header class="jumbotron">
                <div class="container">
                    <h1 class="display-4">{load ? "Loading" : "Dashboard"}</h1>
                </div>
            </header>

            <div class="container">


                {
                    load ? null : <section class="validation-section mb-5">
                        <div class="section-header mb-3">
                            <h4 class="section-title text-muted">My Data Validation</h4>
                        </div>
                        <div class="row">

                            <div class="col-md-4">
                                <div class="card card-default">
                                    <div class="card-header">
                                        <h5 class="mb-0">Data Validation</h5>
                                    </div>
                                    <div class="card-body">
                                        <Link to={formRoute} class="btn btn-primary btn-block">+ Request validation</Link>
                                    </div>
                                </div>
                            </div>

                            {
                                laporan.map((val, key) => {
                                    return (
                                        <div class="col-md-4" key={key}>
                                            <div class="card card-default">
                                                <div class="card-header border-0">
                                                    <div className="float-left"><h5 class="mb-0">Laporan {key + 1}</h5></div>
                                                    <div className="float-right">
                                                        <Link to={formRoute + "/" + val.id} className="btn btn-warning btn-sm">E</Link>
                                                        <button onClick={() => hapus(val.id)} className="ml-1 btn btn-danger btn-sm">D</button>
                                                    </div>
                                                </div>
                                                <div class="card-body p-0">
                                                    <table class="table table-striped mb-0">
                                                        <tr>
                                                            <th>Status</th>
                                                            <td><span class="badge badge-info">Pending</span></td>
                                                        </tr>
                                                        <tr>
                                                            <th>Nama</th>
                                                            <td class="text-muted">{val.peserta.nama}</td>
                                                        </tr>
                                                        <tr>
                                                            <th>Judul</th>
                                                            <td class="text-muted">{val.judul}</td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>
                    </section>
                }

            </div>
        </main >

    )
}