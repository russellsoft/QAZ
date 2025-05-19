import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contacts from './pages/Contacts';
import News from './pages/News';
import { Language } from './types';

// Language guard component to enforce language in URL
const LanguageGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const { language, setLanguage } = useLanguage();
  
  useEffect(() => {
    // Extract language from URL
    const urlLang = location.pathname.split('/')[1] as Language;
    
    // Check if URL contains a valid language code
    if (['ru', 'en', 'cn'].includes(urlLang)) {
      setLanguage(urlLang);
    } else {
      // If no valid language in URL, redirect to default language
      const newPath = `/${language}${location.pathname}`.replace('//', '/');
      window.history.replaceState(null, '', newPath);
    }
  }, [location.pathname, language, setLanguage]);
  
  return <>{children}</>;
};

function AppRoutes() {
  return (
    <LanguageGuard>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/ru" replace />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/products" element={<Products />} />
            <Route path="/:lang/products/:productId" element={<Products />} />
            <Route path="/:lang/about" element={<About />} />
            <Route path="/:lang/contacts" element={<Contacts />} />
            <Route path="/:lang/news" element={<News />} />
            <Route path="/:lang/news/:newsId" element={<News />} />
            <Route path="*" element={<Navigate to="/ru" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </LanguageGuard>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppRoutes />
      </Router>
    </LanguageProvider>
  );
}

export default App;