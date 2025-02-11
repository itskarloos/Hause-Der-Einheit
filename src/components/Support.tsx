import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const Support = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('support.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-semibold mb-8 text-center text-gray-800">
              {t('support.subtitle')}
            </h3>
            
            <div className="space-y-6 mb-10">
              {[
                { label: t('support.bank'), value: 'Sparkasse Fürstenfeldbruck' },
                { label: 'IBAN', value: 'DE 35 7005 3070 0032 1233 82' },
                { label: 'BIC', value: 'BYLADEM1FFB' }
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