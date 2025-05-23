import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Heart, Award, Target } from 'lucide-react';
import hanaPicture from '../assets/hanna.jpg';

const Founder = () => {
  const { t } = useTranslation();

  const milestones = [
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: 'The Dream',
      description: t('founder.story')
    },
    {
      icon: <Award className="w-8 h-8 text-[#2E8B57]" />,
      title: 'Recognition',
      description: t('founder.progress')
    },
    {
      icon: <Target className="w-8 h-8 text-[#2E8B57]" />,
      title: 'Future Goals',
      description: t('founder.future')
    }
  ];

  return (
    <section id="founder" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('founder.title')}</h2>
          <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#2E8B57]/10 transform rotate-3 rounded-2xl transition-transform duration-300 group-hover:rotate-6"></div>
            <img
              src={hanaPicture}
              alt={t('founder.name')}
              className="relative rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">{t('founder.name')}</h3>
              <p className="text-xl text-[#2E8B57] mt-2">{t('founder.role')}</p>
            </div>

            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#2E8B57]/10 flex items-center justify-center">
                    {milestone.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl text-gray-600 italic max-w-3xl mx-auto">
            "Schließen Sie sich uns an – für eine gerechtere Zukunft voller Würde, Kreativität und Gemeinschaft."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;
