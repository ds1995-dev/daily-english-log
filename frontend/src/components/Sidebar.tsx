export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r border-gray-200 p-6 mr-4">
            <h1 className="text-xl font-bold text-blue-600">
                Daily English Log
            </h1>
            <nav className="mt-8 space-y-4">
                <p className="font-medium text-blue-600">Dashboard</p>
                <p className="text-gray-600">All Words</p>
                <p className="text-gray-600">Learned</p>
                <p className="text-gray-600">Unlearned</p>
                <p className="text-gray-600">Categories</p>
            </nav>
        </aside>
    );
}