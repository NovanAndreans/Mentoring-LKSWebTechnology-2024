<?php

namespace App\Http\Middleware;

use App\Http\Controllers\Controller;
use App\Models\Peserta;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthValidate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->query('token');
        if (!$token) return response()->json(['message' => 'Sesi Habis']);

        $val = Peserta::where('token', $token)->first();

        if (!$val) return response()->json(['message' => 'Sesi Habis']);

        return $next($request);
    }
}
