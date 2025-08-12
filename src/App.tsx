import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import MainApp from './MainApp';
import BlogPage from './components/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'blog'>('main');

  const navigateToPage = (page: 'main' | 'blog') => {
    setCurrentPage(page);
  };

  return (
    <LanguageProvider>
      <div className="scroll-smooth">
        {currentPage === 'main' ? (
          <MainApp onNavigateToBlog={() => navigateToPage('blog')} />
        ) : (
          <BlogPage onNavigateToMain={() => navigateToPage('main')} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;