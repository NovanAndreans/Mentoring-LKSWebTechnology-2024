<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Peserta>
 */
class PesertaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nama' => $this->faker->firstName,
            'username' => $this->faker->userName,
            'password' => $this->faker->password,
            'gender' => rand(0, 1) == 1 ? 'laki-laki' : 'perempuan',
        ];
    }
}