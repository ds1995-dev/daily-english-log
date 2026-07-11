export function CategoriesHeader() {
    return (
        <header className="flex justify-between bg-white rounded shadow p-4 mb-4">
            <h1 className="text-2xl font-bold">Categories</h1>
            <form className="mt-4 flex gap-2">
                <input
                    type="text"
                    placeholder="Search categories..."
                    className="flex-1 p-2 border border-gray-300 rounded"
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Search
                </button>
            </form>
        </header>
    );
}