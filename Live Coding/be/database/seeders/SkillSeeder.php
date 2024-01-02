<?php

namespace Database\Seeders;

use App\Models\Skill;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Skill::insert($this->insert());
    }

    public function insert()
    {
        return [
            [
                'nama' => 'Laravel'
            ],
            [
                'nama' => 'React'
            ],
            [
                'nama' => 'Game'
            ],
        ];
    }
}
