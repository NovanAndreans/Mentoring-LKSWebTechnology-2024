<?php

use App\Http\Controllers\KeahlianController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\MahasiswaController;
use App\Http\Middleware\TokenValidate;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
Route::post('login', [LoginController::class, 'login']);

Route::middleware(TokenValidate::class)->group(function (){
    Route::resource('mahasiswa', MahasiswaController::class);
    Route::resource('keahlian', KeahlianController::class);
    Route::post('logout', [LoginController::class, 'logout']);
});
