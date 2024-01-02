<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillPeserta extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $guarded = [];

    public function skill()
    {
        return $this->hasOne(Skill::class, 'id', 'id_skill');
    }
}
