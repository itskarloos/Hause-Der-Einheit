import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowRight, Clock, Home, Heart } from 'lucide-react';

const Aliyah = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Clock className="w-8 h-8 text-[#2E8B57]" />,
      title: 'Waiting Period',
      description: t('aliyah.description')
    },
    {
      icon: <Home className="w-8 h-8 text-[#2E8B57]" />,
      title: 'Integration',
      description: 'Integration in Israel begins after recognition and return, with support and better living conditions.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: 'Support Needed',
      description: t('aliyah.challenge')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('aliyah.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#2E8B57]/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aliyah; 