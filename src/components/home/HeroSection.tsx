import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/440731/pexels-photo-440731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-primary-900/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-neutral-100">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-md font-medium flex items-center transition-colors duration-300"
              onClick={() => navigate(`/${language}/products`)}
            >
              {language === 'ru' ? 'Наша продукция' : language === 'en' ? 'Our Products' : '我们的产品'}
              <ArrowRight className="ml-2" size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-3 rounded-md font-medium transition-colors duration-300"
              onClick={() => navigate(`/${language}/about`)}
            >
              {language === 'ru' ? 'О компании' : language === 'en' ? 'About Us' : '关于我们'}
            </motion.button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <p className="text-4xl font-bold text-primary-400">32,813</p>
              <p className="text-sm mt-2">
                {language === 'ru' ? 'тонн/месяц' : language === 'en' ? 'tons/month' : '吨/月'}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <p className="text-4xl font-bold text-primary-400">5+</p>
              <p className="text-sm mt-2">
                {language === 'ru' ? 'типов удобрений' : language === 'en' ? 'types of fertilizers' : '肥料类型'}
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6"
            >
              <p className="text-4xl font-bold text-primary-400">20+</p>
              <p className="text-sm mt-2">
                {language === 'ru' ? 'лет опыта' : language === 'en' ? 'years of experience' : '年经验'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;