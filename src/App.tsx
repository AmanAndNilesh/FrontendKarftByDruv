import React, { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';

// Define types for currentUser
interface User {
    username: string;
    email: string;
}

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<'landing' | 'login' | 'dashboard' | 'signup'>('landing');
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const mockToken = sessionStorage.getItem('karftbydhruv_mock_jwt');
        if (mockToken) {
            setIsAuthenticated(true);
            setCurrentPage('dashboard');
            setCurrentUser({ username: 'dhruv_user', email: 'user@example.com' });
        }
    }, []);

    const handleLogin = (username: string, password: string) => {
        if (username === 'user' && password === 'password') {
            const mockJwt = 'mock_jwt_token_12345';
            sessionStorage.setItem('karftbydhruv_mock_jwt', mockJwt);
            setIsAuthenticated(true);
            setCurrentUser({ username: username, email: `${username}@example.com` });
            setCurrentPage('dashboard');
            console.log('Login successful!');
        } else {
            console.log('Login failed: Invalid credentials.');
        }
    };

    interface SignupData {
        username: string;
        email: string;
        password: string;
    }

    const handleSignup = (userData: SignupData) => {
        console.log('Simulating signup for:', userData);
        console.log('Signup simulated! You can now log in with these details (use "user" and "password" for demo).');
        setCurrentPage('login');
    };

    const handleLogout = () => {
        sessionStorage.removeItem('karftbydhruv_mock_jwt');
        setIsAuthenticated(false);
        setCurrentUser(null);
        setCurrentPage('landing');
        console.log('Logged out successfully.');
    };

    if (isAuthenticated) {
        return <DashboardPage currentUser={currentUser} onLogout={handleLogout} />;
    } else if (currentPage === 'login') {
        return <LoginPage onLogin={handleLogin} onNavigateSignup={() => setCurrentPage('signup')} />;
    } else if (currentPage === 'signup') {
        return <SignupPage onSignup={handleSignup} onNavigateLogin={() => setCurrentPage('login')} />;
    } else {
        return <LandingPage onNavigateLogin={() => setCurrentPage('login')} onNavigateSignup={() => setCurrentPage('signup')} />;
    }
};

export default App;