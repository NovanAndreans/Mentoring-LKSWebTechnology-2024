<?php

use App\Models\Peserta;
use App\Models\Skill;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        $peserta = new Peserta();
        Schema::create('skill_pesertas', function (Blueprint $table) use ($peserta) {
            $table->id();
            $table->foreignIdFor(Peserta::class, 'id_peserta');
            $table->foreignIdFor(Skill::class, 'id_skill');

            $table->foreign('id_peserta')->references($peserta->getKeyName())->on($peserta->getTable())->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skill_pesertas');
    }
};
