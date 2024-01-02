<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use App\Models\Peserta;
use App\Models\SkillPeserta;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PesertaController extends Controller
{
    protected $pesertaModel, $skillPeserta, $laporan;
    public function __construct(SkillPeserta $skillPeserta, Peserta $peserta, Laporan $laporan)
    {
        $this->skillPeserta = $skillPeserta;
        $this->laporan = $laporan;
        $this->pesertaModel = $peserta;
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
        $create = collect($request->only($this->pesertaModel->getFillable()))
            ->toArray();
        $laporan = $this->pesertaModel->create($create);

        return Controller::success('Berhasil Tambah Peserta', $laporan);
    }

    /**
     * Display the specified resource.
     */
    public function show(Peserta $peserta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Peserta $peserta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id, Request $request)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        DB::beginTransaction();

        try {
            $this->laporan->where('id_peserta', $id)->delete();

            $this->skillPeserta->where('id_peserta', $id)->delete();

            $this->pesertaModel->findOrFail($id)->delete();

            DB::commit();

            return Controller::success('Berhasil Menghapus Peserta');
        } catch (\Throwable $th) {

            DB::rollBack();

            return Controller::success('Berhasil Menghapus Peserta');
        }
    }
}
