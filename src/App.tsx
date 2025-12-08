import React, { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import MainApp from './MainApp';
import BlogPage from './components/BlogPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'blog'>('main');
  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);

  const navigateToPage = (page: 'main' | 'blog', section?: string) => {
    setCurrentPage(page);
    setTargetSection(section);
  };

  return (
    <LanguageProvider>
      <div className="scroll-smooth">
        {currentPage === 'main' ? (
          <MainApp
            onNavigateToBlog={() => navigateToPage('blog')}
            initialSection={targetSection}
            clearInitialSection={() => setTargetSection(undefined)}
          />
        ) : (
          <BlogPage onNavigateToMain={(section) => navigateToPage('main', section)} />
        )}
      </div>
    </LanguageProvider>
  );
}

export default App;