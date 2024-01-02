<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use App\Models\Skill;
use App\Models\SkillPeserta;
use Illuminate\Http\Request;

class SkillPesertaController extends Controller
{
    protected $skillPeserta, $peserta, $skill;
    public function __construct(SkillPeserta $skillPeserta, Peserta $peserta, Skill $skill)
    {
        $this->skillPeserta = $skillPeserta;
        $this->peserta = $peserta;
        $this->skill = $skill;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = $this->peserta->all();
        $data2 = [];

        $skills = $this->skill->all();

        foreach ($data as $key => $value) {
            $temp = collect($this->peserta->findOrFail($value->id));
            $newSkills = collect();
            foreach ($skills as $key => $skill) {
                $newSkills->put($skill->nama, $this->peserta->skill_peserta($value->id, $skill->nama));
            }
            $temp->put('skills', $newSkills);
            $data2[] = $temp;
        }

        return Controller::success('Berhasil menampilkan skill', $data2);
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $data = collect($this->peserta->with([
            'skills' => function ($query) {
                $query->with(['skill']);
            }
        ])->findOrFail($id));

        $skills = $this->skill->all();
        $newSkills = collect();

        foreach ($skills as $key => $skill) {
            $newSkills->put($skill->nama, $this->peserta->skill_peserta($id, $skill->nama));
        }

        $data->put('skills', $newSkills);

        return Controller::success('Berhasil menampilkan skill', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(SkillPeserta $skillPeserta)
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
    public function destroy(SkillPeserta $skillPeserta)
    {
        //
    }
}
