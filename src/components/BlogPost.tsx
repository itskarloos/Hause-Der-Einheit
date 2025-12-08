import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Calendar, User, ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';

// Import blog images
import blogImage1 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06.jpeg';
import workshop1 from '../assets/blog images/workshop1.jpeg';
import workshop2 from '../assets/blog images/workshop2.jpeg';
import workshop3 from '../assets/blog images/workshop3.jpeg';
import workshop4 from '../assets/blog images/workshop4.jpeg';
import workshop5 from '../assets/blog images/workshop5.jpeg';
import workshop6 from '../assets/blog images/workshop6.jpeg';
import workshop7 from '../assets/blog images/workshop7.jpeg';
import blogImage8 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (11).jpeg';
import blogImage9 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (10).jpeg';
import blogImage10 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (9).jpeg';
import blogImage11 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (8).jpeg';
import blogImage12 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (7).jpeg';
import blogImage13 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (6).jpeg';
import blogImage14 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (5).jpeg';
import blogImage15 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (4).jpeg';
import blogImage16 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (3).jpeg';
import blogImage17 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (2).jpeg';
import blogImage18 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (1).jpeg';
import blogImage19 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.38.33.jpeg';
import blogImage20 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (17).jpeg';
import blogImage21 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (16).jpeg';
import blogImage22 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (15).jpeg';
import blogImage23 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (14).jpeg';
import blogImage24 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (13).jpeg';
import blogImage25 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (12).jpeg';
import blogImage26 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.06 (11).jpeg';
import blogImage27 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.42.36 (2).jpeg';
import blogImage28 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.42.36 (1).jpeg';
import blogImage29 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.42.35.jpeg';
import blogImage30 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.07.jpeg';
import blogImage31 from '../assets/blog images/WhatsApp Image 2025-08-09 at 00.39.07 (1).jpeg';

interface BlogPostProps {
  onBack: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ onBack }) => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Blog post images - using imported images
  const blogImages = [
    blogImage1, workshop1, workshop2, workshop3, workshop4, workshop5, workshop6, workshop7, blogImage8,
    blogImage9, blogImage10, blogImage11, blogImage12, blogImage13, blogImage14, blogImage15, blogImage16,
    blogImage17, blogImage18, blogImage19, blogImage20, blogImage21, blogImage22, blogImage23, blogImage24,
    blogImage25, blogImage26, blogImage27, blogImage28, blogImage29, blogImage30, blogImage31
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % blogImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + blogImages.length) % blogImages.length);
  };

  const openGallery = (index: number) => {
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2E8B57] to-[#246B43] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-white hover:text-[#F5F5DC] transition-colors duration-300 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t('blog.backToBlog')}</span>
          </button>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {t('blog.first.title')}
          </h1>

          <div className="flex items-center space-x-6 text-sm text-white/80">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{t('blog.publishedOn')} {t('blog.date')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{t('blog.author')}: Hanna Heinrich</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Image */}
        <div className="mb-12">
          <img
            src={blogImages[1]}
            alt="Workshop and women working"
            className="w-full h-[550px] object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-xl text-gray-700 leading-relaxed mb-8 font-medium">
            {t('blog.first.excerpt')}
          </p>

          {/* Workshop Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-[#2E8B57]">
              {t('blog.first.workshop.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.workshop.content')}
            </p>
            {/* Training Section */}
            <section className="mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t('blog.first.training.content')}
              </p>


            </section>
            {/* Workshop Images Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {blogImages.slice(1, 8).map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => openGallery(index + 1)}
                >
                  <img
                    src={image}
                    alt={`Workshop ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />

                </div>
              ))}
            </div>
          </section>



          {/* Partnership Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-[#2E8B57]">
              {t('blog.first.partnership.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.partnership.content')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.order')}
            </p>
            {/* Training Images */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              {blogImages.slice(8, 14).map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer group"
                  onClick={() => openGallery(index + 9)}
                >
                  <img
                    src={image}
                    alt={`Training session ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Refining Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-[#2E8B57]">
              {t('blog.first.refining.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.refining.content')}
            </p>
          </section>

          {/* Future Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-[#2E8B57]">
              {t('blog.first.future.title')}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.future.content')}
            </p>
          </section>

          {/* Gratitude */}
          <section className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t('blog.first.gratitude')}
            </p>
            <p className="text-xl text-[#2E8B57] font-semibold text-center">
              {t('blog.first.thankYou')}
            </p>
          </section>
        </article>
      </div>

      {/* Image Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors duration-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-8">
            <img
              src={blogImages[currentImageIndex]}
              alt={`Gallery image ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {blogImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPost;
