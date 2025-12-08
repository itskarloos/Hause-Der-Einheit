import React, { useState, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, Home } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import NavBar from './NavBar';
import Footer from './Footer';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';

interface BlogPageProps {
  onNavigateToMain: (section?: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigateToMain }) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPost(postId);
    window.scrollTo(0, 0);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    onNavigateToMain();
  };

  const handleNavItemClick = (sectionId: string) => {
    // If it's a section on the main page, navigate there
    if (sectionId !== 'blog') {
      onNavigateToMain(sectionId);
    }
  };

  // Common Header Content
  const HeaderContent = () => (
    <div className="relative bg-gradient-to-br from-[#2E8B57] via-[#246B43] to-[#1a4d2e] text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 group"
          >
            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium">{t('nav.home')}</span>
          </button>
          <span className="mx-3 text-white/40">/</span>
          <span className="text-sm font-medium text-white">{t('blog.title')}</span>
          {selectedPost && (
            <>
              <span className="mx-3 text-white/40">/</span>
              <span className="text-sm font-medium text-white/80">{t('blog.first.title')}</span>
            </>
          )}
        </div>

        {/* Main Title - Only show on index or if needed, maybe simpler for post */}
        {!selectedPost && (
          <>
            <div className="text-center mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                {t('blog.title')}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-white/60 to-white/30 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed font-light">
                {t('blog.subtitle')}
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1</div>
                    <div className="text-white/70">Article</div>
                  </div>
                  <div className="w-px h-8 bg-white/30"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">August 2025</div>
                    <div className="text-white/70">Latest Update</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
        onNavigateToBlog={() => { }} // We are already here
        onNavigateToSection={handleNavItemClick}
      />

      {!selectedPost && <HeaderContent />}

      {/* Blog Content */}
      {selectedPost ? (
        <div className="pt-20"> {/* Add padding for fixed navbar */}
          <BlogPost onBack={handleBackToBlog} />
        </div>
      ) : (
        <BlogIndex onPostClick={handlePostClick} />
      )}

      {/* Footer */}
      <Footer onNavigateToBlog={() => { }} />
    </div>
  );
};

export default BlogPage;
