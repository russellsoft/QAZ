import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { news } from '../../data/news';
import { motion } from 'framer-motion';

const NewsSection: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();
  
  // Get 3 most recent news items
  const recentNews = news.slice(0, 3);

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
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4"
            >
              {t('home.news.title')}
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: '6rem' }}
              viewport={{ once: true }}
              className="h-1 bg-primary-600"
            ></motion.div>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-primary-600 hover:text-primary-700 flex items-center font-medium transition-colors"
            onClick={() => navigate(`/${language}/news`)}
          >
            {language === 'ru' ? 'Все новости' : language === 'en' ? 'All News' : '所有新闻'}
            <ArrowRight size={16} className="ml-1" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title[language]}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-neutral-500 text-sm mb-3">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatDate(item.date)}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-neutral-800">{item.title[language]}</h3>
                <p className="text-neutral-600 mb-4 line-clamp-3">{item.summary[language]}</p>
                
                <button
                  className="text-primary-600 hover:text-primary-700 font-medium flex items-center transition-colors"
                  onClick={() => navigate(`/${language}/news/${item.id}`)}
                >
                  {t('home.news.readMore')}
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;