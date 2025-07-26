import React, { useState } from 'react';

interface HeaderProps {
    onNavigateLogin: () => void;
    onNavigateSignup: () => void;
    isAuthenticated: boolean;
    onLogout?: () => void; // Optional prop for logout in Header
    showLogo?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onNavigateLogin, onNavigateSignup, isAuthenticated, onLogout, showLogo = true }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleUserIconClick = () => {
        if (isAuthenticated) {
            console.log("Navigating to user profile/dashboard.");
        } else {
            onNavigateLogin();
        }
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                {showLogo && (
                    <a href="#" className="text-2xl font-bold text-orange-500">KraftbyDhruv</a>
                )}
                <div id="desktop-menu" className={`hidden md:flex items-center ${showLogo ? 'space-x-8' : 'space-x-8 ml-auto'}`}>
                    <a href="#products" className="text-gray-700 hover:text-orange-500 transition-colors">Shop</a>
                    <a href="#custom" className="text-gray-700 hover:text-orange-500 transition-colors">Personalised Items</a>
                    <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors">Our Story</a>
                    <a href="#contact" className="text-gray-700 hover:text-orange-500 transition-colors">Contact Us</a>
                </div>
                <div className="flex items-center space-x-6">
                    <a href="#" className="text-gray-700 hover:text-orange-500"><i className="fas fa-search text-xl"></i></a>
                    <button onClick={handleUserIconClick} className="text-gray-700 hover:text-orange-500 focus:outline-none">
                        <i className="fas fa-user text-xl"></i>
                    </button>
                    <a href="#" className="relative text-gray-700 hover:text-orange-500">
                        <i className="fas fa-shopping-cart text-xl"></i>
                        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">3</span>
                    </a>
                    <button id="mobile-menu-button" className="md:hidden text-gray-700 hover:text-orange-500" onClick={() => setIsMobileMenuOpen(true)}>
                        <i className="fas fa-bars text-xl"></i>
                    </button>
                </div>
            </nav>
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white absolute w-full transform translate-x-0 transition-transform duration-300 ease-in-out shadow-lg">
                    <button className="absolute top-4 right-4 text-gray-700 text-4xl" onClick={() => setIsMobileMenuOpen(false)}>
                        &times;
                    </button>
                    <div className="flex flex-col items-center py-8 space-y-6">
                        <a href="#products" className="text-xl font-medium text-gray-800 hover:text-orange-500 transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
                        <a href="#custom" className="text-xl font-medium text-gray-800 hover:text-orange-500 transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>Personalised Items</a>
                        <a href="#about" className="text-xl font-medium text-gray-800 hover:text-orange-500 transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>Our Story</a>
                        <a href="#contact" className="text-xl font-medium text-gray-800 hover:text-orange-500 transition duration-200" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                        {!isAuthenticated ? (
                            <>
                                <button onClick={() => { onNavigateLogin(); setIsMobileMenuOpen(false); }} className="text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white font-semibold py-3 px-8 rounded-full text-xl shadow-md transition duration-300">
                                    Log In
                                </button>
                                <button onClick={() => { onNavigateSignup(); setIsMobileMenuOpen(false); }} className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full text-xl shadow-md transition duration-300">
                                    Sign Up
                                </button>
                            </>
                        ) : (
                            onLogout && ( // Only render logout if onLogout prop is provided
                                <button onClick={() => { onLogout(); setIsMobileMenuOpen(false); }} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-xl shadow-md transition duration-300">
                                    Logout
                                </button>
                            )
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;