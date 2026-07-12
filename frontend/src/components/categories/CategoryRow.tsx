import { Category } from '../../types/category';
import { Pencil, Trash2 } from 'lucide-react';

type CategoryRowProps = {
    category: Category;
    wordCount: number;
    onDelete: (id: number) => void;
};

export function CategoryRow({ category, wordCount, onDelete }: CategoryRowProps) {
    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="py-3 flex items-center gap-2 font-bold">
                <span className="w-3 h-3 rounded bg-blue-500 inline-block" />
                {category.name}
            </td>
            <td className="py-3">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                    {wordCount} words
                </span>
            </td>
            <td className="py-3">
                <div className="flex items-center justify-end gap-2">
                    {/* 編集は後回し（見た目のみ） */}
                    <button
                        type="button"
                        disabled
                        className="text-gray-400 border border-gray-200 rounded p-2 cursor-not-allowed"
                        aria-label="Edit category"
                    >
                        <Pencil size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={() => onDelete(category.id)}
                        className="text-red-500 hover:bg-red-50 border border-gray-200 rounded p-2"
                        aria-label="Delete category"
                    >
                        <Trash2 size={16} />
                    </button>
                </div>
            </td>
        </tr>
    );
}
