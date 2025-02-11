import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Users, Leaf } from 'lucide-react';
import aboutImage from '../assets/wood carrier.jpg';
const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        {/* Image and Text Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 transform rotate-3 rounded-lg"></div>
            <img
              src={aboutImage}
              alt="Wood Carrier"
              className="relative rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">{t('about.history')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
            <a
              href="https://hausdereinheit.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              {t('about.link')}
            </a>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <div className="text-center p-8 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">{t('values.empowerment.title')}</h4>
            <p className="text-gray-600">{t('values.empowerment.description')}</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">{t('values.community.title')}</h4>
            <p className="text-gray-600">{t('values.community.description')}</p>
          </div>
          <div className="text-center p-8 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Leaf className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-4">{t('values.sustainability.title')}</h4>
            <p className="text-gray-600">{t('values.sustainability.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;