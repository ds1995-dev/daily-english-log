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
  is_learned: boolean;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<Word[]>([]);

  useEffect(() => {
    const fetchWords = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost/api/words');
        const data = await response.json();
        setWords(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }
    fetchWords();
  }, []);


  const handleAddWord = async (word: string, meaning: string, sentence?: string) => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost/api/words', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ word, meaning, sentence })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Failed to add word');
      }
      setWords((prevWords) => [...prevWords, data]);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteWord = async (id: number) => {
    try {
      setLoading(true);
      await fetch(`http://localhost/api/words/${id}`, {
        method: 'DELETE',
        headers: { 'accept': 'application/json' },
      });
      setWords((prevWords) => prevWords.filter(word => word.id !== id));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleLearned = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost/api/words/${id}/toggle-learned`, {
        method: 'PATCH',
        headers: { 'accept': 'application/json' },
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to toggle learned status');
      }
      setWords((prevWords) => prevWords.map(word => word.id === id ? data : word));
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Vocabulary Flow</h1>
      <div className="flex justify-center mt-4">
        <WordForm onSubmit={handleAddWord} />
      </div>
      {words.map(word => (
        <WordCard key={word.id} word={word} onDelete={handleDeleteWord} onToggleLearned={handleToggleLearned} />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
}