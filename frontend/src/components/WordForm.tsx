"use client";
import { useState } from 'react';
import { Category } from '../types/category';

type WordFormProps = {
    categories: Category[];
    onSubmit: (word: string, meaning: string, sentence: string, categoryId: number) => void;
    onCreateCategory: (name: string) => Promise<Category>;
};

export default function WordForm({ categories, onSubmit, onCreateCategory }: WordFormProps) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [sentence, setSentence] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | ''>('');
    const [categoryName, setCategoryName] = useState('');
    const [categoryMessage, setCategoryMessage] = useState('');
    const [categoryError, setCategoryError] = useState('');
    
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

    const handleSubmitCategory = async () => {
        setCategoryMessage('');
        setCategoryError('');

        if (!categoryName.trim()) {
            setCategoryMessage('Please enter a category name');
            return;
        }

        try {
            const newCategory = await onCreateCategory(categoryName);

            setSelectedCategoryId(newCategory.id);
            setCategoryName('');
            setCategoryMessage(`Category: "${newCategory.name}" added`);
        } catch {
            setCategoryError('Failed to create category');
        }
    }
    return (
        <form className="bg-white rounded shadow-md border-gray-300 p-4 space-y-4" onSubmit={handleSubmit}>
            <h2 className="text-lg font-bold">Add a new Word</h2>
            <div className="flex justify-content gap-4">
            <div>
                <input className="border rounded border-gray-300 p-2" type="text" value={word} onChange={(e) => setWord(e.target.value)} placeholder="Word" required />
            </div>
            <div>
                <input className="border rounded border-gray-300 p-2" type="text" value={meaning} onChange={(e) => setMeaning(e.target.value)} placeholder="Meaning" required />
            </div>
            <div>
                <input className="border rounded border-gray-300 p-2" type="text" value={sentence} onChange={(e) => setSentence(e.target.value)} placeholder="Example Sentence" />
            </div>
            <div>
                <select
                    className="border rounded border-gray-300 p-2"
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
                <div>
                    <input className="border rounded border-gray-300 p-2" type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} placeholder="New category" />
                    <button className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" type="button" onClick={handleSubmitCategory}>Add Category</button>
                    {categoryMessage && (
                        <p className="text-green-600">{categoryMessage}</p>
                    )}
                    {categoryError && (
                        <p className="text-red-600">{categoryError}</p>
                    )}
                </div>
            </div>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Word</button>
        </form>
    )
}

