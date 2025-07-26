import React, { useState, useEffect } from 'react';

interface Slide {
    image: string;
    alt: string;
    title: string;
    description: string;
}

const HotDealsSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const slides: Slide[] = [
        {
            image: "https://placehold.co/1200x400/ec4899/111827?text=+",
            alt: "Clearance Sale",
            title: "Clearance Sale",
            description: "Up to 50% off on select items. Don't miss out!"
        },
        {
            image: "https://placehold.co/1200x400/8b5cf6/111827?text=+",
            alt: "New Launches",
            title: "New Launches",
            description: "Check out our latest and greatest creations."
        },
        {
            image: "https://placehold.co/1200x400/f59e0b/111827?text=+",
            alt: "Trending Now",
            title: "Trending Now",
            description: "See what's popular with our customers."
        }
    ];
    const totalSlides = slides.length;

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 10000);

        return () => clearInterval(slideInterval);
    }, [totalSlides]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="hot-deals" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="relative w-full overflow-hidden rounded-xl">
                    <div
                        id="hot-deals-slider"
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={index} className="relative w-full flex-shrink-0 h-64 md:h-80">
                                <img src={slide.image} alt={slide.alt} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white p-4">
                                    <h3 className="text-3xl md:text-5xl font-bold mb-2">{slide.title}</h3>
                                    <p className="text-md md:text-lg">{slide.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="hot-deals-dots" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${
                                    index === currentIndex ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HotDealsSlider;