<?php

namespace App\Http\Controllers;

use App\Models\Societies;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

use function PHPUnit\Framework\isNull;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function success($message = 'Success', $data = null, $code = 200)
    {
        if ($data == null) return response()->json(['message' => $message], $code);
        else return response()->json(['message' => $message, 'data' => $data], $code);
    }

    public function failed($message = 'Failed', $data = [], $code = 500)
    {
        if ($data == null) return response()->json(['message' => $message], $code);
        return response()->json(['message' => $message, 'data' => $data], $code);
    }
    public function getSocietyId($token)
    {
        $id = Societies::where('login_tokens', $token)
            ->first()->id;
        return $id;
    }
}
