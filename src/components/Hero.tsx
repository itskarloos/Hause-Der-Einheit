import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import slideImage1 from '../assets/slideshow/slide1.jpg';
import slideImage2 from '../assets/slideshow/slide2.jpg';
import slideImage3 from '../assets/slideshow/slide3.jpg';

const slides = [
  {
    image: slideImage1,
    title: 'hero.welcome',
    subtitle: 'hero.subtitle'
  },
  {
    image: slideImage2,
    title: 'hero.description',
    subtitle: 'hero.subtitle'
  },
  {
    image: slideImage3,
    title: 'hero.welcome',
    subtitle: 'hero.description'
  }
];

const Hero = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const changeSlide = (direction: 'next' | 'prev') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentSlide((prev) => {
      const newSlide = direction === 'next' 
        ? (prev + 1) % slides.length 
        : (prev - 1 + slides.length) % slides.length;
      return newSlide;
    });

    setTimeout(() => setIsAnimating(false), 1000);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[100svh] overflow-hidden">
      {/* Slideshow */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out
              ${currentSlide === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105 pointer-events-none'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10000ms] ease-out transform scale-105"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 
              transition-all duration-700 transform tracking-tight
              ${currentSlide === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {t(slides[currentSlide].title)}
          </h1>
          <p 
            className={`text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed
              transition-all duration-700 delay-200 transform
              ${currentSlide === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            {t(slides[currentSlide].subtitle)}
          </p>
          <button 
            onClick={scrollToAbout}
            className={`bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-8 sm:px-10 py-4 sm:py-5 
              text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105
              shadow-lg hover:shadow-xl font-medium tracking-wide`}
          >
            {t('hero.cta')}
          </button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 hidden md:flex items-center">
        <button
          onClick={() => changeSlide('prev')}
          className="bg-black/40 hover:bg-black/60 text-white p-3 m-4 rounded-full transition-all duration-300
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 hidden md:flex items-center">
        <button
          onClick={() => changeSlide('next')}
          className="bg-black/40 hover:bg-black/60 text-white p-3 m-4 rounded-full transition-all duration-300
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 1000);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${currentSlide === index 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="animate-bounce focus:outline-none"
          aria-label="Scroll to About section"
        >
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white/80" />
        </button>
      </div>
    </div>
  );
};

export default Hero;