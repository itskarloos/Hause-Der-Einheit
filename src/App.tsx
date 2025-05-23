import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import MainApp from './MainApp';

function App() {
  return (
    <LanguageProvider>
      <div className="scroll-smooth">
        <MainApp />
      </div>
    </LanguageProvider>
  );
}

export default App;