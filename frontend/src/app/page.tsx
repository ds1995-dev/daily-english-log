"use client";
import { useState } from 'react';
import { useEffect } from 'react';
import { Word } from '../types/word';
import WordForm from '../components/WordForm';
import WordCard from '../components/WordCard';
import WordFilter from '../components/WordFilter';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [words, setWords] = useState<Word[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'learned' | 'unlearned'>('all');

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

  const filteredWords = words.filter(word => {
    const matchesSearch = word.word.toLowerCase().includes(search.toLowerCase()) || word.meaning.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'all' || (filter === 'learned' && word.is_learned) || (filter === 'unlearned' && !word.is_learned);
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      <h1 className="text-2xl font-bold flex justify-center">Vocabulary Flow</h1>
      <div className="flex justify-center mt-4">
        <WordForm onSubmit={handleAddWord} />
      </div>
      <div className="flex justify-center mt-4">
      <WordFilter search={search} setSearch={setSearch} filter={filter} onChange={setFilter} />
      </div>
        
      {filteredWords.map(word => (
        <WordCard key={word.id} word={word} onDelete={handleDeleteWord} onToggleLearned={handleToggleLearned} />
      ))}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
    </div>
  );
}