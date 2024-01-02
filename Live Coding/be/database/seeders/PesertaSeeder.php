<?php

namespace Database\Seeders;

use App\Models\Peserta;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PesertaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Peserta::insert($this->insert());
    }

    public function insert()
    {
        return [
            [
                'nama' => 'Novan',
                'gender' => 'laki-laki',
                'username' => 'novan',
                'password' => '123'
            ],
            [
                'nama' => 'Novi',
                'gender' => 'perempuan',
                'username' => 'novi',
                'password' => '123'
            ],
        ];
    }
}
