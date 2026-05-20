<?php

use App\Models\Word;
use App\Http\Controllers\Api\WordController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/words', [WordController::class,'index']);
Route::post('/words', [WordController::class, 'store']);
Route::put('/words/{word}', [WordController::class, 'update']);
Route::delete('/words/{word}', [WordController::class, 'destroy']);
