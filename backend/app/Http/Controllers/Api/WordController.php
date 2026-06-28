<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Word;
use Illuminate\Http\Request;

class WordController extends Controller
{
    public function index()
    {
        $words = Word::with('category')
            ->get();

        return response()->json($words);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'word' => 'required|string|max:255',
            'meaning' => 'required|string',
            'sentence' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $word = Word::create($validated);

        $word->load('category');

        return response()->json($word, 201);
    }

    public function update(Request $request, Word $word)
    {
        $validated = $request->validate([
            'word' => 'required|string|max:255',
            'meaning' => 'required|string',
            'sentence' => 'nullable|string',
            'category_id' => 'required|exists:categories,id',
        ]);

        $word->update($validated);

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
        $word->load('category');
        $word->save();

        return response()->json($word);
    }
}
