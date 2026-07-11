"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="hidden md:block w-64 bg-white border-r border-gray-200 p-6 mr-4">
            <h1 className="text-xl font-bold text-blue-600">
                Daily English Log
            </h1>
            <nav className="mt-8 space-y-4">
                <Link href="/" className={pathname === '/' ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
                    Home</Link>
                <p className="text-gray-600">All Words</p>
                <p className="text-gray-600">Learned</p>
                <p className="text-gray-600">Unlearned</p>
                <Link href="/categories" className={pathname === '/categories' ? 'bg-blue-100 text-blue-600 font-bold' : 'text-gray-600 hover:text-blue-600'}>
                    Categories</Link>
            </nav>
        </aside>
    );
}