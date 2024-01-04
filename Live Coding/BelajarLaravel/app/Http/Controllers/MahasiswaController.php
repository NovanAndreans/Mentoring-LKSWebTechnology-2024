<?php

namespace App\Http\Controllers;

use App\Models\Keahlian;
use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class MahasiswaController extends Controller
{
    protected $mahasiswa, $keahlian;
    public function __construct(Mahasiswa $mahasiswa, Keahlian $keahlian)
    {
        $this->keahlian = $keahlian;
        $this->mahasiswa = $mahasiswa;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $terserah = $this->mahasiswa->all();
        return Controller::success('Berhasil', $terserah);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            "nama" => 'required',
            "nim" => 'required|unique:mahasiswas',
            'password' => 'required'
        ]);

        $data = collect($request->only($this->mahasiswa->getFillable()))
            ->put('password', Hash::make($request->password))
            ->toArray();

        $newMahasiswa = $this->mahasiswa->create($data);

        return Controller::success('Knek', $newMahasiswa);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $mhs = collect($this->mahasiswa->with('keahlian')->findOrFail($id));

        $keahlian = $this->keahlian->all();

        $temp = collect();
        foreach ($keahlian as $key => $value) {
            $temp->put($value->nama, $this->mahasiswa->cekKeahlian($id, $value->id));
        }


        $mhs->put('keahlian', $temp);

        return Controller::success('Masok', $mhs);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mahasiswa $mahasiswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $mhs = $this->mahasiswa->findOrFail($id);

        $data = collect($request->only($this->mahasiswa->getFillable()))
            ->put('password', Hash::make($request->password))
            ->toArray();

        $mhs->update($data);

        return Controller::success('Masok', $mhs);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $mhs = $this->mahasiswa->findOrFail($id)->delete();
        return Controller::success('berhasil hapus');
    }
}
