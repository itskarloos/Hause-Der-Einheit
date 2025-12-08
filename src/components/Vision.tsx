
import { useTranslation } from '../hooks/useTranslation';
import { GraduationCap, Users, Heart } from 'lucide-react';
import { Reveal } from './Reveal';

const Vision = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#2E8B57]" />,
      title: t('vision.values.training.title'),
      description: t('vision.values.training.description')
    },
    {
      icon: <Users className="w-8 h-8 text-[#2E8B57]" />,
      title: t('vision.values.community.title'),
      description: t('vision.values.community.description')
    },
    {
      icon: <Heart className="w-8 h-8 text-[#2E8B57]" />,
      title: t('vision.values.dignity.title'),
      description: t('vision.values.dignity.description')
    }
  ];

  return (
    <section id="vision" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('vision.title')}</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-[#2E8B57]">{t('vision.subtitle')}</h3>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed space-y-4">
              {t('vision.description').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {values.map((value, index) => (
            <Reveal key={index} delay={0.2 + (index * 0.2)} width="100%">
              <div
                className="bg-[#F5F5DC] h-full rounded-2xl p-8 text-center transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#2E8B57]/10 mb-6 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision; 