import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowRight, Clock, Home, Heart } from 'lucide-react';

const Aliyah = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <Clock className="w-8 h-8 text-[#2E8B57]" />,
      title: t('aliyah.steps.waiting.title'),
      description: t('aliyah.description')
    },
    {
      icon: <Home className="w-8 h-8 text-[#2E8B57]" />,
      title: t('aliyah.steps.integration.title'),
      description: t('aliyah.steps.integration.description')
    },
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: t('aliyah.steps.support.title'),
      description: t('aliyah.challenge')
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-900">{t('aliyah.title')}</h2>
          <div className="w-16 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2E8B57]/10">
                    {step.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aliyah; 