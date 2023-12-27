<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Peserta extends Model
{
    use HasFactory;
    // protected $fillable = [
    //     'nama', 'username', 'password', 'gender', 'token'
    // ];
    protected $guarded = [];

    //jika ingin menghilangkan created_at & updated_at
    // public $timestamps = false; 

    // jika ingin mengganti nama tabel (default nama_tabel + s : nama_tabels)
    // public $table = 'tabel_peserta';

    // jika ingin mengganti primary key (default id)
    // public $primaryKey = 'id_peserta';
}
