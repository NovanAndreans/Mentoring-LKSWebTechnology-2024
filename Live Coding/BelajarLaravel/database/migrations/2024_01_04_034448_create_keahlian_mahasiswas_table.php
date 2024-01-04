<?php

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
        Schema::create('keahlian_mahasiswas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_keahlian')->constrained('keahlians')->onDelete('cascade');
            $table->foreignId('id_mahasiswa')->constrained('mahasiswas')->onDelete('cascade');             
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('keahlian_mahasiswas');
    }
};
