<?php

namespace App\Http\Controllers;

use App\Models\Societies;
use Illuminate\Http\Request;
use Illuminate\Validation\Validator;

class AuthController extends Controller
{

    public function signin(Request $request)
    {
        /** @var Validator $validator */
        $validator = $request->validate([
            'id_card_number' => 'required',
            'password' => 'required'
        ]);

        $societies = Societies::where('id_card_number', $request->id_card_number)->where('password', $request->password)
            ->with('regional')
            ->first();

        if (!$societies) {
            return Controller::failed('Societies Tidak ditemukan', null, 404);
        }

        /** @var Societies $societies */
        $token = $societies->createToken('token')->plainTextToken;

        // $token = md5($societies->id_card_number);

        //$token = Str::random(30);

        $societies->update(['login_tokens' => $token]);
        return Controller::success('Signin Success', $societies);
    }
}
