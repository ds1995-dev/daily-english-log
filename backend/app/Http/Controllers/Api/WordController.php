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

        $word = Word::create([
            'word' => $request->word,
            'meaning' => $request->meaning,
            'sentence' => $request->sentence,
        ]);

        return response()->json($word, 201);
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

        return response()->json($word);
    }

    public function destroy(Word $word)
    {
        $word->delete();

        return response()->json([
            'message' => 'Word deleted successfully',
        ]);
    }

    public function toggleLearned(Word $word)
    {
        $word->is_learned = !$word->is_learned;
        $word->save();

        return response()->json($word);
    }
}
