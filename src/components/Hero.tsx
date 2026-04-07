import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';
import { motion, AnimatePresence } from 'framer-motion';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const changeSlide = (direction: 'next' | 'prev') => {
    setCurrentSlide((prev) => {
      if (direction === 'next') {
        return (prev + 1) % slides.length;
      } else {
        return (prev - 1 + slides.length) % slides.length;
      }
    });
  };

  const scrollToAliyah = () => {
    const aliyahSection = document.getElementById('aliyah');
    if (aliyahSection) {
      aliyahSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="start" className="relative h-[100svh] overflow-hidden bg-black">
      {/* Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1
                className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 tracking-tight"
              >
                {t(slides[currentSlide].title)}
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 md:mb-12 max-w-3xl mx-auto font-light leading-relaxed"
              >
                {t(slides[currentSlide].subtitle)}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            onClick={scrollToAliyah}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white px-8 sm:px-10 py-4 sm:py-5 
              text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl font-medium tracking-wide"
          >
            {t('hero.cta')}
          </motion.button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-0 hidden md:flex items-center z-20">
        <button
          onClick={() => changeSlide('prev')}
          className="bg-black/40 hover:bg-black/60 text-white p-3 m-4 rounded-full transition-all duration-300
            hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 hidden md:flex items-center z-20">
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
      <div className="absolute bottom-28 sm:bottom-32 left-0 right-0 flex justify-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300
              ${currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <motion.button
          onClick={scrollToAliyah}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="focus:outline-none"
          aria-label="Scroll to Aliyah section"
        >
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 text-white/80" />
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;