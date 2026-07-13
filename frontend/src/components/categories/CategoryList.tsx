import { Word } from '../../types/word';
import { Category } from '../../types/category';
import { CategoryRow } from './CategoryRow';

type CategoryListProps = {
    categories: Category[];
    words: Word[];
    onDelete: (id: number) => void;
    onUpdate: (id: number, newName: string) => Promise<void>;
};

export function CategoryList({ categories, words, onDelete, onUpdate }: CategoryListProps) {
    return (
        <div className="bg-white rounded shadow p-4 mt-4">
            <h2 className="text-lg font-bold mb-4">Category List</h2>

            {categories.length === 0 ? (
                <p className="text-gray-500">No categories yet.</p>
            ) : (
                <table className="w-full text-left">
                    <thead>
                        <tr className="text-sm text-gray-500 border-b border-gray-200">
                            <th className="py-2 font-medium">Category Name</th>
                            <th className="py-2 font-medium">Words</th>
                            <th className="py-2 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => {
                            const wordCount = words.filter(
                                (word) => word.category_id === category.id
                            ).length;

                            return (
                                <CategoryRow
                                    key={category.id}
                                    category={category}
                                    wordCount={wordCount}
                                    onDelete={onDelete}
                                    onUpdate={onUpdate}
                                />
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    );
}
