"use client";
import { useState } from 'react';
import { RegisterForm } from '../../../components/auth/RegisterForm';
import { User } from '../../../types/user';


export default function RegisterPage() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (user: User) => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch('http://localhost/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to register');
            }
        } catch (err) {
            setError((err as Error).message);
            throw err;
        } finally {
            setLoading(false);
        }
    };
    return (
        <main>
            <RegisterForm onSubmit={handleRegister} loading={loading} error={error} />
        </main>
    )
}