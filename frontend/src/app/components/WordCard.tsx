type Word = {
    id: number;
    word: string;
    meaning: string;
    sentence: string | null;
    is_learned: boolean;
}

type WordCardProps = {
    word: Word;
    onDelete: (id: number) => void;
    onToggleLearned: (id: number) => void;
}

export default function WordCard({ word, onDelete, onToggleLearned }: WordCardProps) {
    return (
        <div className="border border-gray-300 p-4 mb-4">
            <strong>{word.word}</strong>: {word.meaning}
            {word.sentence && <p>Example: {word.sentence}</p>}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => onDelete(word.id)}>
                Delete
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded ml-2" onClick={() => onToggleLearned(word.id)}>
                {word.is_learned ? 'Learned' : ' Unlearned'}
            </button>
        </div>
    );
}