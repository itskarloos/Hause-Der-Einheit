import React from 'react';
import { Heart, Leaf, Users } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

const Mission = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-[#2E8B57]" />,
      title: t('mission.empowerment'),
      description: t('mission.empowerment.desc')
    },
    {
      icon: <Leaf className="w-12 h-12 text-[#2E8B57]" />,
      title: t('mission.sustainability'),
      description: t('mission.sustainability.desc')
    },
    {
      icon: <Users className="w-12 h-12 text-[#2E8B57]" />,
      title: t('mission.community'),
      description: t('mission.community.desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('mission.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;