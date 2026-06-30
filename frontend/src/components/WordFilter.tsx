import { on } from 'events';
import { Category } from '../types/category'
    ;
type Filter = 'all' | 'learned' | 'unlearned';

type WordFilterProps = {
    search: string;
    setSearch: (search: string) => void;
    filter: Filter;
    onChange: (filter: Filter) => void;
    categories: Category[];
    categoryFilter: number | 'all';
    onCategoryChange: (value: number | 'all') => void;

}

export default function WordFilter({
    search, setSearch, filter, onChange, categories, categoryFilter, onCategoryChange }: WordFilterProps) {
    return (
        <div className="m-4 flex justify-center mt-4">
            <input
                className="border border-gray-300 p-2 w-1/3"
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <button onClick={() => onChange('all')} className={`px-4 py-2 ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
            <button onClick={() => onChange('learned')} className={`px-4 py-2 ${filter === 'learned' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Learned</button>
            <button onClick={() => onChange('unlearned')} className={`px-4 py-2 ${filter === 'unlearned' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Unlearned</button>
            <select
                className={`px-4 py-2 ${filter === 'unlearned' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                value={categoryFilter}
                onChange={(e) => {
                    const value = e.target.value;

                    onCategoryChange(
                        value === 'all'
                            ? 'all'
                            : Number(value)
                    );
                }}
            >
            <option value='all'>All</option>
            {categories.map(category => (
                <option
                    key={category.id}
                    value={category.id}
                >
                    {category.name}
                </option>
            ))}
        </select>
        </div >
    )
}