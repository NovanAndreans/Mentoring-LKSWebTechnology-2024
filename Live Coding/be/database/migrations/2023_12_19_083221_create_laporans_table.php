<?php

use App\Models\Peserta;
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
        Schema::create('laporans', function (Blueprint $table) use ($peserta) {
            $table->id();
            $table->string('judul');
            $table->text('note');
            $table->foreignIdFor(Peserta::class, 'id_peserta');
            $table->timestamps();
            $table->foreign('id_peserta')->references($peserta->getKeyName())->on($peserta->getTable())->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('laporans');
    }
};
