import React from 'react';

const Footer: React.FC = () => (
    <footer id="contact" className="bg-gray-900 pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <div className="col-span-1 md:col-span-2">
                    <h4 className="text-xl font-bold text-orange-500 mb-4">KraftbyDhruv</h4>
                    <p className="text-gray-400">Your one-stop shop for quirky, personalized, and high-quality decor that expresses your unique style.</p>
                </div>
                <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#products" className="text-gray-400 hover:text-white">All Products</a></li>
                        <li><a href="#custom" className="text-gray-400 hover:text-white">Track Order</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-lg font-semibold text-white mb-4">Follow Us</h5>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-pinterest"></i></a>
                        <a href="#" className="text-gray-400 hover:text-white text-2xl"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                <p>&copy; 2025 KraftbyDhruv. All Rights Reserved. Designed with <i className="fas fa-heart text-pink-500"></i>.</p>
            </div>
        </div>
    </footer>
);

export default Footer;