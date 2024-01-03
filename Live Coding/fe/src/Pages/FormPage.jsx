import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import client from "../Utils/router";
import { dashboardRoute } from "../constants/RouteName";
import { sessionSuccess } from "../constants/Constants";

export const FormPage = () => {
    const nav = useNavigate()

    const { id } = useParams()
    const [load, setLoad] = useState(true)
    const [optionPeserta, setOptionPeserta] = useState([])
    const [currentOption, setCurrentOption] = useState({
        id: null
    })

    const selectPeserta = useRef()
    const inputJudul = useRef()
    const inputNote = useRef()

    useEffect(() => {
        if (id) loadId()
        optionsPeserta()
        setLoad(false)
    }, [])

    const optionsPeserta = () => {
        client.get('peserta').then(({ data }) => {
            setOptionPeserta(data.data)
        })
    }

    const loadId = () => {
        client.get('laporan/' + id).then(({ data }) => {
            inputJudul.current.value = data.data.judul
            inputNote.current.value = data.data.note
            setCurrentOption({
                id: data.data.peserta.id,
                nama: data.data.peserta.nama,
            })
        })
    }

    const submit = (ev) => {
        ev.preventDefault()
        const data = {
            judul: inputJudul.current.value,
            note: inputNote.current.value,
            id_peserta: selectPeserta.current.value
        }

        if (id) {
            client.put('laporan/' + id, data).then(({ data }) => {

                localStorage.setItem(sessionSuccess, data.message)
                nav(dashboardRoute)
            }).catch((error) => {
                console.log(error);
            })
        } else {
            client.post('laporan', data).then(({ data }) => {

                localStorage.setItem(sessionSuccess, data.message)
                nav(dashboardRoute)
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <main>
            <header className="jumbotron">
                <div className="container">
                    <h1 className="display-4">{load ? "Loading..." : "Request Laporan"}</h1>
                </div>
            </header>

            {
                load ? null : <div className="container">

                    <form action="">
                        <div className="row mb-4">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="d-flex align-items-center mb-3">
                                        <label className="mr-3 mb-0">Peserta</label>
                                        <select ref={selectPeserta} className="form-control">
                                            {
                                                currentOption.id == null ? <option value="">Pilih Peserta</option> : <option value={currentOption.id}>{currentOption.nama}</option>
                                            }

                                            {
                                                optionPeserta.map((val, key) => {
                                                    return (
                                                        <option key={key} value={val.id}>{val.nama}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center mb-3">
                                        <label className="mr-3 mb-0">Judul</label>
                                    </div>
                                    <input ref={inputJudul} name="judul" type="text" className="form-control" />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <div className="d-flex align-items-center mb-3">
                                        <label className="mr-3 mb-0">Note</label>
                                    </div>
                                    <textarea ref={inputNote} className="form-control" cols="30" rows="6" placeholder="Catatan...."></textarea>
                                </div>
                            </div>
                        </div>

                        <button onClick={submit} className="btn btn-primary">Send Request</button>
                    </form>

                </div>
            }

        </main>
    )
}