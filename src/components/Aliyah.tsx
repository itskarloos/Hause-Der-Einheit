import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Clock, Home, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

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
    <section id="aliyah" className="py-24 bg-gradient-to-b from-white to-[#F5F5DC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900">{t('aliyah.title')}</h2>
            <div className="w-16 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
          </Reveal>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <Reveal key={index} delay={0.2 + (index * 0.1)} width="100%">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#2E8B57]/10 text-[#2E8B57]">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-2xl">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Aliyah; 