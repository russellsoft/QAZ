import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { news } from '../data/news';
import { motion } from 'framer-motion';

const NewsDetail: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const { language } = useLanguage();
  const navigate = useNavigate();

  // Find the news item
  const newsItem = news.find(item => item.id === newsId);

  if (!newsItem) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4">
          {language === 'ru' ? 'Новость не найдена' : 
           language === 'en' ? 'News item not found' : 
           '未找到新闻'}
        </h2>
        <button
          onClick={() => navigate(`/${language}/news`)}
          className="text-primary-600 hover:text-primary-700 flex items-center justify-center mx-auto mt-4"
        >
          <ArrowLeft size={18} className="mr-2" />
          {language === 'ru' ? 'Вернуться к списку новостей' : 
           language === 'en' ? 'Back to news list' : 
           '返回新闻列表'}
        </button>
      </div>
    );
  }

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (language === 'ru') {
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if (language === 'cn') {
      return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
  };

  // Find next and previous news
  const currentIndex = news.findIndex(item => item.id === newsId);
  const prevNews = currentIndex < news.length - 1 ? news[currentIndex + 1] : null;
  const nextNews = currentIndex > 0 ? news[currentIndex - 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-50 pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6">
        <button
          onClick={() => navigate(`/${language}/news`)}
          className="text-primary-600 hover:text-primary-700 flex items-center mb-6"
        >
          <ArrowLeft size={18} className="mr-2" />
          {language === 'ru' ? 'Вернуться к списку новостей' : 
           language === 'en' ? 'Back to news list' : 
           '返回新闻列表'}
        </button>

        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            {newsItem.title[language]}
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center text-neutral-500 text-sm mb-6"
          >
            <Calendar size={16} className="mr-1" />
            <span>{formatDate(newsItem.date)}</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-lg overflow-hidden mb-8"
          >
            <img 
              src={newsItem.imageUrl} 
              alt={newsItem.title[language]} 
              className="w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose max-w-none text-neutral-700"
          >
            {newsItem.content[language].split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </motion.div>
          
          {/* Navigation between news */}
          <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevNews && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col"
              >
                <span className="text-sm text-neutral-500 mb-1">
                  {language === 'ru' ? 'Предыдущая новость' : 
                   language === 'en' ? 'Previous news' : 
                   '上一条新闻'}
                </span>
                <a 
                  href={`/${language}/news/${prevNews.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${language}/news/${prevNews.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  <ArrowLeft size={16} className="mr-1" />
                  <span className="line-clamp-1">{prevNews.title[language]}</span>
                </a>
              </motion.div>
            )}
            
            {nextNews && (
              <motion.div 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:items-end ml-auto"
              >
                <span className="text-sm text-neutral-500 mb-1">
                  {language === 'ru' ? 'Следующая новость' : 
                   language === 'en' ? 'Next news' : 
                   '下一条新闻'}
                </span>
                <a 
                  href={`/${language}/news/${nextNews.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${language}/news/${nextNews.id}`);
                    window.scrollTo(0, 0);
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center"
                >
                  <span className="line-clamp-1">{nextNews.title[language]}</span>
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NewsList: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  // Format date based on language
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    
    if (language === 'ru') {
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    } else if (language === 'cn') {
      return date.toLocaleDateString('zh-CN', { year: 'numeric', month: 'numeric', day: 'numeric' });
    } else {
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-neutral-50 pt-20 pb-16"
    >
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="text-center mb-12">
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
          >
            {t('news.title')}
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-1 bg-primary-600 mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-neutral-600"
          >
            {language === 'ru' 
              ? 'Последние новости и события компании QAZ, отрасли и рынка удобрений.'
              : language === 'en'
                ? 'Latest news and events from QAZ company, industry, and fertilizer market.'
                : 'QAZ公司、行业和肥料市场的最新新闻和事件。'
            }
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title[language]}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  onClick={() => navigate(`/${language}/news/${item.id}`)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(item.date)}</span>
                </div>
                
                <h3 
                  className="text-xl font-semibold mb-2 text-neutral-800 cursor-pointer hover:text-primary-600 transition-colors"
                  onClick={() => navigate(`/${language}/news/${item.id}`)}
                >
                  {item.title[language]}
                </h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">{item.summary[language]}</p>
                
                <button
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors"
                  onClick={() => navigate(`/${language}/news/${item.id}`)}
                >
                  {t('news.readMore')}
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const News: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  
  // If we have a news ID in the URL, render the news detail
  if (newsId) {
    return <NewsDetail />;
  }
  
  // Otherwise render the news list
  return <NewsList />;
};

export default News;