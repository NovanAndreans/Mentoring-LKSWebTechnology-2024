<?php

namespace Database\Seeders;

use App\Models\Mahasiswa;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class MahasiswaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Mahasiswa::insert($this->daftar());
    }

    public function daftar()
    {
        return [
            [
                'nama' => 'Messi',
                'nim' => 99,
                'password' => Hash::make(123)
            ],
            [
                'nama' => 'Ronaldo',
                'nim' => 999,
                'password' => Hash::make(123)
            ]
        ];
    }
}
