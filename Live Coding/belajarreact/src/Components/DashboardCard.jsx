import { Link } from "react-router-dom"
import client from "../Utils/Client"
import { routeForm } from "../Constants/RouteName"

export default function DashboardCard({ data }) {

    const hapus = () => {
        client.delete('mahasiswa/' + data.id).then(({ data }) => {
            alert(data.message)
            window.location.reload()
        })
    }

    return (
        <div className="col-md-4">
            <div className="card card-default">
                <div className="card-header border-0">
                    <div className="float-left"><h5 className="mb-0">Data Validation</h5></div>
                    <div className="float-right">
                        <Link to={routeForm + '/' + data.id} className="btn btn-warning">U</Link>
                        <button onClick={hapus} className="btn btn-danger">H</button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped mb-0">
                        <tr>
                            <th>Status</th>
                            <td><span className="badge badge-success">Accepted</span></td>
                        </tr>
                        <tr>
                            <th>NIM</th>
                            <td className="text-muted">{data.nim}</td>
                        </tr>
                        <tr>
                            <th>Nama</th>
                            <td className="text-muted">{data.nama}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}