import { useTranslation } from '../hooks/useTranslation';
import hanaPicture from '../assets/hanna.jpg';
export default function Founder() {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('founder.title')}
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          {/* Image Column */}
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <img
              src={hanaPicture}
              alt={t('founder.name')}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold">{t('founder.name')}</h3>
              <p className="text-gray-600 mt-1">{t('founder.role')}</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                {t('founder.story')}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                {t('founder.progress')}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                {t('founder.future')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
