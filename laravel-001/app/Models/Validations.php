<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Validations extends Model
{
    use HasFactory;
    protected $table = 'validations';
    protected $fillable = [
        'job_category_id', 'society_id', 'validator_id', 'status', 'work_experience', 'job_position', 'reason_accepted', 'validator_notes'
    ];
    protected $guarded = [];
    public $timestamps = false;
}
