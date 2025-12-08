import { useTranslation } from '../hooks/useTranslation';
import projectImage from '../assets/slideshow/house.jpg';
import { Reveal } from './Reveal';

const Project = () => {
  const { t } = useTranslation();



  return (
    <section id="project" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('project.title')}</h2>
            <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full"></div>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">{t('project.subtitle')}</h3>
                <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                  {t('project.description').split('\n\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3}>
            <div className="relative group">
              <div className="absolute inset-0 bg-[#2E8B57]/10 transform rotate-3 rounded-2xl transition-transform duration-300 group-hover:rotate-6"></div>
              <img
                src={projectImage}
                alt="Project Site"
                className="relative rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Project;