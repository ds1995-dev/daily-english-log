"use client"
import { useState } from 'react';
import { User } from '../../types/user';

type RegisterFormProps = {
    onSubmit: (user: User) => Promise<void>;
    loading: boolean;
    error: string | null;
}

export function RegisterForm({ onSubmit, loading, error }: RegisterFormProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user: User = {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation
        }
        await onSubmit(user);
        setName('');
        setEmail('');
        setPassword('');
        setPasswordConfirmation('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>会員登録</h2>
            <div>
                <label htmlFor="name">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    className="rounded border p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="email">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    className="rounded border p-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">
                    Password
                </label>
                <input
                    id="password"
                    type="password"
                    className="rounded border p-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password-confirmation">
                    Password Confirmation
                </label>
                <input
                    id="password-confirmation"
                    type="password"
                    className="rounded border p-2"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
            </div>
            <button type="submit" disabled={loading}>
                {loading ? '登録中...' : '登録'}
                登録
            </button>
            {error && <p>{error}</p>}
        </form>
    )
}