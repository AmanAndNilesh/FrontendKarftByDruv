import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import HotDealsSlider from '../components/HotDealsSlider';
import WhyChooseUs from '../components/WhyChooseUs';

interface LandingPageProps {
    onNavigateLogin: () => void;
    onNavigateSignup: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigateLogin, onNavigateSignup }) => {
    return (
        <>
            {/* Header without specific auth state for public landing */}
            <Header onNavigateLogin={onNavigateLogin} onNavigateSignup={onNavigateSignup} isAuthenticated={false} showLogo={true} />
            <main>
                {/* Note: Ideally move these styles to your global CSS file (e.g., src/index.css or src/styles/main.css) */}
                <style>
                    {`
                        body {
                            font-family: 'Inter', sans-serif;
                            background-color: #111827;
                            color: #f9fafb;
                        }
                        .gradient-text {
                            background: linear-gradient(90deg, #ec4899, #8b5cf6);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                        .card-hover-effect {
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }
                        .card-hover-effect:hover {
                            transform: translateY(-8px);
                            box-shadow: 0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.1);
                        }
                        #mobile-menu {
                            transition: transform 0.3s ease-in-out;
                        }
                    `}
                </style>
                {/* Hero Section */}
                <section className="min-h-[60vh] md:min-h-[75vh] flex items-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.8), rgba(17, 24, 39, 0.8)), url('https://placehold.co/1600x900/111827/ec4899?text=Your+Vibe,+Your+Creation')` }}>
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                            Unique, Quirky & <span className="gradient-text">Personalized</span> Decor
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                            From custom LED logos to personalized photo keychains, we bring your ideas to life.
                        </p>
                        <a href="#products" className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg">
                            Explore Products
                        </a>
                    </div>
                </section>

                {/* Sales & New Launch Sliding Section */}
                <HotDealsSlider />

                {/* Product Categories Section */}
                <section id="products" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">Our Collections</h2>
                            <p className="text-gray-400 mt-2">Discover products that match your passion.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Category Cards - these could also be their own components if they get more complex */}
                            <div className="bg-gray-800 rounded-xl overflow-hidden group card-hover-effect">
                                <div className="relative h-64">
                                    <img src="https://placehold.co/600x400/8b5cf6/ffffff?text=Backlit+Logos" alt="Backlit Logos" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Backlit Logos</h3>
                                    <p className="text-gray-400 mb-4">For gamers, sneakerheads, and superhero fans. Light up your space with a custom logo.</p>
                                    <a href="#" className="font-semibold text-pink-500 hover:text-pink-400 transition-colors">Shop Now <i className="fas fa-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-xl overflow-hidden group card-hover-effect">
                                <div className="relative h-64">
                                    <img src="https://placehold.co/600x400/ec4899/ffffff?text=Spotify+Plaques" alt="Spotify Plaques" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Spotify Collection</h3>
                                    <p className="text-gray-400 mb-4">Turn your favorite songs into LED plaques, keychains, and unique polaroids.</p>
                                    <a href="#" className="font-semibold text-pink-500 hover:text-pink-400 transition-colors">Explore Music <i className="fas fa-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-xl overflow-hidden group card-hover-effect">
                                <div className="relative h-64">
                                    <img src="https://placehold.co/600x400/34d399/ffffff?text=Photo+Keychains" alt="Custom Photo Keychains" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">Photo Keychains</h3>
                                    <p className="text-gray-400 mb-4">Get your favorite pictures printed on high-quality keychains. A perfect personalized gift.</p>
                                    <a href="#" className="font-semibold text-pink-500 hover:text-pink-400 transition-colors">Create Yours <i className="fas fa-arrow-right ml-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Customization Section */}
                <section id="custom" className="py-20 bg-gray-900">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <img src="https://placehold.co/800x600/1f2937/8b5cf6?text=Personalize+Anything" alt="Customization" className="rounded-xl shadow-2xl w-full" />
                            </div>
                            <div className="md:w-1/2 text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl font-bold text-white">Your Vision, <span className="gradient-text">Our Craft</span></h2>
                                <p className="text-gray-400 mt-4 mb-6 text-lg">
                                    Have a unique idea? We specialize in creating one-of-a-kind pieces. From custom 3D illusion lamps to personalized NFC cards, if you can dream it, we can make it.
                                </p>
                                <a href="#" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 text-lg">
                                    Start Customizing
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Products */}
                <section className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Featured Products</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            <ProductCard imageSrc="https://placehold.co/400x400/ec4899/ffffff?text=3D+Lamp" altText="3D Illusion Lamp" title="3D Illusion Lamp" />
                            <ProductCard imageSrc="https://placehold.co/400x400/8b5cf6/ffffff?text=Flexter" altText="Plexiglass Poster" title="Flexters Poster" />
                            <ProductCard imageSrc="https://placehold.co/400x400/10b981/ffffff?text=NFC+Card" altText="NFC Card" title="Custom NFC Card" />
                            <ProductCard imageSrc="https://placehold.co/400x400/f59e0b/ffffff?text=Keychain" altText="Photo Keychain" title="Photo Keychain" />
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <WhyChooseUs />

            </main>
            <Footer />
        </>
    );
};

export default LandingPage;