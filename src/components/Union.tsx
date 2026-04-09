import { useTranslation } from '../hooks/useTranslation';
import { Reveal } from './Reveal';

import union1 from '../assets/union/union1.jpg';
import union2 from '../assets/union/union2.jpg';

const Union = () => {
  const { t } = useTranslation();

  return (
    <section id="union" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('union.title')}</h2>
            <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full mt-6 mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans leading-relaxed">
              {t('union.subtitle')}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="text-lg text-gray-700 leading-relaxed space-y-4 font-sans">
                {t('union.description').split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="grid grid-cols-1 gap-6">
              <div className="relative group overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={union1}
                  alt="Community dining together"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-premium">
                <img
                  src={union2}
                  alt="Women sitting and eating together"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Union;
