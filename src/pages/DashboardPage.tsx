import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Define type for currentUser
interface User {
    username: string;
    email: string;
}

interface DashboardPageProps {
    currentUser: User | null;
    onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ currentUser, onLogout }) => (
    <>
        <Header
            isAuthenticated={true}
            onLogout={onLogout}
            showLogo={true}
            onNavigateLogin={() => {}}
            onNavigateSignup={() => {}}
        />
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-xl shadow-lg text-center">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                    Welcome to Your Dashboard, {currentUser?.username || 'User'}!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                    This is where you can manage your Karftbydhruv account and explore personalized content.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                    <div className="bg-blue-50 p-6 rounded-lg shadow-md border border-blue-200">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Total Orders</h3>
                        <p className="text-4xl font-bold text-blue-600">12</p>
                        <p className="text-sm text-gray-500 mt-2">Last updated today</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg shadow-md border border-green-200">
                        <h3 className="text-xl font-semibold text-green-800 mb-2">Pending Shipments</h3>
                        <p className="text-4xl font-bold text-green-600">3</p>
                        <p className="text-sm text-gray-500 mt-2">View order details</p>
                    </div>
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-md border border-yellow-200">
                        <h3 className="text-xl font-semibold text-yellow-800 mb-2">New Messages</h3>
                        <p className="text-4xl font-bold text-yellow-600">5</p>
                        <p className="text-sm text-gray-500 mt-2">Check your inbox</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg shadow-md border border-purple-200 col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="text-xl font-semibold text-purple-800 mb-2">My Custom Requests</h3>
                        <p className="text-gray-600 mb-4">View and manage your custom craft orders.</p>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                            Go to Requests
                        </button>
                    </div>
                    <div className="bg-teal-50 p-6 rounded-lg shadow-md border border-teal-200 col-span-1 md:col-span-2 lg:col-span-2">
                        <h3 className="text-xl font-semibold text-teal-800 mb-2">Browse Exclusive Collections</h3>
                        <p className="text-gray-600 mb-4">Discover new and limited edition handcrafted items just for you.</p>
                        <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 mr-2">
                            Shop Now
                        </button>
                        <button className="border border-teal-600 text-teal-600 hover:bg-teal-100 font-semibold py-2 px-4 rounded-md transition duration-300">
                            Explore Galleries
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <button
                        onClick={onLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </>
);

export default DashboardPage;