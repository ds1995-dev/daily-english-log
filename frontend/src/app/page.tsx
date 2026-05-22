"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import WordForm from './components/WordForm';

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

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Vocabulary Flow</h1>
      <div className="flex justify-center mt-4">
      <WordForm onSubmit={handleAddWord} />
      </div>
      <ul>
        {words.map(word => (
          <li key={word.id}>
            <strong>{word.word}</strong>: {word.meaning}
            {word.sentence && <p>Example: {word.sentence}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}