<?php

namespace App\Models;

use App\Models\Category;
use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    protected $fillable = [
        'category_id',
        'word',
        'meaning',
        'sentence',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
