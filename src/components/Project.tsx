import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import projectImage from '../assets/slideshow/house.jpg';

const Project = () => {
  const { t } = useTranslation();

  return (
    <section id="project" className="py-20 bg-[#F5F5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">{t('project.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('project.vision')}</h3>
            <p className="text-gray-600 mb-6">{t('project.description')}</p>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>{t('project.features.sustainable')}</li>
              <li>{t('project.features.workshop')}</li>
              <li>{t('project.features.community')}</li>
              <li>{t('project.features.garden')}</li>
            </ul>
          </div>
          <div>
            <img
              src={projectImage}
              alt="Project Site"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;