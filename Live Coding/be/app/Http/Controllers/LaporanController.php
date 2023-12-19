<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LaporanController extends Controller
{
    protected $laporanModel;
    public function __construct(Laporan $laporan)
    {
        $this->laporanModel = $laporan;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
        $create = collect($request->only($this->laporanModel->getFillable()))
            ->put('judul', Hash::make($request->judul))
            ->forget('judul')
            ->toArray();
        $laporan = $this->laporanModel->create($create);

        return Controller::success('Berhasil Melapor', $laporan);
    }

    /**
     * Display the specified resource.
     */
    public function show(Laporan $laporan)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Laporan $laporan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Laporan $laporan)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Laporan $laporan)
    {
        //
    }
}
