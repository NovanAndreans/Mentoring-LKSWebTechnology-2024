<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mahasiswa extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $fillable = ["nama", "nim", 'password', "token"];
    protected $hidden = ['password'];

    public function keahlian() {
        return $this->hasMany(KeahlianMahasiswa::class, 'id_mahasiswa');
    }

    public function cekKeahlian($id, $idk) {
        $keahlian = $this->with('keahlian')->find($id);
         foreach ($keahlian->keahlian as $key => $value) {
            if ($value->id_keahlian == $idk) return true;
         }

        return false;
    }
}
