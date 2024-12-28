import React, { useState } from 'react';
import './input.css'

const LoginAutomation = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    // Simulated login validation
    const simulateLogin = (username, password) => {
        // Dummy credentials for simulation
        const correctUsername = "testuser";
        const correctPassword = "password123";

        return username === correctUsername && password === correctPassword;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMessage('');

        // Simulate the login process with the provided username and password
        setTimeout(() => {
        const isSuccess = simulateLogin(username, password);

        if (isSuccess) {
            setIsLoggedIn(true);
            setErrorMessage('');
            alert('Login successful!');
        } else {
            setIsLoggedIn(false);
            setErrorMessage('Invalid credentials. Please try again.');
        }

        setLoading(false);
        }, 1000); // Simulate a delay like a real login process
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">Kodnest Login</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-gray-700">Username</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>

            <div>
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
                />
            </div>

            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

            <div className="flex justify-center">
                <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white font-bold rounded-md"
                disabled={loading}
                >
                {loading ? 'Logging in...' : 'Login'}
                </button>
            </div>
            </form>

            {isLoggedIn && (
            <div className="mt-4 text-green-500 text-center">
                <p>Welcome to Kodnest!</p>
            </div>
            )}
        </div>
        </div>
    );
};

export default LoginAutomation;
