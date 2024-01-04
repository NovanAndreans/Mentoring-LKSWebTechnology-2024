<?php

namespace App\Http\Controllers;

use App\Models\Mahasiswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(Request $request) {
        $request->validate([
            'nim' => 'required',
            'password' => 'required'
        ]);

        $mhs = Mahasiswa::where('nim', $request->nim)->first();

        if(!$mhs) return $this->failed('Mahasiswa not found');

        $token = md5($request->nim);
        $mhs->update([
            'token' => $token
        ]);

        if($mhs && Hash::check($request->password, $mhs->password)) return $this->success('login sukses', $mhs);
        return $this->failed('login failed');
    }

    public function logout(Request $request) {
        $request->validate([
            'token' => 'required'
        ]);

        $mhs = Mahasiswa::where('token', $request->token)->first();

        if(!$mhs) return $this->failed('mahasiswa belum login');
        
        $mhs->update([
            'token' => null
        ]);
        return $this->success('Logout success');
    }
}
