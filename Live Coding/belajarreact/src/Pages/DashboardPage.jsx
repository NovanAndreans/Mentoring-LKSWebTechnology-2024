import { useEffect, useState } from "react"
import client from "../Utils/Client"
import DashboardCard from "../Components/DashboardCard"
import { routeForm } from "../Constants/RouteName"
import { Link } from "react-router-dom"

export default function DashboardPage() {

    const [data, setData] = useState([])

    useEffect(() => {
        client.get('mahasiswa').then(({ data }) => {
            setData(data.data)
        })
    }, [])

    return (
        <main>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">Dashboard</h1>
                </div>
            </header>

            <div className="container">

                <section className="validation-section mb-5">
                    <div className="section-header mb-3">
                        <h4 className="section-title text-muted">My Data Validation</h4>
                    </div>
                    <div className="row">

                        <div className="col-md-4">
                            <div className="card card-default">
                                <div className="card-header">
                                    <h5 className="mb-0">Data Validation</h5>
                                </div>
                                <div className="card-body">
                                    <Link to={routeForm} className="btn btn-primary btn-block">+ Request validation</Link>
                                </div>
                            </div>
                        </div>

                        {
                            data.map((val) => <DashboardCard data={val} />)
                        }

                    </div>
                </section>

            </div >

        </main >
    )
}   