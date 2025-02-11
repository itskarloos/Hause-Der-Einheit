import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import workshopImage from '../assets/slideshow/slide3.jpg';

const Workshop = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('workshop.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src= {workshopImage}
              alt="Women's Workshop"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              {t('workshop.subtitle')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('workshop.description')}
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">{t('workshop.crafts')}</h4>
                <p className="text-gray-600">{t('workshop.crafts.desc')}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="font-semibold mb-2">{t('workshop.workshops')}</h4>
                <p className="text-gray-600">{t('workshop.workshops.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshop;