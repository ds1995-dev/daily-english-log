<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\WordController;
use App\Http\Controllers\Api\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::post('/register', [RegisterController::class, 'register']);

Route::get('/words', [WordController::class,'index']);
Route::post('/words', [WordController::class, 'store']);
Route::patch('/words/{word}', [WordController::class, 'update']);
Route::delete('/words/{word}', [WordController::class, 'destroy']);
Route::patch('/words/{word}/toggle-learned', [WordController::class,'toggleLearned']);

Route::resource('categories', CategoryController::class);

