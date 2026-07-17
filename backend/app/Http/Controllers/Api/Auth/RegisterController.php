<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function store (RegisterRequest $request) {
        $validated = $request->validated();

        $validated['password'] = Hash::make($validated['password']);

        User::create($validated);

        return response()->json([
            'message' => 'User created successfully'
        ], 201);
    }
}
