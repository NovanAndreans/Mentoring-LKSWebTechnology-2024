<?php

namespace App\Http\Controllers;

use App\Models\Keahlian;
use Illuminate\Http\Request;

class KeahlianController extends Controller
{
    protected $Keahlian;
    public function __construct(Keahlian $Keahlian)
    {
        $this->Keahlian = $Keahlian;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $terserah = $this->Keahlian->all();
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
        ]);

        $data = collect($request->only($this->Keahlian->getFillable()))
            ->toArray();

        $newKeahlian = $this->Keahlian->create($data);

        return Controller::success('Knek', $newKeahlian);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $mhs = $this->Keahlian->findOrFail($id);
        return Controller::success('Masok', $mhs);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Keahlian $Keahlian)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        $mhs = $this->Keahlian->findOrFail($id);

        $data = collect($request->only($this->Keahlian->getFillable()))
            ->toArray();

        $mhs->update($data);

        return Controller::success('Masok', $mhs);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $mhs = $this->Keahlian->findOrFail($id)->delete();
        return Controller::success('berhasil hapus');
    }
}
