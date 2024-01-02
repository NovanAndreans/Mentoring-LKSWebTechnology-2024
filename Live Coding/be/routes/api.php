<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LaporanController;
use App\Http\Controllers\PesertaController;
use App\Http\Controllers\SkillPesertaController;
use App\Http\Controllers\UserController;
use App\Http\Middleware\AuthValidate;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('signin', [AuthController::class, 'signin']);
Route::post('signin2', [AuthController::class, 'signin2']);

Route::middleware(AuthValidate::class)->group(function () {
    Route::resource('laporan', LaporanController::class);
    Route::resource('skill', SkillPesertaController::class);
    Route::resource('peserta', PesertaController::class);
    Route::resource('users', UserController::class);
});
