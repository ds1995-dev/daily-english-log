export function MobileHeader() {
    return (
        <div className="md:hidden flex bg-white rounded shadow-md border-gray-300 w-auto p-2">
            <nav className="flex mt-4 gap-2 space-y-2">
                <p className="rounded text-xs font-bold bg-blue-100 text-blue-600 p-2">Dashboard</p>
                <p className="text-xs text-gray-600 p-2">All</p>
                <p className="text-xs text-gray-600 p-2">Learned</p>
                <p className="text-xs text-gray-600 p-2">Unlearned</p>
                <p className="text-xs text-gray-600 p-2">Categories</p>
            </nav>
        </div>
    )
}