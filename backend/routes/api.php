<?php

use App\Http\Controllers\Api\WordController;
use Illuminate\Support\Facades\Route;

Route::get('/words', [WordController::class,'index']);
Route::post('/words', [WordController::class, 'store']);
Route::patch('/words/{word}', [WordController::class, 'update']);
Route::delete('/words/{word}', [WordController::class, 'destroy']);
Route::patch('/words/{word}/toggle-learned', [WordController::class,'toggleLearned']);
