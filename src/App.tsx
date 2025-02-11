import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import MainApp from './MainApp';

function App() {
  return (
    <LanguageProvider>
      <MainApp />
    </LanguageProvider>
  );
}

export default App;