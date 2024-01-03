<?php

namespace App\Http\Controllers;

use App\Models\Peserta;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        if (!$pengguna) return Controller::failed('Username atau password salah');

        $token = md5($request->username);
        $pengguna->update(['token' => $token]);

        return Controller::success('Berhasil Signin', $pengguna);
    }
    public function signin2(Request $request)
    {
        $credentials = $request->validate([
            'name' => 'required',
            'password' => 'required'
        ]);

        $credentials = [
            'name' => $request->name,
            'password' => $request->password
        ];

        if (Auth::attempt($credentials)) {
            /** @var User $pengguna */
            $pengguna = Auth::user();

            $token = $pengguna->createToken('')->plainTextToken;
            $pengguna->update(['remember_token' => $token]);

            return Controller::success('Berhasil Signin', $pengguna);
        }
        return Controller::failed('Username atau password salah');
    }
}
