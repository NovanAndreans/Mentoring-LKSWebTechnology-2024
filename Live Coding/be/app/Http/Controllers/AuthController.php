<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function signin(Request $request)
    {
        $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        $pengguna = Peserta::where('username', $request->username)
            ->where('password', $request->password)->first();
        if (!$pengguna) return Controller::failed('Gagal Signin');

        $token = md5($request->username);
        $pengguna->update(['token' => $token]);

        return Controller::success('Berhasil Signin', $pengguna);
    }
}
