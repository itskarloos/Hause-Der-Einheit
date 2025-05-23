import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Share2, Mail } from 'lucide-react';

const Support = () => {
  const { t } = useTranslation();

  const supportOptions = [
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: t('support.options.donate.title'),
      description: t('support.donation')
    },
    {
      icon: <Share2 className="w-8 h-8 text-[#2E8B57]" />,
      title: t('support.options.share.title'),
      description: t('support.description')
    },
    {
      icon: <Mail className="w-8 h-8 text-[#2E8B57]" />,
      title: t('support.options.contact.title'),
      description: t('support.options.contact.description')
    }
  ];

  return (
    <section id="support" className="py-24 bg-gradient-to-b from-white to-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('support.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-8 max-w-3xl mx-auto">
            {t('support.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {supportOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
                {option.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{option.title}</h3>
              <p className="text-gray-600 leading-relaxed">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              {t('support.bank')}
            </h3>
            
            <div className="space-y-6 mb-10">
              {[
                { label: 'Bank', value: 'Sparkasse Fürstenfeldbruck' },
                { label: 'IBAN', value: 'DE 35 7005 3070 0032 1233 82' },
                { label: 'BIC', value: 'BYLADEM1FFB' },
                { label: 'Address', value: t('support.address') }
              ].map((item, index) => (
                <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                  <span className="font-medium text-gray-700 mb-1 sm:mb-0">{item.label}:</span>
                  <span className="text-gray-600 font-mono">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <button className="group relative inline-flex items-center justify-center px-8 py-3 rounded-full bg-[#2E8B57] text-white font-medium overflow-hidden transition-all duration-300 hover:bg-[#246B43] hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:ring-offset-2">
                <span className="relative">
                  {t('support.donate')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;