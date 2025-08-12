import React, { useState, useContext } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { ArrowLeft, Home } from 'lucide-react';
import { LanguageContext } from '../contexts/LanguageContext';
import NavBar from './NavBar';
import Footer from './Footer';
import BlogIndex from './BlogIndex';
import BlogPost from './BlogPost';

interface BlogPageProps {
  onNavigateToMain: () => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ onNavigateToMain }) => {
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const handlePostClick = (postId: number) => {
    setSelectedPost(postId);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
  };

  const handleBackToHome = () => {
    onNavigateToMain();
  };

  // If a post is selected, show the full post
  if (selectedPost) {
    return <BlogPost onBack={handleBackToBlog} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <NavBar 
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        language={language}
        setLanguage={setLanguage}
        onNavigateToBlog={() => {}} // No-op since we're already on blog page
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-[#2B8B57] to-[#246B43] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
           
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            {t('blog.title')}
          </h1>
          
          <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </div>

      {/* Blog Content */}
      <BlogIndex onPostClick={handlePostClick} />
      
      {/* Footer */}
      <Footer onNavigateToBlog={() => {}} />
    </div>
  );
};

export default BlogPage;
