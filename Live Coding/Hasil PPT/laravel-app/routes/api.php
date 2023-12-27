<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\LaporanController;
use App\Http\Middleware\TokenValidation;
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

Route::post('signin', [AuthController::class, 'signin']);

Route::middleware(TokenValidation::class)->group(function () {
    Route::post('signout', [AuthController::class, 'signout']);

    Route::resource('laporan', LaporanController::class);
});
