<?php

namespace App\Http\Controllers;

use App\Models\Laporan;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;

class LaporanController extends Controller
{
    protected $laporan;

    public function __construct(Laporan $laporan)
    {
        $this->laporan = $laporan;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(Request $req)
    {
        //Tampilkan Semua Laporan yang dimiliki peserta
        $semua = $this->laporan->all();
        return Controller::success('Menampilkan Semua Laporan', $semua);
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
            'judul' => 'required',
            'note' => 'required',
            'id_peserta' => 'required',
        ]);

        $create = collect($request->only($this->laporan->getFillable()))
            ->put('pengumpulan', Carbon::now())
            ->toArray();
        $new = $this->laporan->create($create);
        return Controller::success('Berhasil Melapor', $new);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = $this->laporan->with(['peserta'])->findOrFail($id);
        return Controller::success('Menampilkan Semua Laporan', $data);
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
    public function update($id, Request $request)
    {
        $laporan = $this->laporan->findOrFail($id);

        $update = collect($request->only($this->laporan->getFillable()))
            ->put('pengumpulan', Carbon::now())
            ->toArray();
        $laporan->update($update);

        return Controller::success('Berhasil Update', $laporan);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->laporan->findOrFail($id)->delete();
        return Controller::success('Berhasil Delete');
    }
}
