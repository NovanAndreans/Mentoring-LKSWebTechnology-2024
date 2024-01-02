<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;
    // protected $fillable = [
    //     'nama', 'gender', 'username', 'password', 'token'
    // ];
    protected $guarded = [];

    public function skills()
    {
        return $this->hasMany(SkillPeserta::class, 'id_peserta');
    }

    public function skill_peserta($id, $name)
    {
        $skills = SkillPeserta::where('id_peserta', $id)->with('skill')->get();
        foreach ($skills as $key => $value)
            if ($value->skill->nama == $name) return true;

        return false;
    }
}
