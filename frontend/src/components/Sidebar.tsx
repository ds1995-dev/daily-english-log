export default function Sidebar() {
    return (
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-6 mr-4">
            <h1 className="text-xl font-bold text-blue-600">
                Daily English Log
            </h1>
            <nav className="mt-8 space-y-4">
                <p className="rounded font-bold bg-blue-100 text-blue-600 p-2">Dashboard</p>
                <p className="text-gray-600">All Words</p>
                <p className="text-gray-600">Learned</p>
                <p className="text-gray-600">Unlearned</p>
                <p className="text-gray-600">Categories</p>
            </nav>
        </aside>
    );
}