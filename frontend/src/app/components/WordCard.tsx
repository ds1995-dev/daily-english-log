type Word = {
    id: number;
    word: string;
    meaning: string;
    sentence: string | null;
}

type WordCardProps = {
    word: Word;
    onDelete: (id: number) => void;
}

export default function WordCard({ word, onDelete }: WordCardProps) {
    return (
        <div className="border border-gray-300 p-4 mb-4">
            <strong>{word.word}</strong>: {word.meaning}
            {word.sentence && <p>Example: {word.sentence}</p>}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => onDelete(word.id)}>
                Delete
            </button>
        </div>
    );
}