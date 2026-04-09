import { useTranslation } from '../hooks/useTranslation';
import { Reveal } from './Reveal';

import ext1 from '../assets/gallery/building-exterior-1.jpg';
import care1 from '../assets/gallery/medical-care-1.jpg';
import care2 from '../assets/gallery/medical-care-2.jpg';
import care3 from '../assets/gallery/medical-care-3.jpg';
import reception from '../assets/gallery/reception-desk.jpg';

const images = [
  { src: ext1, alt: 'Building Exterior 1' },
  { src: care1, alt: 'Medical Care Outreach' },
  { src: reception, alt: 'HDE Reception Desk' },
  { src: care3, alt: 'Medical Examination' },
  { src: care2, alt: 'Medical Care 2' },
];

const Gallery = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6 text-gray-900">{t('gallery.title')}</h2>
            <p className="font-sans text-xl text-gray-600 max-w-3xl mx-auto">
              {t('gallery.subtitle')}
            </p>
            <div className="w-24 h-1 bg-[#2E8B57] mx-auto rounded-full mt-6"></div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className={`relative group overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-hover transition-shadow duration-300 ${index === 0 || index === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <div className="aspect-[4/3] w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
