import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Users, Leaf } from 'lucide-react';
import aboutImage from '../assets/wood carrier.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        {/* Image and Text Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#2E8B57]/10 transform rotate-3 rounded-2xl transition-transform duration-300 group-hover:rotate-6"></div>
            <img
              src={aboutImage}
              alt="Wood Carrier"
              className="relative rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-8">
            <h3 className="text-3xl sm:text-4xl font-semibold text-gray-900">{t('about.history')}</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description')}
            </p>
            <a
              href="https://hausdereinheit.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-[#2E8B57] hover:bg-[#2E8B57]/90 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
            >
              {t('about.link')}
            </a>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6">
              <Heart className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">{t('values.empowerment.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{t('values.empowerment.description')}</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6">
              <Users className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">{t('values.community.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{t('values.community.description')}</p>
          </div>
          <div className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6">
              <Leaf className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h4 className="text-xl font-semibold mb-4 text-gray-900">{t('values.sustainability.title')}</h4>
            <p className="text-gray-600 leading-relaxed">{t('values.sustainability.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;