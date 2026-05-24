"use client";
import { useState } from 'react';

type WordFormProps = {
  onSubmit: (word: string, meaning: string, sentence?: string) => void;
};

export default function WordForm({ onSubmit }: WordFormProps) {
    const [word, setWord] = useState('');
    const [meaning, setMeaning] = useState('');
    const [sentence, setSentence] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(word, meaning, sentence);
        setWord('');
        setMeaning('');
        setSentence('');
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Add Word</button>
        </form>
    )
}

