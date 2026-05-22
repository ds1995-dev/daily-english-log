"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import WordForm from './components/WordForm';
import WordCard from './components/WordCard';

type Word = {
  id: number;
  word: string;
  meaning: string;
  sentence: string | null;
}

export default function Home() {
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    fetch('http://localhost/api/words')
      .then(response => response.json())
      .then(data => setWords(data));
  }, []);

  const handleAddWord = async (word: string, meaning: string, sentence?: string) => {
    fetch('http://localhost/api/words', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word, meaning, sentence })
    })
      .then(response => response.json())
      .then(newWord => setWords([...words, newWord]));
  };

  const handleDeleteWord = async (id: number) => {
    await fetch(`http://localhost/api/words/${id}`, {
      method: 'DELETE',
      headers: {'accept': 'application/json'},
    });
    setWords(words.filter(word => word.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Vocabulary Flow</h1>
      <div className="flex justify-center mt-4">
      <WordForm onSubmit={handleAddWord} />
      </div>
      {words.map(word => (
        <WordCard key={word.id} word={word} onDelete={handleDeleteWord} />
      ))}
    </div>
  );
}