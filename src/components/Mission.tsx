import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Leaf, Users } from 'lucide-react';
import missionImage from '../assets/slideshow/slide2.jpg';

const Mission = () => {
  const { t } = useTranslation();

  return (
    <section id="mission" className="py-24 bg-gradient-to-b from-[#F5F5DC] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('mission.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#2E8B57]/10 transform rotate-3 rounded-2xl transition-transform duration-300 group-hover:rotate-6"></div>
            <img
              src={missionImage}
              alt="Mission"
              className="relative rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>
          <div className="space-y-8">
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('mission.description')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2E8B57]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#2E8B57]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Wood Carriers</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('mission.woodCarriers')}
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2E8B57]/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#2E8B57]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Jewish Women</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('mission.jewishWomen')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
              <Heart className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">Training</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              We offer training in cotton processing: spinning, weaving, sewing, and embroidery.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
              <Leaf className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">Meaningful Work</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              We create meaningful jobs – from fabric to finished product.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
              <Users className="w-8 h-8 text-[#2E8B57]" />
            </div>
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">Community</h3>
            <p className="text-gray-600 text-center leading-relaxed">
              We create identity and strengthen self-confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;