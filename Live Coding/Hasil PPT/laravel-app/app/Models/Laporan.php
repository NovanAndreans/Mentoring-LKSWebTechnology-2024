<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laporan extends Model
{
    use HasFactory;
    protected $fillable = [
        'judul', 'note', 'pengumpulan', 'id_peserta'
    ];

    public $timestamps = false;

    public function peserta()
    {
        return $this->belongsTo(Peserta::class, 'id_peserta');
    }
}
