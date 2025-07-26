import React, { useState } from 'react';

interface ProductCardProps {
    imageSrc: string;
    altText: string;
    title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, altText, title }) => {
    const [quantity, setQuantity] = useState<number>(1);

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlus = () => {
        setQuantity(quantity + 1);
    };

    return (
        <div className="bg-gray-800 p-4 rounded-xl text-center card-hover-effect flex flex-col">
            <img src={imageSrc} alt={altText} className="rounded-lg mb-4 mx-auto" />
            <h4 className="font-bold text-lg text-white">{title}</h4>
            <div className="flex-grow"></div>
            <div className="mt-4">
                <div className="flex items-center justify-center space-x-4 mb-4">
                    <button onClick={handleMinus} className="bg-gray-700 w-8 h-8 rounded-full font-bold">-</button>
                    <span className="text-lg font-bold">{quantity}</span>
                    <button onClick={handlePlus} className="bg-gray-700 w-8 h-8 rounded-full font-bold">+</button>
                </div>
                <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;