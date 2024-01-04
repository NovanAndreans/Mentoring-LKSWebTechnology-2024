<?php

namespace App\Http\Middleware;

use App\Models\Mahasiswa;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class TokenValidate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $validate = $request->validate([
            'token' => 'required'
        ]);

        $mhs = Mahasiswa::where('token', $request->token)->first();

        if (!$mhs) {
            return response()->json(['message' =>'unauthorized']);
        }

        return $next($request);
    }
}
