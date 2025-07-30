import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, FaShoppingCart } from 'react-icons/fa';
import Button from './Button.jsx';

const HeroSwiper = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: '',
            description: '',
            image: 'https://cdn.shopify.com/s/files/1/0061/4639/2135/files/terracotta_banner_1_ri.jpg?v=1602942145',
        },
        {
            id: 2,
            title: 'New Arrivals',
            description: 'Be the first to shop our newest products',
            image: '/public/clayPot1.webp',
        },
        {
            id: 3,
            title: 'Limited Edition',
            description: 'Exclusive designs available for a limited time',
            image: 'https://www.gujarattourism.com/content/dam/gujrattourism/images/july/Terracotta-banner-2.jpg',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className="relative ml-auto mr-auto w-[95%] md:w-[90%] xl:w-[80%] aspect-[21/8] rounded-xl overflow-hidden bg-gray-100">
            <div className="absolute inset-0 z-0">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                ))}
            </div>

            <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 lg:px-8">
                <h1
                    className="
            text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl
            font-bold text-center mb-0.5 md:mb-2 xl:mb-4 2xl:mb-6
            transition-all duration-700 transform"
                >
                    {slides[currentSlide].title}
                </h1>
                <p
                    className="
            text-xs md:text-sm lg:text-xl xl:text-xl 2xl:text-2xl
            text-center mb-1 md:mb-3 xl:mb-5 2xl:mb-8
            transition-all duration-700 transform"
                >
                    {slides[currentSlide].description}
                </p>
                <Button
                    variation="primary"
                    className="
            text-black py-1 px-2.5 sm:py-1 sm:px-2.5 xl:py-2 xl:px-5 2xl:py-3 2xl:px-8
            text-xs md:text-sm lg:text-xl xl:text-xl 2xl:text-2xl
            font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    aria-label="Shop now"
                >
                    <span>Shop Now</span>
                    <FaShoppingCart className="ml-2" />
                </Button>
            </div>

            <button
                onClick={prevSlide}
                className="
          absolute left-4 top-1/2 transform -translate-y-1/2
          bg-white bg-opacity-50 p-2 rounded-full text-black z-30
          hover:bg-opacity-75 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Previous slide"
            >
                <FaAngleLeft className="size-3 md:size-4 xl:size-5 2xl:size-7 cursor-pointer" />
            </button>

            <button
                onClick={nextSlide}
                className="
          absolute right-4 top-1/2 transform -translate-y-1/2
          bg-white bg-opacity-50 p-2 rounded-full text-black z-30
          hover:bg-opacity-75 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                aria-label="Next slide"
            >
                <FaAngleRight className="size-3 md:size-4 xl:size-5 2xl:size-7 cursor-pointer" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`
              rounded-full transition-all duration-300 
              focus:outline-none
              ${index === currentSlide
                            ? 'bg-white w-1 h-1 md:w-1.5 md:h-1.5 xl:w-2.5 xl:h-2.5 scale-125'
                            : 'bg-white bg-opacity-50 w-1 h-1 md:w-1.25 md:h-1.25 xl:w-2 xl:h-2 scale-100'}
            `}
                        aria-label={`Go to slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSwiper;