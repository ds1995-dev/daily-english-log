import React from 'react';
import { Word } from '../types/word';
import { Category } from '../types/category';
import { Trash2 } from 'lucide-react';

type WordCardProps = {
    word: Word;
    category: Category[];
    onDelete: (id: number) => void;
    onToggleLearned: (id: number) => void;
}

export default function WordCard({ word, onDelete, onToggleLearned }: WordCardProps) {
    return (
        <div className="flex justify-between border rounded border-gray-300 bg-white p-4">
            <div>
                <h2 className="text-xl font-bold">{word.word}</h2>
                <p>{word.meaning}</p>
                {word.sentence && <p>{word.sentence}</p>}
            </div>
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-4">
                    {word.is_learned && <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">Learned</span>}
                    <span className="rounded-full bg-gray-200 px-3 py-1 text-sm font-bold text-gray-800">{word.category.name}</span>
                </div>
                <div className="flex items-center gap-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={() => onToggleLearned(word.id)}>
                        {word.is_learned ? 'Learned' : ' Unlearned'}
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => onDelete(word.id)}>
                        <Trash2 size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}