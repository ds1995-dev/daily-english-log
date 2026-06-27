"use client";
import { useState } from 'react';
import { Category } from '../types/category';

type WordFormProps = {
    categories: Category[];
    onSubmit: (word: string, meaning: string, sentence: string, categoryId: number) => void;
};

export default function WordForm({ categories, onSubmit }: WordFormProps) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [sentence, setSentence] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | ''>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (selectedCategoryId === "") {
            return;
        }
        onSubmit(word, meaning, sentence, selectedCategoryId);
        setWord('');
        setMeaning('');
        setSentence('');
        setSelectedCategoryId('');
    };

    return (
        <form className="border border-gray-300 p-4 space-y-4" onSubmit={handleSubmit}>
            <div>
                <label>Word:</label>
                <input className="border border-gray-300 p-2" type="text" value={word} onChange={(e) => setWord(e.target.value)} required />
            </div>
            <div>
                <label>Meaning:</label>
                <input className="border border-gray-300 p-2" type="text" value={meaning} onChange={(e) => setMeaning(e.target.value)} required />
            </div>
            <div>
                <label>Example Sentence (optional):</label>
                <input className="border border-gray-300 p-2" type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} />
            </div>
            <div>
                <label>Category:</label>
                <select
                    value={selectedCategoryId}
                    onChange={(e) => setSelectedCategoryId(Number(e.target.value))}
                    required
                >
                    <option value="">Select category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}

                </select>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Word</button>
        </form>
    )
}

