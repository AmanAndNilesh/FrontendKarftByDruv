import React from 'react';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why KraftbyDhruv?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-800/50 p-8 rounded-xl">
                        <div className="text-pink-500 text-4xl mb-4"><i className="fas fa-star"></i></div>
                        <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
                        <p className="text-gray-400">We use high-quality materials to ensure your products are durable and look amazing.</p>
                    </div>
                    <div className="bg-gray-800/50 p-8 rounded-xl">
                        <div className="text-purple-500 text-4xl mb-4"><i className="fas fa-palette"></i></div>
                        <h3 className="text-xl font-bold text-white mb-2">Endless Customization</h3>
                        <p className="text-gray-400">Your imagination is the only limit. We offer extensive options to make it truly yours.</p>
                    </div>
                    <div className="bg-gray-800/50 p-8 rounded-xl">
                        <div className="text-green-500 text-4xl mb-4"><i className="fas fa-truck-fast"></i></div>
                        <h3 className="text-xl font-bold text-white mb-2">Fast & Free Shipping</h3>
                        <p className="text-gray-400">Get your custom creations delivered to your doorstep quickly and for free.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;