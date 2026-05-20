<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Word;
use Illuminate\Http\Request;

class WordController extends Controller
{
    public function index()
    {
        $words = Word::all();

        return response()->json($words);
    }

    public function store(Request $request)
    {
        $request->validate([
            'word' => 'required|string|max:255',
            'meaning' => 'required|string',
            'sentence' => 'nullable|string',
        ]);

        Word::create([
            'word' => $request->word,
            'meaning' => $request->meaning,
            'sentence' => $request->sentence,
        ]);

        return response()->json([
            'message' => 'Word created successfully',
        ], 201);
    }

    public function update(Request $request, Word $word)
    {
        $request->validate([
            'word' => 'required|string|max:255',
            'meaning' => 'required|string',
            'sentence' => 'nullable|string',
        ]);

        $word->update([
            'word' => $request->word,
            'meaning' => $request->meaning,
            'sentence' => $request->sentence,
        ]);

        return response()->json([
            'message' => 'Word updated successfully',
        ]);
    }

    public function destroy(Word $word)
    {
        $word->delete();

        return response()->json([
            'message' => 'Word deleted successfully',
        ]);
    }
}
