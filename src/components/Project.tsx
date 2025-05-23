import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Leaf, Users, GraduationCap, Heart } from 'lucide-react';
import projectImage from '../assets/slideshow/house.jpg';

const Project = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-[#2E8B57]" />,
      title: t('project.features.sustainable'),
      description: 'Sustainable construction and materials for a better future.'
    },
    {
      icon: <Users className="w-8 h-8 text-[#2E8B57]" />,
      title: t('project.features.workshop'),
      description: 'A dedicated space for women to learn and create textile crafts.'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-[#2E8B57]" />,
      title: t('project.features.community'),
      description: 'Spaces designed for education, workshops, and community building.'
    },
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: t('project.features.garden'),
      description: 'An ecological garden for sustainable nutrition and community gatherings.'
    }
  ];

  return (
    <section id="project" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('project.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">{t('project.location')}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('project.workshop')}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t('project.meaning')}
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-[#2E8B57]/10 transform rotate-3 rounded-2xl transition-transform duration-300 group-hover:rotate-6"></div>
            <img
              src={projectImage}
              alt="Project Site"
              className="relative rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-900">{t('project.features')}</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#F5F5DC] rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;